
export default function Home() {
  return (
    <div className="bg-black text-white">
      <h1 className="text-3xl font-bold max-w-[80ch] mx-auto p-5">
        Pedro Reis Lima
      </h1>
      <div className="grid grid-cols-[30%_70%] gap-4 max-w-[80ch] mx-auto p-5">
        <div className=""><img src = "images/Foto pessoal.jpg" className="max-h-[40ch] h-auto"/></div>
        <div className="row-start-2"> linkedin / github / lates?</div>
        <div className="row-span-2 bg-blue-500 w-auto">
          <p className="text-justify">Meu nome é Pedro e sou Economista e Cientista de Dados. Mais especificamente, sou formado em economia e também mestre pela Universidade Federal do Ceará.</p>
        </div>
      </div>
    </div>
  );
}
