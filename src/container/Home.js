import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Detail from './Detail';
import Share from './Share';
import Question from './Question';
import Job from './job';

export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        
        if(window.location.href.indexOf('topic')!==-1){
            return <div>
                <Route path='/home/topic' component={Detail}/>
                <Route path='/home/all/topic' component={Detail}/>
                <Route path='/home/good/topic' component={Detail}/>
                <Route path='/home/share/topic' component={Detail}/>
                <Route path='/home/question/topic' component={Detail}/>
                <Route path='/home/job/topic' component={Detail}/>
            </div>
        }else{
            return (
                <div className='contentheader'>
                    <div>
                        <Link to={url+'/all'}>全部</Link>
                        &nbsp;&nbsp;
                        <Link to={url+'/good'}>精华</Link>
                        &nbsp;&nbsp;
                        <Link to={url+'/share'}>分享</Link>
                        &nbsp;&nbsp;
                        <Link to={url+'/question'}>问答</Link>
                        &nbsp;&nbsp;
                        <Link to={url+'/job'}>招聘</Link>
                    </div>
                    <div>
                        <Route exact path={`${url}`} component={All} />
                        <Route path={`${url}/all`} component={All} />
                        <Route path={`${url}/good`} component={Good} />
                        <Route path={`${url}/share`} component={Share} />
                        <Route path={`${url}/question`} component={Question} />
                        <Route path={`${url}/job`} component={Job} />
                    </div>
                </div>
            )
        }
    }
}
