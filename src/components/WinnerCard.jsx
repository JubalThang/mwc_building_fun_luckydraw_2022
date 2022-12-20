
export default function WinnerCard({ winner }) {

    const title = 'font-semibold text-xl py-2 '
    const content = ' text-xl py-2 font-bold '

    return (
        <div className="flex justify-center mt-10 ml-9 ">
            <div className="rounded-lg shadow-lg bg-white min-w-[320px]">
                <div className="">
                    <div className="bg-primary rounded-t-lg">
                        <h5 className="text-gray-900text-x/l font-medium text-2xl p-2 text-center py-5 text-white ">{winner.prize}</h5>
                    </div>
                    <div className="flex flex-col p-3">
                        <div className="flex justify-evenly w-full">
                            <p className={`text-gray-700 text-right ${title} w-1/2`}>Ticket No: </p>
                            <p className={`text-gray-700 pl-5 w-1/2 ${content}`}>{winner.ticket_number}</p>
                        </div>
                        <div className="flex justify-evenly w-full">
                            <p className={`text-gray-700 ${title} text-right w-1/2`}>Name: </p>
                            <p className={`text-gray-700 pl-5 w-1/2 ${content}`}>{winner.user.name}</p>
                        </div>
                        <div className="flex justify-evenly w-full">
                            <p className={`text-gray-700 text-right w-1/2 ${title}`}>City: </p>
                            <p className={`text-gray-700 pl-5 w-1/2 ${content}`}>{winner.user.city}</p>
                        </div>
                        <div className="flex justify-evenly w-full">
                            <p className={`text-gray-700 text-right w-1/2 ${title}`}>State: </p>
                            <p className={`text-gray-700 w-1/2 pl-5 ${content}`}>{winner.user.state}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
