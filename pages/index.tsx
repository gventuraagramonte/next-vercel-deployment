
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="">Home Page</h1>
      <h1 className="">
        Ir a <Link href='/about'>About</Link>
      </h1>
      <p className="">
        Get started by editing&nbsp;
        <code className="">pages/index.tsx</code>
      </p>
    </MainLayout>
  )
}
