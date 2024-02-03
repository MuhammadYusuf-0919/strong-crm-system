// react import
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components import
// import Loadable from "@/components/loadable"
// routes import
import ProtectedRoute from './ProtectedRoute';
// error pages import
import Error404 from '@/pages/NotFound';
// layout import
import SignIn from '@/pages/SignIn';
import Loadable from '@/components/loadable';
import AuthLayout from '@/layout/AuthLayout';
import AppLayout from '@/layout/AppLayout';
import SignUp from '@/pages/SignUp';
// pages with lazy imports
const DashboardCrm = Loadable(React.lazy(() => import('@/pages/dashboard')));
const Employees = Loadable(React.lazy(() => import('@/pages/Employees')));
const CrudForm = Loadable(React.lazy(() => import('@/modules/CrudForm')));

const protectedRoutes = [
  { path: '/', component: DashboardCrm },
  { path: '/employees', component: Employees },
  { path: '/:id/:crud', component: CrudForm },
];

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />

        {/* Protected Routes */}
        {protectedRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <AppLayout>
                <ProtectedRoute component={Component} />
              </AppLayout>
            }
          />
        ))}

        {/* Error Routes */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
