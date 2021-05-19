import { Component, OnInit } from '@angular/core';
import { MonAn } from '../shared/mon-an.model';
import { OrderResponses } from '../shared/order-responses';
import { MonAnService } from '../shared/mon-an.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HoaDon } from '../shared/hoa-don.model';
import { HoaDonService } from '../shared/hoa-don.service';
import { CtHoaDonService } from '../shared/ct-hoa-don.service';
import { CtHoaDon } from '../shared/ct-hoa-don.model';
import { FormControl } from '@angular/forms';
import { ReportQuantity } from '../shared/report-quantity.model';
import { ReportQuantityService } from '../shared/report-quantity.service';

@Component({
  selector: 'app-report-quantity',
  templateUrl: './report-quantity.component.html',
  styleUrls: ['./report-quantity.component.scss']
})
export class ReportQuantityComponent implements OnInit {

  monAn: MonAn[];
  hoaDon: HoaDon[];
  ctHoaDon: CtHoaDon[];
  thongKe: ReportQuantity[];
  constructor(private monAnService: MonAnService, private router: Router,
    private toastr: ToastrService, private hoaDonService: HoaDonService, private ctHoaDonService: CtHoaDonService,
    private thongkeService: ReportQuantityService) { }
    datefrom = '';
    dateto = '';
  
  loadDataMonAn() {
    this.monAnService.getMonAnList().subscribe(
      data => {
        this.monAn = data;
        console.log(this.monAn);
      }
    );
  }
  loadDataHD() {
    this.hoaDonService.getHoaDonList().subscribe(
      data => {
        this.hoaDon = data;
        console.log(this.hoaDon);
      }
    );
  }
  loadDataCT_HD() {
    this.ctHoaDonService.getChiTietHoaDonList().subscribe(
      data => {
        this.ctHoaDon = data;
        console.log(this.ctHoaDon);
      }
    );
  }
  loadDataThongKe() {
    // let datefrom = new Date(this.datefrom);
    // let dateto = new Date(this.dateto);
    this.thongkeService.getReport(this.datefrom,this.dateto).subscribe(
      data => {
        this.thongKe = data;
        console.log(this.thongKe);
      }
    );
  }
  search(){
    this.loadDataThongKe();
  }
  ngOnInit() {
  }
}
