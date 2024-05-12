import Input from "./Input";
import Link from "next/link";

export function RegisterComponent() {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-2xl z-10">BetApp login</h1>
            <form className="flex flex-col items-center my-5 gap-5 z-10">
                <Input placeholder={"Nombre"} type={"text"} />
                <Input placeholder={"Correo"} type={"text"} />
                <Input placeholder={"Contraseña"} type={"password"} />
                <p className="gap-2 flex flex-row">¿Ya tienes una cuenta?
                    <Link href="/" className="text-blue-700">
                        Registrarse
                    </Link>
                </p>
                <button className="bg-gray-900 px-5 py-2 rounded-lg " type="submit">Iniciar sesión</button>
            </form>

            <div className="absolute z-0 opacity-15 bottom-0">
                <img src="/image/background.png" alt="" />
            </div>
        </div>
    );
};
