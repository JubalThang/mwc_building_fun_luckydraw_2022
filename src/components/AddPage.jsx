import { useEffect } from 'react'
import { useLuckyContext } from '../Context'

export default function AddPage() {
    const { postTicket, tickets, handlePrizesBtnDisplay } = useLuckyContext()

    useEffect(() => {
        handlePrizesBtnDisplay(false)
    },[])
    function handleSubmit(e) {
        e.preventDefault()
        let inputTicketCount = 0
        let addTickets = []

        if (e.target.ticket.value.includes('-')) {
            const arrayCount = e.target.ticket.value.split('-')

            for (let i = parseInt(arrayCount[0]); i <= parseInt(arrayCount[1]); i++) {
                let t_number = addZero(i)

                if (checkIfTheTicketIsThere(t_number)) {
                    alert('One of your input tickets is alreay there')
                    return
                } else {

                    let ticket = {
                        ticket_number: t_number,
                        user: {
                            name: e.target.name.value,
                            contact: e.target.contact.value,
                            city: e.target.city.value,
                            state: e.target.state.value
                        }
                    }
                    addTickets.push(ticket)
                }
            }

        } else if (e.target.ticket.value.includes(',')) {
            inputTicketCount = e.target.ticket.value.split(',')
            inputTicketCount.map(t => {
                if (checkIfTheTicketIsThere(t.toString())) {
                    alert('One of your input tickets is alreay there')
                    return
                }
                let ticket = {
                    ticket_number: addZero(t),
                    user: {
                        name: e.target.name.value,
                        contact: e.target.contact.value,
                        city: e.target.city.value,
                        state: e.target.state.value
                    }
                }
                addTickets.push(ticket)
            })
        } else if (e.target.ticket.value.length === 4) {
            if (checkIfTheTicketIsThere(e.target.ticket.value.toString())) {
                alert('One of your input tickets is alreay there')
                return
            }
            let ticket = {
                ticket_number: addZero(parseInt(e.target.ticket.value)),
                user: {
                    name: e.target.name.value,
                    contact: e.target.contact.value,
                    city: e.target.city.value,
                    state: e.target.state.value
                }
            }
            addTickets.push(ticket)
        }
        else {
            alert('Check your ticket input!!')
            return
        }

        postTicket(addTickets)
        e.target.reset()
    }

    function checkIfTheTicketIsThere(num) {
        if (tickets.find(t => t.ticket_number === num)) {
            return true
        }
    }

    function addZero(num) {
        if (num < 10) {
            return "000".concat(num.toString())
        } else if (num < 100) {
            return "00".concat(num.toString())
        } else if (num < 1000) {
            return "0".concat(num.toString())
        } else {
            return num.toString()
        }
    }

    return (
        <div className="w-full h-full overflow-y-auto bg-slate-200">
            <div className='mb-20'>
                <h1 className="text-center text-4xl p-5 font-semibold ">Enter ticket info</h1>
                <form className="w-96 mx-auto" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="ticket" className="label">Ticket No. <br /><span className=' text-xs capitalize'>Use "," for multiple and "-" for range. <span> <br />  eg: 0343,3222 or 0222-0227</span> </span></label>
                    <input type="text" name="ticket" className="input" required />

                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" name="name" className="input" required />

                    <label htmlFor="contact" className="label">Contact No.</label>
                    <input type="number" name="contact" className="input" />

                    <label htmlFor="city" className="label">city</label>
                    <input type="text" name="city" className="input" required />

                    <label htmlFor="state" className="label">State</label>
                    <input type="text" name="state" onInput={(e) => e.target.value = e.target.value.slice(0, 2)} className="input uppercase" required />

                    <input type="submit" className='submit mt-5 uppercase' pattern="/^[a-z]{2}$/" value="Add" />
                </form>
            </div>
        </div>
    )
}
