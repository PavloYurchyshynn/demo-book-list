import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBookContainer from './components/AddBook/AddBookContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <img src="https://bridgeofbooksfoundation.org/wp-content/uploads/2018/07/books-bob-deca-slide.jpg" />
        <Routes>
          <Route path='/' element={<DashboardContainer />} />
          <Route path='/addbook' element={<AddBookContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
