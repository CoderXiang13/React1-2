import React from 'react';
import {BrowserRouter as Router, Route, Link} from  'react-router-dom'

import Home from './views/Home'
import Search from './views/Search'


export default function Container(props) {
  return (
   <div className="container">
     {/*<Home left={<div>left</div>} right={<div>right</div>}> */}
       {/*匿名插槽*/}
       {/*<span>123</span>
       <div>345</div>
       <div>456</div>
       <div>567</div>
       <div>789</div>*/}
     {/*</Home>*/}
     <Router>
       {/*<Link to='/home'>to home</Link>*/}
       {/*<Link to='/search'>to search</Link>*/}
       <Route exact name="root" path='/' component={Home}/>
       <Route name="home" path='/home' component={Home}/>
       <Route name="search" path='/search' component={Search}/>
     </Router>
   </div>
  );
}
