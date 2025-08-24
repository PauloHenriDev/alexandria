

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import bcrypt from "bcrypt";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await fetch("/api/auth/register", {
//       method: "POST",
//       body: JSON.stringify({ email, password: hashedPassword }),
//       headers: { "Content-Type": "application/json" },
//     });
//     router.push("/login");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
//       <input type="password" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} />
//       <button type="submit">Cadastrar</button>
//     </form>
//   );
// }
