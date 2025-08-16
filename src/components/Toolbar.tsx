import type { ToggleFavoriteProps } from "../interfaces";
import FavoriteBtn from "./FavoriteBtn";
import ThemeToggle from "./ThemeToggle";
const Toolbar=({cityname,setFavoriteCity,isFavorite,isDark,setIsDark}:ToggleFavoriteProps)=>{
    return(
        <div className="w-full flex justify-end items-center gap-8 pr-3">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark}/>
            <FavoriteBtn isFavorite={isFavorite} setFavoriteCity={setFavoriteCity} cityname={cityname}/>
        </div>
    )
}
export default Toolbar;