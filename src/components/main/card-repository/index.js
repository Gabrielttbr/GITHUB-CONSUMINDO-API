import * as S from './styled'
import { UseGithub } from '../../../hooks/hooks';

const CardRepository = ({name,  fullName, linkToRepo}) => {
    const { githubState } = UseGithub();
    return(
        <S.Container>
            <h1>{name}</h1>
            <p>full_name: </p>
            <a href={linkToRepo} target="_blank" rel="noreferrer"> {fullName}</a>
        </S.Container>
    )
};
export default CardRepository;