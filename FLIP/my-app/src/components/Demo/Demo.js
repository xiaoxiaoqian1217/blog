import React from 'react'
import CSSModules from 'react-css-modules'
/* import your css modules styles for the component */
import styles from './Demo.module.css' 

function Demo( props) {

    const { route } = props
    console.log("1111",styles);
    return (
    	<div styleName='demo'>
    		<button styleName='button blue'>press me</button>
       	</div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )