"use client"
import Dashboard from "@/components/Dashboard";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
    <div className="flex justify-center">
      <Dashboard />
    </div>
    </Provider>
  );
}
