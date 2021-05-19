export class NguyenLieu {
    NL_ID: number;
    NL_Ten: string;
    NL_DonViTinh: string;
    NL_SoLuong: number;

    constructor(NL_ID: number, NL_Ten: string, NL_DonViTinh: string, NL_SoLuong: number) {
        this.NL_ID = NL_ID;
        this.NL_Ten = NL_Ten;
        this.NL_DonViTinh = NL_DonViTinh;
        this.NL_SoLuong = NL_SoLuong;
    }
}
