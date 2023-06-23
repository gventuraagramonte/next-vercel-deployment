
import { MainLayout } from '@/components/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
    return (
        <MainLayout>
            <h1 className="title">Contact Page</h1>
            <h1 className={'title'}>
                Ir a <Link href='/'>Home</Link>
            </h1>
            <p className={'description'}>
                Get started by editing&nbsp;
                <code className={'code'}>pages/contact.tsx</code>
            </p>
        </MainLayout>
    )
}