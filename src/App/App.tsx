import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SortingMain from './SortingMain';

const App: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 75);
  }, []);

  const preloadComponent = (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sorting Visualizer</title>
      </Helmet>
    </div>
  );
  const loadedComponent = (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sorting Visualizer</title>
      </Helmet>
      <SortingMain />
    </div>
  );
  return loaded ? loadedComponent : preloadComponent;
};

export default App;
