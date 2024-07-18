// useOnline : hook allow to see if app have internet or not;

import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {

    const handelOnline = () => {
      setOnline(true);
    };
    const handelOffline = () => {
      setOnline(false);
    };

    window.addEventListener('online', () => { handelOnline });
    window.addEventListener('offline', () => { handelOffline });

    // Cleaning code / removing events:
    return () => {
      window.removeEventListener('online', () => { handelOnline })
      window.removeEventListener('offline', () => { handelOffline })
    };
  }, []);

  return online;
};

export default useOnline;