export class CtDonNhapNl {
    CTDonNhap_ID: number;
    DonNhap_ID: number;
    NL_ID: number;
    ChiTietDon_SoLuong: number;
    ChiTietDon_DonViTinh: string;
    ChiTietDon_DonGia: number;
    ChiTietDon_ThanhTien: number;
    constructor(CTDonNhap_ID: number, DonNhap_ID: number, NL_ID: number, ChiTietDon_SoLuong: number,
        ChiTietDon_DonViTinh: string, ChiTietDon_DonGia: number,  ChiTietDon_ThanhTien: number) {
            this.CTDonNhap_ID = CTDonNhap_ID;
            this.DonNhap_ID = DonNhap_ID;
            this.NL_ID = NL_ID;
            this.ChiTietDon_SoLuong = ChiTietDon_SoLuong;
            this.ChiTietDon_DonViTinh = ChiTietDon_DonViTinh;
            this.ChiTietDon_DonGia = ChiTietDon_DonGia;
            this.ChiTietDon_ThanhTien = ChiTietDon_ThanhTien;

        }
}
