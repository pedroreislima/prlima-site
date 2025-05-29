import { ProjectThumb } from "@/components/ProjectThumb";
import { projects } from "@/lib/projects";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {
        // about me landing section
      }
      <div className="bg-primary text-secondary flex items-center flex-col justify-center p-4 lg:pl-4 lg:pr-4 pl-8 pr-8">
        <div className="grid lg:grid-cols-[60%_40%] grid-cols-1 lg:gap-0 gap-2 max-w-[120ch] mx-auto lg:pb-5 lg:pt-5 lg:pl-2 lg:pr-2">
          <div className="row-span-2 w-auto flex flex-col justify-center">
            <div>
              <div className="pb-5">
                <h1 className="lg:text-6xl text-3xl font-bold mx-auto text-accent">
                Olá! <br/>
                </h1>
                <h1 className="lg:text-3xl text-2xl font-bold mx-auto">Me chamo Pedro,</h1>
              </div>
            </div>
            
            <div>
              <p className="text-justify">
              Sou <strong>Economista</strong> e <strong>Cientista de Dados</strong>. Mais especificamente, sou formado em economia e também mestre pela Universidade Federal do Ceará.
              </p>
            </div>
          </div>

          <div className="row-start-1 lg:col-2 lg:max-w-100 sm:max-w-120 max-w-60 mx-auto"><img src = "images/autoret sticker.png" className="h-auto"/></div> 

          <div className="row-start-4 lg:col-2 flex item-center lg:justify-center lg:gap-10 gap-5"> 
            <a href = "https://www.linkedin.com/in/pedroreisrl/"><FaLinkedin className="lg:w-10 lg:h-10 w-8 h-8 hover:fill-accent" /></a>
            <a href = "https://github.com/pedroreislima"><FaGithubSquare className="lg:w-10 lg:h-10 w-8 h-8 hover:fill-accent"/></a>
          </div>
        </div>
      </div>

      <hr className = "lg:p-2"/>

      {
        // education section
      }
      <div className = "lg:max-w-[120ch] lg:p-2 lg:pl-4 lg:pr-4 pl-8 pl4 mx-auto">
        <div className="pb-5 pt-5">
          <h2 className = "font-bold text-3xl pb-1 border-b-2 border-primary">Formação</h2>
        </div>

        <div className="pb-5 ">
          <h3 className = "text-xl">
            <strong>Graduação | Ciências Econômicas</strong>, Universidade Federal do Ceará - Fortaleza, Brasil.
          </h3>
          <p className="text-primary/60"><strong>TCC:</strong> Reincidência Criminal: O caso brasileiro e revisão sistemática da literatura de avaliação de programas.</p>
          <p className="text-primary/60">2017 - 2022</p>
        </div>

        <div className="pb-5 ">
          <h3 className = "text-xl">
            <strong>Mestrado | Economia</strong>, CAEN Universidade Federal do Ceará - Fortaleza, Brasil.
          </h3>
          <p className="text-primary/60"><strong>Dissertação:</strong> Analyzing criminal facility location of illegal airstrips in the Amazon.</p>
          <p className="text-primary/60">2023 - 2025</p>
        </div>

      </div>
      {
        // work section
      }
      <div className = "lg:max-w-[120ch] lg:p-2 lg:pl-4 lg:pr-4 pl-8 pl4 mx-auto">
        <div className="pb-5 pt-5">
          <h2 className = "font-bold text-3xl pb-1 border-b-2 border-primary">Profissional</h2>
        </div>

        <div className="pb-5 ">
          <h3 className = "text-xl">
            Healthtech | Vai Bem Business, Fortaleza, Brasil - <strong>Business Intelligence Analyst</strong>
          </h3>
          <p className="text-primary/60">Desenvolvi automações de ETL com Python, SQL e Alteryx, criando e mantendo dashboards no Power BI. Desenvolvi métricas de cobertura de serviços de saúde, gerenciei workshops de SQL e apresentei análises semanais aos stakeholders.</p>
          <p className="text-primary/60">2021 - 2022</p>
        </div>

        <div className="pb-5 mb-10">
          <h3 className = "text-xl">
            Pedro Reis Lima LTDA, Fortaleza, Brasil - <strong>Consultor de Business Intelligence</strong>
          </h3>
          <p className="text-primary/60">Prestei consultoria em análise de dados para empresas de advocacia e cobrança, desenvolvendo automações de ETL com Python e criando relatórios de resultados no Power BI.</p>
          <p className="text-primary/60">2023</p>
        </div>
      </div>
      {
      // projects
      }
      <div className = "lg:max-w-[120ch] lg:p-2 lg:pl-4 lg:pr-4 pl-8 pl4 mx-auto">
        <div className = "font-bold text-3xl">
          <h2>Projetos</h2>
        </div>

        <div>
          <div className="grid gap-4 lg:grid-cols-2 pt-4 pb-4">
                {projects.map((proj) => (
                <ProjectThumb
                    key={proj.slug}
                    title={proj.title}
                    description={proj.description}
                    path={proj.link}
                    tags={proj.tags}
                />
                ))}
            </div>
          </div>
      </div>
    </div>
  );
}
