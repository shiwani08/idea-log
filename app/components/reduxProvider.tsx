"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../redux/store/store";

type ReduxProviderProps = {
  children: ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
