import "./App.css";
import Search from "./components/SearchBook/Search";
import Results from "./components/ResultsCard/Results";
import FetchBooks from "./components/FetchBooks/Books";

function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      {/* <Results /> */}
      <FetchBooks />
    </div>
  );
}

export default App;
