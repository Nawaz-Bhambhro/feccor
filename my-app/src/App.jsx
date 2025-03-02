import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./Style/GlobalStyle";
import { Typography } from "./Style/Common/Typography";
import { Button } from "./Style/Common/Style";
import Home from "./Pages/Home";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <Home/>
    </>
    // <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    //   <GlobalStyle />
    //   <div style={{ textAlign: "center", marginTop: "50px" }}>
    //     <Typography variant="h1" align="center" margin="10px 0">
    //       Styled Components Typography
    //     </Typography>
    //     <Typography variant="h2" color="primary">
    //       Light & Dark Theme Support
    //     </Typography>
    //     <Typography variant="p">
    //       This is a paragraph styled with reusable typography.
    //     </Typography>
        
    //     <Button variant="primary" onClick={() => setIsDark(!isDark)}>
    //       Toggle Theme
    //     </Button>
    //   </div>
    // </ThemeProvider>
  );
}

export default App;
