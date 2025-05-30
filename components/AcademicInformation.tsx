interface AcademicInformationProps {
  showBio?: boolean;
  showFormation?: boolean;
  showPublication?: boolean;
}

export const AcademicInformation = ({
  showBio = true,
  showFormation = true,
  showPublication = true,
}: AcademicInformationProps) => {
  return (
    <div>
      {/* Apresentação */}
      {showBio && (
        <div className="mb-10">
          <h1 className="heading-primary">Acadêmico</h1>
          <p className="pt-2 text-justify">
            Sou mestre e graduado em economia pela Universidade Federal do
            Ceará. Tenho experiência na área de Economia, com ênfase em
            Microeconomia, atuando principalmente nos seguintes temas:
            econometria espacial, políticas públicas, reincidência criminal e
            segurança pública.
          </p>
          <br />
          <a
            href="http://lattes.cnpq.br/9349012340567449"
            className="hover:text-accent underline">
            Meu Currículo Lattes.
          </a>
          <br />
          <a
            href="https://orcid.org/0009-0008-1876-2560"
            className="hover:text-accent underline">
            Meu Perfil ORCID.
          </a>
        </div>
      )}
      {/* Formação */}
      {showFormation && (
        <div className="pb-5">
          <div className="">
            <h2 className="heading-topic">Formação</h2>
          </div>
          <div className="pb-5 ">
            <h3 className="text-xl">
              <strong>Graduação | Ciências Econômicas</strong>, Universidade
              Federal do Ceará - Fortaleza, Brasil.
            </h3>
            <p className="text-primary/60">
              <strong>TCC:</strong>{" "}
              <a
                className="hover:text-accent underline"
                href="https://repositorio.ufc.br/handle/riufc/72483">
                Reincidência Criminal: O caso brasileiro e revisão sistemática
                da literatura de avaliação de programas.
              </a>
            </p>
            <p className="text-primary/60">2017 - 2022</p>
          </div>

          <div className="pb-4">
            <h3 className="text-xl">
              <strong>Mestrado | Economia</strong>, CAEN Universidade Federal do
              Ceará - Fortaleza, Brasil.
            </h3>
            <p className="text-primary/60">
              <strong>Dissertação:</strong>{" "}
              <a
                className="hover:text-accent underline"
                href="https://repositorio.ufc.br/handle/riufc/80302">
                Analyzing criminal facility location of illegal airstrips in the
                Amazon.
              </a>
            </p>
            <p className="text-primary/60">2023 - 2025</p>
          </div>
        </div>
      )}
      {/* Publicações */}
      {showPublication && (
        <div className="pb-5">
          <div className="">
            <h2 className="heading-topic">Publicações</h2>
          </div>

          <div className="pb-4 ">
            <h3 className="text-xl">
              <strong>
                Reincidência criminal: O caso brasileiro e revisão sistemática
                da literatura de avaliação de programas.
              </strong>
            </h3>
            <p className="text-lg">
              Revista Brasileira de Segurança Pública, v. 19, n. 1, p. 276–299,
              2025.{" "}
            </p>
            <p className="text-primary/60">
              <strong>Autores:</strong> Pedro Reis Lima, Georgeana Silveira,
              Guilherme Irffi e Walacy Maciel de Oliveira.
            </p>
            <a
              className="text-primary/60 hover:text-accent underline"
              href="https://doi.org/10.31060/rbsp.2025.v19.n1.1970">
              https://doi.org/10.31060/rbsp.2025.v19.n1.1970
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
