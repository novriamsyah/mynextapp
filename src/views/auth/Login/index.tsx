import Link from "next/link";
import { useRouter } from "next/router";
import style from "./Login.module.scss";

const Login = () => {

    const {push} = useRouter();

    const handleRegister = () => {
        push('/product');
    }

    return (
        <div className={style.login}>
            <h1 className="text-3xl font-bold text-red-500">Login Page</h1>
            <button onClick={() => handleRegister()}>Login</button>
            <h4>Belum memiliki akun ? <Link href={'/auth/register'}>Register</Link></h4>
        </div>
    )

}

export default Login;