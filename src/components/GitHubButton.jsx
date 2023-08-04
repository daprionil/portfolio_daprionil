import { ReactComponent as GithubIcon } from '../assets/github.svg';

const GitHubButton = ({ url }) => {
    return (
        <div className='btn p-0 drop-shadow-md hover:scale-105'>
            <a target='_blank' href={url} rel='noopener noreferrer'>
                <GithubIcon />
            </a>
        </div>
    )
}

export default GitHubButton