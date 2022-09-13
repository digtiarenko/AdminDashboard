import { Home } from 'pages/homePage/Home';
import { ListPage } from 'pages/ListPage/ListPage';
import { LoginPage } from 'pages/loginPage/LoginPage';
import { NewPage } from 'pages/newPage/NewPage';
import { SinglePage } from 'pages/singlePage/SinglePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="users">
              <Route index element={<ListPage />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage />}></Route>
            </Route>

            <Route path="products">
              <Route index element={<ListPage />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route path="new" element={<NewPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
