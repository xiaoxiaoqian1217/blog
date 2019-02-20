//rafcp
import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './Card.module.css'
const CardItem = ({index}) => {
  return (
    <div styleName="card-item">
      <h3>title-1</h3>
      <p styleName="card-content">{index}</p>
    </div>
  )
}

CardItem.propTypes = {

}

export default CSSModules(CardItem, styles, {allowMultiple: true} )
