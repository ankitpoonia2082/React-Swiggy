// Error Page.

import { useRouteError } from 'react-router-dom';

const ErropPage = () => {
  const err = useRouteError();

  return (
    <div className="errorDiv">
      <h2>{err.status}</h2>
      <p>{err.statusText}</p>
      <h1 className="errorHead">We'll be back shortly</h1>
      <h6 className="errorBody">We are fixing a temporary glitch. Sorry for the inconvenience.</h6>

      <button>Go Back</button>
    </div>
  );
};

export default ErropPage;