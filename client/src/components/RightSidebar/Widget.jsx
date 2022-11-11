import React from 'react'

import "./RightSidebar.css"
import pen from "../../assets/pen.svg"
import comment from "../../assets/comment.svg"
import icon from "../../assets/logo1.png"

const Widget = () => {
  return (
   

 


    <div className='widget'> <div className='widge'><h4>The Overflow Blog</h4>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" width="18"/>
        <p>Fighting to balance identity and anonymity on the web(3) (Ep. 504)</p>
        </div> <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" width="18"/>
        <p>Hashgraph: The sustainable alternative to blockchain</p>
        </div>  </div>
        <h4>Upcoming Events</h4>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
        <img src={icon} alt="pen" width="25"/>
        <p>
2022 Community Moderator Election
ends November 22</p>
        </div> <div className='right-sidebar-div-2'>
        <img src={icon} alt="pen" width="25"/>
        <p>Fighting to balance identity and anonymity on the web(3) (Ep. 504)</p>
        </div>  </div>
        <h4>Featured on Meta</h4>
    <div className='right-sidebar-div-1'>
    <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen" width="18"/>
        <p>
Mobile app infrastructure being decommissioned</p>
        </div> <div className='right-sidebar-div-2'>
        <img src={icon} alt="pen" width="25"/>
        <p>
The Ask Wizard (2022) has graduated</p>
        </div>  </div></div>
        
        </div>
        
        
  

  )
}

export default Widget