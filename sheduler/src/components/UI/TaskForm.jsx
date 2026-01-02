import Input from "./Input.jsx";
import Button from "./Button.jsx";

export default function TaskForm() {
  return (
    <div className="p-5 border-2 border-stone-500 rounded-md shadow-3xl bg-blue-400 w-1/5 text-center">
      <h1 className="mb-3 text-2xl text-stone-50 font-bold text-center ">
        Enter your task!
      </h1>
      <form action="">
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          name="title"
          label="Title"
          placeholder="Enter your Title"
          required
        />
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          type="time"
          name="time"
          label="Time"
          required
        />
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          type="date"
          name="date"
          label="Date"
          required
        />
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          name="description"
          label="Description"
          placeholder="Enter your Description"
          description
          required
        />
        <Button color type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
