export class MonAn {
    MonAn_ID: number;
    MonAn_Ten: string;
    MonAn_DonViTinh: string;
    MonAn_Gia: number;
    MonAn_HinhAnh: string;
    MonAn_Loai: string;
    MonAn_TrangThai: string;

    constructor(MonAn_ID: number, MonAn_Ten: string, MonAn_DonViTinh: string, MonAn_Gia: number,
        MonAn_HinhAnh: string,  MonAn_Loai: string, MonAn_TrangThai: string) {
        this.MonAn_ID = MonAn_ID;
        this.MonAn_Ten =  MonAn_Ten;
        this.MonAn_Gia = MonAn_Gia;
        this.MonAn_DonViTinh = MonAn_DonViTinh;
        this.MonAn_HinhAnh = MonAn_HinhAnh;
        this.MonAn_Loai = MonAn_Loai;
        this.MonAn_TrangThai = MonAn_TrangThai;
    }
}
