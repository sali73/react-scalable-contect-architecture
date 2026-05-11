import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

const Home = lazy(() => 
  import('../Home/Home.jsx').then(module => ({ default: module.Home }))
);

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <nav style={{ padding: '20px', background: '#eee' }}> 
                <Link to='/home'>Home</Link> 
            </nav>
            
            <Suspense fallback={<div>Loading Page...</div>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};