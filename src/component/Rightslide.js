import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Rightslide() {
  const [MYSonge,setMYSonge]=useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/Songs").then((response) => {
      setMYSonge(response.data);
    });
  },[]);
  return (
    <div className="Rightslide">
      <div className="div1-Rightslide">
        <div className="div2-Rightslide">
          <div className=" flex justify-around w-16">
            {" "}
            <Link className="link1-Rightslide" to={"/op"}>
              <i class="fa-solid fa-arrow-left-long"></i>
            </Link>
            <Link className="link1-Rightslide" to={"/op"}>
              <i class="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>

          <label class="relative block ml-6 ">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <i class="fa-solid fa-magnifying-glass text-[12px] text-white"></i>
            </span>
            <input
              className="shadow-[0_1px_5px_.5px_rgb(52,57,61)] bg-neutral-800/20 placeholder:italic placeholder:text-slate-400 block rounded-full py-2 pl-9 pr-3  focus:outline-none focus:border-green-400 focus:text-white focus:ring-1 sm:text-sm h-6 w-80 	"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
        </div>

        <div>
          <Link className="text-sm	 text-white mr-5" to={"/mn"}>
            <i class="fa-solid fa-bell"></i>
          </Link>
          <Link className="text-sm	 text-white" to={"/mn"}>
            <i class="fa-solid fa-user"></i>
          </Link>
        </div>
      </div>

      <div className="Rightslide-sec2">
        <div className="What-hot"> What's hot this weekend?</div>
        <p className="text-[#4E4F53] w-1/2 mt-5">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nihil
          magni eum voluptas sit asperiores voluptatem, consequuntur nulla
          nostrum id!
        </p>

        <div className="flex mt-5 justify-between	w-44">
          <button className="text-white w-28 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full text-sm flex justify-evenly	items-center"><i class="fa-solid fa-play text-xs"></i> Play</button>
          <Link className="text-[#50CDA3] text-xs bg-[#1D1E23] rounded-full" to={'/eshterk'}><i class="fa-solid fa-share-nodes p-2"></i></Link>
          <button className="text-[#4E4F53] text-xs bg-[#1D1E23] rounded-full"><i class="fa-regular fa-bookmark p-2"></i></button>
        </div>
        <div className="mt-10 text-white tracking-[.10em]">Recommended Albums</div>
        
        <div className=" flex  mt-1"> <p className="text-xs text-[#4E4F53]	mr-2">Get better Recommended music</p> <Link className="text-sm text-[#50CDA3] hover:text-yellow-500" to={'/lk'}>Go to favorite</Link></div>
 <ul className="flex mt-3 ">
   {MYSonge && MYSonge.map((song)=>{
 return <button className="flex w-24 mr-4 flex-col	items-center group"> <img className="h-full group-hover:border	border-emerald-400 group-hover:shadow-[0_0px_10px_2px_rgb(37,205,144)]	 " src={song.SongPicture}></img><div className="text-white text-xs mt-2">{song.SongName}</div><div className="text-[10px] text-[#4E4F53]">{song.Author}</div></button>
})}   
 </ul>

      </div>
      
    </div>
  );
}

export default Rightslide;
