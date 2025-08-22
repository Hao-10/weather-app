import { formatUnixTimestamp,format3HourPeriod } from '../utils/date';
import Lottie from "lottie-react";
import temp_anm from "../assets/temp.json";
import date_anm from "../assets/date.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import TodayWeatherLeft from './TodayWeatherLeft';
import FavoriteBtn from './FavoriteBtn';

interface WeatherCardProps {
    dt: number;
    description: string;
    icon: string;
    temp: number;
    cityname: string;
    showWeatherLeft: boolean;
    isFavorite: boolean;
    setFavoriteCity?: React.Dispatch<React.SetStateAction<string[]>>;
  }
const TodayWeatherCard =({dt,description,icon,temp,cityname,showWeatherLeft,isFavorite,setFavoriteCity}:WeatherCardProps)=>{
    return(
    <div className="flex justify-center items-center w-full max-w-[60%] max-xl:max-w-[50%] max-lg:!max-w-[95%] p-4 mr-10 max-lg:mr-0 max-lg:my-5 border-2 border-white rounded-3xl bg-white text-gray-400 shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">

      {showWeatherLeft && <TodayWeatherLeft dt={dt} icon={icon} description={description} temp={temp}/>}

      <div className="flex flex-col items-center w-[85%] max-xl:w-[80%] max-lg:!w-full p-5 max-md:p-0 border-l-2 max-lg:border-none border-gray-300 font-bold">
        <div className="w-full text-center mb-3 pb-3 border-b-4 border-gray-300 max-md:flex max-md:justify-center max-md:items-end">
          <h2 className="ml-auto text-5xl max-xl:text-4xl text-black dark:text-white"><FontAwesomeIcon className="text-4xl max-xl:text-3xl pr-4 text-gray-400 dark:text-white" icon={faLocationDot} />{cityname}</h2>
          <div className="hidden max-md:flex ml-auto">
            <FavoriteBtn isFavorite={isFavorite} setFavoriteCity={setFavoriteCity} cityname={cityname}/>
          </div>
        </div>
        <div className="flex items-center justify-between max-sm:justify-center w-full h-full text-2xl max-sm:gap-3">

          <div className="flex items-center gap-2 mr-5 max-xl:mr-0">
            <Lottie
            animationData={date_anm}
            loop
            className="w-16 max-2xl:w-14 max-sm:!w-10 max-xl:hidden max-lg:!block lottieStyle"
            />
            <div>
              <p className="text-base max-2xl:text-[13px] max-lg:!text-[17px]">日期</p>
              <p className="todayWeatherFont max-2xl:text-xl max-sm:!text-lg">{formatUnixTimestamp(dt)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mr-5 max-xl:mr-0">
            <img src={`${import.meta.env.BASE_URL}img/clock1.png`} alt="clock-img" className="w-16 max-2xl:w-14 max-sm:!w-10 max-xl:hidden max-lg:!block" />
            <div>
              <p className="text-base max-2xl:text-[13px] max-lg:!text-[17px]">時間</p>
              <p className="todayWeatherFont max-2xl:text-xl max-sm:!text-lg">{format3HourPeriod(dt)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 max-sm:hidden">
            <Lottie
            animationData={temp_anm}
            loop
            className="w-24 max-2xl:w-20 max-xl:hidden max-lg:!block lottieStyle"
            />
            <div>
              <p className="text-base max-2xl:text-[13px] max-lg:!text-[17px]">氣溫</p>
              <p className="todayWeatherFont max-2xl:text-xl max-sm:!text-lg">{temp.toFixed(1)}℃</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    )
}
export default TodayWeatherCard;