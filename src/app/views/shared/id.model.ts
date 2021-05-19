export class Id {
    username: string;
    password: string;
    status: number;
    NV_ID: number;
    constructor(username: string, password: string, status: number, NV_ID: number) {
        this.NV_ID = NV_ID;
        this.username = username;
        this.password = password;
        this.status = status;
    }
}
