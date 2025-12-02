import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  timestamp: number;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = React.memo(({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg mt-8">
        No tasks yet. Add a new one above!
      </div>
    );
  }

  return (
    <div className="w-full">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
});

TaskList.displayName = 'TaskList'; // Add display name for React.memo

export default TaskList;
