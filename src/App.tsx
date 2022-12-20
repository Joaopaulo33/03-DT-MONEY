import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import reactLogo from './assets/react.svg'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello world</h1>
    </ThemeProvider>
  )
}

