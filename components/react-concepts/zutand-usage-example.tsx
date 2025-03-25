import { useCounterStore } from "@/lib/store/counter";

/**
 * This component demonstrates the usage of Zustand for state management in a React application.
 * Zustand is a small, fast, and scalable state management solution that provides a simple API
 * for managing global state in React applications. It allows you to create a store with state
 * and actions, and then use that store in your components to read and update the state.
 *
 * In this example, we use a Zustand store to manage a simple counter. The store provides
 * the current count and actions to increment, decrement, and reset the count. The Counter
 * component uses these actions to update the count and display the current value.
 */

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <h2 className="text-2xl font-bold">Zustand Counter Example</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          onClick={increment}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
      <button
        onClick={reset}
        className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
      >
        Reset
      </button>
    </div>
  );
}
