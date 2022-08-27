import React, { useEffect } from "react";

import * as S from "./styled";

import { UseGithub } from "../../../hooks/hooks";

const HeaderMain = () => {
  const { githubState, getRepositorys } = UseGithub();

  return (
    <S.Container>
      <img src={githubState.user.avatar} alt="Avatar of user"></img>

      <S.ContainerData>
        <h1>{githubState.user.name}</h1>
        <p>
          <strong>Username: </strong>
          {githubState.user.login}
        </p>
        <p>
          <strong>Company: </strong>
          {githubState.user.company}
        </p>
        <p>
          <strong>Location: </strong>
          {githubState.user.location}
        </p>
        <p>
          <strong>Blog: </strong>
          {githubState.user.blog}
        </p>
      </S.ContainerData>
      <S.ContainerAdditionalData>
        <S.ContainerAllData>
          <div>
            <span>Followers</span>
            <p>{githubState.user.followers}</p>
          </div>
          <div>
            <span>Following</span>
            <p>{githubState.user.following}</p>
          </div>
          <div>
            <span>Gists</span>
            <p>{githubState.user.public_gists}</p>
          </div>
          <div>
            <span>Repos</span>
            <p>{githubState.user.public_repos}</p>
          </div>
        </S.ContainerAllData>
      </S.ContainerAdditionalData>
    </S.Container>
  );
};
export default HeaderMain;
