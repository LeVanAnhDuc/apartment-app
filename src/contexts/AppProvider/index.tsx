"use client";
// types
import type { PropsWithChildren } from "react";
// contexts
import ProviderTheme from "../ProviderTheme";
import ProvidersReactQuery from "../ProvidersReactQuery";

const AppProvider = ({ children }: PropsWithChildren) => {
  const Provider = [ProvidersReactQuery, ProviderTheme];

  return Provider.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
};

export default AppProvider;
