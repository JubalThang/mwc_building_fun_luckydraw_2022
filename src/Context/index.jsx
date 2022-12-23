import { createContext, useContext, useEffect, useState } from "react"
import { delWinnerFromDB, getTheTicketsFromDB, getTheWinnersFromDB, postATicketToDB, postWinnerToDB } from "../api"

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
    // console.log(' winner_id to delete from db', winner.id)
    delWinnerFromDB(winner.id)
    const w = { ...winner, prize: selectedPrize }
    postWinnerToDB(w).then(winner_res => setWinners([...winners, winner_res]))
  }

  function handlePrizesBtnDisplay(op) {
    setisPrizeBtnDisplay(op)
  }

  function handleSelectedPrizeReset() {
    setSelectedPize('')
  }

  const value = {
    tickets,
    isShowingSidebar,
    setIsShowingSidebar,
    postTicket,
    selectedPrize,
    setSelectedPize,
    handleSelectedPrizeReset,
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
