import React from 'react'

export default function AddPage() {
    function handleSubmit(e) {
        e.preventDefault()
        const ticket = {
            ticket_number : e.target.ticket.value,
            user : {
                name : e.target.name.value,
                contact : e.target.contact.value,
                city : e.target.city.value,
                state : e.target.state.value
            }
        }
        console.log(ticket)

        e.target.reset()
    }

    return (
        <div className="w-full h-full bg-gray-100 p-5">
            <h1 className="text-center text-4xl p-5 font-semibold ">Enter ticket info</h1>
            <form className="w-96 mx-auto" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="ticket" className="label">Ticket No.</label>
                <input type="number" maxlength={4} name="ticket" className="input" required />

                <label htmlFor="name" className="label">Name</label>
                <input type="text" name="name" className="input" required />

                <label htmlFor="contact" className="label">Contact No.</label>
                <input type="number" name="contact" className="input" required />

                <label htmlFor="city" className="label">city</label>
                <input type="text" name="city" className="input" required />

                <label htmlFor="state" className="label">State</label>
                <input type="text" name="state" className="input" required />
                
                <input type="submit" className='submit mt-5' value="Add" />
            </form>
        </div>
    )
}
