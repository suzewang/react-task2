import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <span className="username">用户名</span><input type="text" /><br/>
                <span className="pwd">密码</span><input type="password" /><br/>
                <button className="login" onClick={()=>{
                    var change=window.location.href.replace("login","home");
                    window.location.href=change;
                }}>登录</button>
            </div>
        )
    }
}
