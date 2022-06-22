import React from 'react'
import { Suspense } from 'react'
import { Header } from './Header'
import { SearchFilter } from '../components/SearchFilter'
import { Loading } from '../components/widgets/loadings/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { increment } from '../store/slices/slices'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  /*   const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch() */
  return (
    <>
      <div className="mainPage">
        <Header />
        <SearchFilter />
      </div>
      {children}
      <Footer />
    </>
  )
}
