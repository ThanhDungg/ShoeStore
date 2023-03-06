import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './pages/Home';
import QuanLiDanhMuc from './pages/Quanlidanhmuc';
import Quanlinhanhieu from './pages/Quanlinhanhieu';
import Quanlisanpham from './pages/Quanlisanpham';
import Login from './pages/Login';
import Quanlidonhang from './pages/Quanlidonhang';

import { publicRoutes, privateRoutes } from './routes'
import DefaultLayout from './components/Layout/DefaultLayout';



function App() {
  return (
    // <Routes>
    //     {/* {localStorage.getItem('login') ? <Route path='/' element={<Home />} /> : <Route path='/login' element={<Login />} />} */}
    //     <Route path='/' element={<Home />} />
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/quanlidanhmuc' element={<QuanLiDanhMuc />} />
    //     <Route path='/quanlinhanhieu' element={<Quanlinhanhieu />} />
    //     <Route path='/quanlisanpham' element={<Quanlisanpham />} />
    //     <Route path='/quanlidonhang' element={<Quanlidonhang />} />
    //     <Route path='*' />
    // </Routes>
    
    <BrowserRouter>
        <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.Layout) {
                                Layout = route.Layout;
                            } else if (route.Layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </BrowserRouter>
  );
}

export default App;
