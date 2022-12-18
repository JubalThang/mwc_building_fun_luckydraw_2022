import { useState } from "react"
import fireworksAudio from '../assets/audio/fireworks.mp3'
import { Fireworks } from '@fireworks-js/react'

export const DummyPage = () => {
  const [cheer] = useState(new Audio(fireworksAudio))
  const [isCherring, setIsCherring] = useState(false)
  const [prizes, setPrizes] = useState([
    {
      'id': 1,
      'sup': 'st',
      'prize': "first prize",
      'disable': false
    },
    {
      'id': 2,
      'sup': 'nd',
      'prize': "second prize",
      'disable': false
    },
    {
      'id': 3,
      'sup': 'rd',
      'prize': "third prize",
      'disable': false
    }
  ])

  cheer.addEventListener('ended', function() {
    this.currentTime = 0.5;
    this.play()
  })

  function handleNumberSelection(id) {
    // setSelected([...selected,{}])
    // selected.filter(e => e.id === id) && console.log('found')\
    if (prizes[id - 1].disable) {
      return
    } else {
      setPrizes(prizes.map(prize => prize.id === id ? { ...prize, disable: true } : prize))
      console.log(prizes)
      if (isCherring) {
        cheer.pause()
        console.log('audio should pause')
        setIsCherring(false)
      } else {
        cheer.play()
        setIsCherring(true)
      }
    }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center cursor-pointer bg-black'>
      <h1 className="text-7xl text-white">Hello</h1>
      <ul className="flex space-x-5 w-1/2 h-[25%] mt-20">
        {
          prizes.map((prize) => (
            <div key={prize.id} className={`prize-div ${prize.disable && 'text-white bg-secondary hover:border-primary'}`} onClick={() => handleNumberSelection(prize.id)}>
              <h1 className='text-4xl font-semibold '>{prize.id}<sup>{prize.sup}</sup></h1>
            </div>)
          )
        }
      </ul>
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 360
          },
          explosion: 20,
          rocketsPoint: {
            min: 0,
            max: 100
          },
          // hue: {
          //   min: 0,
          //   max: 0
          // },
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          position: 'fixed',
          background: '#110e0e0'
        }}
      />
      <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 180
        },
        boundaries : {
          height: 0,
          width: 0,
          x: 0,
          y: 0
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#0000000'
      }}
    />
    </div>
  )
}
