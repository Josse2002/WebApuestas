import { TeamHero } from "./TeamHero";
export function History() {
    return (
        <div className="bg-gray-900 py-5 rounded-lg">
            <h1 className="text-xl font-medium my-4 text-center">Historial de apuestas</h1>
            <article className="">
                <div className="bg-gradient-to-r from-gray-700 to-slate-800 bg-gray-800 flex flex-row items-center justify-evenly p-2">
                    <TeamHero />
                    <p className="font-bold">VS</p>
                    <TeamHero isReversed={true} />
                </div>
            </article>

            <article className="">
                <div className="bg-gradient-to-r from-green-500 from-0% via-gray-800 via-55% to-gray-800 to-40% flex flex-row items-center justify-evenly p-2">
                    <TeamHero />
                    <p className="font-bold">VS</p>
                    <TeamHero isReversed={true} />
                </div>
            </article>

            <article className="">
                <div className="bg-gradient-to-r from-green-500 to-gray-800 flex flex-row items-center justify-evenly p-2">
                    <TeamHero />
                    <p className="font-bold">VS</p>
                    <TeamHero isReversed={true} />
                </div>
            </article>
        </div>
    );
};
