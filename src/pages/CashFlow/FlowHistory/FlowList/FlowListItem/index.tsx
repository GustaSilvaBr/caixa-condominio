import './styles.scss';

import revenueArrowIcon from '../../../../../assets/revenueArrow.svg';
import editIcon from '../../../../../assets/edit.svg';
import deleteIcon from '../../../../../assets/delete.svg';



export function FlowListItem() {
    return (
        <div className="flow-item">
            <img src={revenueArrowIcon} alt="flow-icon" />
            <div className="flow-info">
                <div>
                    <span className="flow-item-title">
                        William Santos
                    </span>
                    <span className="flow-item-value">
                        R$ 30, 00
                    </span>
                </div>
                <div>
                    <span className="flow-item-date">
                        01/01/2022
                    </span>
                </div>
            </div>
            <div className="flow-item-actions">
                <button>
                    <img src={editIcon} alt="update flow" />
                </button>
                <button>
                    <img src={deleteIcon} alt="update flow" />
                </button>
            </div>
        </div>
    )
}