import { NavLink } from "@/components/navigation/NavLink";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-[90vh]">
        <p>404</p>
        <NavLink href="/">
          <p>Home</p>
        </NavLink>
      </body>
    </html>
  );
}
