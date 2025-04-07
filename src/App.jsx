import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { getQueryClient } from "./libs/query-client";
import { publicRoutes } from "./routes";
import { AuthProvider } from "./providers/auth-provider";
import { ToastProvider } from "./providers/toast.provider";

function App() {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
            <Router>
              <Routes>
                {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  return (
                    <Route key={index} path={route.path} element={<Page />} />
                  );
                })}
              </Routes>
            </Router>
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
