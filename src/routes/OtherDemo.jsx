import React, { useState, useRef, useEffect } from 'react';
import '../styles/demo.css';
const Test2 = () => {
    const [animateOpen, setAnimateOpen] = useState(false);

  return (
    // <div className="absolute w-full h-full bg-[#692769]">
    <div className="absolute w-full h-full bg-black bg-opacity-30">

        <button
            onClick={()=>setAnimateOpen((o)=>(!o))}
            className="absolute top-16 left-16 w-16 h-16 border-2 border-white rounded-md text-white hover:bg-gray-300"
        >{animateOpen ? "ON" : "OFF"}</button>

        <div className="absolute top-1/2 left-32 flex flex-row gap-8">

            <div className='flex flex-col'>
                <div className="text-white"> ver 1</div>
                <div className="relative w-40 h-40">
                    <div className="absolute w-full h-full rounded-3xl bg-black"
                        style={{
                            mask: "linear-gradient(#000 0 0) padding-box,linear-gradient(#000 0 0)",
                            maskComposite: "exclude",
                            border: "3px solid #3fa4ee",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="absolute animate-spin animate-duration-[3000ms]" style={{
                            width: "150%",
                            height: "150%",
                            background: animateOpen ? "linear-gradient(#f000 70%,#ffd944)" : "transparent",
                        }}></div>
                    </div>

                    <div className="absolute w-full h-full rounded-3xl flex justify-center items-center"
                        style={{
                            background: "linear-gradient(to top, rgba(0, 185, 255, 0.65) 0%, rgba(0, 0, 0, 0) 100%)",
                            border: "3px solid transparent",
                        }}
                    >

                    </div>
                </div>
            </div>


            <div className="flex flex-col">
                <div className="text-white"> ver 2</div>

                <div className="relative w-60 h-40">
                    <div
                        className={`animated-border ${animateOpen ? "active":""}`}
                        style={{
                            borderRadius: "4px",
                            borderBottomRightRadius: "200px 160px",
                            background: "linear-gradient(180deg,#ff2d41,#a00010)",
                        }}
                    ></div>
                    <div
                        className="gradient-group"
                        style={{
                            borderRadius: "4px",
                            borderBottomRightRadius: "200px 160px",
                        }}
                    >
                        <div className="absolute w-full h-full"
                            style={{
                                background: "linear-gradient(rgba(255,0,24,.2)),radial-gradient(100% 80% at 50% 100%, rgba(255, 0, 24, 0.3) 0px, rgba(255, 0, 24, 0) 100%)",
                        }}></div>

                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <span className="text-red-700">Banker</span>
                                <span className="text-yellow-400">1:0.95</span>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-[1200px] h-[300px] flex flex-row gap-2">


                {/* Player */}
                <div className="relative w-60 h-40">
                    <div
                        className={`animated-border ${animateOpen ? "active" : ""} rounded`}
                        style={{
                        borderBottomLeftRadius: "200px 160px",
                        background: "linear-gradient(180deg,#2d41ff,#0010a0)",
                        }}
                    ></div>
                    <div
                        className="gradient-group rounded"
                        style={{
                        borderBottomLeftRadius: "200px 160px",
                        }}
                    >
                        <div
                        className="absolute w-full h-full"
                        style={{
                            background: "linear-gradient(rgba(0,24,255,.2)),radial-gradient(100% 80% at 50% 100%, rgba(0, 24, 255, 0.3) 0px, rgba(0, 24, 255, 0) 100%)",
                        }}
                        ></div>

                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <span className="text-[#485bff] text-lg font-black">Banker</span>
                            <span className="text-yellow-400">1:0.95</span>
                        </div>
                        <div className="bg-[#0b2050] text-[#485bff] rounded-3xl px-4 flex flex-row justify-around items-center">
                            <span>0%</span>
                            <span>0</span>
                            <span>0.00K</span>
                        </div>
                        </div>
                    </div>
                </div>


                {/* tie */}
                <div className="relative w-60 h-40">
                    <div
                        className={`animated-border ${animateOpen ? "active" : ""} rounded`}
                        style={{
                            background: "linear-gradient(180deg,#ffc107,#ffb300)",
                        }}
                    ></div>
                    <div
                        className="gradient-group rounded"
                    >
                        <div
                        className="absolute w-full h-full"
                        style={{
                            background: "linear-gradient(rgba(255,193,7,.2)),radial-gradient(100% 80% at 50% 100%, rgba(255, 193, 7, 0.3) 0px, rgba(255, 193, 7, 0) 100%)",
                        }}
                        ></div>

                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <span className="text-[#ffc107] text-lg font-black">Tie</span>
                            <span className="text-yellow-400">1:0.95</span>
                        </div>
                        <div className="bg-[#503a0b] text-[#ffc107] rounded-3xl px-4 flex flex-row justify-around items-center">
                            <span>0%</span>
                            <span>0</span>
                            <span>0.00K</span>
                        </div>
                        </div>
                    </div>
                </div>



                {/* Banker */}
                <div className="relative w-60 h-40">
                    <div
                        className={`animated-border ${animateOpen ? "active":""} rounded`}
                        style={{
                            borderBottomRightRadius: "200px 160px",
                            background: "linear-gradient(180deg,#ff2d41,#a00010)",
                        }}
                    ></div>
                    <div
                        className="gradient-group rounded"
                        style={{
                            borderBottomRightRadius: "200px 160px",
                        }}
                    >
                        <div className="absolute w-full h-full"
                            style={{
                                background: "linear-gradient(rgba(255,0,24,.2)),radial-gradient(100% 80% at 50% 100%, rgba(255, 0, 24, 0.3) 0px, rgba(255, 0, 24, 0) 100%)",
                        }}></div>

                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <span className="text-[#f2011a] text-lg font-black">Banker</span>
                                <span className="text-yellow-400">1:0.95</span>
                            </div>
                            <div className="bg-[#500b20] text-[#f2011a] rounded-3xl px-4 flex flex-row justify-around items-center">
                                <span>0%</span>
                                <span>0</span>
                                <span>0.00K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Test2