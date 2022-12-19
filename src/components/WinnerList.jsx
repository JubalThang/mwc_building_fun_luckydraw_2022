import { useLuckyContext } from "../Context/Context"

export default function WinnerList() {
  const { winners } = useLuckyContext()
  console.log('winnerList: ', winners)
  return (
   <>
   {
    winners.map(w => (
      <div key={w.prize}>
        <h1>{w.winner.name}</h1>
      </div>
    ))
   }
   </>
  )
}
