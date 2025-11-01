import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SpinnerComponent from './Components/SpinnerComponent'
const HomePage = lazy(() => import("./Pages/Home"))
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<SpinnerComponent/>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
