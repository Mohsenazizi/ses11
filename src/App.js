import { NavLink, Outlet } from 'react-router-dom';

const styledLink = ({ isActive }) => ({
	backgroundColor: isActive ? 'white' : 'transparent',
	color: isActive ? 'black' : 'white',
	margin: '0 20px',
});

function App() {
	return (
		<div className='App'>
			<nav
				style={{
					backgroundColor: 'black',
					color: 'white',
					padding: '30px',
				}}
			>
				<NavLink to='/' style={styledLink}>
					Home
				</NavLink>
				<NavLink to='/products' style={styledLink}>
					Product
				</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}

export default App;
