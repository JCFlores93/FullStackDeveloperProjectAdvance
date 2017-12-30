export class User{
    constructor(
        public id:string,
        public first_name:string,
        public last_name: string,
        public email: string,
        public dni: string,
        public ruc: string,       
        public cellphone: string,       
        public username: string,       
        public funding_status: string,       
        public approval_status: string, 
        public role: string
    ){}
}