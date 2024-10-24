import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./TicketList.module.css";

const TicketList = () => {
  // const [tickets, setTickets] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  //
  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     try {
  //       const response = await axios.get("backend");
  //       setTickets(response.data);
  //     } catch (e) {
  //       setError("Error reading tickets");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //
  //   fetchTickets();
  // }, []);
  //
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;
  //
  // return (
  //   <div className={styles.ticketList}>
  //     <h2>Current Tickets</h2>
  //     {tickets.length === 0 ? (
  //       <p>No tickets avaliable</p>
  //     ) : (
  //       <ul>
  //         {tickets.map((ticket) => (
  //           <li key={ticket._id} className={styles.ticketItem}>
  //             <h3>{ticket.title}</h3>
  //             <p>{ticket.description}</p>
  //             {ticket.image && <img src={ticket.image} alt="Ticket" />}
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );

  const ticket = {
    id: "1",
    title: "Sample ticket",
    description: "This is a sample ticket",
    image: "https://i.ibb.co/9NVFWtW/20241023-214518.jpg",
  };
  return (
    <div className={styles.ticketList}>
      <h2>Current Tickets</h2>
      <ul>
        <li key={ticket._id} className={styles.ticketItem}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          {ticket.image && <img src={ticket.image} alt="Ticket" />}
        </li>
      </ul>
    </div>
  );
};

export default TicketList;
