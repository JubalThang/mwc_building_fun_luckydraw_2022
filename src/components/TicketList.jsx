import React from 'react'
import { useLuckyContext } from '../Context/Context'

export default function TicketList() {
    const { tickets } = useLuckyContext()
    console.log(tickets[0].ticket_number)
  return (
    <div>
        {
            tickets.length
        }
    </div>
  )
}
