

// export default App;
import React, { Component } from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import './App.css';


class App extends Component {
render() {
	return (
	
		<div className="App">
<BrowserRouter>
		<Routes>
    
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/About' element={< About />}></Route>
				<Route exact path='/Contact' element={< Contact />}></Route>
		</Routes>
    </BrowserRouter>
		</div>

);
}
}

export default App;

