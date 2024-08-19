import { NavLink } from "@/components/navigation/NavLink";
import { unstable_setRequestLocale } from "next-intl/server";

export default function NotFound() {
  unstable_setRequestLocale("en");
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
