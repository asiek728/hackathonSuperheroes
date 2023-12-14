import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage, HeroesPage } from "./pages"
import { NavBar } from './components'
import { HeroesProvider } from './contexts'

function App() {
  return (
    <>
      <HeroesProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/heroes">
              <Route index element={<HeroesPage />} />
              {/* <Route path=":id" element={<HeroPage />} /> */}
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} />  */}
          </Route>
        </Routes>
      </HeroesProvider>
    </>
  )
}

export default App
