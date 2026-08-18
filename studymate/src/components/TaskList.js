import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  deleteTask,
  editTask
}) {

  return (

    <section
      className="task-list"
      id="tasks"
    >

      {tasks.length === 0 ? (

        <div className="empty-message">

          <div className="empty-icon">
            📝
          </div>

          <h3>
            No tasks added yet
          </h3>

          <p>
            Your added tasks will appear here.
          </p>

        </div>

      ) : (

        tasks.map((task) => (

          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />

        ))

      )}

    </section>
  );
}

export default TaskList;