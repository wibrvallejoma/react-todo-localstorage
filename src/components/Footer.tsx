import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-neutral-900 text-white justify-between">
      <div>© {new Date().getFullYear()} <a href="#"><strong>wbvm</strong></a>. All rights reserved</div>
      <div className="flex items-center gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/about#contact">Contact</NavLink>
      </div>
    </footer>
  );
}