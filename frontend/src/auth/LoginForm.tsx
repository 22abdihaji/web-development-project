// frontend/src/components/auth/LoginForm.tsx
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const schema = z.object({
  email: z.string().email("Virheellinen sähköposti"),
  password: z.string().min(6, "Vähintään 6 merkkiä"),
});

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/auth/login", data);
      localStorage.setItem("token", res.data.token);
      router.push("/profile");
      toast.success("Kirjautuminen onnistui!");
    } catch (error) {
      toast.error("Virhe kirjautumisessa");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Sähköposti</label>
        <input {...register("email")} className="w-full p-2 border rounded" />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label>Salasana</label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Kirjaudu
      </button>
    </form>
  );
}
