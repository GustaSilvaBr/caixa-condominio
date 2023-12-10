import './styles.scss';

import plusIcon from '../../../assets/plus.svg';


import {FlowResearch} from './FlowResearch/index';
import {FlowList} from './FlowList/index';

export function FlowHistory(){
    //research state will be here
    return (
        <div className="flow-history">
                <div className="flex-row">
                    <FlowResearch/>
                    <button className="plus-btn">
                        <img src={plusIcon} alt="add flow" />
                    </button>
                </div>
                <FlowList/>
            </div>
    )
}
