import Header from "./components/header/header.tsx";
import List from "./components/list/list.tsx";
import Register from "./components/register/register.tsx";
import { GlobalStyle } from "./theme/globalstyle.js";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Register/>
      <List/>
    </>
  );
}

export default App;
