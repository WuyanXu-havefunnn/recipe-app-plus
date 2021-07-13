import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
  <>
   <Header />
   <Sidebar /> 
  </>
  )
}
