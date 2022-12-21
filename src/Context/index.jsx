import { createContext, useContext, useEffect, useState } from "react"
import { getTheTicketsFromDB, getTheWinnersFromDB, postATicketToDB, postWinnerToDB } from "../api"

const LuckyContext = createContext()

export function useLuckyContext() {
  return useContext(LuckyContext)
}
export default function LuckyProvider({ children }) {
  const [tickets, setTickets] = useState([])
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)
  const [selectedPrize, setSelectedPize] = useState('')
  const [winners, setWinners] = useState(null)
  // this selected ticket has to be override per select  

  useEffect(() => {
    getTheTicketsFromDB().then(tickets => setTickets(tickets))
    getTheWinnersFromDB().then(winners => setWinners(winners))
  }, [])

  function postTicket(tickets) {
    tickets.map(t => {
      postATicketToDB(t).then(ticket => setTickets([...tickets, ticket]))
    })
  }

  function handleAddWinner(winner) {
    const w = { ...winner, prize: selectedPrize }
    postWinnerToDB(w).then(winner_res =>  setWinners([...winners, winner_res]))
  }

  const value = {
    tickets,
    isShowingSidebar,
    setIsShowingSidebar,
    postTicket,
    selectedPrize,
    setSelectedPize, // let try this again
    winners,
    handleAddWinner
  }
  return (
    <LuckyContext.Provider value={value}>
      {children}
    </LuckyContext.Provider>
  )
}
