import  {useState} from 'react';

import './styles.scss'

import { CashFlowReports } from './CashFlowReports/Index';
import {SelectPeriod} from './SelectPeriod/index';
import {FlowHistory} from './FlowHistory/index.tsx';


import utils from '../../utils.ts';

export function CashFlow() {


    const [startedPeriod, setStartedPeriod] = useState<Date>(utils.getFirstDateDay(new Date()));
    const [endedPeriod, setEndedPeriod] = useState<Date>(utils.getLastDayOfMonth(new Date()));

    return (
        <div className="page-container payments-page">
            <div className="select-year">
                <h1>Fluxo de caixa</h1>

                <SelectPeriod 
                    startedPeriod={startedPeriod}
                    setStartedPeriod={setStartedPeriod}

                    endedPeriod={endedPeriod}
                    setEndedPeriod={setEndedPeriod}
                />
            </div>

            <CashFlowReports />

            <FlowHistory/>
        </div>
    )
}