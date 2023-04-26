import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyles";
import Home from "./Pages/Home";
import Tweets from "./Pages/Tweets";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
