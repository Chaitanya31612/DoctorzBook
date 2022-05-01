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
                                <select value={status} placeholder={status=="upcoming" ?"Upcoming":status==="attended"?"Attended":"Canceled"} onChange={(e)=>{setStatus(e.target.value)}}>
                                    {status !="upcoming" ? (<option value="upcoming">Move To Upcoming</option>):<option value="upcoming">Upcoming</option>}
                                    {status !="attended" ? <option value="attended">Move To Attended</option>: <option value="attended">Attended</option>}
                                    {status !="canceled" ? <option value="canceled">Move To Canceled</option>:<option value="canceled">Canceled</option>}
                                </select>
                            </div>
                            <div className={styles.ticket_info}>
                                <h1>Patient Name : {ticket.patient}</h1>
                                <h1>Doctor's Name : {ticket.doctor}</h1>
                                <h1>Appointment Date : {ticket.apptdate}</h1>
                                <h1>Age : {ticket.age}</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default TicketModal