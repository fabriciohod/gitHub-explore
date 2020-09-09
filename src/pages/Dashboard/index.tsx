import React from "react";
import { Title, Form, Repositories } from "./styles";
import logoImg from "../../assets/gitHubExploreLogo.svg";
import { FiChevronRight } from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github explore" />
      <Title>Explore repositórios no Github.</Title>
      <Form action="">
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="test">
          <img
            src="https://xesque.rocketseat.dev/users/avatar/profile-c6dab8eb-2f07-44b4-b713-e7037e52e01c-1597077750930.jpg"
            alt="Fabricio H"
          />
          <div>
            <strong>fabriciohod/gitHub-explore</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://xesque.rocketseat.dev/users/avatar/profile-c6dab8eb-2f07-44b4-b713-e7037e52e01c-1597077750930.jpg"
            alt="Fabricio H"
          />
          <div>
            <strong>fabriciohod/gitHub-explore</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
