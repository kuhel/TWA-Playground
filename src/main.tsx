import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Router from 'routes/Router';
import store from 'store';
import 'common/language/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={Router} />
      </Provider>
   </React.StrictMode>,
);
