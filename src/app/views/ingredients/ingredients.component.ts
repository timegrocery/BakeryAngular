import { Component, OnInit, ViewChild } from '@angular/core';
import { NguyenLieuService } from '../shared/nguyen-lieu.service';
import { NguyenLieu } from '../shared/nguyen-lieu.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { PnotifyService } from '../shared/pnotify.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  addNguyenLieu = new FormGroup({
    tenNL: new FormControl('', Validators.required),
    donViTinh: new FormControl('', Validators.required),
    soLuong: new FormControl(),
  });

  editNguyenLieu = new FormGroup({
    tenNL: new FormControl('', Validators.required),
    donViTinh: new FormControl('', Validators.required),
    soLuong: new FormControl(),
  });
  NL_IDTemp = 0;
  nguyenLieuList: NguyenLieu[];
  nguyenLieuTmp: NguyenLieu;
  tenNL: string;
  donViTinh: string;
  soLuong: number;
  constructor(private nguyenLieuService: NguyenLieuService, private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.nguyenLieuService.getNguyenLieuList().subscribe(
      data => {
        this.nguyenLieuList = data;
        console.log(this.nguyenLieuList);
      }
    );
  }
  onNguyenLieuDelete(NL_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.nguyenLieuService.deleteNguyenLieu(NL_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }
  onNguyenLieuAdd() {
    this.tenNL = this.addNguyenLieu.get('tenNL').value;
    this.donViTinh = this.addNguyenLieu.get('donViTinh').value;
    this.soLuong = this.addNguyenLieu.get('soLuong').value;
    this.nguyenLieuTmp = new NguyenLieu (1, this.tenNL, this.donViTinh, this.soLuong);
    this.nguyenLieuService.AddNguyenLieu(this.nguyenLieuTmp).subscribe(res => {
      this.loadData();
      this.addNguyenLieu.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    });
    console.log(this.nguyenLieuTmp);
  }
  onNguyenLieuEdit() {
    this.tenNL = this.editNguyenLieu.get('tenNL').value;
    this.donViTinh = this.editNguyenLieu.get('donViTinh').value;
    this.soLuong = this.editNguyenLieu.get('soLuong').value;
    this.nguyenLieuTmp = new NguyenLieu (this.NL_IDTemp, this.tenNL, this.donViTinh, this.soLuong);
    this.nguyenLieuService.EditNguyenLieu(this.NL_IDTemp, this.nguyenLieuTmp).subscribe(res => {
      this.loadData();
      this.toastr.success('Updated Successfully', 'Restaurant App.');
    });
    console.log(this.nguyenLieuTmp);
  }
  getNguyenLieu(NL_ID: number) {
    this.NL_IDTemp = NL_ID;
    this.nguyenLieuService.getNguyenLieu(NL_ID).subscribe(data => {
      this.editNguyenLieu.setValue({
        tenNL: data.NL_Ten,
        donViTinh: data.NL_DonViTinh,
        soLuong: data.NL_SoLuong
      }
      );
    });
  }
}
