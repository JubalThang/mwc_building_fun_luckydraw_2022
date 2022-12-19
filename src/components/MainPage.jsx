import React, { useEffect, useState } from 'react'
import InputsModel from './InputsModel'
import hearBeat from '../assets/audio/heartbeat.mp3'
import fireworkAudio from '../assets/audio/fireworks.mp3'
import cheerAudio from '../assets/audio/cheer.mp3'
import { useLuckyContext } from '../Context/Context'

export const MainPage = () => {
    const [loading, setLoading] = useState(false)
    const [isFireworksShoot, setisFireworksShoot] = useState(false)
    const [btnDisable, setbtnDisable] = useState(true)
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [fourth, setFourth] = useState('')
    const [winner, setWinner] = useState('')
    const heartBeat = new Audio(hearBeat)
    const [fireworks] = useState(new Audio(fireworkAudio))
    const [cheering] = useState(new Audio(cheerAudio))
    const [ticketToSearch, setTicketToSearch] = useState('')

    const { selectedPrize, handleCurrentPrizeSelect, tickets } = useLuckyContext()

    function dummyLoading(e) {
        e.preventDefault()
        setLoading(true)
        setTimeout(myTimer, 1000)
        heartBeat.play()
    }

    useEffect(() => {
        if (first !== '' && second !== '' && third !== '' && fourth !== '') {
            setbtnDisable(false)
        } else {
            setbtnDisable(true)
        }
        setTicketToSearch(first+second+third+fourth)
    }, [first, second, third, fourth])

    function searchTheWinner(t) {
        return t.ticket_number === ticketToSearch
    }

    function myTimer() {
        // set the winner = {} if the winner ticket not found in Firebase!
        // let winner = {
        //     'name': "Mg Aung Aung",
        //     'state': "Oregon",
        //     'number': 2224
        // }
        let winner = tickets.find(searchTheWinner) 
        winner ? setWinner(winner) : setWinner({"user":""})
        setLoading(false)
        heartBeat.pause()
        if (winner) {
            fireworks.play()
            cheering.play()
            setisFireworksShoot(true)
        } else {
            setisFireworksShoot(false)
        }
        // setisFireworksShoot(true)
    }
    function reload() {
        // window.location.reload()
        setLoading(false)
        setbtnDisable(true)
        setFirst('')
        setSecond('')
        setThird('')
        setFourth('')
        setWinner('')
        setisFireworksShoot(false)
        handleCurrentPrizeSelect('')
        fireworks.pause()
        fireworks.currentTime = 0
        cheering.pause()
        cheering.currentTime = 0
    }
    return (
        <div className='w-full flex-1 h-full relative flex '>
            {/* <div className="flex flex-col justify-evenly h-full -z-10"> */}
            <div className="w-full h-full ">
                <div className="bg-gray-200 h-full">
                    <img src="" alt="" />
                    <h1 className='text-4xl font-bold py-5' onClick={() => console.log("click")}>MWC Building Fund 2022</h1>
                    {
                        selectedPrize && <div className=' mt-10 max-w-max mx-auto border-2 rounded-md border-black'> <h1 className='text-center p-3 text-4xl font-semibold'>Draw a Winner for <span className='text-5xl text-amber-700'> {selectedPrize}!</span></h1> </div>
                    }
                </div>
                <h1 className=' absolute p-5 text-white text-sm font-thin bottom-0 right-0'>Developed by Jubal Thang</h1>
            </div>
            <InputsModel isFireworksShoot={isFireworksShoot} winner={winner} loading={loading} dummyLoading={dummyLoading} reload={reload} setFirst={setFirst} setSecond={setSecond} setThird={setThird} setFourth={setFourth} btnDisable={btnDisable} />
        </div>
    )
}
