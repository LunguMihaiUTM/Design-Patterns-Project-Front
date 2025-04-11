import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "../App/Router";

// Pagini principale
import MainPage from "../Pages/MainPage/MainPage";

// Pagini din Header
import Register from "../shared/components/Register/Register";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";

export const Routing = () => (
  <Routes>
    <Route path={AppRoutes.MAIN} element={<MainPage />} />

    {/* Header routes */}
    <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
    <Route path={AppRoutes.REGISTER} element={<Register />} />
    <Route path={AppRoutes.CATEGORY_PAGE} element={<CategoryPage />} />
  </Routes>
);
