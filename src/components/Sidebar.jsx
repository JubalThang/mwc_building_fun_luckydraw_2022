
import { useLuckyContext } from '../Context'
import { prizes } from '../prizes'

export default function Sidebar() {

    const { isShowingSidebar, winners, setSelectedPize, setIsShowingSidebar } = useLuckyContext()

    const handlePrizeSelect = (selPrize) => {
        setSelectedPize(selPrize)
    }

    const checkIfThePrizeIsTaken = (prize) => {
        return winners && winners.find(w => w.prize === prize) ? true : false
    }

    const supper = (index) => {
        if (index === 1) {
            return 'st'
        } else if (index === 2) {
            return 'nd'
        } else if (index === 3) {
            return 'rd'
        } else {
            return 'th'
        }
    }
    return (
        <div className={`${isShowingSidebar ? 'w-[25%]' : 'w-0'} bg-primary/20 transition-all duration-200 flex flex-col justify-between z-30 relative`}>
            <div>
                <div className="flex items-center">
                    <h1 className="text-center text-[3rem] text-primary font-semiBold py-5 flex-1">Prizes</h1>
                </div>
                <div className='p-3'>
                    {
                        prizes.map((prize, index) =>
                            <button key={prize} className={`border  mb-3 p-3 block w-full rounded-md hover:bg-secondary/40 text-white hover:text-black ${checkIfThePrizeIsTaken(prize) && 'line-through text-gray-600 hover:text-gray-600 cursor-default'}`} onClick={() => handlePrizeSelect(prize)}
                                disabled={checkIfThePrizeIsTaken(prize)}
                            >
                                <div className="flex">
                                    <h1 className=' font-bold text-left text-[1.5em] pr-3 text-primary'>{index + 1}<sup>{supper(index + 1)}</sup></h1>
                                    <h1 className=' font-bold text-[1.5em] text-accent'>{prize}</h1>
                                </div>
                            </button>)
                    }
                </div>
            </div>
            <div className={`${isShowingSidebar ? 'block' : 'hidden'} `}>
                <div className='p-3 w-16 h-auto cursor-pointer' onClick={() => setIsShowingSidebar(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-ful text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </div>
                <h1 className={`absolute p-5 text-white text-xs font-thin bottom-0 right-0 opacity-50`}>developed by Jubal Thang</h1>
            </div>
        </div>
    )
}
