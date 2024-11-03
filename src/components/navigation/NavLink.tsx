import { Link } from "@/i18n/routing";
import { LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  return (
    // @ts-expect-error idk man
    <Link href={href} className={`no-underline duration-300 text-black hover:text-blue-500`} {...props}>
      {children}
    </Link>
  );
};
