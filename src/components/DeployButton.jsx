import { Tooltip } from 'react-tooltip';
import { ReactComponent as DeployIcon } from '../assets/deploy.svg';

const DeployButton = ({ url }) => {
    return (
        <>
            <div data-tooltip-id={url} data-tooltip-content="Deploy Project" className='btn p-[2px] drop-shadow-md hover:scale-105'>
                <a target='_blank' rel="noopener noreferrer" href={url}>
                    <DeployIcon className="mx-auto w-[45px] h-min" />
                </a>
            </div>
            <Tooltip id={url}/>
        </>
    )
}

export default DeployButton