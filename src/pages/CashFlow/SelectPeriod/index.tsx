import './styles.scss';

import utils from '../../../utils'

interface ISelectPeriod {
    startedPeriod: Date;
    setStartedPeriod: (date: Date) => void,
    endedPeriod: Date;
    setEndedPeriod: (date: Date) => void,
}


export function SelectPeriod(props: ISelectPeriod) {

    return (
        <div className="select-period">
            <div className="period-group">
                <label>De</label>
                <input defaultValue={utils.getDateFormattedToInput(props.startedPeriod)} type="date" name="period-started"/>
            </div>
            <div className="period-group">
                <label>até</label>
                <input defaultValue={utils.getDateFormattedToInput(props.endedPeriod)}  type="date" name="period-ended"/>
            </div>
        </div>
    )
}
