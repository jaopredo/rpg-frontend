'use client'
// import { useEffect } from "react"
import { useAPIContext } from "@/contexts/api"

export default function Home() {
    const { playerService } = useAPIContext()

    async function handleTests() {
        const data = await playerService.test()
        // console.log(data)
    }

    return <main className="flex flex-col">
        <button onClick={handleTests}>TESTE</button>
    </main>
}
