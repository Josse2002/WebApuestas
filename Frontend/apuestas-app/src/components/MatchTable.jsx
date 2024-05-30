'use client'

import { MatchBet } from "./MatchBet";
import { useEffect, useState } from "react";
import { getAllPartidos } from "@/services/partidos.service";

export function MatchTable() {
    const [partidos, setPartidos] = useState();

    useEffect(() => {
        async function fetchPartidos() {
            const partidos = await getAllPartidos();
            setPartidos(partidos.data);
        }

        fetchPartidos();
    }, []);


    return (
        <div>
            <h2 className="text-xl font-bold">Partidos proximos</h2>

            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
                {
                    partidos ? partidos.map((partido) => (
                        <MatchBet key={partido.id} partido={partido} />
                    )) : <p>No hay partidos</p>
                }
            </section>
        </div>
    );
};
