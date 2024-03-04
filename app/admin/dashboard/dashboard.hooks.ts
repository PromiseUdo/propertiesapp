import { useMemo } from "react";
import { MenuItem } from "./dashboard.types";
import { LuLayoutDashboard } from "react-icons/lu";

const MENU_ITEMS: MenuItem[] = [
  {
    icon: LuLayoutDashboard,
    name: "Dashboard",
    url: "/admin/app/dashboard",
  },
  {
    icon: LuLayoutDashboard,
    name: "Manage Properties",
    url: "/admin/app/recruiter",
  },
  {
    icon: LuLayoutDashboard,
    name: "Add Property",
    url: "/admin/app/alumni",
  },
  {
    icon: LuLayoutDashboard,
    name: "Tour Request",
    url: "/admin/app/audit-logs",
  },
  {
    icon: LuLayoutDashboard,
    name: "Dialogue",
    url: "/admin/app/forum",
  },
  {
    icon: LuLayoutDashboard,
    name: "Reports",
    url: "/admin/app/report",
  },
];

export const useMenuItems = () => {
  const menuItems = useMemo<MenuItem[]>(() => {
    return (MENU_ITEMS || []).map((menuItem) => {
      return {
        ...menuItem,
      };
    });
  }, []);

  return {
    menuItems,
  } as const;
};
