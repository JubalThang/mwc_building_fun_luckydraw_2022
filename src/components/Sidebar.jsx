
import { useLuckyContext } from '../Context/Context'
import prizes from '../prizes'

export default function Sidebar() {

    const { isShowingSidebar, winners, setSelectedPize } = useLuckyContext()

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
        <div className={`${isShowingSidebar ? 'w-[25%]' : 'w-0'} bg-primary transition-all duration-200 flex flex-col justify-between z-30 relative`}>
            <div>
                <div className="flex items-center">
                    <h1 className="text-center text-[3rem] text-white font-semiBold py-5 flex-1">Prizes</h1>
                </div>
                <div className='p-3'>
                    {
                        prizes.map((prize, index) =>
                            <button key={prize} className={`bg-secondary mb-3 p-3 block w-full rounded-md hover:bg-secondary text-white hover:text-black ${checkIfThePrizeIsTaken(prize) && 'line-through text-gray-600 hover:text-gray-600 cursor-default'}`} onClick={() => handlePrizeSelect(prize)}
                                disabled={checkIfThePrizeIsTaken(prize)}
                            >
                                <div className="flex">
                                    <h1 className=' font-bold text-left text-[1.5em] pr-3 '>{index + 1}<sup>{supper(index + 1)}</sup></h1>
                                    <h1 className=' font-bold text-[1.5em]'>{prize}</h1>
                                </div>
                            </button>)
                    }
                </div>
            </div>
            <h1 className=' absolute p-5 text-white text-xs font-thin bottom-0 right-0 opacity-50'>Developed by Jubal Thang</h1>
        </div>
    )
}
