import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GTA Schools</h1>
        <p>Information About Schools in Toronto</p>
        <div className="row w-100">
          <div className="col-4" />
          <input
            type="text"
            class="col-8"
            placeholder="Enter a name"
            aria-label="Enter school name"
            aria-describedby="School Name"
          />
          <div className="col-4" />
        </div>
      </header>
    </div>
  );
}

export default App;
