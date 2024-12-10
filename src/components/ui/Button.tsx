import { ReactElement } from "react";

interface ButtonInterface {
    title: string;
    size: "lg" | "sm" | "md";
    startIcon?: ReactElement;
    variant: "primary" | "secondary";
    onClick?:()=>void
    fullWidth?:boolean
}

const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl font-light flex items-center",
    "md": "px-4 py-2 text-md rounded-md font-light flex items-center",
    "sm": "px-2 py-1 text-sm rounded-sm",
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600",
}

export function Button(props: ButtonInterface) {
    
    return <button onClick={props.onClick} className={sizeStyles[props.size] + " " + variantStyles[props.variant]+ `${props.fullWidth ? " w-full flex justify-center items-center" : ""}` }>
        <div className="flex items-center">
            <span className="text-xs pr-2">
                {props.startIcon}
            </span>
            <div className="pl-2 pr-2">
                {props.title}
            </div>
        </div>
    </button>
}