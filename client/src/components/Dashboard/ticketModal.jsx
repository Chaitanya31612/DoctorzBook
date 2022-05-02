import React, { useState } from 'react'
import styles from "./ticketModal.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Row, Col} from 'react-bootstrap'

const TicketModal = (Ticket) =>{
    const ticket=Ticket.ticket
    console.log("isme aya")
    const [status,setStatus]=useState(Ticket.status)
    return(
        <>
            <div className={styles.ticketModal}>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                           <div className={styles.ticketModal_heading}>
                                <h1>{ticket.heading}</h1>
                           </div>
                           <div className={styles.ticketModal_desc}>
                               <h1>Description</h1>
                                <h1>{ticket.description}</h1>
                           </div>
                           <div className={styles.ticketModal_pres}>
                                <h1>Prescription</h1>
                                <textarea>Please enter the prescription.</textarea>
                                <button>Save</button>
                           </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className={styles.ticketModal_status}>
                                <select className={styles.ticketModalSelect} value={status} placeholder={status=="upcoming" ?"Upcoming":status==="attended"?"Attended":"Canceled"} onChange={(e)=>{setStatus(e.target.value)}}>
                                    {status !="upcoming" ? (<option value="upcoming">Move To Upcoming</option>):<option value="upcoming">Upcoming</option>}
                                    {status !="attended" ? <option value="attended">Move To Attended</option>: <option value="attended">Attended</option>}
                                    {status !="canceled" ? <option value="canceled">Move To Canceled</option>:<option value="canceled">Canceled</option>}
                                </select>
                                <div className={styles.ticketModalClose}>
                                <button className={styles.ticketModal_closeButton} onClick={Ticket.close}>Close</button>
                                </div>
                            </div>
                            <div className={styles.ticket_info}>
                                <Container>
                                    <Row>
                                        <Col xs={5}>
                                            <h1>Patient Name </h1>
                                            <h1>Doctor's Name</h1>
                                            <h1>Appt. Date</h1>
                                            <h1>Age</h1>
                                        </Col>
                                        <Col xs={1}><h1>:</h1><h1>:</h1><h1>:</h1><h1>:</h1></Col>
                                        <Col xs={6}>
                                            <h1>{ticket.patient}</h1>
                                            <h1>{ticket.doctor}</h1>
                                            <h1>{ticket.apptdate}</h1>
                                            <h1>{ticket.age}</h1>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default TicketModal