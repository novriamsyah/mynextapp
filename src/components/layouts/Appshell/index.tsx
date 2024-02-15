import { Fragment } from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppshellProps = {
    children: React.ReactNode;
};

const disableNavbar = ['/auth/login', '/auth/register', '/404'];


const Appshell = (props:AppshellProps) => {
    const {children} = props
    const {pathname} = useRouter();


  return (
    <Fragment>
      <header>
        {!disableNavbar.includes(pathname) && <Navbar />}
      </header>
      <main>
        {children}
      </main>
    </Fragment>
  );
};

export default Appshell;
