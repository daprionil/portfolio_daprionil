import { ReactComponent as DeployIcon } from '../assets/deploy.svg';

const DeployButton = ({ url }) => {
    return (
        <div className='btn p-[2px] drop-shadow-md hover:scale-105'>
            <a target='_blank' rel="noopener noreferrer" href={url}>
                <DeployIcon className="mx-auto w-[45px] h-min" />
            </a>
        </div>
    )
}

export default DeployButton