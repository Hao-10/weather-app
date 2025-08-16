import SearchBar from "./SearchBar"
import type { CityInputProps } from "../interfaces"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Toolbar from "./Toolbar";
import ThemeToggle from "./ThemeToggle";

const Navbar=({city,setCity,fetchForecast,cityname,setFavoriteCity,isFavorite,isDark,setIsDark}:CityInputProps)=>{
    return (
        <nav className="flex max-md:flex-col items-center gap-4 w-full p-3 border max-lg:border-none border-white rounded-xl max-lg:rounded-none bg-white shadow-[2px_2px_6px_rgba(0,0,0,0.4)] dark:bg-gray-700 dark:border-gray-700 dark:shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
            <div className="flex items-center max-md:justify-center gap-6 max-sm:gap-0 flex-shrink-0 w-5/12 max-md:!w-full max-lg:w-3/12 pl-3 max-md:pl-0 dark:text-white">
                <h1 className="max-md:pl-5 font-bold text-2xl max-lg:text-lg max-md:!text-[24px]">Weather Forecast</h1>
                <p className="text-base max-lg:hidden"><FontAwesomeIcon className="pr-2 text-xl text-gray-400 dark:text-white" icon={faLocationDot} />{cityname}</p>
                <div className="hidden max-md:block">
                    <ThemeToggle isDark={isDark} setIsDark={setIsDark}/>
                </div>
            </div>
            <div className="flex-1 max-md:flex max-md:justify-center min-w-[150px] max-md:w-full">
                <SearchBar city={city} setCity={setCity} fetchForecast={fetchForecast} />
            </div>
            <div className="w-fit flex-shrink-0 ml-auto max-md:ml-0 max-md:hidden">
                <Toolbar cityname={cityname} setCity={setCity} setFavoriteCity={setFavoriteCity} isFavorite={isFavorite} isDark={isDark} setIsDark={setIsDark} />
            </div>
        </nav>
    )
}
export default Navbar