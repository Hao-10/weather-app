import clear_day  from "../assets/01d.json";
import clear_night  from "../assets/01n.json";
import clouds_day  from "../assets/02d.json";
import clouds_night  from "../assets/02n.json";
import scattered_day  from "../assets/03.json";
import scattered_night  from "../assets/03.json";
import broken_day  from "../assets/04.json";
import broken_night  from "../assets/04.json";
import shower_rain_day  from "../assets/09.json";
import shower_rain_night  from "../assets/09.json";
import rain_day  from "../assets/10d.json";
import rain_night  from "../assets/10n.json";
import thunder_day  from "../assets/11.json";
import thunder_night  from "../assets/11.json";
import snow_day  from "../assets/13.json";
import snow_night  from "../assets/13.json";
import mist_day  from "../assets/50.json";
import mist_night  from "../assets/50.json";
// 建立 icon 對應動畫的物件
const weatherAnimations: { [key: string]: any } = {
  "01d": clear_day,
  "01n": clear_night,
  "02d": clouds_day,
  "02n": clouds_night,
  "03d": scattered_day,
  "03n": scattered_night,
  "04d": broken_day,
  "04n": broken_night,
  "09d": shower_rain_day,
  "09n": shower_rain_night,
  "10d": rain_day,
  "10n": rain_night,
  "11d": thunder_day,
  "11n": thunder_night,
  "13d": snow_day,
  "13n": snow_night,
  "50d": mist_day,
  "50n": mist_night,
};

export const getWeatherAnimation = (icon: string) => {
  return weatherAnimations[icon] || clear_day;
};