import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmplivibePage from "./pages/amplivibe";
import Layout from "./pages/layout";
import TestPage from "./pages/testpage";
import CustomFurniturePage from "./pages/customfurniture";
import GeaZwartPage from "./pages/gea-zwart";
import BauhausHomeOfficePage from "./pages/bauhaus-home-office";
import MidCenturyPage from "./pages/mid-century";
import ScandinavianDresserPage from "./pages/scandinavisch-tv-meubel";
import OrigamiTableBenchPage from "./pages/origami-table-bench";
import ModernTvFurniturePage from "./pages/modern-tv-meubel";
import CoffeeCornerPage from "./pages/coffee-corner";
import HomeOfficePage from "./pages/home-office";
import LaundryRoomPage from "./pages/laundry-room";
import WalnutCabinetPage from "./pages/walnutcabinet";
import WalnutBenchPage from "./pages/walnutbench";
import KumikoRoomDividerPage from "./pages/kumikoroomdivider";
import ReneChangPage from "./pages/rene-chang";
import SlingerPage from "./pages/slinger";
import ToyStorageBoxPage from "./pages/toystoragebox";
import MailBoxPage from "./pages/mailbox";
import ProcessPage from "./pages/process";
import JacksThingsPage from "./pages/jacksthings";
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
          <Route path="jacksthings" element={<JacksThingsPage />} />
          <Route path="gea-zwart" element={<GeaZwartPage />} />
                    <Route path="rene-chang" element={<ReneChangPage />} />
                    <Route path="portfolio/mid-century" element={<MidCenturyPage />} />
                    <Route path="portfolio/scandinavisch-tv-meubel" element={<ScandinavianDresserPage />} />
                    <Route path="portfolio/modern-tv-meubel" element={<ModernTvFurniturePage />} />
                    <Route path="portfolio/origami-table-bench" element={<OrigamiTableBenchPage />} />
          <Route path="portfolio/coffee-corner" element={<CoffeeCornerPage />} />
          <Route path="portfolio/home-office" element={<HomeOfficePage />} />
          <Route path="portfolio/bauhaus-home-office" element={<BauhausHomeOfficePage />} />
          <Route path="portfolio/laundry-room" element={<LaundryRoomPage />} />
          <Route path="portfolio/slinger" element={<SlingerPage />} />
          <Route path="portfolio/walnut-cabinet" element={<WalnutCabinetPage />} />
          <Route path="portfolio/walnut-bench" element={<WalnutBenchPage />} />
          <Route path="portfolio/kumiko-room-divider" element={<KumikoRoomDividerPage />} />
          <Route path="portfolio/toy-storage-box" element={<ToyStorageBoxPage />} />
          <Route path="portfolio/mailbox" element={<MailBoxPage />} />
          <Route path="*" element={<App />} />          
        </Route>
        <Route path="/amplivibe" element={<AmplivibePage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
