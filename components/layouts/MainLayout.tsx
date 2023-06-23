import React, { FC } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { NavBar } from '../NavBar'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Giorgio</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className={`${styles.main} ${inter.className}`}>
                {children}
            </main>
        </div>
    )
}
