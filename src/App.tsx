import theme from "assets/styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { ThemeProvider } from "styled-components";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
