import { useAuth, useUser, UserButton } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const ProfileContainer = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center">
        <Loader className="h-5 w-5 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {isSignedIn ? (
        <>
          <span className="hidden md:block text-sm font-medium text-gray-700">
            Welcome, {user?.firstName || "User"} 👋
          </span>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox:
                  "h-8 w-8 rounded-full border border-gray-200 shadow-sm",
              },
            }}
          />
        </>
      ) : (
        <Link to="/signin">
          <Button
            size="sm"
            className="rounded-md px-4 py-2 font-medium shadow-sm hover:shadow-md transition"
          >
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
};
