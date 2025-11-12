import { useState } from "react";
import Sidebar from "./Sidebar";

export default function AppSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button onClick={openSidebar}>Open Sidebar</button>
      {/* <Sidebar onClose={closeSidebar} /> */}
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}
    </>
  );
}
