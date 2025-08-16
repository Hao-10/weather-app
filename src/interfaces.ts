export interface ForecastData {
    list: {
      dt: number;
      main: {
        temp: number;
        humidity: number;
        temp_max: number;
        temp_min: number;
        feels_like: number;
      };
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      wind: {
        speed: number;
        deg?: number;
        gust?: number;
      };
      pop: number;
      dt_txt: string;
    }[];
    city: {
      name: string;
    };
}

export interface CityInputProps{
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    fetchForecast: (cityName: string) => void;
    cityname?: string;
    setFavoriteCity?: React.Dispatch<React.SetStateAction<string[]>>;
    isFavorite: boolean;
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ToggleFavoriteProps{
    setCity: React.Dispatch<React.SetStateAction<string>>;
    cityname?: string;
    setFavoriteCity?: React.Dispatch<React.SetStateAction<string[]>>;
    isFavorite: boolean;
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchBarProps{
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    fetchForecast: (cityName: string) => void;
}

export  interface FavoriteCityProps{
    favoriteCity?: string[];
    fetchForecast: (cityName: string) => void;
    setFavoriteCity?: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface FavoriteBtnPorps{
  cityname?: string;
  setFavoriteCity?: React.Dispatch<React.SetStateAction<string[]>>;
  isFavorite: boolean;
}

export interface ThemeTogglePorps{
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}