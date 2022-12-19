import Fireworks from "@fireworks-js/react";
import { useLuckyContext } from "../Context/Context";
import { useState } from "react";

export default function InputsModel({ winner, loading, dummyLoading, reload, setFirst, setSecond, setThird, setFourth, btnDisable, isFireworksShoot }) {
    const { isShowingSidebar } = useLuckyContext()

    return (
        <div className='absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center'>
            <div className={`${isShowingSidebar ? 'w-2/5' : 'w-1/4'} rounded-xl flex flex-col space-y-5 justify-evenly bg-primary p-5 z-20 transition-all duration-500 `}>
                {
                    winner ?
                        winner.user.name ?
                            <>
                                <h1 className='text-center text-white text-5xl font-bold my-3 underline underline-offset-8 text-rainbow-animation'>Congratulation!</h1>
                                <h1 className='text-center text-white text-4xl font-bold'>{winner.user.name}</h1>
                                <h1 className='text-center text-white text-3xl font-bold pb-10'>{winner.user.state}</h1>
                                <button className='btn mx-auto m-10' onClick={() => reload()}>Reload</button>
                            </>
                            :
                            <>
                                <h1 className='text-center text-white text-5xl font-bold my-3 underline underline-offset-8'>Oops!</h1>
                                <h1 className='text-center text-white text-4xl font-bold pb-10'>လက်မှတ်မရောင်းရသေးပါ</h1>
                                <button className='btn mx-auto m-10' onClick={() => reload()}>Reload</button>
                            </>
                        :
                        !loading ?
                            <>
                                <form onSubmit={(e) => dummyLoading(e)} className='w-full'>
                                    <div className="flex space-x-5 items-center justify-center mb-5">
                                        <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 1)} className='input-field' name='first' onChange={(e) => setFirst(e.target.value)} />
                                        <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 1)} className='input-field' name='second' onChange={(e) => setSecond(e.target.value)} />
                                        <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 1)} className='input-field' name='third' onChange={(e) => setThird(e.target.value)} />
                                        <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 1)} className='input-field' name='fourth' onChange={(e) => setFourth(e.target.value)} />
                                    </div>
                                    <div className='py-5 text-center'>
                                        <input type='submit' className={`btn ${btnDisable && 'bg-secondary'}`} value='draw' disabled={btnDisable} />
                                    </div>
                                </form>
                            </>
                            : <><h1 className='text-center text-white text-3xl blink'>Searching...</h1><div className="lds-heart mx-auto"><div></div></div></>
                }
            </div>
            {
                isFireworksShoot &&
                <>
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
                            boundaries: {
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
                </>
            }

        </div>
    )
}
