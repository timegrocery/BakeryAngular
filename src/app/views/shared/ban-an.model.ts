export class BanAn {
    Ban_ID: number;
    Ban_Ten: string;
    Ban_Loai: string;
    Ban_SoNguoi: number;
    Ban_TrangThai: string;

    constructor(Ban_ID: number, Ban_Ten: string , Ban_Loai: string, Ban_SoNguoi: number, Ban_TrangThai: string) {
        this.Ban_ID = Ban_ID;
        this.Ban_Ten = Ban_Ten;
        this.Ban_Loai = Ban_Loai;
        this.Ban_SoNguoi = Ban_SoNguoi;
        this.Ban_TrangThai = Ban_TrangThai;
    }

}
