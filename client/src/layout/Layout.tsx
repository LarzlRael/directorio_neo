import { Suspense } from 'react'
import { Header } from './Header'
import { SearchFilter } from '../components/SearchFilter'
import { Loading } from '../components/widgets/loadings/Loading'

interface LayoutProps {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="mainPage">
        <Header />
        <SearchFilter />
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  )
}
