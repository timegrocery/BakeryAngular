import { Component, OnInit } from '@angular/core';
import { MonAnService } from '../shared/mon-an.service';
import { MonAn } from '../shared/mon-an.model';

import { CtMonAn } from '../shared/ct-mon-an.model';
import { FormGroup, FormControl } from '@angular/forms';
import { NguyenLieu } from '../shared/nguyen-lieu.model';
import { ToastrService } from 'ngx-toastr';
import { NguyenLieuService } from '../shared/nguyen-lieu.service';
import { Router } from '@angular/router';
import { CtMonAnService } from '../shared/ct-mon-an.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  addMonAn = new FormGroup({
    nameCourse: new FormControl(''),
    unitCourse: new FormControl(''),
    priceCourse: new FormControl(null),
    imageCourse: new FormControl('')

  });
  addCtMonAn = new FormGroup({
    nl: new FormControl(''),
    soLuong: new FormControl(''),
    donViTinh: new FormControl(''),
    ghiChu: new FormControl('')
  });


  editMonAn = new FormGroup({
    nameCourse: new FormControl(''),
    unitCourse: new FormControl(''),
    priceCourse: new FormControl(null),
    imageCourse: new FormControl('')

  });

  editCTMonAn = new FormGroup({
    nl: new FormControl(''),
    soLuong: new FormControl(''),
    donViTinh: new FormControl(''),
    ghiChu: new FormControl('')
  });

  IDTemp = 0;
  MAIDTemp = 0;
  monAnList: MonAn[];
  chiTietMonAnList: CtMonAn[];

  // toastr: any;
  dvt: string;
  nl: number;
  quantity: number;
  gc: string;
  name: string;
  unit: string;
  price: number;
  image: string;
  status: string;
  monAnTmp: MonAn;
  ctMonAnTemp: CtMonAn;
  nguyenLieuList: NguyenLieu[];
  // editMonAn: any;
  type: string;
  // persons: number;

  constructor(private monAnService: MonAnService, private toastr: ToastrService,
    private router: Router, private ctMonAnService: CtMonAnService, private nguyenLieuService: NguyenLieuService) { }

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
  ngOnInit() {
    this.loadData();
    this.loadDataDetail();
    this.loadDataListNL();

  }
  loadData() {
    this.monAnService.getMonAnList().subscribe(
      data => {
        this.monAnList = data;
        console.log(this.monAnList);
      }
    );
  }
  loadDataDetail() {
    this.ctMonAnService.getChiTietMonAnList().subscribe(
      data => {
        this.chiTietMonAnList = data;
        console.log(this.chiTietMonAnList);
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

  onMonAnAdd() {
    this.name = this.addMonAn.get('nameCourse').value;
    this.unit = this.addMonAn.get('unitCourse').value;
    this.price = this.addMonAn.get('priceCourse').value;
    this.image = this.addMonAn.get('imageCourse').value.replace('C:\\fakepath\\', '');
    this.type = 'thức ăn';
    this.status = 'Đang kinh doanh';
    this.monAnTmp = new MonAn(1, this.name, this.unit, this.price, this.image, this.type, this.status);
    // this.monAnTmp = new MonAn(1, this.name, this.unit,this.price ,  this.image,this.type, this.status);
    this.monAnService.AddMonAn(this.monAnTmp).subscribe(res => {
      this.loadData();
      this.addMonAn.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    }
    );
    console.log(this.monAnTmp);
  }
  onMonAnEdit() {
    this.name = this.editMonAn.get('nameCourse').value;
    this.unit = this.editMonAn.get('unitCourse').value;
    this.price = this.editMonAn.get('priceCourse').value;
    this.image = this.editMonAn.get('imageCourse').value.replace('C:\\fakepath\\', '');
    this.type = 'thức ăn';
    this.status = 'Đang kinh doanh';
    this.monAnTmp = new MonAn(this.IDTemp, this.name, this.unit, this.price, this.image, this.type, this.status);
    // this.monAnTmp = new MonAn(1, this.name, this.unit,this.price,  this.image,this.type, this.status);
    this.monAnService.EditMonAn(this.IDTemp, this.monAnTmp).subscribe(res => {
      this.loadData();
      this.toastr.success('Updated Successfully', 'Restaurant App.');
    }
    );
    console.log(this.monAnTmp);
  }
  onMonAnDelete(MonAn_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.monAnService.deleteMonAn(MonAn_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }
  // IDTemp(IDTemp: any, monAnTmp: any) {
  //   throw new Error("Method not implemented.");
  // }

  getMonAn(MonAn_ID: number) {
    this.IDTemp = MonAn_ID;
    this.monAnService.getMonAn(MonAn_ID).subscribe(data => {
      this.editMonAn.setValue({
        nameCourse: data.MonAn_Ten,
        unitCourse: data.MonAn_DonViTinh,
        priceCourse: data.MonAn_Gia,
        imageCourse: ''
        // imageCourse: data.MonAn_HinhAnh
      }
      );
    });
  }

  onChiTietMonAnAdd() {
    this.nl = +(this.addCtMonAn.get('nl').value);
    this.dvt = this.addCtMonAn.get('donViTinh').value;
    this.quantity = this.addCtMonAn.get('soLuong').value;
    this.gc = this.addCtMonAn.get('ghiChu').value;
    this.ctMonAnTemp = new CtMonAn(1,this.MAIDTemp, this.nl, this.quantity, this.dvt, this.gc);
    this.ctMonAnService.AddChiTietMonAn(this.ctMonAnTemp).subscribe(res => {
      this.loadDataDetail();
      this.addCtMonAn.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    }
    );
    console.log(this.ctMonAnTemp);
  }

  onChiTietMonAnDelete(CTMonAn_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.ctMonAnService.deleteChiTietMonAn(CTMonAn_ID).then(res => {
        this.loadDataDetail();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }

  onChiTietMonAnEdit() {
    this.nl = +(this.editCTMonAn.get('nl').value);
    this.dvt = this.editCTMonAn.get('donViTinh').value;
    this.quantity = this.editCTMonAn.get('soLuong').value;
    this.gc = this.editCTMonAn.get('ghiChu').value;
    this.ctMonAnTemp = new CtMonAn(this.IDTemp, this.MAIDTemp, this.nl, this.quantity, this.dvt, this.gc);
    this.ctMonAnService.EditChiTietMonAn(this.IDTemp, this.ctMonAnTemp).subscribe(res => {
      this.loadDataDetail();
      this.toastr.success('Updated Successfully', 'Restaurant App.');
    }
    );
    console.log(this.ctMonAnTemp);
  }
  getCtMonAn(CTMonAn_ID: number, MA_ID: number) {
    if (CTMonAn_ID === 0) {
      this.MAIDTemp = MA_ID;
    } else {
      this.IDTemp = CTMonAn_ID;
      this.MAIDTemp = MA_ID;
      this.ctMonAnService.getChiTietMonAn(CTMonAn_ID).subscribe(data => {
        this.editCTMonAn.setValue({
          nl: data.NL_ID,
          soLuong: data.ChiTietMonAn_SoLuong,
          donViTinh: data.ChiTietMonAn_DonViTinh,
          ghiChu: data.GhiChu
          // MAIDTemp: data.MonAn_ID
        }
        );
      });
    }
  }
}
