export class CtHoaDon {
    CTHoaDon_Name:string;
    CTHoaDon_ID: number;
    HoaDon_ID: number;
    MonAn_ID: number;
    ChiTietHD_SoLuong: number;
    ChiTietHD_DonGia: number;
    ChiTietHD_GhiChu: string;
    ChiTietHD_TrangThai: string;
    constructor(CTHoaDon_ID: number, HoaDon_ID: number, MonAn_ID: number, ChiTietHD_SoLuong: number,
        ChiTietHD_DonGia: number, ChiTietHD_GhiChu: string, ChiTietHD_TrangThai: string, CTHoaDon_Name:string) {
            this.CTHoaDon_ID = CTHoaDon_ID;
            this.HoaDon_ID = HoaDon_ID;
            this.MonAn_ID = MonAn_ID;
            this.ChiTietHD_SoLuong = ChiTietHD_SoLuong;
            this.ChiTietHD_DonGia = ChiTietHD_DonGia;
            this.ChiTietHD_GhiChu = ChiTietHD_GhiChu;
            this.ChiTietHD_TrangThai = ChiTietHD_TrangThai
            this.CTHoaDon_Name = CTHoaDon_Name;
    }
}


