import Header from "./components/header/header.tsx";
import { GlobalStyle } from "./theme/globalstyle.js";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <h1>Home</h1>
    </>
  );
}

export default App;
