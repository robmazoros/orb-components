"use client"
import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react"

interface InputBaseProps {
    formName: string,
    label?: string,
    type: HTMLInputTypeAttribute,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    value: string | number | boolean | null | undefined,
    valClassnames?: string,
    stackLabel: boolean,
    title?: string,
}
export function InputBase(props: InputBaseProps) {
    const textJustification = props.type === 'number' ? 'text-right' : '';
    const checkboxWidth = props.type === 'checkbox' ? 'w-6 h-6' : '';
    return (<>
        <div className={`flex   ${props.stackLabel ? 'flex-col gap-1' : 'flex-row gap-3'}
        text-gray-700 
        
        `}>
            {
                props.label &&
                <label
                    htmlFor={props.formName}
                    className={'mx-3 dark:text-gray-100 min-w-[45%]'}
                >
                    {props.label}:
                </label>
            }

            <div className={`mx-1`}>
                <input
                    type={props.type}
                    className={`   ${textJustification} ${checkboxWidth} ${props.valClassnames ?? ''}                    
                    ring rounded-md p-2 px-3 m-1
                    w-full
                    
                    `}
                    name={props.formName}
                    id={props.formName}
                    title={props.title}
                    onChange={props.onChange}
                    value={typeof props.value === 'boolean' ? undefined : props.value ?? ''}
                    onBlur={props.onBlur}
                    step={1}
                    checked={props.type === 'checkbox' ? !!props.value ?? false : undefined}
                    autoComplete="off"
                />
            </div>
        </div>
    </>)
}

