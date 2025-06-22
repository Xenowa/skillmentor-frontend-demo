import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black text-white p-4 flex justify-around gap-4">
      <div className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/params"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          Params
        </NavLink>
      </div>
      <div className="flex gap-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
