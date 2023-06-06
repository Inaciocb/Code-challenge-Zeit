import React from 'react';

const Curriculo: React.FC = () => {
  return (
    <div className="bg-yellow-200 min-h-screen text-brown-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src="./foto.jpeg" alt="Foto de Perfil" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Inácio Camargo Buemo</h1>
            </div>
            <p className="text-brown-700">Projetos em desenvolvimento de software com a finalidade de obtenção de experiência na área.</p>
          </div>
        </div>

        <div className="my-8">
          <h2 className="flex items-center font-bold text-2xl">
            <svg
              aria-hidden="true"
              stroke="currentColor"
              strokeWidth="1.5"
              fill = "none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
            >
              <path
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Perfil
          </h2>

          <p className="text-brown-700">
            Sou um aprendiz em desenvolvimento de software, interessado em projetos coletivos de Software e/ou Hardware.
          </p>
        </div>

        <div className="my-8">
  <h2 className="text-2xl font-bold flex items-center">
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-2"
    >
      <path
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    Formação
  </h2>
  <p className="text-brown-700">
    Ensino Médio, Riachuelo
    <br />
    Estudante de graduação superior no curso Bacharelado em Sistemas de Informação, UFSM - segundo semestre.
  </p>
</div>

<div className="my-8">
  <h2 className="text-2xl font-bold flex items-center">
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-2"
    >
      <path
        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    Cursos
  </h2>
  <p className="text-brown-700">
    Curso de Inglês, CCAA, 2011 - 2018
    <br />
    Atividade Complementar de Graduação (ACG) - Oficina de GIT, PET-SI, UFSM
    <br />
    Atividade Complementar de Graduação (ACG) - Oficina de banco de dados SQL, PET-SI, UFSM
    <br />
    Atividade Complementar de Graduação (ACG) - Oficina de revisão da linguagem C, PET-SI, UFSM
  </p>
</div>

      </div>
    </div>
  );
};

export default Curriculo;
