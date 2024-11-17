import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import oilSpillIcon from "../assets/oil-spill.png"; // Local image
const MapPage = () => {
    const caspianSeaCenter = [41.9861, 50.7391]; // Center of Caspian Sea
    // Oil company locations (spread across the Caspian Sea)
    const oilCompanyLocations = [
        [42.0, 51.0, "Oil-Компания 1"], // North-west
        [46.0, 51.5, "Oil-Компания 2"], // North
        [44.5, 50.3, "Oil-Компания 3"], // West
        [41.0, 51.0, "Oil-Компания 4"], // South-west
        [38.9, 52.0, "Oil-Компания 5"], // North-east
        [44.2, 48.7, "Oil-Компания 6"], // West
        [41.7, 50.6, "Oil-Компания 7"], // South-east
        [45.3, 48.2, "Oil-Компания 8"], // North-east
        [41.8, 50.2, "Oil-Компания 9"], // South-west
        [42.6, 50.0, "Oil-Компания 10"], // North
        [46.4, 50.5, "Oil-Компания 11"], // South-central
    ];
    // Define the custom icon
    const customIcon = L.icon({
        iconUrl: oilSpillIcon,
        iconSize: [40, 40], // Adjust icon size
        iconAnchor: [20, 40], // Anchor point (center-bottom)
    });
    const [reportModalOpen, setReportModalOpen] = useState(false);
    const handleReportClick = () => {
        setReportModalOpen(true);
    };
    return (_jsxs("div", { children: [_jsxs(MapContainer, { center: caspianSeaCenter, zoom: 6, style: { height: "100vh", width: "100%" }, children: [_jsx(TileLayer, { url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \u00A9 <a href="https://carto.com/attributions">CartoDB</a>' }), oilCompanyLocations.map(([lat, lng, company], index) => (_jsx(Marker, { position: [lat, lng], icon: customIcon, children: _jsxs(Popup, { children: [_jsx("strong", { children: company }), _jsx("br", {}), "\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B: ", lat.toFixed(4), ", ", lng.toFixed(4)] }) }, index)))] }), _jsx("div", { className: "report-button-container", children: _jsx("button", { onClick: handleReportClick, children: "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E \u0440\u0430\u0437\u043B\u0438\u0432\u0435 \u043D\u0435\u0444\u0442\u0438" }) }), reportModalOpen && (_jsxs("div", { className: "report-modal", children: [_jsx("h2", { children: "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E \u0440\u0430\u0437\u043B\u0438\u0432\u0435 \u043D\u0435\u0444\u0442\u0438" }), _jsxs("form", { children: [_jsx("textarea", { placeholder: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u043E \u0440\u0430\u0437\u043B\u0438\u0432\u0435 \u043D\u0435\u0444\u0442\u0438", rows: 4 }), _jsx("br", {}), _jsx("button", { type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }), _jsx("button", { type: "button", onClick: () => setReportModalOpen(false), children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] })] }))] }));
};
export default MapPage;
