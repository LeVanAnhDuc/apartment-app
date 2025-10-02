// libs
import { User, Settings, Moon } from "lucide-react";

export const menuItems = [
  {
    key: "profile",
    icon: User,
    label: "Profile",
    description: "View your profile",
    action: () => console.log("Profile clicked")
  },
  {
    key: "settings",
    icon: Settings,
    label: "Settings",
    description: "Manage preferences",
    action: () => console.log("Settings clicked")
  },
  {
    key: "darkMode",
    icon: Moon,
    label: "Dark Mode",
    description: "Toggle theme",
    action: () => console.log("Dark Mode toggled")
  }
];
