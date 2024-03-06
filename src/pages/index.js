import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Login from '../../components/Login/Login'
import store from './app/store'
import { Provider } from 'react-redux'
import HomePage from '../../components/HomePage/HomePage'
import OpenHome from '../../components/OpenHome'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <OpenHome />
    </>
  )
}
