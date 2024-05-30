import { FaTimes } from "react-icons/fa";

export function BetPopUp({ team1, team2, onClose }) {
	const handleInputChange = (event) => {
		const value = event.target.value;
		if (value.length > 2) {
			event.target.value = value.slice(0, 2);
		}
	}

	return (
		<div className="bg-slate-900 p-10 rounded-xl shadow-xl w-full mx-auto">
			<p className="text-center text-lg">Predice el resultado del partido</p>

			<div className="">
				<div className="flex flex-row justify-around items-center mt-5">
					<div className="flex flex-col justify-center items-center">
						<img className="w-14 h-14 object-cover" src="https://seth.usonsonate.edu.sv/img/universidad.png" alt="" />
						<p className="font-bold">{team1}</p>
						<div className="bg-slate-700 mt-5 h-14 w-14 border-4 rounded-xl border-slate-500 flex items-center justify-center">
							<input type="number" onChange={handleInputChange} className="text-center font-bold text-[25px] bg-transparent text-white w-full h-full outline-none appearance-none" />
						</div>
					</div>
					<h2 className="font-bold">VS</h2>
					<div className="flex flex-col justify-center items-center">
						<img className="w-14 h-14 object-cover" src="https://seth.usonsonate.edu.sv/img/universidad.png" alt="" />
						<p className="font-bold">{team2}</p>
						<div className="bg-slate-700 mt-5 h-14 w-14 border-4 rounded-xl border-slate-500 flex items-center justify-center">
							<input type="number" onChange={handleInputChange} className="text-center font-bold text-[25px] bg-transparent text-white w-full h-full outline-none appearance-none" />
						</div>
					</div>
				</div>

				<div className="flex flex-row w-full mt-5">
					<button className="bg-slate-700 w-full py-3 hover:bg-slate-600 transition-colors duration-200 rounded-xl">Apostar</button>
				</div>
			</div>

			{/* close popup */}
			<div className="absolute top-2 right-2">
				<button onClick={onClose}><FaTimes size={20} /></button>
			</div>

		</div>
	);
};
