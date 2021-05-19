import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { BanAn } from '../shared/ban-an.model';

import { BanAnService } from '../shared/ban-an.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  addBanAn = new FormGroup({
    nameTable : new FormControl(''),
    typeTable : new FormControl(''),
    persons : new FormControl(null),
    status : new FormControl('')
  });

  editBanAn = new FormGroup({
    nameTable : new FormControl(''),
    typeTable : new FormControl(''),
    persons : new FormControl(null),
    status : new FormControl('')
  });
  IDTemp = 0;
  banAnList: BanAn[];
  banAnTmp: BanAn;
  name: string;
  type: string;
  persons: number;
  status: string;
  constructor(private banAnservice: BanAnService, private toastr: ToastrService,
    private router: Router
 ) { }


  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.banAnservice.getBanAnList().subscribe(
      data => {
        this.banAnList = data;
        console.log(this.banAnList);
      }
    );
  }
  onBanAnDelete(Ban_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.banAnservice.deleteBanAn(Ban_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }
  onBanAnAdd() {
      this.name = this.addBanAn.get('nameTable').value;
      this.type = this.addBanAn.get('typeTable').value;
      this.persons = +(this.addBanAn.get('persons').value);
      this.status = this.addBanAn.get('status').value;
      this.banAnTmp = new BanAn(1, this.name, this.type, this.persons, this.status);
      this.banAnservice.AddBanAn(this.banAnTmp).subscribe(res => {
        this.loadData();
        this.addBanAn.reset();
        this.toastr.success('Submitted Successfully', 'Restaurant App.');
      }
      );
      console.log(this.banAnTmp);
  }
    onBanAnEdit() {
      this.name = this.editBanAn.get('nameTable').value;
      this.type = this.editBanAn.get('typeTable').value;
      this.persons = +(this.editBanAn.get('persons').value);
      this.status = this.editBanAn.get('status').value;
      this.banAnTmp = new BanAn(this.IDTemp, this.name, this.type, this.persons, this.status);
      this.banAnservice.EditBanAn(this.IDTemp, this.banAnTmp).subscribe(res => {
        this.loadData();
        this.toastr.success('Updated Successfully', 'Restaurant App.');
      }
      );
      console.log(this.banAnTmp);
    }
    getBanAn(Ban_ID: number) {
      this.IDTemp = Ban_ID;
      this.banAnservice.getBanAn(Ban_ID).subscribe(data => {
        this.editBanAn.setValue({
          nameTable: data.Ban_Ten,
          typeTable : data.Ban_Loai,
          persons : data.Ban_SoNguoi,
          status : data.Ban_TrangThai
        }
        );
      });
    }



}
