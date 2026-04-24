

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home/Home.jsx'
import { PageNotFound } from '../PageNotFound/PageNotFound.jsx'
import { Link } from 'react-router-dom';
import { UserForm } from '../Form/UserForm.jsx'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <nav style={{ width: '350px', backgroundColor: 'lightgray', margin: '0 auto', padding: '20px 0px', }}>
                <Link to='/home'>Home</Link>
                <Link style={{padding: '0px 40px'}} to='/user-form'>Form</Link>
                <Link to='/not-found'>Page Not Found!</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/user-form' element={<UserForm />} />
                <Route path='/not-found' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}