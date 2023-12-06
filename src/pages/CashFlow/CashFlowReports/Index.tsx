import React, { useState, useEffect } from 'react'

import './styles.scss';

import expenseArrow from '../../../assets/expenseArrow.svg';
import revenueArrow from '../../../assets/revenueArrow.svg';
import savings from '../../../assets/savings.svg';

export function CashFlowReports() {

    const [reportTotals, setReportTotals] = useState<{
        savingsTotal: number,
        revenuesTotal: number,
        expensesTotal: number,
    }>({
        savingsTotal: 900,
        expensesTotal: 500,
        revenuesTotal: 300
    });


    return (
        <div className='cash-flow-reports'>
            <CashFlowReportItem
                key={1}
                iconUrl={savings}
                title='Em caixa'
                value={reportTotals.savingsTotal}
            />
            <CashFlowReportItem
                key={2}
                iconUrl={revenueArrow}
                title='Receitas'
                value={reportTotals.revenuesTotal}
            />
            <CashFlowReportItem
                key={3}
                iconUrl={expenseArrow}
                title='Despesas'
                value={reportTotals.expensesTotal}
            />
        </div>
    )
}

interface ICashFlowReportItem {
    iconUrl: string,
    title: string,
    value: number,
}

function CashFlowReportItem(props: ICashFlowReportItem) {

    return (
        <div className='cash-flow-report-item'>
            <img src={props.iconUrl} />
            <div className='flow-report-value-info'>
                <span className="flow-report-title">{props.title}</span>
                <span className="flow-report-value">R$ {props.value}</span>
            </div>
        </div>
    )
}

