export class Drink {
    Nuoc_ID: number;
    Nuoc_Ten: string;
    Nuoc_DonViTinh: string;
    Nuoc_HinhAnh: string;
    Nuoc_Gia: number;
    Nuoc_TrangThai: string;

    constructor(Nuoc_ID: number, Nuoc_Ten: string, Nuoc_DonViTinh: string, Nuoc_HinhAnh: string,
        Nuoc_Gia: number, Nuoc_TrangThai: string) {
        this.Nuoc_ID = Nuoc_ID;
        this.Nuoc_Ten =  Nuoc_Ten;
        this.Nuoc_DonViTinh = Nuoc_DonViTinh;
        this.Nuoc_HinhAnh = Nuoc_HinhAnh;
        this.Nuoc_Gia = Nuoc_Gia;
        this.Nuoc_TrangThai = Nuoc_TrangThai;
    }
}
