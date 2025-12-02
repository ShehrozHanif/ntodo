'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  timestamp: number;
}

const MAX_TASKS_LIMIT = 100; // As per spec for smooth performance

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskInputRef = useRef<HTMLInputElement>(null);

  // Load tasks from local storage on initial mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('todo-tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    taskInputRef.current?.focus(); // Focus input on load
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) return; // Prevent empty tasks
    
    // Prevent duplicate tasks (case-insensitive, trimmed comparison)
    const isDuplicate = tasks.some(
      (task) => task.text.toLowerCase() === trimmedText.toLowerCase()
    );
    if (isDuplicate) {
      alert('Task already exists!'); // Simple feedback for duplicate
      return;
    }

    if (tasks.length >= MAX_TASKS_LIMIT) {
      alert(`Maximum ${MAX_TASKS_LIMIT} tasks reached. Please complete or delete some tasks.`);
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(), // Simple unique ID
      text: trimmedText,
      completed: false,
      timestamp: Date.now(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <Header />
      <main className="flex flex-col items-center w-full max-w-md px-4">
        <TaskInput onAddTask={addTask} taskInputRef={taskInputRef} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>
      <Footer />
    </div>
  );
}
