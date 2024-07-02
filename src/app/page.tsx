import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return <main className="bg-white p-7 rounded-md w-[20vw]">
        <Image src="/logo-tarefa.png" alt="Logo da Tarefa" width={120} height={120} className="block m-auto" />
        <h1 className="text-center text-gray-800 text-2xl font-bold">JOJO'S RPG</h1>
        <div className="flex items-center justify-center gap-5 mt-6">
            <Link href='register' className="gray-button">REGISTRAR</Link>
            <Link href='login' className="gray-button">LOGIN</Link>
        </div>
    </main>
}
