import { FaAngleDown } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center my-5">
            {/* Logo */}
            <div>
                <h1 className="text-2xl">BetApp</h1>
            </div>
            {/* Navigation */}
            <nav className="flex flex-row items-center gap-5">
                <a href="#">Mis apuestas</a>
                <a href="#">Partidos</a>

                <div className="bg-gray-900 py-2 px-10 gap-2 rounded-lg flex flex-row items-center">
                    <RiMoneyDollarCircleFill size={25} />
                    100
                </div>

                <div className="bg-gray-900 px-4 py-2 rounded-lg flex flex-row items-center gap-3 cursor-pointer">
                    <p>Josse Castillo</p>
                    <FaAngleDown />
                </div>

            </nav>
        </header>
    );
};
