import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";

import React from 'react'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes