"use client";

import { createContext, useContext } from "react";

export type NavState = { open: boolean; setOpen: (v: boolean) => void };

export const AdminNavContext = createContext<NavState>({ open: false, setOpen: () => {} });

export const useAdminNav = () => useContext(AdminNavContext);
