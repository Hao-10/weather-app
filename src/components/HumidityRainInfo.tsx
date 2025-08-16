import Lottie from "lottie-react";
import wind_anm from "../assets/wind1.json";
import rainfall_anm from "../assets/rainfall.json";
import humidity_anm from "../assets/humidity.json";

interface RainInfoProps{
    pop: number;
    humidity: number;
    speed: number;
}

const HumidityRainInfo=({pop,humidity,speed}:RainInfoProps)=>{
    return(
      <div className="w-full h-[45%] flex justify-between border-2 rounded-2xl border-white p-4 bg-white font-bold text-gray-400 shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2">
          <Lottie
            animationData={wind_anm}
            loop
            className="w-16 max-2xl:w-14 lottieStyle max-sm:hidden"
          />
          <div>
            <p className="text-sm max-2xl:text-[13px]">風速</p>
            <p className="text-lg text-black dark:text-white">{speed} m/s</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Lottie
            animationData={rainfall_anm}
            loop
            className="w-32 max-2xl:w-24 lottieStyle max-sm:hidden"
          />
          <div>
            <p className="text-sm max-2xl:text-[13px]">降雨機率</p>
            <p className="text-lg text-black dark:text-white">{Math.round(pop * 100)}%</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Lottie
            animationData={humidity_anm}
            loop
            className="w-24 max-2xl:w-16 lottieStyle max-sm:hidden"
          />
          <div>
            <p className="text-sm max-2xl:text-[13px]">濕度</p>
            <p className="text-lg text-black dark:text-white">{humidity}%</p>
          </div>
        </div>
      </div>
    )
}
export default HumidityRainInfo;