export function BetPopUp({ team1, team2, onClose }) {
	return (
		<div className="bg-slate-900 p-10 rounded-xl shadow-xl w-[300px]">
			¿Predice el resultado del partido <span className="font-bold">{team1} vs {team2}</span>?

			<div className="">
				<div className="flex flex-row justify-around items-center mt-5">
					<div className="bg-slate-700 p-5 border-4 rounded-xl border-slate-500">
						<img className="w-14 h-14 object-cover" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" alt="" />
					</div>
					<h2 className="font-bold">VS</h2>
					<div className="bg-slate-700 p-5 border-4 rounded-xl border-slate-500">
						<img className="w-14 h-14 object-cover" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" alt="" />
					</div>
				</div>
			</div>

		</div>
	);
};
