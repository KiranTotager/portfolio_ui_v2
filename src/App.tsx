import { lazy, Suspense } from 'react'
import { Provider } from "@/presentation/Components/ui/provider"


import './App.css'
import { Route, Routes } from 'react-router-dom'
import SpinnerComponent from './presentation/Components/SpinnerComponent'
import MainLayout from './presentation/Layouts/MainLayout'
const HomePage = lazy(() => import("./presentation/Pages/Home"))
const About = lazy(() => import("./presentation/Pages/About"))
const Projects = lazy(() => import("./presentation/Pages/Projects"))
const Skills = lazy(() => import("./presentation/Pages/Skills"))
const ContactMe = lazy(() => import("./presentation/Pages/ContactMe"))
const HireMe = lazy(() => import("./presentation/Pages/HireMe"))
function App() {

  return (
    <>
      <Provider disableTransitionOnChange>
        <Suspense fallback={<SpinnerComponent />}>
          <Routes>
            <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
            <Route path='/about' element={<MainLayout><About /></MainLayout>} />
            <Route path='/projects' element={<MainLayout><Projects /></MainLayout>} />
            <Route path='/skills' element={<MainLayout><Skills /></MainLayout>} />
            <Route path='/contact-me' element={<MainLayout><ContactMe /></MainLayout>} />
            <Route path='/hire-me' element={<MainLayout><HireMe /></MainLayout>} />

          </Routes>
        </Suspense>
      </Provider>
    </>
  )
}

export default App
