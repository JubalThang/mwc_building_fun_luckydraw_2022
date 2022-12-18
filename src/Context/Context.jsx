import { createContext, useContext, useEffect, useState } from "react"

const LuckyContext = createContext()

export function useLuckyContext() {
  return useContext(LuckyContext)
}
export default function LuckyProvider({children}) {
  const [tickets, setTickets] = useState([])
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)
  const [selectedPrizes, setSelectedPrizes] = useState([])
   // this selected ticket has to be override per select  

  useEffect(() => {
    fetch('http://localhost:3000/data')
    .then(res => {
      if(res.ok) {
        res.json().then(data => setTickets(data.tickets))
      }
    })
    .catch(error => console.log(error))
  },[])

  const value = {
    tickets,
    isShowingSidebar,
    setIsShowingSidebar,
    selectedPrizes,
    setSelectedPrizes
  }
  return (
    <LuckyContext.Provider value={value}>
      {children}
    </LuckyContext.Provider>
  )
}
