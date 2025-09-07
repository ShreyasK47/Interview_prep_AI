import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

export const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn(
        "w-full border-b bg-white sticky top-0 z-50 shadow-sm transition-all duration-200"
      )}
    >
      <Container>
        <div className="flex items-center gap-6 w-full py-3">
          {/* Logo section */}
          <LogoContainer />

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600 hover:text-neutral-900 transition-colors duration-200",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          {/* Right side: Profile + Mobile menu */}
          <div className="ml-auto flex items-center gap-4">
            <ProfileContainer />
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};
