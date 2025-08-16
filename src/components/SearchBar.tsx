import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import type { SearchBarProps } from '../interfaces';

const SearchBar = ({city, setCity, fetchForecast}:SearchBarProps) =>{

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
      };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchForecast(city);
    };

    return(
        <form action="" className="flex w-[60%] max-lg:w-full max-md:!w-[80%] ml-auto max-md:ml-0" onSubmit={handleSubmit}>
            <div className="flex flex-row w-full border border-[#e2e2e2] rounded-[15px] shadow-[2px_2px_6px_rgba(0,0,0,0.5)] dark:border-gray-800">
                <input type="text" placeholder="輸入查詢地點" onChange={handleChange} value={city} className="w-[90%] p-2 border border-r-0 border-[#e2e2e2]
                rounded-tl-[15px] rounded-bl-[15px] text-black focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-800"/>
                <button className="flex justify-end items-center w-[10%] p-2 border border-l-0 border-[#e2e2e2] rounded-br-[15px] rounded-tr-[15px] bg-white text-white dark:bg-gray-700 dark:border-gray-800"><FontAwesomeIcon className="pr-4 text-gray-500 dark:text-white" icon={faMagnifyingGlass} /></button>
            </div>
        </form>
    )
}
export default SearchBar;