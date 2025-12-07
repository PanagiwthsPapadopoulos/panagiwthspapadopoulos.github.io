import { Routes, Route } from "react-router-dom";

/* Layout Imports */
import MainLayout from "../layouts/MainLayout";

/* Page Imports */
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ToolsPage from "../pages/ToolsPage.jsx";
import NotFoundPage from "../pages/NotFoundPage";


const AppRouter = () => (
  <Routes>

    {/* Page Routes */}
    <Route element={<MainLayout />}>
      <Route path="/" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tools" element={<ToolsPage />} />
    </Route>

    {/* Default Page - Error 404 */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRouter;