import { Tooltip } from 'react-tooltip';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const GitHubButton = ({ url }) => {
    return (
        <>
            <div data-tooltip-content="Repo Github" data-tooltip-id={`${url}_github`}  className='btn p-0 drop-shadow-md hover:scale-105'>
                <a target='_blank' href={url} rel='noopener noreferrer'>
                    <GithubIcon />
                </a>
            </div>
            <Tooltip id={`${url}_github`}/>
        </>
    )
}

export default GitHubButton