import { Component, OnInit } from '@angular/core';
import { NhaCungCap } from '../shared/nha-cung-cap.model';
import { NhaCungCapService } from '../shared/nha-cung-cap.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  addNhaCungCap = new FormGroup({
    nameSupplier : new FormControl(''),
    addressSupplier : new FormControl(''),
    phoneSupplier : new FormControl('')
  });

  editNhaCungCap = new FormGroup({
    nameSupplier : new FormControl(''),
    addressSupplier : new FormControl(''),
    phoneSupplier : new FormControl('')
  });
  IDTemp = 0;
  nhaCungCapList: NhaCungCap[];
  nhaCungCapTmp: NhaCungCap;
  nameSupplier: string;
  addressSupplier: string;
  phoneSupplier: string;
  constructor(private nhaCungCapService: NhaCungCapService,  private toastr: ToastrService, private router: Router) { }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.nhaCungCapService.getNhaCungCapList().subscribe(
      data => {
        this.nhaCungCapList = data;
        console.log(this.nhaCungCapList);
      }
    );
  }
  onNhaCungCapDelete(NCC_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.nhaCungCapService.deleteNhaCungCap(NCC_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');
      });
    }
  }
  onNhaCungCapAdd() {
      this.nameSupplier = this.addNhaCungCap.get('nameSupplier').value;
      this.addressSupplier = this.addNhaCungCap.get('addressSupplier').value;
      this.phoneSupplier = (this.addNhaCungCap.get('phoneSupplier').value);
      this.nhaCungCapTmp = new NhaCungCap(1, this.nameSupplier, this.addressSupplier, this.phoneSupplier);
      this.nhaCungCapService.AddNhaCungCap(this.nhaCungCapTmp).subscribe(res => {
        this.loadData();
        this.addNhaCungCap.reset();
        this.toastr.success('Submitted Successfully', 'Restaurant App.');
      }
      );
      console.log(this.nhaCungCapTmp);
  }
    onNhaCungCapEdit() {
      this.nameSupplier = this.editNhaCungCap.get('nameSupplier').value;
      this.addressSupplier = this.editNhaCungCap.get('addressSupplier').value;
      this.phoneSupplier = this.editNhaCungCap.get('phoneSupplier').value;
      this.nhaCungCapTmp = new NhaCungCap(this.IDTemp, this.nameSupplier, this.addressSupplier, this.phoneSupplier);
      this.nhaCungCapService.EditNhaCungCap(this.IDTemp, this.nhaCungCapTmp).subscribe(res => {
        this.loadData();
        this.toastr.success('Updated Successfully', 'Restaurant App.');
      }
      );
      console.log(this.nhaCungCapTmp);
    }
    getNhaCungCap(NCC_ID: number) {
      this.IDTemp = NCC_ID;
      this.nhaCungCapService.getNhaCungCap(NCC_ID).subscribe(data => {
        this.editNhaCungCap.setValue({
          nameSupplier: data.NCC_Ten,
          addressSupplier : data.NCC_DiaChi,
          phoneSupplier : data.NCC_SDT
        }
        );
      });
    }
}
