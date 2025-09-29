import type { ForecastData } from "../interfaces";
import { getWeatherAnimation } from '../utils/getWeatherAnimation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
import Swal from "sweetalert2";

interface FavoritesCardProps {
    city: string;
    weatherData?: ForecastData;
    fetchForecast: (cityName: string) => void;
    favoriteCity?: string[];
    setFavoriteCity?: React.Dispatch<React.SetStateAction<string[]>>;
  }

const FavoritesCard=({city,fetchForecast,weatherData,favoriteCity,setFavoriteCity}:FavoritesCardProps)=>{

    const handleClick = () => {
        fetchForecast(city);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 200);
      };

      const handleClick_RemoveFavorite = () => {
        if (!city || !setFavoriteCity || !favoriteCity) return;
      
        Swal.fire({
          title: `確定要移除「${city}」嗎？`,
          text: "移除後可以重新加入我的最愛。",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#6c757d',
          confirmButtonText: '是的，移除',
          cancelButtonText: '取消'
        }).then((result) => {
          if (result.isConfirmed) {
            setFavoriteCity(favoriteCity.filter((fav) => fav !== city));
      
            Swal.fire({
              title: '已移除！',
              text: "成功移除出我的最愛。",
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });
          }
        });
      };

    const today = weatherData?.list[0];
    
    return(
        <div className="w-full h-full min-h-40 max-h-40 flex-col justify-center items-center gap-8 bg-white border rounded-xl shadow-[2px_2px_6px_rgba(0,0,0,0.4)] transition-all duration-500 ease-in-out 
        hover:transform hover:-translate-y-[5px] hover:scale-105 dark:bg-gray-700 dark:border-gray-500 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)] dark:text-white">
            <div className="text-center flex justify-between p-2 border-b-2 border-gray-400">
                <h3 className="font-bold text-2xl truncate">{city}</h3>
                <span onClick={handleClick_RemoveFavorite}><FontAwesomeIcon className="text-red-500 text-3xl pr-4 cursor-pointer transition-all duration-500 ease-in-out hover:transform hover:-translate-y-[5px] hover:scale-105" icon={faHeartSolid} /></span>
            </div>
            <div onClick={handleClick} className="flex items-end justify-between cursor-pointer">
                <div className="pl-2">
                    <span className="text-4xl ">{typeof today?.main.temp === "number" ? today.main.temp.toFixed(1) : "--"}℃</span>
                </div>
                <div className="flex items-end text-center gap-5 pt-4 pr-3">
                    <div className="text-lg font-bold">
                        <div>
                            <span>最高</span>
                            <span>{today?.main.temp_max.toFixed(0)}℃</span>
                        </div>
                        <div>
                            <span>最低</span>
                            <span>{today?.main.temp_min.toFixed(0)}℃</span>
                        </div>
                    </div>
                    <div>
                        <Lottie
                            animationData={today? getWeatherAnimation(today.weather[0].icon):undefined}
                            loop
                            className="w-14 lottieStyle"
                        />
                        <span className="text-lg text-blue-500">{today && `${Math.round(today.pop * 100)}%`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FavoritesCard;