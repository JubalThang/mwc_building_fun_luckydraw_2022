import { createContext, useContext, useEffect, useState } from "react"

const LuckyContext = createContext()

export function useLuckyContext() {
  return useContext(LuckyContext)
}
export default function LuckyProvider({ children }) {
  const [tickets, setTickets] = useState([])
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)
  const [selectedPrizes, setSelectedPrizes] = useState([])
  const [selectedPrize, setSelectedPize] = useState('')
  const [winners, setWinners] = useState(null)
  // this selected ticket has to be override per select  

  useEffect(() => {
    fetch('http://localhost:3000/tickets')
      .then(res => {
        if (res.ok) {
          res.json().then(data => setTickets(data))
        }
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/winners')
      .then(res => {
        if (res.ok) {
          res.json().then(winners => setWinners(winners))
        }
      })
      .catch(error => console.log(error))

  }, [])

  function postTicket(tickets) {
    tickets.map(ticket => {
      fetch('http://localhost:3000/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket)
      })
        .then(res => {
          if (res.ok) {
            res.json().then(ticket => setTickets([...tickets, ticket]))
          }
        })
        .catch(error => console.error('Error post ticket: ', error))
    })
    // console.log(tickets)
  }

  function handleCurrentPrizeSelect(prize) {
    setSelectedPize(prize)
  }

  function addTheWinner(winner) {
    console.log(winner)

    let body = {
      "prize": selectedPrize,
      "winner": {
        "ticket": winner.ticket_number,
        "name": winner.user.name,
        "city": winner.user.city,
        "state": winner.user.state
      }
    }
    fetch('http://localhost:3000/winners', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      res.ok ? res.ok.then(winner => setWinners([...winners, winner ])) : console.log("something wrong with winner POST")
    })
      .catch(error => console.log(error))

  }

  const value = {
    tickets,
    isShowingSidebar,
    setIsShowingSidebar,
    selectedPrizes,
    setSelectedPrizes,
    postTicket,
    selectedPrize,
    handleCurrentPrizeSelect,
    winners,
    addTheWinner
  }
  return (
    <LuckyContext.Provider value={value}>
      {children}
    </LuckyContext.Provider>
  )
}
