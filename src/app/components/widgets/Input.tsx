import React from "react";

type IInput = {
  title: string;
  type: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
};

const Input = ({
  title,
  type = "text",
  placeholder,
  className,
  required,
}: IInput) => {
  return (
    <div className='bg-white border-b-[1px] lg:border-b-2 border-black/20 p-1 py-5'>
      <div className='relative '>
        <input
          type={type}
          name={title}
          required={required}
          autoComplete='off'
          className={`peer w-full h-7 placeholder-transparent left-1 focus:outline-none bg-transparent relative top-4 ${className}`}
          placeholder={placeholder}
        />
        <label
          htmlFor={title}
          className='absolute left-1 -top-2 text-gray-600 text-sm transition-all lg:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-2 peer-focus:-top-2 md:peer-focus:-top-2 peer-focus:text-gray-400 lg:peer-focus:text-sm peer-focus:text-xs'>
          {title}
        </label>
      </div>
    </div>
  );
};

export default Input;
