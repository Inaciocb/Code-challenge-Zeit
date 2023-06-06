import React, { useEffect, useState } from 'react';
const Curriculo: React.FC = () => {
  
  return (
    <div className="bg-yellow-200 min-h-screen text-brown-700">
      <div className="container mx-auto px-4 py-8 flex">
        <div className="w-3/4">
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="./foto.jpeg"
                alt="Foto de Perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">Inácio Camargo Buemo</h1>
              </div>
              <p className="text-brown-700">
                Projetos em desenvolvimento de software com a finalidade de
                obtenção de experiência na área.
              </p>
            </div>
          </div>

          <div className="my-8">
            <h2 className="flex items-center font-bold text-2xl">
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
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
              Sou um aprendiz em desenvolvimento de software, interessado em
              projetos coletivos de Software e/ou Hardware.
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
              Estudante de graduação superior no curso Bacharelado em Sistemas
              de Informação, UFSM - segundo semestre.
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
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Cursos
            </h2>
            <p className="text-brown-700">
              Curso de Inglês, CCAA, 2011 - 2018
              <br />
              Atividade Complementar de Graduação (ACG) - Oficina de GIT,
              PET-SI, UFSM
              <br />
              Atividade Complementar de Graduação (ACG) - Oficina de banco de
              dados SQL, PET-SI, UFSM
              <br />
              Atividade Complementar de Graduação (ACG) - Oficina de revisão da
              linguagem C, PET-SI, UFSM
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
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Idiomas
            </h2>
            <p className="text-brown-700">
              Português - Nativo.
              <br />
              Inglês - C2, fluente.
            </p>
          </div>
        </div>
        <div className="w-1/4 ml-8">
          <div className="my-8">
            <h2 className="text-2xl font-bold flex items-center">
              Dados pessoais
            </h2>
            <ul className="text-brown-700">
              <li>Santa Maria - RS</li>
              <li>Nacionalidade: Brasileiro</li>
              <li>
                <a
                  href="https://wa.me/55991246983"
                  className="text-blue-500 hover:underline"
                >
                  Telefone: (55) 991246983
                </a>
              </li>
              <li>
                <a
                  href="mailto:inaciocbuemo@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  E-mail: inaciocbuemo@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="w-2/8">
            <div className="sticky top-8">
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/Inaciocb" className="btn-link">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/in%C3%A1cio-camargo-buemo-4a0b05254/"
                    className="btn-link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewars.com/users/Inaciocb"
                    className="btn-link"
                  >
                    CodeWars
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">
                  Competências
                </h2>
                <div className="my-4">
                  <h3 className="font-bold">Programação na linguagem C</h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-c"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">Programação na linguagem Java</h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-java"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">Programação na linguagem C++</h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-cpp"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">Programação na linguagem Python</h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-python"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">Conhecimentos front-end</h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-frontend"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">Uso da tecnologia GIT</h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-git"
                      style={{ width: "63%" }}
                    ></div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">
                    Uso de sistemas baseados no kernel Linux
                  </h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-linux"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">Uso de sistemas Windows</h3>
                  <div className="h-2 progress-bar-bg rounded">
                    <div
                      className="h-full bg-brown-700 progress-bar-windows"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculo;
