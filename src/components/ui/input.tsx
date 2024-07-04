import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, type, ...props }, ref) => {
    return (
        <div className="max-w-sm gap-1.5 w-full">
            <Label htmlFor={id}>{label}</Label>
                <input
                    type={type}
                    className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className
                    )}
                    ref={ref}
                    {...props}
                />
        </div>
    
    )
  }
)
Input.displayName = "Input"

export { Input }
