import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product, Products, Operations, Present } from './components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterProvider } from './store/Counter.sotore';
import { ToastProvider, useToast } from './store/Toast.store';

const Login = () => <div>Login Page</div>;
const NotFound = () => <div>...Not Found</div>;
const Home = () => {
	const { createToast } = useToast();
	return (
		<>
			<h1>HOME</h1>
			<button onClick={() => createToast('this is sample toast')}>create a new Toast</button>
			<Present>
				<div>This is a children props</div>
			</Present>
			<Operations />
		</>
	);
};
/*
  toast creation: 
  {
  content,
  id,
  type: waring | error | success | information 
  }
  close button => on click => immediately close the toast 
  after 3000 ms will be closed the toast
*/
ReactDOM.render(
	<React.StrictMode>
		<ToastProvider>
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
		</ToastProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
