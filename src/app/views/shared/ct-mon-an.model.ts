export class CtMonAn {
    CTMonAn_ID: number;
    MonAn_ID: number;
    NL_ID: number;
    ChiTietMonAn_SoLuong: number;
    ChiTietMonAn_DonViTinh: string;
    GhiChu: string;
    constructor(CTMonAn_ID: number,  MonAn_ID: number, NL_ID: number, ChiTietMonAn_SoLuong: number,
        ChiTietMonAn_DonViTinh: string, GhiChu: string) {
            this.CTMonAn_ID = CTMonAn_ID;
            this.MonAn_ID = MonAn_ID;
            this.NL_ID = NL_ID;
            this.ChiTietMonAn_SoLuong = ChiTietMonAn_SoLuong;
            this.ChiTietMonAn_DonViTinh = ChiTietMonAn_DonViTinh;
            this.GhiChu = GhiChu;

    }
}
