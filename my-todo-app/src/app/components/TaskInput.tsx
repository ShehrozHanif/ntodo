import React, { useState, useRef, useEffect } from 'react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
  taskInputRef: React.RefObject<HTMLInputElement>;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask, taskInputRef }) => {
  const [inputText, setInputText] = useState('');

  const handleAddTask = () => {
    onAddTask(inputText);
    setInputText('');
    taskInputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex w-full space-x-2 mb-8">
      <input
        type="text"
        ref={taskInputRef}
        className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
        placeholder="Add a new task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
        aria-label="New task input"
      />
      <button
        onClick={handleAddTask}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200"
        aria-label="Add task"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
