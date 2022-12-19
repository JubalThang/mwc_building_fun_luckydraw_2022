import { useLuckyContext } from '../Context/Context'

export default function AddPage() {
    const { postTicket } = useLuckyContext()

    function handleSubmit(e) {
        e.preventDefault()
        let inputTicketCount = 0
        let tickets = []

        if (e.target.ticket.value.includes('-')) {
            const arrayCount = e.target.ticket.value.split('-')

            for (let i = parseInt(arrayCount[0]); i <= parseInt(arrayCount[1]); i++ ) {
                let ticket = {
                    ticket_number: i.toString(),
                    user: {
                        name: e.target.name.value,
                        contact: e.target.contact.value,
                        city: e.target.city.value,
                        state: e.target.state.value
                    }
                }
                tickets.push(ticket)
            }

        } else if(e.target.ticket.value.includes(',')) {
            inputTicketCount = e.target.ticket.value.split(',')
            inputTicketCount.map(t => {
                let ticket = {
                    ticket_number: t.toString(),
                    user: {
                        name: e.target.name.value,
                        contact: e.target.contact.value,
                        city: e.target.city.value,
                        state: e.target.state.value
                    }
                }
                tickets.push(ticket)
            })
        } else if(e.target.ticket.value.length === 4) {
            let ticket = {
                ticket_number: parseInt(e.target.ticket.value),
                user: {
                    name: e.target.name.value,
                    contact: e.target.contact.value,
                    city: e.target.city.value,
                    state: e.target.state.value
                }
            }
            tickets.push(ticket)
        }
        else {
            alert('Check your ticket input!!')
            return
        }


        // const ticket = {
        //     ticket_number : e.target.ticket.value,
        //     user : {
        //         name : e.target.name.value,
        //         contact : e.target.contact.value,
        //         city : e.target.city.value,
        //         state : e.target.state.value
        //     }
        // }

        postTicket(tickets)
        e.target.reset()
    }

    return (
        <div className="w-full h-full bg-gray-100">
            <h1 className="text-center text-4xl p-5 font-semibold ">Enter ticket info</h1>
            <form className="w-96 mx-auto" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="ticket" className="label">Ticket No.</label>
                <input type="text" name="ticket" className="input" required />

                <label htmlFor="name" className="label">Name</label>
                <input type="text" name="name" className="input" required />

                <label htmlFor="contact" className="label">Contact No.</label>
                <input type="number" name="contact" className="input" required />

                <label htmlFor="city" className="label">city</label>
                <input type="text" name="city" className="input" required />

                <label htmlFor="state" className="label">State</label>
                <input type="text" name="state" className="input" required />

                <input type="submit" className='submit mt-5 uppercase' pattern="/^[a-z]{2}$/" value="Add" />
            </form>
        </div>
    )
}
