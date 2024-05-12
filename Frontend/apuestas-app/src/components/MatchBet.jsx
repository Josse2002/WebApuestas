"use client"

import { useState } from "react";
import { TeamHero } from "./TeamHero";
import { FaCalendar } from "react-icons/fa6";
import { BetPopUp } from "./BetPopUp";

export function MatchBet() {

    const [showPopUp, setShowPopUp] = useState(false);

    const handleShowPopUp = () => {
        setShowPopUp(!showPopUp);
    }

    return (
        <div>
            <article className="bg-gray-900 rounded-xl px-10 py-4 flex flex-col justify-around items-center">
                <div className="flex flex-row justify-start items-center gap-10">
                    <TeamHero hasResult={false} />
                    <p className="font-bold">VS</p>
                    <TeamHero hasResult={false} />
                </div>
                <p className="text-center text-lg mt-5 flex flex-row items-center gap-4"> <FaCalendar /> 12/12/2021</p>
                <div className="w-full">
                    <button className="w-full bg-gray-800 hover:bg-gray-700 transition-all duration-500 hover:scale-105 mt-5 py-3 rounded-xl" onClick={() => handleShowPopUp()}>Apostar</button>
                </div>
            </article>

            {showPopUp &&
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <BetPopUp handleShowPopUp={handleShowPopUp} team1={"Barcelona"} team2={"Real Madrid"} />
                </div>
            }
        </div>

    );
};
