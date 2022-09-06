import {Link } from 'react-router-dom';
function Leftslide() {
    return (
  <div className="Leftslide">
    <button className="btn-1"><i class="fa-solid fa-cloud-arrow-down i-1"></i>mint</button>
    <ul className='ul-1'>
      <li className='li-1'>See the best music</li>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400  "><i class="fa-solid fa-blender-phone i-2"></i>Home</div></Link>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-bed-pulse i-2"></i>Story</div></Link>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-bag-shopping i-2"></i>call US</div></Link>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-arrow-up-from-water-pump i-2"></i>Help us</div></Link>
    </ul>
    <ul className='ul-1'>
    <li className='li-1'>See the best music</li>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-blender-phone i-2"></i>Home</div></Link>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-bed-pulse i-2"></i>Story</div></Link>
    </ul>
    <ul className='ul-1'>
      <li className='li-1'>See the best music</li>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-blender-phone i-2"></i>Home</div></Link>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-bed-pulse i-2"></i>Story</div></Link>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-bag-shopping i-2"></i>call US</div></Link>
      <Link to={'/lil'} className="group  link-1"><div className="group-hover:text-emerald-400	"><i class="fa-solid fa-arrow-up-from-water-pump i-2"></i>Help us</div></Link>
    </ul>
  </div>
     
    );
  }
  
  export default Leftslide;
  