import React, { useState,useEffect } from 'react'
import Navbar from '../Landing/Navbar'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import Landing from '../Landing/Landing'
const Dashboard = () =>{
    const tabs=[
        {name:"Upcoming",id:"upcoming"},
        {name:"Attended",id:"attended"},
        {name:"Canceled",id:"canceled"},
    ]
    const[navbar,setNavbar]=useState(false);
    const[currentTab,setTab]=useState("upcoming")
    useEffect(() => {
        scrollTop();
        window.addEventListener("scroll", scrollTop);
        return () => {
          scrollTop();
        };
      }, []);
    
      const scrollTop = () => {
        setNavbar(window.scrollY >= 40);
      };
    //function to change the tab
    const handleTabChange =(tab)=>{
        setTab(tab);
    }
    return(
        <>
        <div className="center-content">
            <Navbar/>
            <div className='dashboard'>
                <div className='dashboard_tabs'>
                    <ul className="dashboard_tab_ul">
                        {tabs.map(item=>(
                            <li className="dashboard_tab_li" >
                                <a href={`#${item.id}`} role="tab" data-toggle="tab" onClick={() => handleTabChange(item.id)}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbar && <a href="#top" className="scroll-top"><ChevronDoubleUpIcon className="scroll-top--icon" /></a>}
        </div>
        </>
    )
}
export default Dashboard