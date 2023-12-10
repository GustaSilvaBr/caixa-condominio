import {IApartment} from './IApartment';

export interface ICashFlow{
    id:string,
    isRevenue:boolean,
    apartment:IApartment,
    desc:string,
    paymentDate: Date,
    paymentValue:number,
}