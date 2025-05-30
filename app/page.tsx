import { ProjectThumb } from "@/components/ProjectThumb";
import { projects } from "@/lib/projects";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AcademicInformation } from "@/components/AcademicInformation";
import { ProfessionalInformation } from "@/components/ProfessionalInformation";

export default function Home() {
  return (
    <div>
      {
        // about me landing section
      }
      <div className="bg-primary text-secondary flex items-center flex-col justify-center p-4 lg:pl-4 lg:pr-4 pl-8 pr-8">
        <div className="grid lg:grid-cols-[60%_40%] grid-cols-1 lg:gap-0 gap-2 read-width mx-auto lg:pb-5 lg:pt-5 lg:pl-2 lg:pr-2">
          <div className="row-span-2 w-auto flex flex-col justify-center">
            <div>
              <div className="pb-5">
                <h1 className="lg:text-6xl text-3xl font-bold mx-auto text-accent">
                  Olá! <br />
                </h1>
                <h1 className="lg:text-3xl text-2xl font-bold mx-auto">
                  Me chamo Pedro,
                </h1>
              </div>
            </div>

            <div>
              <p className="text-justify">
                Sou <strong>Economista</strong> e{" "}
                <strong>Cientista de Dados</strong>. Mais especificamente, sou
                formado em economia e também mestre pela Universidade Federal do
                Ceará.
              </p>
            </div>
          </div>

          <div className="row-start-1 lg:col-2 lg:max-w-100 sm:max-w-120 max-w-60 mx-auto">
            <img src="images/autoret sticker.png" className="h-auto" />
          </div>

          <div className="row-start-4 lg:col-2 flex item-center lg:justify-center lg:gap-10 gap-5">
            <a href="https://www.linkedin.com/in/pedroreisrl/">
              <FaLinkedin className="lg:w-10 lg:h-10 w-8 h-8 hover:fill-accent" />
            </a>
            <a href="https://github.com/pedroreislima">
              <FaGithubSquare className="lg:w-10 lg:h-10 w-8 h-8 hover:fill-accent" />
            </a>
          </div>
        </div>
      </div>

      <hr className="lg:p-2" />

      {
        // projects
      }
      <div className="read-width lg:p-2 lg:pl-4 lg:pr-4 pl-8 pr-8 mx-auto">
        <div className="pb-5 pt-5">
          <h2 className="font-bold text-3xl pb-1 border-b-2 border-primary">
            Projetos
          </h2>
        </div>
        <ProjectThumb
          projects={projects.map(({ link, ...rest }) => ({
            ...rest,
            path: link,
          }))}
        />
      </div>

      <div className="read-width lg:p-4 lg:pl-4 lg:pr-4 pl-8 pr-8 mx-auto lg:grid lg:grid-cols-2 ">
        {
          // Blog (futuramente)
        }
        <div className="">
          <AcademicInformation showBio={false} showPublication={false} />
        </div>
        {
          // More about me (futuramente)
        }
        <ProfessionalInformation />
      </div>
    </div>
  );
}
