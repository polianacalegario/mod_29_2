const { useState } = React;

const Task = ({ text, completed, onToggle, onDelete }) => {
  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span>{text}</span>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Fazer compras', completed: false },
    { id: 2, text: 'Estudar React', completed: true },
  ]);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => toggleTask(task.id)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<TaskList />, document.getElementById('root'));
