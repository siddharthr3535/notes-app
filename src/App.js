import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Note from "./pages/Note";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route element={<NotesPage />} path="/" />
            <Route element={<Note></Note>} path="/note/:id"></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
