import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { getQueryClient } from "./libs/query-client";
import { publicRoutes } from "./routes";

function App() {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
