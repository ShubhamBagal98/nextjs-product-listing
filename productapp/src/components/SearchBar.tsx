"use client"

import { useEffect, useState } from "react"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {

  const [input, setInput] = useState(value)

  useEffect(() => {

    const timer = setTimeout(() => {
      onChange(input)
    }, 500)

    return () => clearTimeout(timer)

  }, [input])

  return (

    <input
      type="text"
      placeholder="Search products..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border p-2 rounded w-full"
    />

  )
}
