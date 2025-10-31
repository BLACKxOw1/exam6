import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { CartProvider } from "./CartContext";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

import CourseAPI from "./pages/CourseAPI";
import CourseProducts from "./pages/CourseProducts";
import SingleProduct from "./pages/SingleProduct";
import SingleCourseProduct from "./pages/SingleCourseProduct";
import Tours from "./pages/Tours";

import ReqRes from "./pages/ReqRes";
import FakeStore from "./pages/FakeStore";
import DummyJSON from "./pages/DummyJSON";
import MockAPI from "./pages/MockAPI";
import JSONPlaceholder from "./pages/JSONPlaceholder";
import SinglePost from "./pages/SinglePost";
import Cart from "./pages/Cart";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Header />

          <div className="flex h-[calc(100vh-64px)]">
            <SideBar />

            <main className="flex-1 p-6 overflow-auto bg-gray-100 dark:bg-zinc-800">
              <Routes>
                <Route path="/" element={<CourseAPI />} />
                <Route path="/course-products" element={<CourseProducts />} />
                <Route path="/single-product" element={<SingleProduct />} />
                <Route
                  path="/single-course-product"
                  element={<SingleCourseProduct />}
                />
                <Route path="/tours" element={<Tours />} />

                <Route path="/post/:id" element={<SinglePost />} />

                <Route path="/reqres" element={<ReqRes />} />
                <Route path="/fakestore" element={<FakeStore />} />
                <Route path="/dummyjson" element={<DummyJSON />} />
                <Route path="/mockapi" element={<MockAPI />} />
                <Route path="/jsonplaceholder" element={<JSONPlaceholder />} />

                <Route path="/video/:id" element={<VideoDetail />} />

                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
