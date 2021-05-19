export class NhaCungCap {
    NCC_ID: number;
    NCC_Ten: string;
    NCC_DiaChi: string;
    NCC_SDT: string;
    constructor(NCC_ID: number, NCC_Ten: string,  NCC_DiaChi: string, NCC_SDT: string) {
        this.NCC_ID = NCC_ID;
        this.NCC_Ten = NCC_Ten;
        this.NCC_DiaChi = NCC_DiaChi;
        this.NCC_SDT  = NCC_SDT;
    }
}
