import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class All extends Component {
    constructor(){
        super();
        this.state={
            nodedata:[],
        }
    }
    componentDidMount(){
        fetch("https://cnodejs.org/api/v1/topics?tab=job").then(res=>{
            res.json().then((resdata)=>{
                this.setState({
                    nodedata:resdata.data
                })
            })
        })
    }
    handle=(e)=>{
        fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+e.target.value).then(res=>{
            res.json().then((resdata)=>{
                this.setState({
                    nodedata:resdata.data
                })
            })
        })
    }
    render() {
        var curpath=this.props.match.url;
        var nodedata1=this.state.nodedata;
        if(nodedata1.length!==0){
            return <ul className="global">
                    {
                        nodedata1.map((item,idx)=>{
                            var path=curpath+"/topic/"+item.id;
                            return <li className="center"><img className="author" src={item.author.avatar_url}/><span className="detail">{item.reply_count}/{item.visit_count}</span><span className="setop">置顶</span><Link className="titlecontent" to={path}>{item.title}</Link><span class="time">8分钟前</span></li>
                        })
                    }
                    <button className="btn" onClick={this.handle} value="1">1</button><button className="btn" onClick={this.handle} value="2">2</button><button className="btn" onClick={this.handle} value="3">3</button><button className="btn" onClick={this.handle} value="4">4</button><button className="btn" onClick={this.handle} value="5">5</button><button className="btn" onClick={this.handle} value="6">6</button><button className="btn" onClick={this.handle} value="7">7</button><button className="btn" onClick={this.handle} value="8">8</button><button className="btn" onClick={this.handle} value="9">9</button><button className="btn" onClick={this.handle} value="10">10</button>
                </ul>
        }else{
            return <ul></ul>;
        }
    }
}
