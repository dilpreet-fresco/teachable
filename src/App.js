import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from './modules/store';
import RoutesComponent from './views/shared/routes/RoutesComponent';

import 'antd/dist/antd.min.css';
const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
