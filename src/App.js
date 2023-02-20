

// export default App;
import React, { Component } from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Offer from './component/Offer';
import Groceries from './component/Groceries';
import About from './component/About';
import './App.css';
import Footer from './component/Footer';


class App extends Component {
render() {
	return (
	
		<div className="App">
<BrowserRouter>
		<Routes>
    
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/Offer' element={< Offer />}></Route>
				<Route exact path='/Groceries' element={< Groceries />}></Route>
				<Route exact path='/About' element={< About />}></Route>
				<Route exact path='/Footer' element={< Footer/>}></Route>
		</Routes>
    </BrowserRouter>
		</div>

);
}
}

export default App;

