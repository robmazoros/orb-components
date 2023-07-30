import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    title: string,

    onClick: () => void,

}
export function ButtonType1({ label, disabled, title, onClick, className }: ButtonProps) {

    return (<>
        <button

            onClick={onClick}
            title={title}
            disabled={disabled}
            className={`${className} rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-100 disabled:text-indigo-200 hover:ring-2`}
        >
            {label}
        </button>
    </>)
}
