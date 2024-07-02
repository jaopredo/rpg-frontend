'use client'
import ErrorHandler from "@/errors"
import { useState, useEffect } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Errors() {
    const [ errors, setErrors ] = useState<string[]>([])

    const [ opacity, setOpacity ] = useState<number>(0)
    const [ bottom, setBottom ] = useState<number>(10)

    useEffect(() => {
        document.addEventListener('errors-api', function() {
            const errorsStorage = ErrorHandler.get()
            setErrors(errorsStorage)
            setOpacity(1)
            setBottom(40)

            setTimeout(() => {
                setOpacity(0)
                setBottom(10)
            }, 6000)
        })
    }, [])

    return <motion.div
        animate={{
            opacity,
            bottom
        }}
        className="flex justify-end fixed left-1/2 -translate-x-1/2 w-fit max-w-[20vw] bg-rose-500 rounded-md"
    >
        <div className="flex items-center justify-center text-white p-3 text-2xl">
            <FaExclamationTriangle/>
        </div>
        <div className="bg-white rounded-r-md p-3 w-5/6">
            <h2 className="text-rose-500 text-lg font-bold">Erros</h2>
            <ul>
                {errors.map(msg => <li className="font-bold text-sm">{msg}</li>)}
            </ul>
        </div>
    </motion.div>
}
