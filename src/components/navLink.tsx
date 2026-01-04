export default function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <li className="cursor-pointer hover:text-blue-600 transition">
      {children}
    </li>
  );
}
