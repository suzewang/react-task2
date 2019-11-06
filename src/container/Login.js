import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div>
                <span className="username">用户名</span><input type="text" /><br/>
                <span className="pwd">密码</span><input type="password" /><br/>
                <button className="login"><Link to='/home'>登录</Link></button>
            </div>
        )
    }
}
