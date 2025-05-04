import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link href="/" className="hover:underline">
          Booknest
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/signup" className="hover:underline">
          Signup
        </Link>
        <Link href="/books" className="hover:underline">
          Books
        </Link>
        <Link href="/reviews" className="hover:underline">
          Reviews
        </Link>
        {user && (
          <>
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
            <span className="ml-2">Welcome, {user.name}!</span>
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
