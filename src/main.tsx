import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ThemeContextWrapper } from '@/contexts/ThemeContext/ThemeContext';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store/';
import { Provider } from 'react-redux';
import './index.css';
import { FormProvider } from './contexts/FormContext/FormContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormProvider>
      <Provider store={store}>
        <ThemeContextWrapper>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ThemeContextWrapper>
      </Provider>
    </FormProvider>
  </React.StrictMode>,
);
