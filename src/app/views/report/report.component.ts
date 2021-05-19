import { Component, OnInit } from '@angular/core';
import { HoaDon } from '../shared/hoa-don.model';
import { PnotifyService } from '../shared/pnotify.service';
import { Router } from '@angular/router';
import { HoaDonService } from '../shared/hoa-don.service';
import { DateFormatter } from 'ngx-bootstrap/datepicker';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CtHoaDon } from '../shared/ct-hoa-don.model';
import { CtHoaDonService } from '../shared/ct-hoa-don.service';
import { copyStyles } from '@angular/animations/esm2015';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reports: HoaDon[];
  ctHoaDonList: CtHoaDon[];
  report: HoaDon = {} as HoaDon;
  total: number;
  constructor(private hoadonService: HoaDonService, private ctHoaDonService: CtHoaDonService, private router: Router,
    private toastr: ToastrService) {
  }
  datefrom = new FormControl('');
  dateto = new FormControl('');
  MyCtrl($scope, $filter) {
    $scope.fromdefault = $filter('date')(Date.now(), 'yyyy-MM-dd');
    $scope.todefault = $filter('date')(Date.now(), 'yyyy-MM-dd');
  }
  // onSubmit() {
  //   console.log(this.datefrom.value());
  //   console.log(this.dateto.value());
  // }
  ngOnInit() {
    this.loadData();
    this.loadDataDetail();
  }
  loadData() {
    this.hoadonService.getHoaDonList().subscribe(
      data => {
        this.reports = data;
        console.log(this.reports);
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
  check() {
    for (let i = 0; i < this.reports.length; i++) {
      if (this.reports[i].HoaDon_ThoiGianRa > this.datefrom.value && this.reports[i].HoaDon_ThoiGianRa < this.dateto.value)
      {
        console.log('correct');
      }
      if (this.reports[i].HoaDon_ThoiGianRa === this.datefrom.value && this.reports[i].HoaDon_ThoiGianRa === this.dateto.value)
      {
        console.log('equal both');
      }
      if (this.reports[i].HoaDon_ThoiGianRa === this.datefrom.value)
      {
        console.log('equal from');
      }
      if (this.reports[i].HoaDon_ThoiGianRa === this.dateto.value)
      {
        console.log('equal to');
      } 
    }
  }
  getTotal() {
    this.total = 0;
    if (!this.reports) {
      this.total = 0;
    } else {
      for (let i = 0; i < this.reports.length; i++) {
        if (this.reports[i].HoaDon_ThoiGianRa >= this.datefrom.value && this.reports[i].HoaDon_ThoiGianRa <= this.dateto.value)
        {
          if (this.reports[i].HoaDon_TongTien) {
            this.total += this.reports[i].HoaDon_TongTien;
            // this.totalamount = total;
          }
        }
      }
    }
    return this.total;
  }

  hide = function (ID) {
    let temp = '#child_' + ID;
    let icon = '#arrow_' + ID;
    if ($(temp).is(':visible')) {
      $(temp).fadeOut(500);
      //   $(icon).removeClass().addClass('fa fa-angle-up open');
    } else {
      $(temp).fadeIn(500);
      //     $(icon).removeClass().addClass('fa fa-angle-up close');
    }
  };
}
