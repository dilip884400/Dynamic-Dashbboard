"use client";
import Dashboard from "@/components/Dashboard";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <Dashboard />
      </div>
    </Provider>
  );
}
