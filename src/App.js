import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { ApiSchoolsContextProvider } from "./Context/Schools";

function App() {
  return (
    <ApiSchoolsContextProvider>
      <div className="App">
        <header className="App-header">
          <div className="hero-image ">
            <div className="overlay d-flex flex-column align-items-center justify-content-center">
              <h1>GTA Schools</h1>
              <div className="typewriter">
                <p className="typewriter-text">
                  Information About Schools in Toronto
                </p>
              </div>
            </div>
          </div>

          <Home />

          <Footer />
        </header>
      </div>
    </ApiSchoolsContextProvider>
  );
}

export default App;
