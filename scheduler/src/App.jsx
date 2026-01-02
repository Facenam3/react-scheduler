import Header from "./components/layout/Header.jsx";
import DayPlanner from "./components/layout/DayPlanner.jsx";
// import TaskForm from "./components/UI/TaskForm.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen">
        <DayPlanner />
      </main>
    </>
  );
}

export default App;
