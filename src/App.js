import React, { Component } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />
                        </div>
                        <div className="sider">
                            <img src="http://b-ssl.duitang.com/uploads/blog/201308/08/20130808131501_LnLhw.jpeg"/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
