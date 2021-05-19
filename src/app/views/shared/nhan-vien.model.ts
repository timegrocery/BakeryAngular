export class NhanVien {
    NV_ID: number;
    NV_Ten: string;
    NV_ChucVu: string;
    NV_SDT: string;
    NV_DiaChi: string;

    constructor(NV_ID: number, NV_Ten: string, NV_ChucVu: string, NV_SDT: string, NV_DiaChi: string) {
        this.NV_ID = NV_ID;
        this.NV_Ten = NV_Ten;
        this.NV_ChucVu = NV_ChucVu;
        this.NV_SDT = NV_SDT;
        this.NV_DiaChi = NV_DiaChi;

    }
}
