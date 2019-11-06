import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            content:''
        }
    }
    componentDidMount(){
        var id=window.location.href.split('/');
        var detailid=id[id.length-1];
        fetch("https://cnodejs.org/api/v1/topic/"+detailid).then(res=>{
            res.json().then((iddata)=>{
                this.setState({
                    content:iddata.data.content
                })
            })
        })
    }
    render() {
        return (
            <div class="contentstylew" dangerouslySetInnerHTML = {{ __html:this.state.content }}></div>
        )
    }
}