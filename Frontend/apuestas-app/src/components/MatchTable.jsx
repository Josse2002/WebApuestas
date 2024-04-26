import { MatchBet } from "./MatchBet";
export function MatchTable() {
    return (
        <div>
            <h2 className="text-xl font-bold">Partidos proximos</h2>

            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
                <MatchBet />
                <MatchBet />
                <MatchBet />
                <MatchBet />
                <MatchBet />
                <MatchBet />
            </section>
        </div>
    );
};
