import { Link } from 'react-router-dom'
import {FaLinkedin, FaGithubSquare } from "react-icons/fa"
 
 function Footer (){
    return(
<footer className="  p-5 footer footer-center   bg-gray-800 text-base-content rounded ">
  <div className="grid grid-flow-col gap-4">
  <Link to=".">
  <button >Home</button>
 </Link>
 <Link to="live">
  <button >Stats</button>
   </Link>
   <Link to="cryptoccurrencies">
   <button>Cryptoccurrencies</button>
  </Link>
  <Link to="exchanges">
   <button>Exchanes</button>
  </Link>
  <Link to="news">
   <button>News</button>
  </Link>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
    <Link to="https://www.linkedin.com/in/merab-todua-682965254/" target="_blank" rel="noopener noreferrer" >
            <FaLinkedin className="mt-5 text-4xl cursor-pointer hover-effect" />
   </Link>
   <Link to="https://github.com/topics/sun?l=css" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="mt-5 text-4xl cursor-pointer hover-effect" />
</Link>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved </p>
  </div>
</footer>

    )
 }

 export default Footer