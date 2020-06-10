import React from 'react';
import { Helmet } from 'react-helmet';
import SortingMain from './SortingMain';

const App: React.FC = (): JSX.Element => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Sorting Visualizer</title>
    </Helmet>
    <SortingMain />
  </div>
);

export default App;
