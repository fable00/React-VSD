import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Dashboard } from './pages/Dashboard'
import { ThemeProvider } from "styled-components";
import dark from './styles/themes/dark';

export function App() {

  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Dashboard />
      </ThemeProvider>
    </>
  )
}
