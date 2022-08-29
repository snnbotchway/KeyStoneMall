import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
