import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from './components/Read';
import Update from './components/Update';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/Read" element={<Read />} />
        <Route exact path="/edit/:id" element={<Update />} />
        <Route exact path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
