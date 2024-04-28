"use client";

import { Provider } from "react-redux";
import { AppProps } from "next/app";
import store from "@/store/store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
