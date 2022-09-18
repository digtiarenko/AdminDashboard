import { Home } from 'pages/homePage/Home';
import { ListPage } from 'pages/ListPage/ListPage';
import { LoginPage } from 'pages/loginPage/LoginPage';
import { NewPage } from 'pages/newPage/NewPage';
import { SinglePage } from 'pages/singlePage/SinglePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userInputs, productInputs } from './utils/formSource.js';
import './index.css';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from 'context/darkModeReducer.js';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="users">
              <Route index element={<ListPage />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<NewPage title="Add New User" inputs={userInputs} />}
              ></Route>
            </Route>

            <Route path="products">
              <Route index element={<ListPage />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <NewPage title="Add New Product" inputs={productInputs} />
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
