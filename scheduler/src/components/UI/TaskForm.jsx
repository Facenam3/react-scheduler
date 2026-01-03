import { useContext, useEffect, useState } from "react";

import Input from "./Input.jsx";
import Button from "./Button.jsx";
import ModalContext from "../../store/ModalContext.jsx";
import TaskContext from "../../store/TaskContext.jsx";

import {
  validateTitle,
  validateTime,
  validateDate,
} from "../../utils/validation.js";

export default function TaskForm({ onSubmit, editTask }) {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    title: "",
    time: "",
    date: "",
    description: "",
    id: null,
  });

  const modalCtx = useContext(ModalContext);
  const taskCtx = useContext(TaskContext);

  useEffect(() => {
    if (modalCtx.type === "form") {
      setFormValues({
        title: "",
        time: "",
        date: "",
        description: "",
        id: null,
      });
      setErrors({});
      return;
    }
  }, [modalCtx.type, modalCtx.taskId, taskCtx.tasks]);

  useEffect(() => {
    if (modalCtx.type === "edit" && modalCtx.taskId != null) {
      const taskToEdit = taskCtx.tasks.find((t) => t.id === modalCtx.taskId);

      if (taskToEdit) {
        setFormValues({
          title: taskToEdit.title,
          time: taskToEdit.time,
          date: taskToEdit.date,
          description: taskToEdit.description,
          id: taskToEdit.id,
        });
        setErrors({});
      }
    }
  }, [modalCtx.type, modalCtx.taskId, taskCtx.tasks]);

  function handleClose() {
    setErrors({});
    setFormValues({
      title: "",
      time: "",
      date: "",
      description: "",
      id: null,
    });
    modalCtx.closeModal();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const taskData = { ...formValues };

    const newErrors = {
      title: validateTitle(taskData.title || ""),
      time: validateTime(taskData.time || ""),
      date: validateDate(taskData.date || ""),
    };

    if (editTask) taskData.id = editTask.id;

    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit({
      ...taskData,
      description: taskData.description || taskData.title,
    });
  }

  return (
    <div className="p-5 border-2 border-stone-500 rounded-md shadow-3xl bg-blue-400 w-full text-center">
      <h1 className="mb-3 text-2xl text-stone-50 font-bold text-center ">
        {editTask ? "Edit your task!" : "Enter your task!"}
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          name="title"
          label="Title"
          placeholder="Enter your Title"
          value={formValues.title}
          onChange={handleChange}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1 bg-amber-50 rounded-sm p-1">
            {errors.title}
          </p>
        )}
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          type="time"
          name="time"
          label="Time"
          value={formValues.time}
          onChange={handleChange}
        />
        {errors.time && (
          <p className="text-red-500 text-sm mt-1 bg-amber-50 rounded-sm p-1">
            {errors.time}
          </p>
        )}
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          type="date"
          name="date"
          label="Date"
          value={formValues.date}
          onChange={handleChange}
        />
        {errors.date && (
          <p className="text-red-500 text-sm mt-1 bg-amber-50 rounded-sm p-1">
            {errors.date}
          </p>
        )}
        <Input
          className="py-4 px-2 w-full bg-stone-50 border-2 border-stone-500 rounded-md text-md mb-3"
          name="description"
          label="Description"
          placeholder="Enter your Description"
          description
          value={formValues.description}
          onChange={handleChange}
        />
        <div className="flex justify-center gap-3">
          <Button color type="submit">
            {editTask ? "Update" : "Submit"}
          </Button>
          <Button color type="button" onClick={handleClose}>
            Close
          </Button>
        </div>
      </form>
    </div>
  );
}
