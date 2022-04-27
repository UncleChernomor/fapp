import React, { useContext } from "react";
import Layout from "./pages/Layout.jsx";
import { Provider } from "react-redux";
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import PublicRoutes from "./components/PublicRoutes.jsx";
import './AppStyle.css'
import { UserContext } from './index';

function App(props) {
  const { user } = useContext(UserContext);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading='null' persistor={persistor}>
          <Layout />
          {
            user ? <PrivateRoutes /> : <PublicRoutes />
          }
        </PersistGate>
      </Provider>
    </>

  );
}

export default App;

