import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/Home";

const RootRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
export default RootRouter;
