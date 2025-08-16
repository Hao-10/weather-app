import { dayOfWeek } from '../utils/date';
import Lottie from "lottie-react";
import { getWeatherAnimation } from '../utils/getWeatherAnimation';

interface WeatherCardLeftProps {
    dt: number;
    description: string;
    icon: string;
    temp: number;
  }

const TodayWeatherLeft=({dt,icon,description,temp}:WeatherCardLeftProps)=>{
    return(
        <div className="flex flex-col max-sm:flex-row justify-center max-sm:justify-between items-center w-[10%] h-auto max-xl:w-[20%] max-sm:!w-full mr-8 max-lg:mr-0 ml-2 max-lg:ml-0 font-bold max-lg:border-2 max-lg:rounded-2xl max-lg:border-white max-lg:p-4 max-lg:bg-white max-lg:text-gray-400 max-lg:shadow-[2px_2px_6px_rgba(0,0,0,0.4)] max-lg:dark:bg-gray-700 max-lg:dark:text-gray-300 max-lg:dark:border-gray-700 max-lg:dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)] ">
            <div className='flex flex-col items-center max-sm:items-start'>
                <h3 className='max-sm:hidden'>今日天氣</h3>
                <h3 className='hidden max-sm:block text-[13px]'>星期</h3>
                <p className="mt-5 max-sm:mt-0 text-xl max-sm:text-lg text-black dark:text-white">{dayOfWeek(dt)}</p>
            </div>
            <div className="flex flex-col max-sm:flex-row items-center">
                <Lottie
                animationData={getWeatherAnimation(icon)}
                loop
                className="w-24 max-xl:w-20 max-sm:!w-16 lottieStyle max-sm:hidden"
                />
                <div className="max-sm:flex max-sm:flex-col max-sm:items-start">
                    <p className="hidden max-sm:block text-base max-2xl:text-[13px]">氣況</p>
                    <p className="text-xl max-sm:text-lg text-black dark:text-white">{description}</p>
                </div>
            </div>
            
            <div className="hidden max-sm:flex max-sm:flex-col max-sm:items-start">
                <p className="text-base max-2xl:text-[13px]">氣溫</p>
                <p className="todayWeatherFont max-2xl:text-xl max-sm:!text-lg">{temp.toFixed(1)}℃</p>
          </div>
        </div>
    )
}

export default TodayWeatherLeft;