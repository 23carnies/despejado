import React from 'react';
import '../../scss/main.css'

const SkeletonElement = ({ type }) => {

    const classes = `skeleton__${type}`;

    return ( 
        <div className={classes}></div>
     );
}
 
export default SkeletonElement;