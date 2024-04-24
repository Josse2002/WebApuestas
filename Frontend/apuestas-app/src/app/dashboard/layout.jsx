import Header from "@/components/Header";
import { History } from "@/components/History";
export default function RootLayout({ children }) {
    return (
        <div className="mx-10 my-5">
            <Header />
            <main className="flex flex-row items-start my-5">
                {/* Historial */}
                <div className="w-1/4">
                    <History />
                </div>
                {/* Principal */}
                {children}
            </main>
        </div>
    );
};
