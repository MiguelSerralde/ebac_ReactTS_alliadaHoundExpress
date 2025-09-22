import Header from "./components/header/header.tsx";
import Register from "./components/register/register.tsx";
import { GlobalStyle } from "./theme/globalstyle.js";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Register/>      
    </>
  );
}

export default App;
