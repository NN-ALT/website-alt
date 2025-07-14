'use client'
import React, { useState } from 'react'

function ProblemsSolutions() {

    const [isOpen, setisOpen] = useState({});
    const dataArr = [

        { title: "Read Issue", description: 'I find it so difficult to study”, This year is my PSLE. Help', },
        { title: "Our Solution", description: "Hey google STUDY MODE Scene was created. After discussing with Tommy, he shared with favourite study music playlist.Music plays, Curtains open, smart anti-flickering lights on brightly. Lastly, a smart automation timer was installed for him to do focused work using Pomodoro study technique with break times allocated. ", },
        { title: "Final Results", description: "Number of study hours we approximated base on occupancy sensor. Tommy is proud that he is able to better maintain the study habit and his improved Will Power/ Discipline", },
    ];


    const dataArrSec = [

        { title: "Read Issue", description: 'Jason is in primary school. After school, he always sits in the living room and plays TV games (his favourite Plants vs Zombies). Recently he got into an argument with his mum for lying about his game addiction. His mum wants Jason to first shower, complete an hour of homework, then be allowed game time.', },
        { title: "Our Solution", description: " Mum controls the main power to the TV. She set the time. A customised focus study mode was programmed for Jason. It optimises his light, aircon, music with an inbuilt timer. After 1 hour of sitting at the study chair (tracked by presence sensor), Jason can activate the TV and his game", },
        { title: "Final Results", description: "Jason came home and showered immediately instead of delaying for hours. He was able to study for 1 hour consistently.", },
    ];


    const dataArrTh = [

        { title: "Read Issue", description: ' Grandma’s Dementia is getting worse, she forgets to take her medication, and leaves the house in the middle of the night.', },
        { title: "Our Solution",description: "A smart door lock + CCTV was installed at her home. It can track whenever grandma entered or exited the house. If grandma leaves the house at 2am, Speakers will say “Ah Ma Please go back to bedroom.” Location tracking on her phone was enabled. A contact sensor is placed at the medicine cabinet to approximately track when medicine is taken." },
        { title: "Final Results", description: "The family is save from worry and hassle. If Ah ma goes out at the wrong time, family members are alerted. Medication is taken regularly", },
    ];

   
    const toggle = (cardIdx, idx) => {
        setisOpen(prevState => ({
            ...prevState,
            [cardIdx]: prevState[cardIdx] === idx ? null : idx, // Toggling only for the specific card
        }));

    };


    return (
        // md:px-20
        <div className="mx-auto py-14 px-4 sm:px-6  lg:px-32 min-h-96 mb-4 w-full overflow-hidden relative " style={{ backgroundColor: '#D4D0D6' }}>
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center my-6 text-center">
                <p className="text-lg text-gray-600 tracking-wide">Open the door to the future</p>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Why Automate Your Home?
                </h1>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row md:justify-center md:gap-8 xl:gap-12 items-center gap-8 lg:gap-10" >
                {/* Card 1 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                    <img src="./Solutions/Autolifetech-Home-Automation-Solution-Work-from-Home.jpg" alt="Smart Home Feature" className="w-full max-w-xs h-auto shadow-md" />
                    <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center'>Children can’t Focus and Study</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArr.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(1, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[1] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[1] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[1] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Card 2 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                <img src="./Solutions/pexels-ryutaro-tsukata-5472251.jpg" alt="Smart Home Feature" className="w-full max-w-xs h-auto shadow-md" />
                <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center '>Addicted to TV Games</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSec.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(2, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[2] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[2] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[2] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
               
                {/* Card 3 */}
                <div className="flex flex-col justify-center items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow max-w-sm w-full">
                <img src="./Solutions/Autolifetech-Home-Automation-Solution-Dementia.jpg" alt="Smart Home Feature" className="w-full max-w-xs h-auto shadow-md" />
                <h1 className='text-xl sm:text-3xl font-bold text-gray-800 text-center'>Dementia – Loved and Not Forgotten</h1>
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-full max-w-[500px] rounded-lg bg-white p-2 *:mix-blend-difference">
                            {dataArrSec.map((PerAccordion, idx) => (
                                <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                                    <button onClick={() => toggle(3, idx)} className="flex h-full w-full items-center justify-between font-medium text-gray-400 outline-none">
                                        <span>{PerAccordion.title}</span>
                                        <span className="rounded-full p-2">
                                            <svg className="ml-3 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen[3] === idx && '!rotate-180'}`} />
                                                <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen[3] === idx && '!rotate-180'}`} />
                                            </svg>
                                        </span>
                                    </button>
                                    <div className={` grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out  ${isOpen[3] === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden pr-4 text-sm text-start">{PerAccordion.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProblemsSolutions
