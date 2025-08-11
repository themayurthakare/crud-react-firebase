// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./assets/styles/global.scss";
import useAuthProvider from "./features/Auth/hooks/useAuth";

export const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
