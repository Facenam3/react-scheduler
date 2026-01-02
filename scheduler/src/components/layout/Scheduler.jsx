import Card from "../UI/Card.jsx";
import SectionTitle from "../UI/SectionTitle.jsx";

export default function Scheduler({ title, done }) {
  let scheduler = (
    <div className="w-full">
      <SectionTitle title={title} />
      <Card />
    </div>
  );

  if (done) {
    return (scheduler = (
      <div className="w-full">
        <SectionTitle title={title} done />
        <Card />
      </div>
    ));
  }

  return scheduler;
}
