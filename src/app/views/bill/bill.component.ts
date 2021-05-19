import { Component, OnInit } from '@angular/core';
import { HoaDonService } from '../shared/hoa-don.service';
import { HoaDon } from '../shared/hoa-don.model';
import { NhanVienService } from '../shared/nhan-vien.service';
import { BanAnService } from '../shared/ban-an.service';
import { NhanVien } from '../shared/nhan-vien.model';
import { BanAn } from '../shared/ban-an.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CtHoaDonService } from '../shared/ct-hoa-don.service';
import { CtHoaDon } from '../shared/ct-hoa-don.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {


  hoaDonList: HoaDon[];
  ctHoaDonList: CtHoaDon[];
  nhanVienList: NhanVien[];
  banAnList: BanAn[];
// tslint:disable-next-line: max-line-length
  constructor(private hoaDonService: HoaDonService, private nhanVienService: NhanVienService, private banAnservice: BanAnService, private ctHoaDonService: CtHoaDonService,
  private toastr: ToastrService, private router: Router

  ) { }

  ngOnInit() {
    this.loadData();
    this.loadDataDetail() ;
    // this.loadDataNV();
    this.loadDataBan();
  }

  // loadDataNV() {
  //   this.nhanVienService.getNhanVienList().subscribe(
  //     data => {
  //       this.nhanVienList = data;
  //       console.log(this.nhanVienList);
  //     }
  //   );
  // }
  loadDataBan() {
    this.banAnservice.getBanAnList().subscribe(
      data => {
        this.banAnList = data;
        console.log(this.banAnList);
      }
    );
  }
  loadData() {
    this.hoaDonService.getHoaDonList().subscribe(
      data => {
        this.hoaDonList = data;
        console.log(this.hoaDonList);
      }
    );
  }
  loadDataDetail() {
    this.ctHoaDonService.getChiTietHoaDonList().subscribe(
      data => {
        this.ctHoaDonList = data;
        console.log(this.ctHoaDonList);
      }
    );
  }

  onHoaDonDelete(HoaDon_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.hoaDonService.deleteHoaDon(HoaDon_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }

  onChiTietHoaDonDelete(CTHoaDon_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.ctHoaDonService.deleteChiTietHoaDon(CTHoaDon_ID).then(res => {
        this.loadDataDetail();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }

  hide = function (ID) {
    let temp = '#child_' + ID;
    let icon = "#arrow_" + ID;
    if ($(temp).is(':visible')) {
      $(temp).fadeOut(500);
      //   $(icon).removeClass().addClass('fa fa-angle-up open');
    }
    else {
      $(temp).fadeIn(500);
      //     $(icon).removeClass().addClass('fa fa-angle-up close');
    }
  }

}
