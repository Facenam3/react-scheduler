import Header from "./components/layout/Header.jsx";
import DayPlanner from "./components/layout/DayPlanner.jsx";
import { TaskContextProvider } from "./store/TaskContext.jsx";

function App() {
  return (
    <TaskContextProvider>
      <Header />
      <main className="w-screen">
        <DayPlanner />
      </main>
    </TaskContextProvider>
  );
}

export default App;
