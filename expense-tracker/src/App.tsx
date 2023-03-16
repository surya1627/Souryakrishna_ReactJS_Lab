import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ShowData from './component/showList';
import ExpenseTracker from './component/Expense-tracker';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/add" element={<ExpenseTracker onTrue={undefined} onClose={undefined}/>}
        />
        <Route path="/" element={<ShowData/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
