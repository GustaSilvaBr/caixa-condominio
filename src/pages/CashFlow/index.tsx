import './styles.scss'

import expenseArrow from '../../assets/expenseArrow.svg';
import revenueArrow from '../../assets/revenueArrow.svg';

export function CashFlow() {
    return (
        <div className="page-container payments-page">
            <div className="select-year">
                <h1>Fluxo de caixa</h1>
                <select>
                    <option>
                        2023
                    </option>
                    <option>
                        2024
                    </option>
                </select>
            </div>

            <div className="cash-per-month">
                <div className="select-month">
                    <button>left</button>
                    <span>Julho</span>
                    <button>right</button>
                </div>
                <span>R$ 3.000</span>
            </div>

            <div className="total-of-flows">
                <div>
                    <img src={revenueArrow} alt="revenue arrow" />
                    <div className="total-flow-info">
                        <span className="total-flow-kind">Receitas</span>
                        <span className="total-flow-value"> R$ 900</span>
                    </div>

                </div>
                <div >
                    <img src={expenseArrow} alt="expense arrow" />
                    <div className="total-flow-info">
                        <span className="total-flow-kind">Despesas</span>
                        <span className="total-flow-value"> R$ 400</span>
                    </div>
                </div>
            </div>

            <div className="flow-history">
                <div>
                    <input placeholder="Ex: paola silva ou 30,00.." type="text" />
                    <button className="plus-btn">
                        Add
                    </button>
                </div>
                <div className="flow-list">
                    <div className="flow-item">
                        <img src="" alt="flow-icon" />
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
                                Edit
                            </button>
                            <button>
                                Del
                            </button>
                        </div>
                    </div>
                    <div className="flow-item">
                        <img src="" alt="flow-icon" />
                        <div className="flow-info">
                            <div>
                                <span className="flow-item-title">
                                    Paola Silva
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
                                Edit
                            </button>
                            <button>
                                Del
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}