import { Component, OnInit } from '@angular/core';
import { Drink } from '../shared/drink.model';
import { DrinkService } from '../shared/drink.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  addDrink = new FormGroup({
    nameDrink: new FormControl(''),
    unitDrink: new FormControl(''),
    priceDrink: new FormControl(),
    pictureDrink: new FormControl('')
    // statusDrink : new FormControl('')
  });

  editDrink = new FormGroup({
    nameDrink: new FormControl(''),
    unitDrink: new FormControl(''),
    priceDrink: new FormControl(),
    pictureDrink: new FormControl(''),
    statusDrink: new FormControl('')
  });
  IDTemp = 0;
  drinkList: Drink[];
  drinkTmp: Drink;
  nameDrink: string;
  priceDrink: number;
  unitDrink: string;
  pictureDrink: string;
  statusDrink: string;
  constructor(private drinkService: DrinkService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.drinkService.getDrinkList().subscribe(
      data => {
        this.drinkList = data;
        console.log(this.drinkList);
      }
    );
  }
  onDrinkDelete(Nuoc_ID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.drinkService.deleteDrink(Nuoc_ID).then(res => {
        this.loadData();
        this.toastr.warning('Deleted Successfully', 'Restaurant App.');

      });
    }
  }
  onDrinkAdd() {
    this.nameDrink = this.addDrink.get('nameDrink').value;
    this.unitDrink = this.addDrink.get('unitDrink').value;
    this.priceDrink = +(this.addDrink.get('priceDrink').value);
    this.statusDrink = 'Đang kinh doanh';
    this.pictureDrink = this.addDrink.get('pictureDrink').value.replace('C:\\fakepath\\', '');
    this.drinkTmp = new Drink(1, this.nameDrink, this.unitDrink, this.pictureDrink, this.priceDrink, this.statusDrink);
    this.drinkService.addDrink(this.drinkTmp).subscribe(res => {
      this.loadData();
      this.addDrink.reset();
      this.toastr.success('Submitted Successfully', 'Restaurant App.');
    }
    );
    console.log(this.drinkTmp);
  }
  onDrinkEdit() {
    this.nameDrink = this.editDrink.get('nameDrink').value;
    this.unitDrink = this.editDrink.get('unitDrink').value;
    this.priceDrink = +(this.editDrink.get('priceDrink').value);
    this.statusDrink = this.editDrink.get('statusDrink').value;
    this.pictureDrink = this.editDrink.get('pictureDrink').value;
    this.drinkTmp = new Drink(this.IDTemp, this.nameDrink, this.unitDrink, this.pictureDrink, this.priceDrink, this.statusDrink);
    this.drinkService.editDrink(this.IDTemp, this.drinkTmp).subscribe(res => {
      this.loadData();
      this.toastr.success('Updated Successfully', 'Restaurant App.');
    }
    );
    console.log(this.drinkTmp);
  }
  getDrink(Nuoc_ID: number) {
    this.IDTemp = Nuoc_ID;
    this.drinkService.getDrink(Nuoc_ID).subscribe(data => {
      this.editDrink.setValue({
        nameDrink: data.Nuoc_Ten,
        unitDrink: data.Nuoc_DonViTinh,
        priceDrink: data.Nuoc_Gia,
        statusDrink: data.Nuoc_TrangThai,
        pictureDrink: ''
      }
      );
    });
  }
}

