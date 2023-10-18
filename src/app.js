import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="../case-studies.html" />
      </Routes>
    </div>
  );
};

export default App;
