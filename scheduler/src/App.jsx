import Header from "./components/layout/Header.jsx";
import DayPlanner from "./components/layout/DayPlanner.jsx";
import { TaskContextProvider } from "./store/TaskContext.jsx";
import { ModalContextProvider } from "./store/ModalContext.jsx";
import AddTaskForm from "./components/layout/AddTaskForm.jsx";

function App() {
  return (
    <TaskContextProvider>
      <ModalContextProvider>
        <Header />
        <main className="w-screen">
          <AddTaskForm />
          <DayPlanner />
        </main>
      </ModalContextProvider>
    </TaskContextProvider>
  );
}

export default App;
