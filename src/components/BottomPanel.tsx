import {useState, type ReactNode} from 'react';
import FavoritesWrapper from './FavoritesWrapper';

interface Props{
    children: ReactNode;
    forecastType: boolean;
    setForecastType: React.Dispatch<React.SetStateAction<boolean>>;
    setFavoriteCity?: React.Dispatch<React.SetStateAction<string[]>>;
    favoriteCity?: string[];
    fetchForecast: (cityName: string) => void;
}
const BottomPanel=({children,forecastType,setFavoriteCity,setForecastType,favoriteCity,fetchForecast}:Props)=>{
    const [showFavorites, setShowFavorites] = useState(false);
    const handleClickFiveDay = () => {
        setForecastType(true);
        setShowFavorites(false);
      };
    
      const handleClickThreeHour = () => {
        setForecastType(false);
        setShowFavorites(false);
      };
    
      const handleClickFavorites = () => {
        setShowFavorites((prev) => !prev);
      };
    return (
        <div className="w-full flex-col justify-between items-center mt-7 border-8 border-white rounded-3xl bg-white shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-700 dark:border-gray-700 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
            <div className="w-full p-2 bg-white dark:bg-gray-700">
                <nav className="relative w-full flex justify-center text-gray-500 border-2 rounded-3xl border-gray-300 bg-white font-bold overflow-hidden dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500" aria-label="預報切換">
                    <span
                        className={`absolute top-0 h-full w-1/3 bg-gray-400 rounded-3xl transition-all duration-300 ease-in-out z-0 ${
                            showFavorites ? 'left-2/3' : forecastType ? 'left-0' : 'left-1/3'
                          }`}
                    ></span>
                    <button className={`relative z-10 w-1/3 p-2 ${forecastType && !showFavorites ? 'activeBtn' : ''}`} aria-current="page" onClick={handleClickFiveDay}>五天預報</button>
                    <button className={`relative z-10 w-1/3 p-2 ${ !forecastType && !showFavorites ? 'activeBtn' : ''}`} onClick={handleClickThreeHour}>三小時預報</button>
                    <button className={`relative z-10 w-1/3 p-2 ${showFavorites ? 'activeBtn' : ''}`} onClick={handleClickFavorites}>我的最愛</button>
                </nav>
            </div>
            {showFavorites ? (<FavoritesWrapper favoriteCity={favoriteCity} setFavoriteCity={setFavoriteCity} fetchForecast={fetchForecast}/>):
            <div className='flex max-lg:flex-col max-3xl:flex-wrap justify-start max-lg:justify-center items-center w-full max-3xl:min-h-[431px] mt-3 gap-10 max-xl:gap-7 max-lg:!gap-10 p-4 border-2 border-gray-300 rounded-3xl bg-gray-100 dark:bg-gray-700 dark:border-gray-600'>
                {children}
            </div>}
        </div>
    )
}
export default BottomPanel;