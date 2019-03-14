//rcep
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './Card.module.css'
import CardItem from './CardItem';
import {  getArrByLen  } from '../../utli/utli'
let cardIndex = 2;
let listData = Array(cardIndex).fill().map((item, index) => ({
  index
}));
class Card extends Component {
  static propTypes = {

  }
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      listData,
    }
    //bnd
    // this.methodName = this.methodName.bind(this)
    this.addCard=this.addCard.bind(this)
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("xxq---update");
  }
  componentDidMount = () => {
    console.log("xxq---mount")
  }
  addCard = (params) => {
    const { listData } = this.state;
     const newList=[...listData,{index:listData.length++}];
     console.log(newList,"xxq")
    // 此时transArr   保存位置信息
    // 此时要立即改变卡片的位置， tansArr保存位置信息
    const stepIndex = 1;
    const transArr = getArrByLen(newList.length);
    listData.forEach((v,k)=>{
      const rect = v.getBoundingClientRect();
      transArr[k + stepIndex][0] = rect.left;
      transArr[k + stepIndex][1] = rect.top;
    })
    this.setState({
      listData :  newList
    })
  }
  render() {
    const { listData } = this.state
    return (
      <div>
        <button styleName='button' onClick={this.addCard}>Add Crad</button>
        <div styleName="cards">
          {listData.map((item, k) => (<CardItem key={item.index} index={k} ></CardItem>))}
        </div>
    
        
      </div>

    )
  }
}

// function Cards( props) {

//   const { route } = props

//   return (
//     <div  styleName='cards'>
//      <CardItem></CardItem>
//        </div>
//   )
// }
export default CSSModules(Card, styles, { allowMultiple: true })