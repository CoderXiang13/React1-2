import React from 'react'

import {BrowserRouter as Router, Route} from  'react-router-dom'

import Test1 from '../components/Test1'
import Test2 from '../components/Test2'
export default class Search extends React.Component{
  constructor(props) {
    super(props);
    console.log(props);
  }
  jump() {
    this.props.history.push('/home?id=123', '我是参数')
  }
  render() {
    return (
      <div className='search'>
        <h1>我是SEARCH</h1>
        <Router>
          <Route exact name='root' path='/search/' component={Test1}/>
          <Route exact name='test1' path='/search/test1' component={Test1}/>
          <Route exact name='test2' path='/search/test2' component={Test2}/>
        </Router>
        <button onClick={this.jump.bind(this)}>返回至Home组件</button>
      </div>
    )
  }
}