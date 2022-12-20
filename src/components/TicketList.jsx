import React from 'react'
import { useLuckyContext } from '../Context'

export default function TicketList() {
  const { tickets } = useLuckyContext()
  return (
    <div className=' max-h-full overflow-y-auto'>
      <div className=' mb-20 px-5'>
        <table className=' table-auto min-w-full'>
          <thead className=' border-b'>
            <tr className=' h-10 py-5'>
              <th>No.</th>
              <th>Ticket No.</th>
              <th>Name</th>
              <th>Contact</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {
              tickets.map((ticket, index) => (
                <tr key={ticket.id} className=' even:bg-slate-100 even:bg-opacity-40 text-left table-row'>

                  <td>{index + 1}.</td>
                  <td>
                    {ticket.ticket_number}
                  </td>
                  <td className='flex justify-start'> <p className=''>{ticket.user.name}</p></td>
                  <td>{ticket.user.contact}</td>
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
