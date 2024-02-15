import style from "@/styles/Error.module.scss"

const Error404Page = () => {
    return (
        <div className={style.error}>
            <img src="/404.png" alt="logo 404" className={style.error__image} />
        <h1 className={style.error__title}>404 - Page Not Found</h1>
        </div>
    )
}

export default Error404Page;