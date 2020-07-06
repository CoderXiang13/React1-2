import React from 'react';
import './Nav.css'
import PropTypes from 'prop-types'
export default class Nav extends  React.Component{
  constructor(props) {
    super(props);
    console.log(props);
  }
  static propTypes = {
    title: PropTypes.string
  };
  static defaultProps = {
    title: 'hello,world!'
  };
  render() {
    return (
      <div className='nav'>
        <div className='nav-item'>返回</div>
        <div className='nav-item nav-title'>{this.props.title}</div>
        <div className='nav-item'>下一步</div>
      </div>
    )
  }
}

// 静态属性的类型
// Nav.propTypes = {
//   title: PropTypes.string.isRequired
// };
// // 默认属性值
// Nav.defaulProps = {
//   title: 'hello,world'
// };


// npm i prop-types -S  属性判断
// npm i react-router-dom -S  路由
