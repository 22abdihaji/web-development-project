import Link from "next/link";
import ProtectedRoute from "../common/ProtectedRoute";
import { AdminPanel } from "../admin/AdminPanel";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Booknest</h1>
      <p>
        <Link href="/login">Login</Link> | <Link href="/signup">Signup</Link> |{" "}
        <Link href="/books">Books</Link> | <Link href="/reviews">Reviews</Link>
      </p>
    </div>
  );
}
