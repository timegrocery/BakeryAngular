import { Component, OnInit } from '@angular/core';
import { DonNhapNl } from '../shared/don-nhap-nl.model';
import { DonNhapNlService } from '../shared/don-nhap-nl.service';
import { CtDonNhapNl } from '../shared/ct-don-nhap-nl.model';
import { CtDonNhapNlService } from '../shared/ct-don-nhap-nl.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NhaCungCap } from '../shared/nha-cung-cap.model';
import { NguyenLieuService } from '../shared/nguyen-lieu.service';
import { NguyenLieu } from '../shared/nguyen-lieu.model';
import { Router } from '@angular/router';
import { NhanVienService } from '../shared/nhan-vien.service';
import { NhaCungCapService } from '../shared/nha-cung-cap.service';
import { NhanVien } from '../shared/nhan-vien.model';
import * as $ from 'jquery';
@Component({
  selector: 'app-stock-order',
  templateUrl: './stock-order.component.html',
  styleUrls: ['./stock-order.component.scss']
})
export class StockOrderComponent implements OnInit {
  addDonNhap = new FormGroup({
    tenNhaCungCap: new FormControl(''),
    tenNhanvien: new FormControl(''),
    ngayNhap: new FormControl(''),
    tongTien: new FormControl()

  });
  editDonNhap = new FormGroup({
    tenNhaCungCap: new FormControl(''),
    tenNhanvien: new FormControl(''),
    ngayNhap: new FormControl(''),
    tongTien: new FormControl()

  });
  addCtDonNhap = new FormGroup({
    nl: new FormControl(''),
    donViTinh: new FormControl(''),
    soLuong: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(1),
    ]),
    gia: new FormControl(),
    total: new FormControl()

  });
  editCtDonNhap = new FormGroup({
    nl: new FormControl(''),
    donViTinh: new FormControl(''),
    soLuong: new FormControl(),
    gia: new FormControl(),
    total: new FormControl()

  });
  dvt: string;
  nl: number;
  quantity: number;
  price: number;
  total: number;
  ctDonTemp: CtDonNhapNl;
  donNhapNlTemp: DonNhapNl;
  ncc_Id: number;
  tenNV_Id: number;
  DNIDTemp = 0;
  IDTemp = 0;
  NLIDTemp = 0;
  tenNhaCungCap: string;
  tenNhanvien: string;
  ngayNhap: string;
  tongTien: number;
  donNhapNLList: DonNhapNl[];
  chiTietDonNhapNLList: CtDonNhapNl[];
  nguyenLieuList: NguyenLieu[];
  nhaCungCapList: NhaCungCap[];
  nhanVienList: NhanVien[];
  quantity1: number;
  price1: number;
  total1: number;

  constructor(private donNhapNLService: DonNhapNlService, private ctDonNhapNlService: CtDonNhapNlService,
    // tslint:disable-next-line: max-line-length
    private toastr: ToastrService, private nguyenLieuService: NguyenLieuService,
    private donNhapNlService: DonNhapNlService, private nhanVienService: NhanVienService,
    private router: Router, private nhaCungCapService: NhaCungCapService
  ) { }

  ngOnInit() {
    this.loadData();
    this.loadDataDetail();
    this.loadDataListNL();
    this.loadDataNCC();
    this.loadDataNV();
  }
  loadDataNV() {
    this.nhanVienService.getNhanVienList().subscribe(
      data => {
        this.nhanVienList = data;
        console.log(this.nhanVienList);
      }
    );
  }

  loadDataNCC() {
    this.nhaCungCapService.getNhaCungCapList().subscribe(
      data => {
        this.nhaCungCapList = data;
        console.log(this.nhaCungCapList);
      }
    );
  }

  loadData() {
    this.donNhapNLService.getDonNhapNLList().subscribe(
      data => {
        this.donNhapNLList = data;
        console.log(this.donNhapNLList);
      }
    );
  }
  loadDataListNL() {
    this.nguyenLieuService.getNguyenLieuList().subscribe(
      data => {
        this.nguyenLieuList = data;
      }
    );
  }
  loadDataDetail() {
    this.ctDonNhapNlService.getChiTietDonNhapNLList().subscribe(
      data => {
        this.chiTietDonNhapNLList = data;
        console.log(this.chiTietDonNhapNLList);
      }
    );
  }
  onDonNhapNLDelete(DonNhap_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.donNhapNlService.deleteDonNhapNL(DonNhap_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }
  onDonNhapNLAdd() {
    this.ncc_Id = this.addDonNhap.get('tenNhaCungCap').value;
    this.tenNV_Id = this.addDonNhap.get('tenNhanvien').value;
    this.ngayNhap = this.addDonNhap.get('ngayNhap').value;
    this.tongTien = this.addDonNhap.get('tongTien').value;
    this.donNhapNlTemp = new DonNhapNl(1, this.ngayNhap, this.tongTien, this.ncc_Id, this.tenNV_Id);
    this.donNhapNlService.AddDonNhapNL(this.donNhapNlTemp).subscribe(res => {
      this.loadData();
      this.addDonNhap.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    }
    );
    console.log(this.donNhapNlTemp);
  }
  onChiTietDonNhapAdd() {
    this.nl = +(this.addCtDonNhap.get('nl').value);
    this.dvt = this.addCtDonNhap.get('donViTinh').value;
    this.quantity = this.addCtDonNhap.get('soLuong').value;
    this.price = this.addCtDonNhap.get('gia').value;
    this.total = this.addCtDonNhap.get('total').value;
    this.ctDonTemp = new CtDonNhapNl(1, this.DNIDTemp, this.nl, this.quantity, this.dvt, this.price, this.total);
    this.ctDonNhapNlService.AddChiTietDonNhap(this.ctDonTemp).subscribe(res => {
      this.loadDataDetail();
      this.addCtDonNhap.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    }
    );
    console.log(this.ctDonTemp);
  }
  onDonNhapNLEdit() {
    this.ncc_Id = this.editDonNhap.get('tenNhaCungCap').value;
    this.tenNV_Id = this.editDonNhap.get('tenNhanvien').value;
    this.ngayNhap = this.editDonNhap.get('ngayNhap').value;
    this.tongTien = this.editDonNhap.get('tongTien').value;
    this.donNhapNlTemp = new DonNhapNl(this.DNIDTemp, this.ngayNhap, this.tongTien, this.ncc_Id, this.tenNV_Id);
    this.donNhapNlService.EditDonNhapNL(this.DNIDTemp, this.donNhapNlTemp).subscribe(res => {
      this.loadData();
      this.addDonNhap.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    }
    );
    console.log(this.donNhapNlTemp);
  }
  onChiTietDonNhapEdit() {
    this.nl = +(this.editCtDonNhap.get('nl').value);
    this.dvt = this.editCtDonNhap.get('donViTinh').value;
    this.quantity = this.editCtDonNhap.get('soLuong').value;
    this.price = this.editCtDonNhap.get('gia').value;
    this.total = this.editCtDonNhap.get('total').value;
    this.ctDonTemp = new CtDonNhapNl(this.IDTemp, this.DNIDTemp, this.nl, this.quantity, this.dvt, this.price, this.total);
    this.ctDonNhapNlService.EditChiTietDonNhap(this.IDTemp, this.ctDonTemp).subscribe(res => {
      this.loadDataDetail();
      this.toastr.success('Updated Successfully', 'Restaurant App.');
    }
    );
    console.log(this.ctDonTemp);
  }
  getCtDonNhap(CTDonNhap_ID: number, DN_ID: number) {
    if (CTDonNhap_ID === 0) {
      this.DNIDTemp = DN_ID;
    } else {
      this.IDTemp = CTDonNhap_ID;
      this.DNIDTemp = DN_ID;
      this.ctDonNhapNlService.getChiTietDonNhap(CTDonNhap_ID).subscribe(data => {
        this.editCtDonNhap.setValue({
          nl: data.NL_ID,
          donViTinh: data.ChiTietDon_DonViTinh,
          soLuong: data.ChiTietDon_SoLuong,
          gia: data.ChiTietDon_DonGia,
          total: data.ChiTietDon_ThanhTien,
          DNIDTemp: data.DonNhap_ID
        }
        );
      })
    }
  }
  getDonNhap(DonNhap_ID: number) {
    this.DNIDTemp = DonNhap_ID;
    this.donNhapNLService.getDonNhapNL(DonNhap_ID).subscribe(data => {
      this.editDonNhap.setValue({
        tenNhaCungCap: data.NCC_ID,
        tenNhanvien: data.NV_ID,
        ngayNhap: data.DonNhap_NgayNhap,
        tongTien: data.DonNhap_TongTien
      });
    });
  }
  onChiTietDonNhapDelete(CTDonNhap_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.ctDonNhapNlService.deleteChiTietDonNhap(CTDonNhap_ID).then(res => {
        this.loadDataDetail();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }
  hide = function (ID) {
    let temp = '#child_' + ID;
    let icon = '#arrow_' + ID;
    if ($(temp).is(':visible')) {
      $(temp).fadeOut(500);
      //   $(icon).removeClass().addClass('fa fa-angle-up open');
    }
    else {
      $(temp).fadeIn(500);
      //     $(icon).removeClass().addClass('fa fa-angle-up close');
    }
  }

  openForEdit(DonNhap_ID: number) {
    this.router.navigate(['/stock_order/edit/' + DonNhap_ID]);
  }

  update_tt() {
    this.total1 = this.quantity1 * this.price1
  }
}
