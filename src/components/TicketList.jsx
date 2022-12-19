import React from 'react'
import { useLuckyContext } from '../Context/Context'

export default function TicketList() {
  const { tickets } = useLuckyContext()
  return (
    <div className=' max-h-full overflow-y-auto'>
      <div className=' mb-20 px-5'>
        <table className=' min-w-full'>
          <thead className=' border-b '>
            <tr className=' h-10 py-5'>
              <th>Ticket No.</th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {
              tickets.map(ticket => (
                <tr key={ticket.id} className=' even:bg-slate-100 text-left table-row'>
                  <td>{ticket.ticket_number}</td>
                  <td>{ticket.user.name}</td>
                  <td>{ticket.user.city}</td>
                  <td>{ticket.user.state}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
