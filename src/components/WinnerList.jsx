import { useEffect } from "react"
import { useLuckyContext } from "../Context"
import WinnerCard from "./WinnerCard"

export default function WinnerList() {
  const { winners, handlePrizesBtnDisplay } = useLuckyContext()

  useEffect(() => {
    handlePrizesBtnDisplay(false)
  },[])

  return (
    <div className=" h-screen overflow-y-auto ">
      <div className="text-6xl space-y-5 pt-10 font-bold w-full text-center text-primary ">
        <h1 className=" bg-white py-5 uppercase drop-shadow-md">Congratulations!</h1>
        <h1 className="text-4xl">Luckydraw Winners</h1>
      </div>
      {/* <div className=" grid grid-cols-3 gap-4 "> */}
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center items-center w-full">
          {
            winners ?
              winners.map(w =>
                <WinnerCard key={w.id} winner={w} />
              )
              :
              <h1> No Winner yet!</h1>
          }
        </div>
      </div>
    </div>
  )
}
