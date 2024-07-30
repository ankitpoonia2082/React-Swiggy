//Shimmer UI

import React from 'react';

const Shimmer = ({ keys }) => {
  return (
    <div key={keys} className="m-3 w-64 bg-slate-100 rounded-xl">
      <div className="h-52 w-60 rounded-xl bg-slate-200 m-2"></div>
      <div className="m-2 ">
        <div className="mt-3 w-24 h-2 bg-slate-200"></div>
        <div className="mt-3 w-10 h-2 bg-slate-200"></div>
        <div className="mt-3 w-28 h-2 bg-slate-200"></div>
      </div>
    </div>
  );
};

const Shimmers = () => {
  return (<div className='flex flex-wrap justify-items-start m-5'>
    {Array(14)
      .fill('')
      .map(
        (e, index) => <React.Fragment key={index}><Shimmer /></React.Fragment>)}</div>)
}

export default Shimmers;