import './globals.css';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-[url('/img/image1.jpg')] bg-cover bg-center justify-center items-center">
      <h1 className="text-white text-[80px] font-bold">Bem Vindo!</h1>
      <div className="text-white text-[35px] flex gap-[10px]">
        <Link href="/login">
          <button className="bg-red-500 pl-[10px] pr-[10px] pt[5px] pb-[5px] rounded-[10px] cursor-pointer">Login</button>
        </Link>
        <Link href="/cadastro/page.tsx">
          <button className="bg-red-500 pl-[10px] pr-[10px] pt[5px] pb-[5px] rounded-[10px] cursor-pointer">Cadastrar</button>
        </Link>
      </div>
    </main>
  );
}
