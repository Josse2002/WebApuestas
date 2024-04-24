export function TeamHero({ isReversed }) {
    return (
        <div className="flex flex-row items-center gap-5">
            {isReversed ? <h2 className="text-3xl font-bold">2</h2> : ""}
            <div className="flex flex-col items-center justify-center">
                <img className="h-10 w-10" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" alt="" />
                <p>PSG</p>
            </div>
            {!isReversed ? <h2 className="text-3xl font-bold">2</h2> : ""}
        </div>
    );
};
