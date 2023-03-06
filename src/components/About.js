import React from 'react'

import {
  // BrowserRouter as Router,
  // Switch,
  // Routes,
  // Route,
   Link
} from "react-router-dom";

export default function About(props) {
   
  return (
    <>
      <div  style={{color: props.mode==='light'?'black':'white'}}>
        <h1>About us</h1>
        <p>Our website provides an easy-to-use platform for users to change and 
            manipulate text in a variety of ways. Whether you need to convert text to upper 
            case or lower case, remove unwanted spaces, our 
            website has the tools you need to get the job done quickly and accurately. 
            Our platform is designed to be user-friendly, making it accessible to people of all
             skill levels, from writers and students to professionals who need to edit text on a
              daily basis. Plus, our website is completely free to use, and requires no registration or 
              installation, so you can get started right away. With our website, you can edit your text with 
              confidence and ease, knowing that you have the tools you need to get the job done right.
        </p>
      </div>
      <div className="container my-5">
            <nav className="nav">
            <Link style={{color: props.mode==='light'?'blue':'grey'}} className="nav-link active" to="https://www.linkedin.com/in/reetesh-tomar-a90078183/" target="_blank"><b>Linkedin</b></Link>
            <Link style={{color: props.mode==='light'?'blue':'grey'}} className="nav-link" to="https://www.instagram.com/reetesh_tomar/" target="_blank"><b>Instagram</b></Link>
            <Link style={{color: props.mode==='light'?'blue':'grey'}} className="nav-link" to="https://www.facebook.com/profile.php?id=100008397907889" target="_blank"><b>Facebook</b></Link>
            <Link style={{color: props.mode==='light'?'blue':'grey'}} className="nav-link" to="https://github.com/Reetesh-Tomar" target="_blank"><b>Github</b></Link>
            </nav>
      </div>
    </>
  )
}


