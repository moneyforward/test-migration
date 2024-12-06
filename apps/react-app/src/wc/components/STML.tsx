import { routes } from '@generouted/react-router';
import r2wc from '@r2wc/react-to-web-component';
import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Routes: FC = () => (
    <RouterProvider router={createBrowserRouter(routes)} />
);
Routes.displayName = 'stml-app';

export const STMLApp = r2wc(Routes, {
  shadow: 'open',
});

export const STMLPage: FC = () => {
  return <stml-app />;
};
