import { TeamHero } from "./TeamHero";
export function History() {
    return (
        <div className="bg-gray-900 py-5 rounded-lg">
            <h1 className="text-xl font-medium my-4 text-center">Historial de apuestas</h1>

            <article className="flex flex-row items-center px-3 bg-gradient-to-r from-green-500 from-0% via-gray-800 via-25% to-gray-800 to-50%">
                <div className="w-11/12  flex flex-row items-center justify-evenly p-2">
                    <TeamHero hasResult={true} />
                    <p className="font-bold">VS</p>
                    <TeamHero isReversed={true} hasResult={true} />
                </div>
                <h2 className="text-xl font-bold">-30</h2>
            </article>

            <article className="flex flex-row items-center px-3 bg-gradient-to-r from-red-500 from-0% via-gray-800 via-25% to-gray-800 to-50%">
                <div className="w-11/12  flex flex-row items-center justify-evenly p-2">
                    <TeamHero hasResult={true} />
                    <p className="font-bold">VS</p>
                    <TeamHero isReversed={true} hasResult={true} />
                </div>
                <h2 className="text-xl font-bold">-30</h2>
            </article>

        </div>
    );
};
