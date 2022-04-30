import React, { useState,useEffect } from 'react'
import Navbar from '../Landing/Navbar'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import Landing from '../Landing/Landing'
import styles from "./dashboard.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Row, Col} from 'react-bootstrap'
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
            <div className={styles.dashboard}>
                <div className={styles.dashboard_head}>
                    <h1 className={styles.dashboard_head_h1}>Appointments</h1>
                </div>
                <div className={styles.dashboard_tabs}>
                    <ul className={styles.dashboard_tabs_ul}>
                        <Container>
                            <Row>
                                {tabs.map(item=>(
                                    <Col  md={4} className={"d-none d-md-block"}>
                                    <li className={styles.dashboard_tabs_li} >
                                        <a href={`#${item.id}`} role="tab" data-toggle="tab" onClick={() => handleTabChange(item.id)}>{item.name}</a>
                                        <div className={styles.borderClass}></div>
                                    </li>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col className="d-md-none">
                                <select className={styles.tabs_select} value="upcoming">
                                    {tabs.map(item=>(
                                        <option href={`#${item.id}`} value={item.id}>{item.name}
                                            {/* <li className={styles.dashboard_tabs_li} >
                                                <a href={`#${item.id}`} role="tab" data-toggle="tab" onClick={() => handleTabChange(item.id)}>{item.name}</a>
                                                <div className={styles.borderClass}></div>
                                            </li> */}
                                        </option> 
                                    ))}   
                                </select>
                               
                                </Col>
                            </Row>
                        </Container>
                    </ul>
                </div>
                <div className={styles.dashboard_tickets}>
                    <Container>
                        <Row>
                            <Col xs={12} md={4}>
                                <Row>
                                    <Col xs={12}>
                                        <div className={styles.dashboard_ticket_box_u}>
                                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
                                            <div className={styles.dashboard_ticket_name}>
                                                <h1>Doctor : <p>Ankit</p></h1>
                                                <h1>Patient :<p> Ankit </p></h1>
                                                <h1>Date : <p>2022-07-12</p></h1>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={4} >
                                <Row>
                                    <Col xs={12}>
                                        <div className={styles.dashboard_ticket_box_a}>
                                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
                                            <div className={styles.dashboard_ticket_name}>
                                                <h1>Doctor : <p>Ankit</p></h1>
                                                <h1>Patient :<p> Ankit </p></h1>
                                                <h1>Date : <p>2022-07-12</p></h1>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={4}>
                                <Row>
                                    <Col xs={12}>
                                        <div className={styles.dashboard_ticket_box_c}>
                                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
                                            <div className={styles.dashboard_ticket_name}>
                                                <h1>Doctor : <p>Ankit</p></h1>
                                                <h1>Patient :<p> Ankit </p></h1>
                                                <h1>Date : <p>2022-07-12</p></h1>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>                       
                </div>
            </div>
            {navbar && <a href="#top" className="scroll-top"><ChevronDoubleUpIcon className="scroll-top--icon" /></a>}
        </div>
        </>
    )
}
export default Dashboard