
export default function WinnerCard({ winner }) {

    const title = 'font-semibold text-xl py-2 text-gray-700 px-5 text-right '
    const content = ' text-xl py-2 font-bold text-gray-700 pl-5 min-w-max px-5'

    return (
        <div className="flex justify-center mt-10 ml-9">
            <div className="rounded-lg shadow-lg bg-white w-max">
                <div className=" bg-black/10 rounded-t-lg">
                    <h5 className=" text-3xl p-7 text-center text-primary font-bold ">{winner.prize}</h5>
                </div>
                <table className="w-full">
                    <tr>
                        <th className={`${title}`}>Ticket No:</th>
                        <td className={`${content}`}>{winner.ticket_number}</td>
                    </tr>
                    <tr>
                        <th className={`${title}`}>Name:</th>
                        <td className={`${content}`}>{winner.user.name}</td>
                    </tr>
                    <tr>
                        <th className={`${title}`}>City:</th>
                        <td className={`${content}`}>{winner.user.city}</td>
                    </tr>
                    <tr>
                        <th className={`${title}`}>State:</th>
                        <td className={`${content}`}>{winner.user.state}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
