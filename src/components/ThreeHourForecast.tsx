import { dayOfWeek,format3HourPeriod } from "../utils/date";
import { getWeatherAnimation } from '../utils/getWeatherAnimation';
import Lottie from "lottie-react";
interface ThreeHourForecastProps {
    dt: number;
    description: string;
    icon: string;
    temp: number;
    temp_max: number;
    pop: number;
    humidity: number;
    speed: number;
  }
  
const ThreeHourForecast=({dt,description,icon,temp,temp_max,pop,humidity,speed,}:ThreeHourForecastProps)=>{
    return(
        <div className="flex flex-col items-center w-48 max-3xl:w-40 max-lg:!w-full max h-[420px] max-3xl:h-auto border-4 rounded-xl border-white  bg-white p-4 max-lg:p-1 text-black shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
            <div className="w-full text-center max-lg:flex max-lg:items-end max-lg:justify-around">
                <div className="order-2 max-sm:w-[35%] font-bold">
                    <h3 className="text-lg max-lg:text-2xl max-sm:!text-xl max-lg:pb-5 max-sm:!pb-3">{dayOfWeek(dt)}</h3>
                    <p className="text-xl max-3xl:text-base">{format3HourPeriod(dt)}</p>
                </div>
                <div className="order-1 max-sm:w-[25%]">
                    <Lottie
                        animationData={getWeatherAnimation(icon)}
                        loop
                        className="w-24 max-lg:w-20 max-sm:!w-10 lottieStyle m-auto"
                    />
                    <p className="text-xl max-sm:text-base max-lg:font-bold">{description}</p>
                </div>
                <div className="order-3 max-sm:w-[25%]">
                    <h2 className="pb-2 max-lg:pb-0 pt-3 text-3xl max-lg:text-3xl max-sm:!text-xl font-bold">{temp.toFixed(2)}℃</h2>
                </div>
            </div>
            <div className="text-center mt-3 max-lg:hidden">
                <p className="pb-2">最高溫度 {temp_max.toFixed(1)} ℃</p>
                <p className="pb-2">降雨機率 {Math.round(pop * 100)} %</p>
                <p className="pb-2">濕度 {humidity} %</p>
                <p className="pb-2">風速 {speed} m/s</p>
            </div>
        </div>
    )
}
export default ThreeHourForecast;