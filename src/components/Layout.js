import { NavLink, Outlet } from 'react-router-dom';



const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () =>{
    return (
        <>
        <div className='container'>
            <header>
                <nav className='headerNav'>
                    <NavLink to='/' className={setActive}>Home</NavLink>
                    <NavLink to='/login'className={setActive}>Login</NavLink>
                    <NavLink to='/registration'className={setActive}>Registration</NavLink>
                </nav>
            </header>
        </div>
        <Outlet/>
        <footer>Footer</footer>
        </>
    )
}

export {Layout}