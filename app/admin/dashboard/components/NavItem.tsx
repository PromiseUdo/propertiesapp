import iconUrls from "@/assets/icons/iconUrls";
import { usePrefetch } from "@/store/authSlice";
import clsx from "clsx";
import React from "react";
import { MenuItem } from "../dashboard.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = (
  props: MenuItem & {
    onClick?: () => void;
    queryKey?: string;
    showText?: boolean;
  }
) => {
  const pathname = usePathname();
  const { icon: Icon, name, url, onClick, showText } = props;
  const isActive = pathname.includes(
    url || Math.random().toString(16).substring(4, 10)
  );
  const prefetchEntity = usePrefetch(props.queryKey as any);

  const innerElement = (
    <>
      {name === "Settings" ? (
        <img
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4"
          src={iconUrls.navigation.SettingsIcon}
          alt="go to settings page"
        />
      ) : (
        <Icon
          stroke={isActive ? "#00A0AE" : "var(--shades-gray-3)"}
          className="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4"
        />
      )}
      <span
        className={clsx(
          "sm:hidden lg:block",
          isActive
            ? "text-[#00A0AE] md bold lg:sm"
            : "text-jaa-shades-gray-3 font-normal md lg:sm",
          showText && "sm:!block"
        )}
      >
        {name}
      </span>
    </>
  );

  return !url ? (
    <li
      role="menuitem"
      onClick={onClick}
      onMouseEnter={() => {
        if (!props.queryKey) return;
        prefetchEntity({ page: 1, search: "" });
      }}
      onTouchStart={() => {
        if (!props.queryKey) return;
        prefetchEntity({ page: 1, search: "" });
      }}
      className={clsx(
        "w-full cursor-pointer flex items-center py-2 gap-4 capitalize sm:flex-col sm:border-b-2 sm:pt-2 sm:pr-2 sm:pb-3 sm:pl-2 lg:flex-row lg:border-b-0",
        isActive ? "sm:border-[#00A0AE] lg:border-r" : "sm:border-transparent",
        showText && "sm:border-b-0 sm:!flex-row sm:!pr-0 sm:!pl-0"
      )}
    >
      {innerElement}
    </li>
  ) : (
    <Link
      role="menuitem"
      href={url}
      onClick={onClick}
      onMouseEnter={() => {
        if (!props.queryKey) return;
        prefetchEntity({ page: 1, search: "" });
      }}
      onTouchStart={() => {
        if (!props.queryKey) return;
        prefetchEntity({ page: 1, search: "" });
      }}
      className={clsx(
        "w-full flex items-center py-2 gap-4 capitalize sm:flex-col sm:border-b-2 sm:px-0.5 rounded-sm lg:flex-row lg:border-b-0",
        isActive ? "sm:border-[#00A0AE] lg:border-r" : "sm:border-transparent",
        showText && "sm:border-b-0 sm:!flex-row sm:!pr-0 sm:!pl-0"
      )}
    >
      {innerElement}
    </Link>
  );
};

export default NavItem;
