import React from 'react';
import SkeletonElement from '../Skeleton/SkeletonElement'
import Shimmer from '../Skeleton/Shimmer'

const SkeletonWeather = () => {
    return ( 
        <div className="skeleton-wrapper">
            <SkeletonElement type="heading" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
        </div>
     );
}
 
export default SkeletonWeather;