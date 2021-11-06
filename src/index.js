import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product, Products, Operations, Present } from './components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterProvider } from './store/Counter.sotore';

const Login = () => <div>Login Page</div>;
const NotFound = () => <div>...Not Found</div>;
const Home = () => (
	<>
		<h1>HOME</h1>
		<Present />
		<Operations />
	</>
);

ReactDOM.render(
	<React.StrictMode>
		<CounterProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route path='' element={<Home />} />
						<Route path='products' element={<Products />} />
						<Route path='products/:id' element={<Product />} />
					</Route>
					<Route path='/login' element={<Login />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</CounterProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
