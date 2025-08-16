import type { ThemeTogglePorps } from "../interfaces";
const ThemeToggle=({isDark,setIsDark}:ThemeTogglePorps)=>{
    const toggleTheme = () => {
        if (isDark) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
        setIsDark(!isDark);
      };
    return(
        <div className="flex justify-center items-center gap-2 p-2 bg-white text-gray-500 dark:bg-gray-700 dark:text-gray-500 ">
                <button
                  onClick={toggleTheme}
                  className={`flex items-center w-10 h-6 p-1 rounded-full duration-300 ease-in-out
                  ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out
                    ${isDark ? 'translate-x-4' : 'translate-x-0'}`}
                  />
                </button>
            </div>
    )
}
export default ThemeToggle;