import { RouteObject } from "react-router-dom";
import {Dashboard} from "./views";
import {ChatPage} from "./views";

export const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/credit", element: <Dashboard /> },
  { path: "/payment", element: <Dashboard /> },
  { path: "/messages", element: <ChatPage /> },
] as RouteObject[];
