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
