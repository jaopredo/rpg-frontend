'use client'
import ErrorHandler from "@/errors"
import { useState, useEffect } from "react"

export default function Errors() {
    const [ errors, setErrors ] = useState<string[]>([])

    useEffect(() => {
        document.addEventListener('errors-api', function() {
            const errorsStorage = ErrorHandler.get()
            setErrors(errorsStorage)

            setTimeout(() => {
                setErrors([])
            }, 7000)
        })
    }, [])

    return <>
        {errors}
    </>
}
