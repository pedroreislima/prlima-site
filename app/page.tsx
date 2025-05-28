import { ProjectThumb } from "@/components/ProjectThumb";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div>
      {
        // about me landing section
      }
      <div className="bg-primary text-secondary pb-5 flex items-center flex-col justify-center p-5">
        {
          // this hello only shows on smaler screens 
        }
        <div className = "lg:hidden pl-5 pr-5 flex flex-col justify-center items-center">
          <h1 className="lg:text-xl text-2xl font-bold mx-auto text-accent">
            Olá! <br/>
          </h1>
          <h1 className="font-bold mx-auto">Me chamo Pedro Reis Lima.</h1>
        </div>

        <div className="grid lg:grid-cols-[60%_40%] grid-cols-1 lg:gap-0 gap-2 max-w-[120ch] mx-auto lg:pb-5 lg:pt-5">
          <div className="row-span-2 w-auto flex flex-col justify-center">
            <div>
              <div className=" hidden lg:block pb-5">
                <h1 className="lg:text-6xl text-2xl font-bold mx-auto text-accent">
                Olá! <br/>
                </h1>
                <h1 className="lg:text-3xl text-2xl font-bold mx-auto">Me chamo Pedro Reis Lima.</h1>
              </div>
            </div>
            
            <div>
              <p className="text-justify">
              Sou Economista e Cientista de Dados. Mais especificamente, sou formado em economia e também mestre pela Universidade Federal do Ceará.
              </p>
            </div>
          </div>

          <div className="row-start-1 lg:col-2 lg:max-w-100 sm:max-w-120 max-w-60 mx-auto"><img src = "images/autoret sticker.png" className="h-auto"/></div> 

          <div className="row-start-2 lg:col-2 flex item-center justify-center lg:gap-10 gap-5"> 
            <a href = "https://www.linkedin.com/in/pedroreisrl/"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className = "lg:w=8 lg:h-8 w-8 h-8 hover:fill-accent">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg></a>
            <a href = "https://github.com/pedroreislima"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className = "lg:w=8 lg:h-8 w-8 h-8 hover:fill-accent">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg></a>
          </div>

        </div>
      </div>

      <hr className = "lg:p-2"/>

      {
        // education section
      }
      <div className = "lg:max-w-[120ch] lg:p-0 pl-4 pr-4 mx-auto">
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
      <div className = "lg:max-w-[120ch] lg:p-0 pl-4 pr-4 mx-auto">
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

        {
        // projects
        }
        <div className = "">
          <div className = "font-bold text-3xl text-secondary bg-primary">
            <h2>Projetos</h2>
          </div>

          <div>
            <div className="grid gap-4 grid-cols-2 pt-4 pb-4">
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
    </div>
  );
}
