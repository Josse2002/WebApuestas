import Header from "@/components/Header";
import { History } from "@/components/History";
export default function RootLayout({ children }) {
    return (
        <div className="mx-10 my-5">
            <Header />
            <main className="flex flex-col lg:flex-row items-start my-5 gap-10">
                {/* Historial */}
                <div className="lg:w-1/4 w-full">
                    <History />
                </div>
                <div className="lg:w-9/12 w-full">
                    {/* Principal */}
                    {children}
                </div>
            </main>
        </div>
    );
};
