import React from 'react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  timestamp: number;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-3 transition duration-200 ease-in-out transform hover:scale-[1.02] 
                  ${task.completed ? 'opacity-60' : ''}`}
    >
      <div
        className="flex items-center flex-grow cursor-pointer"
        onClick={() => onToggle(task.id)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onToggle(task.id);
          }
        }}
        tabIndex={0}
        role="checkbox"
        aria-checked={task.completed}
        aria-label={`Mark task "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
      >
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          className="form-checkbox h-5 w-5 text-blue-600 rounded mr-4"
        />
        <span
          className={`text-lg text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="ml-4 p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200"
        aria-label={`Delete task "${task.text}"`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm6 3a1 1 0 100 2h-2a1 1 0 100-2h2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default TaskItem;
