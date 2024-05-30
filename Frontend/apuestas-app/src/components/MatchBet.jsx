"use client"

import { useState, useEffect } from "react";
import { TeamHero } from "./TeamHero";
import { FaCalendar } from "react-icons/fa6";
import { BetPopUp } from "./BetPopUp";
import { getAllEquipoLocal } from "@/services/equipolocal.service";
import { getAllEquipoVisitante } from "@/services/equipovisitante.service";

export function MatchBet({ partido }) {

    const [equipoLocal, setEquipoLocal] = useState();
    const [equipoVisitante, setEquipoVisitante] = useState();
    const [dateMatch, setDateMatch] = useState();

    useEffect(() => {
        async function getEquipos() {
            const equipoLocalFetched = await getAllEquipoLocal();
            const equipoVisitanteFetched = await getAllEquipoVisitante();

            equipoLocalFetched.data.map((equipo) => {
                if (equipo.idEquipoLocal === partido.idEquipoLocal) {
                    setEquipoLocal({
                        nombre: equipo.nombreEquipoLocal,
                        representante: equipo.representanteEquipoLocal,
                        fechaFundacion: equipo.fechaFundacionLocal,
                    });
                }
            });

            equipoVisitanteFetched.data.map((equipo) => {
                if (equipo.idEquipoVisitante === partido.idEquipoVisitante) {
                    setEquipoVisitante({
                        nombre: equipo.nombreEquipoVisitante,
                        representante: equipo.representanteEquipoVisitante,
                        fechaFundacion: equipo.fechaFundacionVisitante,

                    });
                }
            });
        }

        function parseDate() {
            const fechaString = partido.fechaPartido;
            const fecha = new Date(fechaString);

            let createDate = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
            setDateMatch(createDate);
        }

        getEquipos();
        parseDate();
    }, []);

    const [showPopUp, setShowPopUp] = useState(false);

    const handleShowPopUp = () => {
        setShowPopUp(!showPopUp);
    }

    const handleClosePopUp = () => {
        setShowPopUp(false);
    }

    return (
        <div>
            <article className="bg-gray-900 rounded-xl px-10 py-4 flex flex-col justify-around items-center">
                <div className="flex flex-row justify-start items-center gap-10">
                    <TeamHero hasResult={false} equipo={equipoLocal} />
                    <p className="font-bold">VS</p>
                    <TeamHero hasResult={false} equipo={equipoVisitante} />
                </div>
                <p className="text-center text-lg mt-5 flex flex-row items-center gap-4"> <FaCalendar /> {dateMatch}</p>
                <div className="w-full">
                    <button className="w-full bg-gray-800 hover:bg-gray-700 transition-all duration-500 hover:scale-105 mt-5 py-3 rounded-xl" onClick={() => handleShowPopUp()}>Apostar</button>
                </div>
            </article>

            {showPopUp &&
                <div className="fixed w-[80%] md:w-[50%] lg:w-[30%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <BetPopUp onClose={handleClosePopUp} handleShowPopUp={handleShowPopUp} team1={equipoLocal.nombre} team2={equipoVisitante.nombre} />
                </div>
            }
        </div>

    );
};
