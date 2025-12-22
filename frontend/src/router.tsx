import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/Product/List';
import ProductDetail from './pages/Product/Detail';
import ProductEdit from './pages/Product/Edit';
import BlogList from './pages/Blog/List';
import BlogDetail from './pages/Blog/Detail';
import BlogEdit from './pages/Blog/Edit';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Products */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/new" element={<ProductEdit />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products/:id/edit" element={<ProductEdit />} />

      {/* Blogs */}
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/new" element={<BlogEdit />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/blogs/:id/edit" element={<BlogEdit />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
