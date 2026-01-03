import Card from "../UI/Card.jsx";
import SectionTitle from "../UI/SectionTitle.jsx";

export default function Scheduler({ title, done, toDoTasks, doneTasks }) {
  if (!done) {
    return (
      <div className="w-full">
        <SectionTitle title={title} />
        {toDoTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            time={task.time}
            date={task.date}
            description={task.description}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <SectionTitle title={title} done />
      {doneTasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          time={task.time}
          date={task.date}
          description={task.description}
        />
      ))}
    </div>
  );
}
