import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Button,createTheme, ThemeProvider} from "@mui/material";

import styles from '../styles/Home.module.css'

export default function Home() {

    const theme = createTheme({
        direction:"rtl",
        textAlign: 'right',
        typography: {
            fontFamily: ['Vazir']
        },});

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <Head>
                    <title>cafecoding</title>
                </Head>
                <main className={styles.main}>
                    <div className='row'>
                        <Link href={"/api/create_user"}>
                            Create New User
                        </Link>
                        <span className={styles.ml5}></span>
                        <Link href={"/api/users"}>
                            All Users
                        </Link>
                        <br/>
                        <br/>
                        <br/>
                        <div>
                            <Link href={"/express"}>
                                <Button style={{fontWeight: 300}} variant="contained">
                                    آدرس مستقیم از اکسپرس
                                </Button>
                            </Link>
                        </div>

                    </div>
                </main>
            </div>
        </ThemeProvider>
    )
}
