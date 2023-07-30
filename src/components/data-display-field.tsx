interface DisplayFieldProps {
    label?: string,
    value: number | undefined,
    precision: number,
    stackLabel?: boolean,
    title?: string,
    valClassnames?: string,
    valPrefix?: string,
    valSuffix?: string,
}

export function DataDisplayField(props: DisplayFieldProps) {
    return (<>
        <div title={props.title}
            className={`flex ${props.stackLabel ? 'flex-col gap-1' : 'flex-row gap-3'}`}
        >
            {
                props.label &&
                <div className="mx-3 min-w-[50%]">
                    {props.label}:
                </div>}
            <div
                className={`ring rounded-md p-2 px-3 m-1 grow text-right font-mono ${props.valClassnames}`}
            >
                {`${props.valPrefix ?? ''} ${props.value?.toFixed(props.precision)} ${props.valSuffix ?? ''}`}
            </div>
        </div>
    </>)
}