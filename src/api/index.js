const tickets_url = "http://localhost:3000/tickets"
const winners_url = "http://localhost:3000/winners"

const createObject = (t) => {
    let object = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(t)
    }
    return object
}

export async function getTheTicketsFromDB() {
    return await fetch(tickets_url).then(res => res.json())
}

export async function getTheWinnersFromDB() {
    return await fetch(winners_url).then(res => res.json())
}

export async function postATicketToDB(ticket_from) {
    let object = createObject(ticket_from)
    return await fetch(tickets_url, object).then(res => res.json())
}

export async function postWinnerToDB(winner_from) {
   let object = createObject(winner_from)
   return await fetch(winners_url, object).then(res => res.json())
}

export async function delWinnerFromDB(winner_id) {
    // console.log('the local url', `${tickets_url}/${winner_id}` )
    return await fetch(`${tickets_url}/${winner_id}`, { 
        method : 'DELETE',
    })
    .then(res => res.json())
}