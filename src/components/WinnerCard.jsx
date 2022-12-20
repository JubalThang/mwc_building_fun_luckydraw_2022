
export default function WinnerCard({ winner }) {
    return (
        <div className="flex justify-center mt-9 ml-9 ">
            <div className="rounded-lg shadow-lg bg-white w-96">
                {/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
          </a> */}
                <div className=" p-6 ">
                    <h5 className="text-gray-900text-x/l font-medium mb-2">{winner.prize}</h5>
                    <div className="flex">
                        {/* <div className=" bg-red-400 w-40">
                            <img src="https://www.gamerevolution.com/wp-content/uploads/sites/2/2022/05/AirPods-Pro-2-Price.png?w=640" alt="" />
                        </div> */}
                        <div className="flex flex-col">
                            <p className="text-gray-700 text-base ">{winner.prize}</p>
                            <p className="text-gray-700 text-base ">Ticket No: </p>
                            <p className="text-gray-700 text-base ">{winner.ticket_number}</p>
                            <p className="text-gray-700 text-base ">Name: </p>
                            <p className="text-gray-700 text-base ">{winner.user.name}</p>
                            <p className="text-gray-700 text-base ">City: </p>
                            <p className="text-gray-700 text-base ">{winner.user.city}</p>
                            <p className="text-gray-700 text-base ">State: </p>
                            <p className="text-gray-700 text-base ">{winner.user.state}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
