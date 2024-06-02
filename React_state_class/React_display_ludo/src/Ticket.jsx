import TicketNum from "./TicketNum"
import "./Ticket.css"
export default function Ticket({ticket}){
    return(
        <div className="Ticket">
            <h4>Ticket</h4>
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
}