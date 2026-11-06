"use client";

import { useState, useEffect } from "react";

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@/components/tailgrids/core/table";

import { Toggle } from "@/components/tailgrids/core/toggle";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/tailgrids/core/native-select";
import { Pagination } from "@/components/tailgrids/core/pagination";
import { Badge } from "@/components/tailgrids/core/badge";
import { Button } from "@/components/tailgrids/core/button";

import { ClockThree, Trash1, Check, Plus } from "@tailgrids/icons";

import { fetchTodos } from "./data/todos";
import type { TodoType } from "./data/todos";

export default function TodosPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [todosRaw, setTodosRaw] = useState<TodoType[]>([]);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [numPages, setNumPages] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const nextTodoId =
    todosRaw.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;

  // 1. ดึงข้อมูล
  useEffect(() => {
    fetchTodos()
      .then(setTodosRaw)
      .catch((error: unknown) => {
        console.error("Failed to fetch todos:", error);
        setFetchError("Unable to load todos. Please try again later.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  // 2. กรองรายการตามสถานะ
  useEffect(() => {
    // These derived states intentionally follow the requested effect flow.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTodos(
      onlyWaiting ? todosRaw.filter((todo) => !todo.completed) : todosRaw
    );
  }, [todosRaw, onlyWaiting]);

  // 3. คำนวณจำนวนหน้า
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNumPages(Math.ceil(todos.length / itemsPerPage));
  }, [todos, itemsPerPage]);

  // 4. ปรับหน้าปัจจุบันให้อยู่ในช่วงที่ใช้งานได้
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurPage((currentPage) => {
      if (numPages === 0) return 0;
      if (currentPage === 0) return 1;
      if (currentPage > numPages) return numPages;
      return currentPage;
    });
  }, [numPages]);

  const deleteClick = (id: number) => {
    setTodosRaw(todosRaw.filter((todo) => todo.id !== id));
  };

  const waitingClick = (id: number) => {
    const todo = todosRaw.find((item) => item.id === id);
    if (!todo) return;

    todo.completed = true;
    setTodosRaw([...todosRaw]);
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = newTodoTitle.trim();
    if (!title) return;

    const newTodo: TodoType = {
      userId: todosRaw[0]?.userId ?? 1,
      id: nextTodoId,
      title,
      completed: false,
    };
    const updatedTodos = [...todosRaw, newTodo];
    setTodosRaw(updatedTodos);

    const updatedVisibleCount = onlyWaiting
      ? updatedTodos.filter((todo) => !todo.completed).length
      : updatedTodos.length;
    setCurPage(Math.ceil(updatedVisibleCount / itemsPerPage));
    setNewTodoTitle("");
    setIsAddDialogOpen(false);
  };

  const pageTodos = todos.slice(
    (curPage - 1) * itemsPerPage,
    curPage * itemsPerPage
  );

  return (
    <div className="mt-4 w-150 mx-auto">
      {/* controller */}
      <div className="flex justify-between">
        {/* toggle */}
        <Toggle
          label="Show only waiting"
          checked={onlyWaiting}
          onChange={(event) => setOnlyWaiting(event.currentTarget.checked)}
        />

        {/* dropdown */}
        <div>
          <NativeSelect
            aria-label="Items per page"
            value={itemsPerPage}
            onChange={(event) => setItemsPerPage(Number(event.target.value))}
          >
            <NativeSelectOption value="5">5 items per page</NativeSelectOption>
            <NativeSelectOption value="10">
              10 items per page
            </NativeSelectOption>
            <NativeSelectOption value="50">
              50 items per page
            </NativeSelectOption>
          </NativeSelect>
        </div>
      </div>

      {/* table */}
      <div className="mt-2">
        <TableRoot>
          <TableHeader>
            <TableRow>
              <TableHead scope="col" className="text-right">
                ID
              </TableHead>
              <TableHead scope="col">TITLE</TableHead>

              <TableHead scope="col">
                <div className="flex items-center justify-end gap-2">
                  <span>COMPLETED</span>
                  <Button
                    size="xs"
                    iconOnly
                    aria-label="Add todo"
                    className="h-7 w-7 p-0"
                    onClick={() => setIsAddDialogOpen(true)}
                  >
                    <Plus />
                  </Button>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  Loading todos...
                </TableCell>
              </TableRow>
            ) : fetchError ? (
              <TableRow>
                <TableCell colSpan={3} role="alert" className="text-center">
                  {fetchError}
                </TableCell>
              </TableRow>
            ) : pageTodos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No todos to show.
                </TableCell>
              </TableRow>
            ) : (
              pageTodos.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-right">
                    <Badge
                      size="lg"
                      className="rounded-lg bg-gray-500 text-white font-bold"
                    >
                      {item.id}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="flex justify-end gap-1">
                    {item.completed ? (
                      <Button
                        size="sm"
                        className="h-8 bg-green-700 text-white pointer-events-none"
                      >
                        Done
                        <Check />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="h-8 bg-yellow-500 hover:bg-yellow-700 hover:text-yellow-200 p-2"
                        onClick={() => waitingClick(item.id)}
                      >
                        Waiting
                        <ClockThree />
                      </Button>
                    )}
                    <Button
                      variant="danger"
                      className="h-8 p-2"
                      aria-label={`Delete todo ${item.id}`}
                      onClick={() => deleteClick(item.id)}
                    >
                      <Trash1 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </TableRoot>
      </div>

      {/* pagination */}
      {numPages > 0 && (
        <div className="mt-2 w-2/3 mx-auto">
          <Pagination
            currentPage={curPage}
            totalPages={numPages}
            onPageChange={(page) => setCurPage(page)}
            sideLayout="label"
          />
        </div>
      )}

      {isAddDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setIsAddDialogOpen(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsAddDialogOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-todo-title"
            className="w-full max-w-md rounded-lg bg-white p-5 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2
                id="new-todo-title"
                className="flex items-center gap-2 text-lg font-semibold text-gray-900"
              >
                <span className="flex size-8 items-center justify-center rounded bg-blue-100 text-blue-700">
                  <Plus />
                </span>
                New todo
              </h2>
              <button
                type="button"
                aria-label="Close dialog"
                className="rounded p-1 text-gray-500 hover:bg-gray-100"
                onClick={() => setIsAddDialogOpen(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={addTodo}>
              <label
                htmlFor="new-todo-id"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                ID (Auto)
              </label>
              <input
                id="new-todo-id"
                value={nextTodoId}
                readOnly
                className="mb-4 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700"
              />

              <label
                htmlFor="new-todo-title-input"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="new-todo-title-input"
                value={newTodoTitle}
                onChange={(event) => setNewTodoTitle(event.target.value)}
                placeholder="Enter todo title"
                required
                autoFocus
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

              <div className="mt-5 flex justify-end gap-2">
                <Button
                  type="button"
                  appearance="outline"
                  onClick={() => {
                    setNewTodoTitle("");
                    setIsAddDialogOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit">Add todo</Button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
