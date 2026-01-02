import Header from "./components/layout/Header.jsx";
import TaskForm from "./components/UI/TaskForm.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center">
        <TaskForm />
      </main>
    </>
  );
}

export default App;
