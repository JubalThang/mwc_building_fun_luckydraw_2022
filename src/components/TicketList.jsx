import { useEffect } from 'react'
import { useLuckyContext } from '../Context'

export default function TicketList() {
  const { tickets, handlePrizesBtnDisplay } = useLuckyContext()

  useEffect(() => {
    handlePrizesBtnDisplay(false)
  }, [])

  return (
    <div className=' max-h-full overflow-y-auto'>
      <div className=' mb-20'>
        <table className=' table-auto min-w-full'>
          <tr className=' border-b sticky h-10 top-0 bg-blue-200'>

            <th>No.</th>
            <th>Ticket No.</th>
            <th>Name</th>
            {/* <th>Contact</th> */}
            <th>City</th>
            <th>State</th>

          </tr>

          {
            tickets.map((ticket, index) => (
              <tr key={ticket.id} className=' even:bg-slate-100 even:bg-opacity-40 text-center hover:bg-slate-200'>

                <td>{index + 1}.</td>
                <td>
                  {ticket.ticket_number}
                </td>
                <td> <p className=''>{ticket.user.name}</p></td>
                {/* <td>{ticket.user.contact}</td> */}
                <td>{ticket.user.city}</td>
                <td>{ticket.user.state}</td>
              </tr>
            ))
          }
        </table>
      </div>

    </div>
  )
}
