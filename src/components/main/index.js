
import * as S from './styled'

//Components
import CardRepository from './card-repository/index';
import HeaderMain from './header-main/index';
import { UseGithub } from '../../hooks/hooks';


const Main = () => {
    const { githubState } = UseGithub();

    const RepositoriesItems = githubState.repositories.map((item) => 
        <CardRepository  
        key={item.id}
        name={item.name}
        linkToRepo={item.html_url}
        fullName={item.full_name}></CardRepository>
    )
    return(
        <S.Container>
            <S.ContainerHeader>
                
                <HeaderMain></HeaderMain>
            </S.ContainerHeader>

            <h1>repositories</h1>
            <S.ContainerMain>
                {githubState.repositories.length > 0 ?RepositoriesItems: '...'}
            </S.ContainerMain>
        </S.Container>
    )
}
export default Main;