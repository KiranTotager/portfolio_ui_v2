import { lazy, Suspense } from 'react'


import './App.css'
import { Route, Routes } from 'react-router-dom'
import SpinnerComponent from './Components/SpinnerComponent'
import MainLayout from './Layouts/MainLayout'
const HomePage = lazy(() => import("./Pages/Home"))
const About=lazy(()=>import("./Pages/About"))
const Projects=lazy(()=>import("./Pages/Projects"))
const Skills=lazy(()=>import("./Pages/Skills"))
const ContactMe=lazy(()=>import("./Pages/ContactMe"))
const HireMe=lazy(()=>import("./Pages/HireMe"))
function App() {

  return (
    <>
      <Suspense fallback={<SpinnerComponent/>}>
        <Routes>
          <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
          <Route path='/about' element={<MainLayout><About/></MainLayout>}/>
          <Route path='/projects' element={<MainLayout><Projects/></MainLayout>}/>
          <Route path='/skills' element={<MainLayout><Skills/></MainLayout>}/>
          <Route path='/contact-me' element={<MainLayout><ContactMe/></MainLayout>}/>
          <Route path='/hire-me' element={<MainLayout><HireMe/></MainLayout>}/>

        </Routes>
      </Suspense>
    </>
  )
}

export default App
