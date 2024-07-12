//Shimmer UI

import React from 'react';

const Shimmer = ({ keys }) => {
  return (
    <div key={keys} className="shimmerBox">
      <div className="shimmerImgDiv"></div>
      <div className="shimmerTextDiv">
        <div className="shimmerName"></div>
        <div className="shimmerDetails"></div>
        <div className="shimmerLocation"></div>
      </div>
    </div>
  );
};

const Shimmers = () => {
  return (<div className='ShimmersDivs'>
    {Array(14)
      .fill('')
      .map(
        (e, index) => <React.Fragment key={index}><Shimmer /></React.Fragment>)}</div>)
}

export default Shimmers;