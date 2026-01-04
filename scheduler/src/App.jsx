import Header from "./components/layout/Header.jsx";
import DayPlanner from "./components/layout/DayPlanner.jsx";
import { TaskContextProvider } from "./store/TaskContext.jsx";
import { ModalContextProvider } from "./store/ModalContext.jsx";
import AddTaskForm from "./components/layout/AddTaskForm.jsx";
import ViewTask from "./components/layout/ViewTask.jsx";
import EditTask from "./components/layout/EditTask.jsx";
import Calendar from "./components/layout/Calendar.jsx";

function App() {
  return (
    <TaskContextProvider>
      <ModalContextProvider>
        <Header />
        <main className="w-screen">
          <AddTaskForm />
          <DayPlanner />
          <ViewTask />
          <EditTask />
          <Calendar />
        </main>
      </ModalContextProvider>
    </TaskContextProvider>
  );
}

export default App;
