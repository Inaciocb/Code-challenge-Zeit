import React from 'react';

const Curriculo: React.FC = () => {
  return (
    <>
      <div className="bg-yellow-200 min-h-screen text-brown-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img src="/perfil.jpeg" alt="Foto de Perfil" className="w-full h-full object-cover" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold">Inácio Camargo Buemo</h1>
              <p className="text-brown-700">Projetos em desenvolvimento de software com a finalidade de obtenção de experiência na área.</p>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-bold">Perfil</h2>
            <p className="text-brown-700">
              Sou um aprendiz em desenvolvimento de software, interessado em projetos coletivos de Software e/ou Hardware.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-bold">Formação</h2>
            <p className="text-brown-700">
              Ensino Médio, Riachuelo
              <br />
              Estudante de graduação superior no curso Bacharelado em Sistemas de Informação, UFSM - segundo semestre.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-bold">Cursos</h2>
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
    </>
  );
};

export default Curriculo;
