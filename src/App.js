import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignmentAdd from "./components/AssignmentAdd";
import AssignmentSearch from "./components/AssignmentSearch";
import AssignmentDelete from "./components/AssignmentDelete";
import AssignmentView from "./components/AssignmentView";
import AssignmentLogin from "./components/AssignmentLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AssignmentLogin />}></Route>
        <Route path="add" element={<AssignmentAdd />}></Route>
        <Route path="search" element={<AssignmentSearch />}></Route>
        <Route path="delete" element={<AssignmentDelete />}></Route>
        <Route path="view" element={<AssignmentView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
