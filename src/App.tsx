import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <section>
          <AppRoute />
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
