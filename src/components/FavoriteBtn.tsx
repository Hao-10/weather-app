import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import type { FavoriteBtnPorps } from "../interfaces";
import Swal from "sweetalert2";
const  FavoriteBtn=({isFavorite,setFavoriteCity,cityname}:FavoriteBtnPorps)=>{
    const handleClickFavorite = () => {
        if (!cityname || !setFavoriteCity) return;
    
        Swal.fire({
          title: isFavorite
            ? `確定要移除「${cityname}」嗎？`
            : `要將「${cityname}」加入我的最愛嗎？`,
          text: isFavorite
            ? '移除後可以重新加入我的最愛。'
            : '加入後可在我的最愛中快速查看。',
          icon: 'warning', // ✅ 改為驚嘆號圖示
          showCancelButton: true,
          confirmButtonColor: isFavorite ? '#d33' : '#3085d6',
          cancelButtonColor: '#6c757d',
          confirmButtonText: isFavorite ? '是的，移除' : '是的，加入',
          cancelButtonText: '取消',
        }).then((result) => {
          if (result.isConfirmed) {
            setFavoriteCity((prev) =>
              isFavorite
                ? prev.filter((item) => item !== cityname)
                : [...prev, cityname]
            );
    
            Swal.fire({
              title: isFavorite ? '已移除！' : '已加入！',
              text: isFavorite
                ? `「成功移除出我的最愛」。`
                : `「成功加入至我的最愛」。`,
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });
          }
        });
      };
    return (
        <div className="text-2xl cursor-pointer hover:transform hover:-translate-y-[5px] hover:scale-105 transition-all duration-500 ease-in-out">
            {isFavorite?<FontAwesomeIcon onClick={handleClickFavorite} className="text-red-500" icon={faHeartSolid} />:
            <FontAwesomeIcon onClick={handleClickFavorite} className="text-gray-400 hover:text-red-500 transition-all duration-500 ease-in-out dark:text-white" icon={faHeart} />}
        </div>
    )
}
export default FavoriteBtn;