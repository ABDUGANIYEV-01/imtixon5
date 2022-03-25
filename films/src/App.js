import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Movies from './views/Movies/Movies';
import Category from './views/Category/Category'
import Adminlayout from './layouts/AdminLayout';
import NoAuthLayout from './layouts/NoAuthLayout';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Adminlayout />}>
            <Route path='' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }></Route>

            <Route path='home' element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }></Route>
            <Route path='Movies' element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }></Route>
            <Route path='Category' element={
              <ProtectedRoute>
                <Category/>
              </ProtectedRoute>
            }></Route>
          </Route>
            
          <Route path='/auth' element={<NoAuthLayout />}>
            <Route path='' element={<Navigate to="/auth/login" replace={true} />} />
            <Route path='login' index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
