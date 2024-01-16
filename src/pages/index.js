import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Login from '../../components/Login/Login'
import store from './app/store'
import { Provider } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Login />
    </>
  )
}
