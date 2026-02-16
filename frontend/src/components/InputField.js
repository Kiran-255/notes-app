import React, { useState } from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
export default function InputField({label, name,type = "text", placeholder,value,onChange,required = false,}) {
 const [show, setShow] = useState(false)
  const isPassword = type === "password"

  const inputType = isPassword && show ? "text" : type
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
      )}
   <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      {isPassword && (
   <button
          type="button"
          onClick={() => setShow(!show)}
     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {show ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
      <EyeIcon className="h-5 w-5" />  )} </button>
      )}
    </div>
  )
}