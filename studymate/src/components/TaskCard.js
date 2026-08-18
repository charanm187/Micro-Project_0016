function TaskCard({
  task,
  deleteTask,
  editTask
}) {

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(task.id);
    }
  };


  const handleEdit = () => {

    const newTitle = window.prompt(
      "Enter task title:",
      task.title
    );

    if (newTitle === null) {
      return;
    }


    const newSubject = window.prompt(
      "Enter subject:",
      task.subject
    );

    if (newSubject === null) {
      return;
    }


    const newDate = window.prompt(
      "Enter due date (YYYY-MM-DD):",
      task.dueDate
    );

    if (newDate === null) {
      return;
    }


    const newPriority = window.prompt(
      "Enter priority (Low, Medium, High):",
      task.priority
    );

    if (newPriority === null) {
      return;
    }


    const updatedTask = {
      ...task,
      title: newTitle,
      subject: newSubject,
      dueDate: newDate,
      priority: newPriority
    };


    editTask(task.id, updatedTask);
  };


  return (
    <div className="task-card">

      <div className="task-details">

        <h3>
          {task.title}
        </h3>

        <div className="task-meta">

          <span className="subject-tag">
            {task.subject}
          </span>

          <span>
            📅 {task.dueDate}
          </span>

          <span
            className={
              "priority-" + task.priority.toLowerCase()
            }
          >
            {task.priority} Priority
          </span>

        </div>

      </div>


      <div className="task-actions">

        <button
          className="edit-button"
          title="Edit Task"
          onClick={handleEdit}
        >
          ✏️
        </button>


        <button
          className="delete-button"
          title="Delete Task"
          onClick={handleDelete}
        >
          🗑️
        </button>

      </div>

    </div>
  );
}

export default TaskCard;