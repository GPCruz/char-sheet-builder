import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Menu from './components/Menu';
import Erro from './pages/Erro';
import Home from './pages/Home';
import User from './pages/User';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path="*" element={<Erro />} />
                </Routes>
            </div>
        );
    }
}

export default App;
