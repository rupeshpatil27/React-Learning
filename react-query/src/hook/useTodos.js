import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, fetchTodo, fetchTodos, updateTodo } from "../api/todo";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    refetchOnWindowFocus: false,
  });
}

export function useTodo(id) {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
    enabled: !!id,  // dependent query: only run if id exists
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      // Snapshot the previous value
      const previous = queryClient.getQueryData(["todos"]);

      // Optimistically update the cache
      queryClient.setQueryData(["todos"], (old) => {
        return {
          ...old,
          todos: [
            ...old.todos,
            { ...newTodo, id: old.total + 1, completed: false },
          ],
          total: old.total + 1,
        };
      });

      // Return context with rollback data
      return { previous };
    },

    onError: (err, newTodo, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["todos"], context.previous);
      }
    },
    retry: 2, // override default retry for this mutation
  });
}

export function useUpdateTodo() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async ({ id, updates }) => {

        console.log(updates)
      await qc.cancelQueries({ queryKey: ["todos"] });

      const previous = qc.getQueryData(["todos"]);

      qc.setQueryData(["todos"], (old) => {
        if (!old || !Array.isArray(old.todos)) return old;
        return {
          ...old,
          todos: old.todos.map((todo) =>
            todo.id === id ? { ...todo, ...updates } : todo
          ),
        };
      });

      return { previous };
    },

    onError: (err, _, context) => {
      if (context?.previous) {
        qc.setQueryData(["todos"], context.previous);
      }
    },
  });
}

export function useDeleteTodo() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,

    onMutate: async (id) => {
      await qc.cancelQueries({ queryKey: ['todos'] });

      const previous = qc.getQueryData(['todos']);

      qc.setQueryData(['todos'], (old) => {
        if (!old || !Array.isArray(old.todos)) return old;

        return {
          ...old,
          todos: old.todos.filter((todo) => todo.id !== id),
          total: old.total - 1,
        };
      });

      return { previous };
    },

    onError: (err, id, context) => {
      if (context?.previous) {
        qc.setQueryData(['todos'], context.previous);
      }
    },

    // always sync with server
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}
