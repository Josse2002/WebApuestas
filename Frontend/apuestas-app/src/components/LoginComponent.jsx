import Input from "./Input";
export function LoginComponent() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">BetApp login</h1>
            <form className="flex flex-col items-center my-5 gap-10">
                <Input placeholder={"Usuario"} type={"text"} />
                <Input placeholder={"Contraseña"} type={"password"} />
                <button className="bg-gray-900 px-5 py-2 rounded-lg" type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};
