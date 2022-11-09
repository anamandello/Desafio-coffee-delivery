import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ListCartContextProvider } from "./contexts/ListCartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ListCartContextProvider>
          <Router/>
        </ListCartContextProvider>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
  )
}
