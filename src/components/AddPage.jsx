import React from 'react'

export default function AddPage() {
    function handleSubmit() {

    }
    return (
        <div className="w-full h-full bg-gray-100 p-5">
            <h1 className="text-center text-4xl p-5 font-semibold ">Enter ticket info</h1>
            <form className="w-96 mx-auto" onSubmit={handleSubmit}>
                <label htmlFor="ticket" className="label">Ticket No.</label>
                <input type="number" name="ticket" className="input" required />

                <label htmlFor="name" className="label">Name</label>
                <input type="text" name="name" className="input" required />

                <label htmlFor="contact" className="label">Contact No.</label>
                <input type="number" name="contact" className="input" required />

                <label htmlFor="city" className="label">city</label>
                <input type="number" name="city" className="input" required />

                <label htmlFor="state" className="label">State</label>
                <input type="text" name="state" className="input" required />
                
                <input type="submit" className='submit mt-5' value="Add" />
            </form>
        </div>
    )
}
