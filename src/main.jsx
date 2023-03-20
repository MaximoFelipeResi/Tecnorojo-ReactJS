import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYrIPFTBGuWf2OktMljFQVnFcOikMYAI0",
  authDomain: "tecnorojostore.firebaseapp.com",
  projectId: "tecnorojostore",
  storageBucket: "tecnorojostore.appspot.com",
  messagingSenderId: "619806899945",
  appId: "1:619806899945:web:48de4e1d08d1a5e0e77a78"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
