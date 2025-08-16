import Lottie from "lottie-react";
import temp_min_anm from "../assets/temp_min.json";
import temp_max_anm from "../assets/temp_max.json";
import feels_like_anm from "../assets/feels_like.json";

interface TemperatureInfoProps{
    temp_max: number;
    temp_min: number;
    feels_like: number;
}

const TemperatureInfo=({temp_max,temp_min,feels_like,}:TemperatureInfoProps)=>{
    return(
    <div className="w-full h-[45%] flex gap-6 max-lg:mt-5 text-gray-400 font-bold dark:text-gray-300">
        <div className="w-[35%] flex items-center gap-2 border-2 rounded-2xl border-white p-4 bg-white shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-700 dark:border-gray-700 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
            <Lottie
                animationData={feels_like_anm}
                loop
                className="w-20 max-2xl:w-12 lottieStyle max-sm:hidden"
            />
            <div>
                <p className="text-sm max-2xl:text-[13px]">體感溫度</p>
                <p className="text-lg max-2xl:text-[17px] text-black dark:text-white">{feels_like.toFixed(1)}℃</p>
            </div>
        </div>

        <div className="w-[65%] max-2xl:w-[60%] max-lg:!w-[65%] flex items-center border-2 rounded-2xl border-white p-4 bg-white shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-700 dark:border-gray-700 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
            <div className="flex items-center">
                <Lottie
                    animationData={temp_max_anm}
                    loop
                    className="w-24 max-2xl:w-14 lottieStyle max-sm:hidden"
                />
                <div>
                    <p className="text-sm max-2xl:text-[13px]">最高溫度</p>
                    <p className="text-lg max-2xl:text-[17px] text-black dark:text-white">{temp_max.toFixed(1)}℃</p>
                </div>
            </div>
            <div className="flex items-center ml-auto">
                <Lottie
                    animationData={temp_min_anm}
                    loop
                    className="w-24 max-2xl:w-14 lottieStyle max-sm:hidden"
                />
                <div>
                    <p className="text-sm max-2xl:text-[13px]">最低溫度</p>
                    <p className="text-lg max-2xl:text-[17px] text-black dark:text-white">{temp_min.toFixed(1)}℃</p>
                </div>
            </div>
        </div>
      </div>
    )
}
export default TemperatureInfo;