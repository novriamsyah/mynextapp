import Link from "next/link";

const RegisterPage = () => {

    return (
        <div>
            <h1 style={{color: "red", borderRadius:"5px", border:"1px solid black"}}>Register Page</h1>
            <h4>Sudah memiliki akun ? <Link href={'/auth/login'}>Login</Link></h4>
        </div>
    );

}

export default RegisterPage;