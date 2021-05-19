

export class HoaDon {
   
    HoaDon_ID: number;
    NV_ID: number;
    Ban_ID: number;
    HoaDon_ThoiGianVao: string;
    HoaDon_ThoiGianRa: string;
    HoaDon_TongTien: number;
    HoaDon_TrangThai: string;
    //DeletedCTHoaDonIDs: string;
    constructor( HoaDon_ID: number, NV_ID: number, Ban_ID: number, HoaDon_ThoiGianVao: string, HoaDon_ThoiGianRa: string,
         HoaDon_TongTien: number, HoaDon_TrangThai: string) {
          
             this.HoaDon_ID = HoaDon_ID;
             this.NV_ID = NV_ID;
             this.Ban_ID = Ban_ID;
             this.HoaDon_ThoiGianVao = HoaDon_ThoiGianVao;
             this.HoaDon_ThoiGianRa = HoaDon_ThoiGianRa;
             this.HoaDon_TongTien = HoaDon_TongTien;
             this.HoaDon_TrangThai = HoaDon_TrangThai;
             //this.DeletedCTHoaDonIDs = DeletedCTHoaDonIDs;
    }
  
    


}
