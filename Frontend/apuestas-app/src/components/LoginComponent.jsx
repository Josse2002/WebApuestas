import Input from "./Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
export function LoginComponent() {

    // Instance of the Router object
    const router = useRouter();



    function handleSubmit(event) {
        event.preventDefault();

        //TODO: Here we should add the logic to validate the user and password
        router.push("/dashboard");
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">BetApp login</h1>
            <form className="flex flex-col items-center my-5 gap-5">
                <Input placeholder={"Usuario"} type={"text"} />
                <Input placeholder={"Contraseña"} type={"password"} />
                <p className="gap-2 flex flex-row">¿No tienes una aún?
                    <Link href="/register" className="text-blue-700">
                        Crea una
                    </Link>
                </p>
                <Link className="bg-gray-900 px-5 py-2 rounded-lg " type="submit">Iniciar sesión</Link>
            </form>
        </div>
    );
};
