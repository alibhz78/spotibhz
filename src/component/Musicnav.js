import Pic1 from "../pic/4K-OLED-Wallpaper-for-Desktop.jpg"
function Musicnav({closemusic}) {
    return (
  <div className="music-navbar flex justify-between">
    <div className="p-2 flex">
      <img className="w-9 h-9 rounded" src={Pic1}></img>
      <div className="ml-2">
        <h2 className="text-xs text-white">Take a creativ music</h2>
        <p className="text-[10px] text-[#4E4F53]">Arash</p>
      </div>
    </div>
    <div className="play-music h-6  m-2 w-24  flex justify-between items-center	">
      <button className="music-icon"><i class="fa-solid fa-backward-step"></i></button>
      <button className="music-icon"><i class="fa-solid fa-play"></i></button>
      <button className="music-icon"><i class="fa-solid fa-forward-step"></i></button>
    </div>
    <div className="h-full relative">
      <button onClick={closemusic} className="text-[#4E4F53] hover:text-white absolute top-0	 right-2"><i class="fa-solid fa-xmark"></i></button>
       <div className="m-4 mt-6">
      <button className="btn-musicSitting"><i class="fa-solid fa-maximize"></i></button>
      <button className="btn-musicSitting"><i class="fa-solid fa-shuffle"></i></button>
      <button className="btn-musicSitting"><i class="fa-solid fa-volume-high"></i></button>
      <button className="btn-musicSitting"><i class="fa-solid fa-sliders"></i></button>
  
    </div>
    </div>
   
  </div>
     
    );
  }
  
  export default Musicnav;
  