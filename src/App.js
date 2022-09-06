import Leftslide from "./component/Leftslide";
import Rightslide from "./component/Rightslide";
import Musicnav from "./component/Musicnav";
import { useState } from "react";
function App() {
  const[openmusicnavbar,setopenmusicnavbar]=useState(true)
  const closemusicnavbar=()=>{
    setopenmusicnavbar(false)
  }
  return (
<div className="main-div">
  <Leftslide/>
  <Rightslide/>
  {openmusicnavbar && <Musicnav closemusic={closemusicnavbar}/>}

</div>
   
  );
}

export default App;
