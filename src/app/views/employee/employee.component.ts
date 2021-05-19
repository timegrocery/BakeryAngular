import { Component, OnInit } from '@angular/core';
import { NhanVienService } from '../shared/nhan-vien.service';
import { NhanVien } from '../shared/nhan-vien.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  addNhanVien = new FormGroup({
    nameNhanVien: new FormControl(''),
    typeNhanVien: new FormControl(''),
    SDTNhanVien: new FormControl(''),
    DCNhanVien: new FormControl('')
  });

  editNhanVien = new FormGroup({
    nameNhanVien: new FormControl(''),
    typeNhanVien: new FormControl(''),
    SDTNhanVien: new FormControl(''),
    DCNhanVien: new FormControl('')
  });
  IDTemp = 0;
  nhanVienList: NhanVien[];
  nhanVienTmp: NhanVien;
  name: string;
  type: string;
  sdt: string;
  diachi: string;
  constructor(private nhanVienService: NhanVienService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.nhanVienService.getNhanVienList().subscribe(
      data => {
        this.nhanVienList = data;
        console.log(this.nhanVienList);
      }
    );
  }
  onNhanVienDelete(NV_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.nhanVienService.deleteNhanVien(NV_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');
      });
    }
  }
  onNhanVienAdd() {
    this.name = this.addNhanVien.get('nameNhanVien').value;
    this.type = this.addNhanVien.get('typeNhanVien').value;
    this.sdt = this.addNhanVien.get('SDTNhanVien').value;
    this.diachi = this.addNhanVien.get('DCNhanVien').value;
    this.nhanVienTmp = new NhanVien(1, this.name, this.type, this.sdt, this.diachi);
    this.nhanVienService.AddNhanVien(this.nhanVienTmp).subscribe(res => {
      this.loadData();
      this.addNhanVien.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    }
    );
    console.log(this.nhanVienTmp);
  }
  onNhanVienEdit() {
    this.name = this.editNhanVien.get('nameNhanVien').value;
    this.type = this.editNhanVien.get('typeNhanVien').value;
    this.sdt = this.editNhanVien.get('SDTNhanVien').value;
    this.diachi = this.editNhanVien.get('DCNhanVien').value;
    this.nhanVienTmp = new NhanVien(this.IDTemp, this.name, this.type, this.sdt, this.diachi);
    this.nhanVienService.EditNhanVien(this.IDTemp, this.nhanVienTmp).subscribe(res => {
      this.loadData();
      this.toastr.success('Updated Successfully', 'Restaurant App.');
    }
    );
    console.log(this.nhanVienTmp);
  }
  getNhanVien(NV_ID: number) {
    this.IDTemp = NV_ID;
    this.nhanVienService.getNhanVien(NV_ID).subscribe(data => {
      this.editNhanVien.setValue({
        nameNhanVien: data.NV_Ten,
        typeNhanVien: data.NV_ChucVu,
        SDTNhanVien: data.NV_SDT,
        DCNhanVien: data.NV_DiaChi
      }
      );
    });
  }
}
