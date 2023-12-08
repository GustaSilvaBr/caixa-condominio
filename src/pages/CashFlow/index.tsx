import  {useState} from 'react';

import './styles.scss'

import revenueArrow from '../../assets/revenueArrow.svg';
import plus from '../../assets/plus.svg';
import edit from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

import { CashFlowReports } from './CashFlowReports/Index';

import {SelectPeriod} from './SelectPeriod/index';

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

            <div className="flow-history">
                <div className="flow-research">
                    <input placeholder="Ex: paola silva ou 30,00.." type="text" />
                    <button className="plus-btn">
                        <img src={plus} alt="add flow" />
                    </button>
                </div>
                <div className="flow-list">
                    <div className="flow-item">
                        <img src={revenueArrow} alt="flow-icon" />
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
                                <img src={edit} alt="update flow" />
                            </button>
                            <button>
                                <img src={deleteIcon} alt="update flow" />
                            </button>
                        </div>
                    </div>
                    <div className="flow-item">
                        <img src={revenueArrow} alt="flow-icon" />
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
                                <img src={edit} alt="update flow" />
                            </button>
                            <button>
                                <img src={deleteIcon} alt="update flow" />
                            </button>
                        </div>
                    </div>
                    <div className="flow-item">
                        <img src={revenueArrow} alt="flow-icon" />
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
                                <img src={edit} alt="update flow" />
                            </button>
                            <button>
                                <img src={deleteIcon} alt="update flow" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}