import { useState, useEffect } from 'react';
import TodayWeatherCard from './TodayWeatherCard';
import HumidityRainInfo from './HumidityRainInfo';
import FiveDayForecast from './FiveDayForecast';
import BottomPanel from './BottomPanel';
import ThreeHourForecast from './ThreeHourForecast';
import Navbar from './Navbar';
import TemperatureInfo from './TemperatureInfo';
import type { ForecastData } from '../interfaces';
import Swal from "sweetalert2";
import TodayWeatherLeft from './TodayWeatherLeft';

  
const WeatherAppMain = () =>{
    const [city, setCity] = useState("Taipei");
    const [forecast, setForecast] = useState<ForecastData | null>(null);
    const [forecastType,setForecastType] = useState(true);
    const [selectedDate, setSelectedDate] = useState("");
    const [favoriteCity, setFavoriteCity] = useState<string[]>(() => {
      const storedFavorites = localStorage.getItem("favoriteCities");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
    const [isFavorite,setIsFavorite] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [showWeatherLeft, setShowWeatherLeft] = useState(window.innerWidth > 1023);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const fetchForecast = async (cityName: string) => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=zh_tw`
          );
          const data = await res.json();
      
          if (res.ok) {
            setForecast(data);
          } else {
            Swal.fire({
              title: '查無該城市資料',
              text: "請重新輸入城市名稱！",
              icon: 'error',
              timer: 2000,
              showConfirmButton: false
            });
            setCity('')
          }
        } catch (error) {
          alert("請求失敗，請檢查網路或稍後再試");
          setForecast(null);
        }
      };


    //取得五天中午的資料
    const getFiveDayForecast = () => {
      if (!forecast) return [];
    
      const dailyFirstDataMap = new Map<string, typeof forecast.list[0]>();
    
      for (const item of forecast.list) {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyFirstDataMap.has(date)) {
          dailyFirstDataMap.set(date, item);
        }
      }
    
      return Array.from(dailyFirstDataMap.values()).slice(0, 5);
    };

    const getHourlyForecastByDate = (date: string) => {
      if (!forecast || !forecast.list.length) return [];
      return forecast.list.filter(item => item.dt_txt.startsWith(date));
    };


    useEffect(() => {
      const storedFavorites = localStorage.getItem("favoriteCities");
      if (storedFavorites) {
        setFavoriteCity(JSON.parse(storedFavorites));
      }
    }, []);

    useEffect(() => {
      fetchForecast(city);
    }, []);

    useEffect(() => {
      if (forecast && forecast.list.length > 0) {
        const firstDate = forecast.list[0].dt_txt.split(" ")[0];
        setSelectedDate(firstDate);
      }
    }, [forecast]);

    useEffect(() => {
      if (forecast?.city.name) {
        const isInFavorite = favoriteCity.includes(forecast.city.name);
        setIsFavorite(isInFavorite);
      }
    }, [forecast, favoriteCity]);

    useEffect(() => {
      localStorage.setItem("favoriteCities", JSON.stringify(favoriteCity));
    }, [favoriteCity]);

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      }
    }, []);

    //用來判斷視窗響應式時TodayWeatherLeft組件該不該顯示
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 1023) {
          setShowWeatherLeft(false);
        } else {
          setShowWeatherLeft(true);
        }
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
      <div className="w-full min-h-screen p-5 max-lg:p-0 bg-gray-100 shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-600">
          <Navbar setCity={setCity} city={city} fetchForecast={fetchForecast} cityname={forecast?.city.name ?? ""} setFavoriteCity={setFavoriteCity} isFavorite={isFavorite} isDark={isDark} setIsDark={setIsDark}/>
          <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center w-full h-56 max-lg:h-auto my-5">
              {forecast && forecast.list && (
              <TodayWeatherCard
                key={getHourlyForecastByDate(selectedDate)[0]?.dt}
                dt={getHourlyForecastByDate(selectedDate)[0]?.dt}
                description={getHourlyForecastByDate(selectedDate)[0]?.weather[0].description}
                icon={getHourlyForecastByDate(selectedDate)[0]?.weather[0].icon}
                temp={getHourlyForecastByDate(selectedDate)[0]?.main.temp}
                cityname={forecast.city.name}
                showWeatherLeft={showWeatherLeft}
                isFavorite={isFavorite}
                setFavoriteCity={setFavoriteCity}
              />
              )}
              <div className="max-lg:flex max-lg:flex-row max-sm:!flex-col w-[38%] max-xl:w-[50%] max-lg:!w-[95%] mr-auto max-lg:mr-0 max-lg:mt-5 ">
                  {forecast && forecast.list && (
                  <>
                    {showWeatherLeft ? null:<TodayWeatherLeft
                      dt={getHourlyForecastByDate(selectedDate)[0]?.dt}
                      description={getHourlyForecastByDate(selectedDate)[0]?.weather[0].description}
                      icon={getHourlyForecastByDate(selectedDate)[0]?.weather[0].icon}
                      temp={getHourlyForecastByDate(selectedDate)[0]?.main.temp}
                    />}
                    <div className='flex flex-col justify-between h-full max-lg:w-[75%] max-sm:!w-full max-lg:ml-auto max-sm:mt-5'>
                      <HumidityRainInfo
                        pop={getHourlyForecastByDate(selectedDate)[0]?.pop}
                        humidity={getHourlyForecastByDate(selectedDate)[0]?.main.humidity}
                        speed={getHourlyForecastByDate(selectedDate)[0]?.wind.speed}
                      />
                      <TemperatureInfo
                        temp_max={getHourlyForecastByDate(selectedDate)[0]?.main.temp_max}
                        temp_min={getHourlyForecastByDate(selectedDate)[0]?.main.temp_min}
                        feels_like={getHourlyForecastByDate(selectedDate)[0]?.main.feels_like}
                      />
                    </div>
                  </>
                  )}
              </div>
          </div>
  
          <BottomPanel forecastType={forecastType} setForecastType={setForecastType} favoriteCity={favoriteCity} setFavoriteCity={setFavoriteCity} fetchForecast={fetchForecast}>
              {forecastType ? getFiveDayForecast().map((item) => (
                  <FiveDayForecast
                      key={item.dt}
                      dt={item.dt}
                      dt_txt={item.dt_txt}
                      description={item.weather[0].description}
                      icon={item.weather[0].icon}
                      temp={item.main.temp}
                      temp_max={item.main.temp_max}
                      pop={item.pop}
                      humidity={item.main.humidity}
                      speed={item.wind.speed}
                      onClick={() => {
                        setSelectedDate(item.dt_txt.split(" ")[0]);
                        setTimeout(() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }, 200);
                      }}
                      selectedDate={selectedDate}
                  />
                  )):(
                    getHourlyForecastByDate(selectedDate).map((item) => (
                      <ThreeHourForecast
                        key={item.dt}
                        dt={item.dt}
                        description={item.weather[0].description}
                        icon={item.weather[0].icon}
                        temp={item.main.temp}
                        temp_max={item.main.temp_max}
                        pop={item.pop}
                        humidity={item.main.humidity}
                        speed={item.wind.speed}
                      />
                    ))
                  )}
          </BottomPanel>
      </div>
  )
}
export default WeatherAppMain;