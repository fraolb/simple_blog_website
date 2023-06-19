import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes path='/' element={<Home />} >
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
