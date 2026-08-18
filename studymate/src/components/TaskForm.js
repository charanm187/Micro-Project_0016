import { useState } from "react";

function TaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      title === "" ||
      subject === "" ||
      dueDate === "" ||
      priority === ""
    ) {

      alert("Please fill in all fields.");

      return;
    }

    const newTask = {

      id: Date.now(),

      title: title,

      subject: subject,

      dueDate: dueDate,

      priority: priority

    };

    addTask(newTask);

    setTitle("");
    setSubject("");
    setDueDate("");
    setPriority("");
  };

  return (

    <section className="task-form-section">

      <div className="section-title">

        <h2>
          ➕ Add New Task
        </h2>

        <p>
          Add a task to your study planner.
        </p>

      </div>


      <form
        className="task-form"
        onSubmit={handleSubmit}
      >


        {/* TASK TITLE */}

        <div className="form-group">

          <label htmlFor="taskTitle">
            Task Title
          </label>

          <input
            type="text"
            id="taskTitle"
            placeholder="Example: Complete CIE 1"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
          />

        </div>


        {/* SUBJECT */}

        <div className="form-group">

          <label htmlFor="subject">
            Subject
          </label>

          <select
            id="subject"
            value={subject}
            onChange={(event) =>
              setSubject(event.target.value)
            }
          >

            <option value="">
              Select Subject
            </option>

            <option value="Web Development">
              Web Development
            </option>

            <option value="JavaScript">
              JavaScript
            </option>

            <option value="Database">
              Database
            </option>

            <option value="Programming">
              Programming
            </option>

            <option value="Other">
              Other
            </option>

          </select>

        </div>


        {/* DUE DATE */}

        <div className="form-group">

          <label htmlFor="dueDate">
            Due Date
          </label>

          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(event) =>
              setDueDate(event.target.value)
            }
          />

        </div>


        {/* PRIORITY */}

        <div className="form-group">

          <label htmlFor="priority">
            Priority
          </label>

          <select
            id="priority"
            value={priority}
            onChange={(event) =>
              setPriority(event.target.value)
            }
          >

            <option value="">
              Select Priority
            </option>

            <option value="Low">
              Low
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="High">
              High
            </option>

          </select>

        </div>


        {/* BUTTON */}

        <button
          type="submit"
          className="add-task-button"
        >
          Add Task
        </button>

      </form>

    </section>
  );
}

export default TaskForm;