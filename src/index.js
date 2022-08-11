import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import TestPage from "./pages/testpage";
import CustomFurniturePage from "./pages/customfurniture";
import WalnutCabinetPage from "./pages/walnutcabinet";
import WalnutBenchPage from "./pages/walnutbench";
import KumikoRoomDividerPage from "./pages/kumikoroomdivider";
import ToyStorageBoxPage from "./pages/toystoragebox";
import ProcessPage from "./pages/process";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="testpage" element={<TestPage />} />
          <Route path="custom-furniture" element={<CustomFurniturePage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="portfolio/walnut-cabinet" element={<WalnutCabinetPage />} />
          <Route path="portfolio/walnut-bench" element={<WalnutBenchPage />} />
          <Route path="portfolio/kumiko-room-divider" element={<KumikoRoomDividerPage />} />
          <Route path="portfolio/toy-storage-box" element={<ToyStorageBoxPage />} />
          <Route path="*" element={<App />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
