// libs
import { useContext } from "react";
// contexts
import { ThemeContext } from "@/contexts/ProviderTheme";

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
