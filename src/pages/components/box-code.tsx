type BoxCode = {
    className?: string,
    code: string,
    showLineNumbers: boolean
}

const BoxCode = ({ className='', code, showLineNumbers = false }: BoxCode) => {

    return (
        <pre className={`${className} h-[420px] w-full sm:w-1/2 lg:max-w-5xl  rounded sm:rounded-sm md:rounded-md border border-solid border-white/50`}>
            {/* {showLineNumbers && (
                <span className="absolute top-0 left-0 text-gray-400 text-sm px-4 py-2 select-none">
                    {highlightedCode.split("\n").map((_, index) => (
                        <span key={index}>{index + 1}</span>
                    ))}
                </span>
            )} */}
            <code
                className={`hljs`}
            ></code>
        </pre>
    )
}


export default BoxCode;