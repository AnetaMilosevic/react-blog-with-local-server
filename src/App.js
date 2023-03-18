import { useEffect, useState } from "react";
import "./App.css";
import { Header, Main } from "./components";
import { getBlogPosts } from "./services";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  // componentDidMount
  useEffect(() => {
    getBlogPosts().then((blogPosts) => setBlogPosts(blogPosts));
  }, []);

  // componentWillDismount
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <Container maxWidth="lg">
        <Main blogPosts={blogPosts} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
