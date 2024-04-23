import { FaAngleDown } from "react-icons/fa";
export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center mx-10 my-5">
            {/* Logo */}
            <div>
                <h1 className="text-2xl">BetApp</h1>
            </div>
            {/* Navigation */}
            <nav className="flex flex-row items-center gap-5">
                <a href="#">Mis apuestas</a>
                <a href="#">Partidos</a>
                <div className="bg-gray-900 px-4 py-2 rounded-lg flex flex-row items-center gap-3 cursor-pointer">
                    <p>Josse Castillo</p>
                    <FaAngleDown />
                </div>
            </nav>
        </header>
    );
};
