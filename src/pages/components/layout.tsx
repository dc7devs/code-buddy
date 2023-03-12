import { ReactNode } from "react";

interface PropsLayout {
    children: ReactNode
}

const Layout = ({ children }: PropsLayout) => {
    return (
        <div className={"flex flex-col justify-center items-center w-full h-full"}>
            {children}
        </div>
    )
}


export default Layout;