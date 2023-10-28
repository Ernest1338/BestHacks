export interface UserRegister {
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly password: string;
    readonly tel: string;
}

export interface UserLogin {
    readonly email: string;
    readonly password: string;
}

export interface CompanyRegister {
    readonly nip: string;
    readonly regon: string;
    readonly nipsc: string;
    readonly regonsc: string;
    readonly krs: string;
    readonly pkd: string;
    readonly compname: string;
    readonly name: string;
    readonly surname: string;
}

export interface CompanyLogin {
    readonly email: string;
    readonly password: string;
}