import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Blogview from "./components/Blogview/Blogview";
import ViewPortfolio from "./components/PortFolio/ViewPortfolio";

import "./App.css";

import Portfolio from "./components/PortFolio/PortFolio";
import Testimonials from "./components/Testmonal/Testimonials";
import Partners from "./components/Blog/Partners";
import Content1 from "./components/Content1/Content1";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Service from "./components/Service/Service";
import Experince from "./components/Experince/Experince";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <Layout>
              <Content1 />
              <About />
              <Service />
              <Experince />
              <Portfolio />
              <Testimonials />
              <Partners />
              <Blog />
              <Contact />
            </Layout>
          }
        />

        {/* Individual section routes */}
        <Route
          path="/content"
          element={
            <Layout>
              <Content1 />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Service />
            </Layout>
          }
        />
        <Route
          path="/experince"
          element={
            <Layout>
              <Experince />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        />
        <Route
          path="/partners"
          element={
            <Layout>
              <Partners />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Existing detail routes */}
        <Route
          path="/view-blog"
          element={
            <Layout>
              <Blogview />
            </Layout>
          }
        />
        <Route
          path="/view-portfolio"
          element={
            <Layout>
              <ViewPortfolio />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
