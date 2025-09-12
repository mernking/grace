export default function Card({ children }) {
  return (
    <div className="bg-background rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {children}
    </div>
  );
}
