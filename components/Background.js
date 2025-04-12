export default function Background({ children }) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-transparent to-green-500 text-white">
      {children}
    </div>
  );
}
