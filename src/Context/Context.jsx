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

  // async function fetchTickets() {
  //   await fetch('http://localhost:3000/tickets')
  //   .then(res => res.json())
  //   .then(tickets => )
  // }

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
  }

  const value = {
    tickets,
    isShowingSidebar,
    setIsShowingSidebar,
    selectedPrizes,
    setSelectedPrizes,
    postTicket,
    selectedPrize,
    handleCurrentPrizeSelect
  }
  return (
    <LuckyContext.Provider value={value}>
      {children}
    </LuckyContext.Provider>
  )
}
