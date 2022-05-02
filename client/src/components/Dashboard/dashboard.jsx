import React, { useState,useEffect } from 'react'
import Navbar from '../Landing/Navbar'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import Landing from '../Landing/Landing'
import styles from "./dashboard.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Row, Col} from 'react-bootstrap'
import TicketModal from './ticketModal';
const Dashboard = () =>{
    const upcomingArray=[
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
    ];
    const attendedArray=[
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
    ];
    const canceledArray=[
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
        {
            heading:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
            doctor:"Ankit",
            patient:"Ankit",
            apptdate:"2022-22-2",
            age:"19",
            prescription:"",
        },
    ];
    const tabs=[
        {name:"Upcoming",id:"upcoming"},
        {name:"Attended",id:"attended"},
        {name:"Canceled",id:"canceled"},
    ]
    const[navbar,setNavbar]=useState(false);
    const[currentTab,setTab]=useState("upcoming");
    const[ticketModal,setTicketModal]=useState(false)
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
    const handleTabChange =(e)=>{setTab(e.target.value);}
    const handleTabChange2 =(e)=>{setTab(e);}
    const openTicketModal=(ticket)=>{
        console.log(ticket)
        setTicketModal(ticket)
    }
    const closeTicketModal=()=>{
        setTicketModal(false)
    }
    return(
        <>
        <div className={styles.dashboard_center}>
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
                                        <a href={`#${item.id}`} role="tab" data-toggle="tab" onClick={(e) => handleTabChange2(item.id)}>{item.name}</a>
                                        <div className={styles.borderClass}></div>
                                    </li>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col className="d-md-none">
                                <select className={styles.tabs_select} onChange={(e) => handleTabChange(e)} value={currentTab}>
                                    {tabs.map(item=>(
                                        <option href={`#${item.id}`} value={item.id} >{item.name}
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
                            {currentTab==="upcoming" && <Col xs={12} md={4}>
                                <Row>
                                    <Col xs={12}>
                                        {upcomingArray.map(ticket=>(
                                            <div className={styles.dashboard_ticket_box_u} onClick={(e)=>openTicketModal(ticket)}>
                                                <h1>{ticket.heading}</h1>
                                                <div className={styles.dashboard_ticket_name}>
                                                    <h1>Doctor : <p>{ticket.doctor}</p></h1>
                                                    <h1>Patient :<p> {ticket.patient} </p></h1>
                                                    <h1>Date : <p>{ticket.apptdate}</p></h1>
                                                </div>
                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                            </Col>
                            }
                            {currentTab === "attended" &&<Col xs={12} md={4} >
                                <Row>
                                    <Col xs={12}>
                                        {attendedArray.map(ticket=>(
                                            <div className={styles.dashboard_ticket_box_a}>
                                                <h1>{ticket.heading}</h1>
                                                <div className={styles.dashboard_ticket_name}>
                                                    <h1>Doctor : <p>{ticket.doctor}</p></h1>
                                                    <h1>Patient :<p> {ticket.patient} </p></h1>
                                                    <h1>Date : <p>{ticket.apptdate}</p></h1>
                                                </div>
                                            </div>
                                        ))}
                                       
                                    </Col>
                                </Row>
                            </Col>}
                            {currentTab === "canceled" && <Col xs={12} md={4}>
                                <Row>
                                    <Col xs={12}>
                                        {canceledArray.map(ticket=>(
                                            <div className={styles.dashboard_ticket_box_c}>
                                                <h1>{ticket.heading}</h1>
                                                <div className={styles.dashboard_ticket_name}>
                                                    <h1>Doctor : <p>{ticket.doctor}</p></h1>
                                                    <h1>Patient :<p> {ticket.patient} </p></h1>
                                                    <h1>Date : <p>{ticket.apptdate}</p></h1>
                                                </div>
                                            </div>
                                        ))}
                                        
                                    </Col>
                                </Row>
                            </Col>}
                        </Row>
                    </Container>                       
                </div>
                {ticketModal && <TicketModal close={closeTicketModal} ticket={ticketModal} status="upcoming"/>}
            </div>
            {navbar && <a href="#top" className="scroll-top"><ChevronDoubleUpIcon className="scroll-top--icon" /></a>}
        </div>
        </>
    )
}
export default Dashboard