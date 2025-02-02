import { InputHTMLAttributes, useEffect, useState } from "react";

export function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }: {
    value: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
  } & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);
  
      return () => clearTimeout(timeout);
    }, [debounce, onChange, value]);
  
    return (
      <input className="mt-2 p-1"
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }