import FavoritesCard from "./FavoritesCard";
import type { FavoriteCityProps } from "../interfaces";
import { useEffect,useState } from "react";
import type { ForecastData } from "../interfaces";

const ITEMS_PER_PAGE = 10;
const FavoritesWrapper=({favoriteCity,setFavoriteCity,fetchForecast}:FavoriteCityProps)=>{
    const [favoriteData, setFavoriteData] = useState<{ [city: string]: ForecastData }>({});
    const [currentPage, setCurrentPage] = useState<number>(1);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const totalPages = Math.ceil((favoriteCity?.length ?? 0) / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCities = favoriteCity?.slice(startIndex, startIndex + ITEMS_PER_PAGE) ?? [];

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
      };
      
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
      };

    useEffect(() => {
    const fetchAllFavorites = async () => {
        const results: { [city: string]: ForecastData } = {};
        for (const city of favoriteCity ?? []) {
        try {
            const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=zh_tw`
            );
            const data = await res.json();
            if (res.ok) {
            results[city] = data;
            }
        } catch (error) {
            console.error(`取得 ${city} 天氣失敗`);
        }
        }
        setFavoriteData(results);
    };
    fetchAllFavorites();
    }, [favoriteCity]);
    
    return(
        <div className="w-full mt-4 min-h-[430px]">
            <div className="w-full p-4 grid grid-rows-[1fr_auto] border-2 border-gray-300 rounded-3xl bg-gray-100 dark:bg-gray-700 dark:border-gray-500">
                <div className="min-h-[340px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mb-2 ">
                    {currentCities.map((city) => (
                        <FavoritesCard key={city} city={city} weatherData={favoriteData[city]} favoriteCity={favoriteCity} setFavoriteCity={setFavoriteCity} fetchForecast={fetchForecast}/>
                    ))}
                </div>
                <div className="mt-3 flex justify-center items-center gap-5 text-[11px] text-gray-700 dark:text-white">
                    <button onClick={handlePrev} className="favoritePageBtn">上一頁</button>
                    <span className="text-base">第 {currentPage} 頁 / 共 {totalPages} 頁</span>
                    <button onClick={handleNext} className="favoritePageBtn">下一頁</button>
                </div>
            </div>
        </div>
    )
}
export default FavoritesWrapper;