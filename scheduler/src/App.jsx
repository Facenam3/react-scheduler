import Header from "./components/layout/Header.jsx";
import DayPlanner from "./components/layout/DayPlanner.jsx";
import { TaskContextProvider } from "./store/TaskContext.jsx";
import { ModalContextProvider } from "./store/ModalContext.jsx";
import AddTaskForm from "./components/layout/AddTaskForm.jsx";
import ViewTask from "./components/layout/ViewTask.jsx";
import EditTask from "./components/layout/EditTask.jsx";
import Calendar from "./components/layout/Calendar.jsx";
import Footer from "./components/UI/Footer.jsx";

function App() {
  return (
    <TaskContextProvider>
      <ModalContextProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
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
