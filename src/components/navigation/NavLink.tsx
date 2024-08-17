import { useTranslations } from "next-intl";
import Link, { LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const t = useTranslations();
  if (!href.startsWith("/")) {
    href = "/" + href;
  }
  if (!href.startsWith("/" + t("locale"))) {
    href = "/" + t("locale") + href;
  }

  return (
    <Link href={href} className={`no-underline duration-300 text-black hover:text-blue-500`} {...props}>
      {children}
    </Link>
  );
};
