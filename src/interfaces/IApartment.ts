interface IPerson {
    name:string,
    phoneNumber:string,
}

export interface IApartment {
    id:string,
    aptNumber: number,
    side:"A" | "B",
    owner:IPerson
    tenant:IPerson
}