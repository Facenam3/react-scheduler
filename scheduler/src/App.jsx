import { useState } from "react";

import Header from "./components/layout/Header.jsx";
import DayPlanner from "./components/layout/DayPlanner.jsx";
import { TaskContextProvider } from "./store/TaskContext.jsx";
import { ModalContextProvider } from "./store/ModalContext.jsx";
import AddTaskForm from "./components/layout/AddTaskForm.jsx";
import ViewTask from "./components/layout/ViewTask.jsx";
import EditTask from "./components/layout/EditTask.jsx";
import Calendar from "./components/layout/Calendar.jsx";
import Footer from "./components/UI/Footer.jsx";
import MenuBar from "./components/UI/MenuBar.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <TaskContextProvider>
      <ModalContextProvider>
        <div className="flex flex-col min-h-screen">
          <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
          <MenuBar isOpen={isMenuOpen} onClose={closeMenu} />

          <main className="flex-1 w-full p-3 md:p-6">
            <AddTaskForm />
            <DayPlanner />
            <ViewTask />
            <EditTask />
            <Calendar />
          </main>
          <Footer />
        </div>
      </ModalContextProvider>
    </TaskContextProvider>
  );
}

export default App;
