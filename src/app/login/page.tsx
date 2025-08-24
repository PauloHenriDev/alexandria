import '../globals.css';

export default function Home() {
  return (
    <main className="">
        <h1 className="">Bem Vindo!</h1>
        <div className="flex flex-col bg-red-500 w-[1000px] h-[300px] rounded-[10px] justify-center items-center">
            <input type="text" placeholder="Email" className="w-[300px] h-[50px] rounded-[10px] border-2 border-gray-300" />
            <input type="password" placeholder="Senha" className="w-[300px] h-[50px] rounded-[10px] border-2 border-gray-300" />
            <button className="w-[300px] h-[50px] rounded-[10px] bg-blue-500 text-white">Entrar</button>
        </div>
    </main>
  );
}

// "use client";
// import { signIn } from "next-auth/react";

// export default function Login() {
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as any;
//     await signIn("credentials", {
//       redirect: true,
//       email: form.email.value,
//       password: form.password.value,
//       callbackUrl: "/dashboard",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" />
//       <input type="password" name="password" placeholder="Senha" />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
