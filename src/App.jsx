import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage, HeroesPage, HeroPage, NotFoundPage } from "./pages"
import { NavBar } from './components'
import "bootstrap/dist/css/bootstrap.min.css";
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
              <Route path=":id" element={<HeroPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} /> 
          </Route>
        </Routes>
      </HeroesProvider>
    </>
  )
}

export default App
