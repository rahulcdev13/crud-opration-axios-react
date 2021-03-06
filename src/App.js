import './App.css';

import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Delete from './Components/Delete';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div> 
            <Routes>
              <Route exact path="/" element={<Create />} ></Route>
              <Route exact path="/read" element={<Read />} ></Route>
              <Route path="/delete" element={<Delete />} ></Route>
              <Route path="/update" element={<Update />} ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
