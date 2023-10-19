import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-start justify-center gap-3.5 p-24">
      <Link href="/home">home</Link>
      <Link href="/home/profile">profile</Link>
      <Link href="/login">login</Link>
    </main>
  )
}
