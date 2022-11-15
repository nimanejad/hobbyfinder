import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'

export default function Settings() {

  const [name,setName] = useState('_______')

  const handleClick = () => {
    setName("Hobbies")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>HobbyFinder</title>
        <link rel="icon" href="/hobbies-icon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>  
            Settings
        </h1>
        <h2> Welcome to the settings page, {name}!</h2>
        
        <div className={styles.grid}>
          {/* Change name */}
          <a className={styles.card}>
          <div onClick={handleClick}>
            <h2>Change Name</h2>
          </div>
          </a>
          
          {/* Back to home screen*/}
           <a className={styles.card}> 
            <div onClick={() => Router.back()}> 
              <h2>Home Screen</h2> 
            </div> 
           </a>
        </div>
      </main> 

      <footer className={styles.footer}>
        <a>
          HobbyFinder 2022
        </a>
      </footer>
    </div>
  )
}