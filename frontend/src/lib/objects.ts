export interface UserRegisterData {
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly password: string;
    readonly tel: string;
}

export interface UserLoginData {
    readonly email: string;
    readonly password: string;
}

export interface CompanyRegisterData {
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

export interface CompanyLoginData {
    readonly email: string;
    readonly password: string;
}