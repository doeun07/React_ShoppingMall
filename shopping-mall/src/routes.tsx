import { lazy } from 'react';
import GlobalLayout from './pages/_layout';  // 경로 확인

const Index = lazy(() => import('./pages/index'));  // 경로 확인
const ProductsIndex = lazy(() => import('./pages/products/index'));  // 경로 확인
const ProductsId = lazy(() => import('./pages/products/[id]'));  // 경로 확인

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/products", element: <ProductsIndex /> },
      { path: "/products/:id", element: <ProductsId /> },
    ],
  },
];