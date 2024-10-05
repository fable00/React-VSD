import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Dashboard } from './pages/Dashboard'
import { ThemeProvider } from "styled-components";
import dark from './styles/themes/dark';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

export function App() {

  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
