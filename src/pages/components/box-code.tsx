import React, { ReactNode } from "react";

type BoxCode = {
    className?: string,
    children: ReactNode,
}

const BoxCode = ({
    className='',
    children,
}: BoxCode) => {
    return (
        <pre className={`${className} h-60 sm:h-[420px] w-full sm:w-1/2 lg:max-w-5xl rounded sm:rounded-sm md:rounded-md border border-solid border-white/50 relative p-2.5`}>
            {children}
        </pre>
    )
}

export default BoxCode;