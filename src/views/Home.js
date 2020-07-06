import React from 'react'
import Nav from '../components/Nav'
export default class Home extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.location.state);
    // this.rightRef = React.createRef()
    this.state = {
      lists: [1,2,3,4,5,6,7]
    }
  }
  componentDidMount() { // 生命周期
    // this.refs.left.style.backgroundColor = 'green';
    // this.rightRef.current.style.backgroundColor = 'green'
  }
  deleteByIndex = (e) => {
    let index = e.target.dataset.index;
    this.setState({
      lists: this.state.lists.filter((item,key) => key !== +index)
    })
  };
  render() {
    // let arr = [<span>123</span>,<div>345</div>];
    // let lists = [1,2,3,4,5,6,7].map((item,index) => <li onClick={this.deleteByIndex.bind(this)} key={index}>{item}</li>);
    return (
      <div className='home'>
        <Nav/>
        {/*<h1>我是HOME</h1>*/}
        {/*{this.props.children}*/}
        {/*<div ref='left'>{this.props.left}</div>*/}
        {/*<hr/>*/}
        {/*<div ref={this.rightRef}>{this.props.right}</div>*/}
        <ul>
          {this.state.lists.map((item,index) => <li onClick={this.deleteByIndex.bind(this)} data-index={index} key={index}>{item}</li>)}
        </ul>
      </div>
    )
  }
}

