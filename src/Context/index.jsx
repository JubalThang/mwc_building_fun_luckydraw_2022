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
  const [isPrizeBtnDisplay, setisPrizeBtnDisplay] = useState(false)

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

  function handlePrizesBtnDisplay(op) {
    setisPrizeBtnDisplay(op)
  }

  const value = {
    tickets,
    isShowingSidebar,
    setIsShowingSidebar,
    postTicket,
    selectedPrize,
    setSelectedPize,
    winners,
    handleAddWinner,
    isPrizeBtnDisplay,
    handlePrizesBtnDisplay
  }
  return (
    <LuckyContext.Provider value={value}>
      {children}
    </LuckyContext.Provider>
  )
}
