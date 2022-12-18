import React from 'react'
import { useLuckyContext } from '../Context/Context'

export default function TicketList() {
  const { tickets } = useLuckyContext()
  return (
    <div>
      Ticket List
      {
        tickets.map(ticket => (
          <div key={ticket.id}>
            <h1>{ticket.ticket_number}</h1>
            <h1>{ticket.user.name}</h1>
          </div>
        ))
      }
    </div>
  )
}
