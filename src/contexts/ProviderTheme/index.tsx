"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ProviderTheme = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    {...props}
  >
    {children}
  </NextThemesProvider>
);

export default ProviderTheme;
