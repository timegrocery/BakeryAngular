import { NguyenLieu } from './nguyen-lieu.model';

export class DonNhapNl {
    DonNhap_ID: number;
    DonNhap_NgayNhap: string;
    DonNhap_TongTien: number;
    NCC_ID: number;
    NV_ID: number;
    chiTietDonNhapNLList: NguyenLieu;
    constructor(DonNhap_ID: number, DonNhap_NgayNhap: string, DonNhap_TongTien: number, NCC_ID: number, NV_ID: number) {
        this.DonNhap_ID = DonNhap_ID;
        this.DonNhap_NgayNhap = DonNhap_NgayNhap;
        this.DonNhap_TongTien = DonNhap_TongTien;
        this.NCC_ID = NCC_ID;
        this.NV_ID = NV_ID;
    }
}
