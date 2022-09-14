import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Container } from "react-bootstrap";

import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} exact />
                        <Route
                            path="/product/:id"
                            element={<ProductDetail />}
                        />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/register" element={<SignUpScreen />} />
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/shipping" element={<ShippingScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
