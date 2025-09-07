import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layout";
import { HomePage } from "@/routes/home";

import { AuthenticationLayout } from "@/layouts/auth-layout";
import { SignUpPage } from "./routes/sign-up";
import { SignInPage } from "./routes/sign-in";
import { ProtectedRoutes } from "./layouts/protected-routes";
import { MainLayout } from "./layouts/main-layout";
import { AboutPage } from "./routes/about";
import { ContactPage } from "./routes/contact";
import { ServicesPage } from "./routes/services";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>

        {/* authentication routes */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/*private routes*/}
        <Route element={
          <ProtectedRoutes>
            <MainLayout />
            </ProtectedRoutes>
          }>

          {/* add all th protected routes here */ }

        </Route>
      </Routes>
    </Router>
  )
};

export default App;