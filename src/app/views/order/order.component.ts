import { Component, OnInit } from "@angular/core";
import { HoaDon } from "../shared/hoa-don.model";
import { HoaDonService } from "../shared/hoa-don.service";
import { BanAn } from "../shared/ban-an.model";
import { BanAnService } from "../shared/ban-an.service";
import { MonAnService } from "../shared/mon-an.service";
import { MonAn } from "../shared/mon-an.model";
import { CtHoaDonService } from "../shared/ct-hoa-don.service";
import { CtHoaDon } from "../shared/ct-hoa-don.model";
import { FormGroup, FormControl } from "@angular/forms";
import { Drink } from "../shared/drink.model";
import { DrinkService } from "../shared/drink.service";
import { OrderResponses } from "../shared/order-responses";
import { ToastrService } from "ngx-toastr";
import { Time } from '@angular/common';
import{Pipe,PipeTransform} from '@angular/core';
@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  number = null;
  total = null;
  quantity = 1;
  ctHoaDonTemp: CtHoaDon;
  hoaDonID: number;
  hoaDonTemp: HoaDon;
  hoaDonList: HoaDon[];
  banAnList: BanAn[];
  monAnList: MonAn[];
  ctHoaDonList: CtHoaDon[];
  drinkList: Drink[];
  orderRess: OrderResponses;
  chiTietHD: CtHoaDon[];
  chiTietHDLoad : CtHoaDon[];
  hoaDonIDTemp: number;
  banAnTemp: BanAn;
  chiTietHDTemp: CtHoaDon;
  mon = 1;
  ten = "";
  gia = 0;
  timeIn: Time;
  constructor(
    private hoaDonService: HoaDonService,
    private banAnservice: BanAnService,
    private toastr: ToastrService,
    private monAnService: MonAnService,
    private chiTietHoaDon: CtHoaDonService,
    private dinkService: DrinkService
  ) {}

  ngOnInit() {
    this.loadDataHoaDon();
    this.loadDataBanAn();
    this.loadDataMonAn();
    this.loadDataDrink();
  }
  loadDataHoaDon() {
    this.hoaDonService.getHoaDonList().subscribe(data => {
      this.hoaDonList = data;
      
    });
  }
  loadDataBanAn() {
    this.banAnservice.getBanAnList().subscribe(data => {
      this.banAnList = data;
      
    });
  }
  loadDataMonAn() {
    this.monAnService.getMonAnList().subscribe(data => {
      this.monAnList = data;
      
    });
  }
  loadDataCtMonAn() {
    this.chiTietHoaDon.getChiTietHoaDonList().subscribe(data => {
      this.ctHoaDonList = data;
     
    });
  }
  loadDataDrink() {
    this.dinkService.getDrinkList().subscribe(data => {
      this.drinkList = data;
      
    });
  }

  getBanAn(Ban_ID: number) {
    
    this.number = Ban_ID;

    
    
    this.banAnservice.getBanAn(Ban_ID).subscribe(res => {
     this.hoaDonID = 1 ;
     
     this.hoaDonTemp = new HoaDon(this.hoaDonID, 4, this.number,this.getTimeNow(),null, 0, 'Chưa hoàn thành');
     for (let index = 0; index < this.banAnList.length; index++) {
       if(this.banAnList[index].Ban_ID == this.number) {
         this.banAnList[index].Ban_TrangThai = "Đang bận";
         this.banAnservice.EditBanAn(this.number,this.banAnList[index]).subscribe();
         
        // break;    
       }    
     }

     this.hoaDonService.AddHoaDon(this.hoaDonTemp).subscribe( data => {
        this.getListChiTietHoaDon(data.HoaDon_ID);
        this.hoaDonTemp = data;
        this.total = data.HoaDon_TongTien;
    });
   // this.totalMoney();
     });
   
  }
  getMonAn(MonAn_ID: number, MonAn_Ten: string, MonAn_Gia: number) {
    
    
    this.hoaDonService.searchIDHD(this.number).subscribe(HoaDon => 
      {
        if(HoaDon == null) {
          this.toastr.error("Must select table before add a food to bill","Error");
        }else {
        var exitSMonAn = false;
        this.ctHoaDonTemp = new CtHoaDon(1,HoaDon.HoaDon_ID,MonAn_ID,this.quantity,MonAn_Gia,"abc","Chưa hoàn thành",null);
        for (let index = 0; index < this.chiTietHD.length; index++) {
          if(this.chiTietHD[index].MonAn_ID == MonAn_ID){
            this.chiTietHD[index].ChiTietHD_SoLuong += 1;
            this.chiTietHoaDon.EditChiTietHoaDon(this.chiTietHD[index].CTHoaDon_ID,this.chiTietHD[index]).subscribe();
            exitSMonAn = true;
            this.total += this.chiTietHD[index].ChiTietHD_DonGia;
            this.hoaDonService.updateTotalMoney(this.total,HoaDon.HoaDon_ID).subscribe();
          }
        }
        if(!exitSMonAn){
         
            this.chiTietHoaDon.AddChiTietHoaDon(this.ctHoaDonTemp).subscribe(data => {
              this.getListChiTietHoaDon(HoaDon.HoaDon_ID);
              this.total += this.ctHoaDonTemp.ChiTietHD_DonGia;
              this.hoaDonService.updateTotalMoney(this.total,HoaDon.HoaDon_ID).subscribe();
            })
        }
      }
      })
      
  }



  getListChiTietHoaDon(HoaDon_id : number) {
    return this.chiTietHoaDon.getChiTietHDOfAHOADON(HoaDon_id).subscribe(data => {
      this.chiTietHD = data;
      for (let a = 0; a < this.chiTietHD.length; a++) {
        for (let index = 0; index < this.monAnList.length; index++) {
          if(this.chiTietHD[a].MonAn_ID == this.monAnList[index].MonAn_ID){
            this.chiTietHD[a].CTHoaDon_Name = this.monAnList[index].MonAn_Ten;
         }
        }
      }
     
    })
  }

  getHoaDon(Ban_ID: number) {
    return this.hoaDonService.getOrder(Ban_ID).subscribe(data => {
      this.orderRess = data;
      this.chiTietHD = this.orderRess.chiTietHoaDon;
  
    });
  }
  updateCtHoaDon(id_HD: number) {
    for (let index = 0; index < this.chiTietHD.length; index++) {
      if (this.chiTietHD[index].CTHoaDon_ID == id_HD) {
        this.chiTietHDTemp = this.chiTietHD[index];
      }
    }
    return this.chiTietHoaDon
      .EditChiTietHoaDon(this.chiTietHDTemp.CTHoaDon_ID, this.chiTietHDTemp)
      .subscribe(data => {
        this.getHoaDon(this.number);
      });
  }

  updateStatusTable() {
    var id;
    for (let index = 0; index < this.banAnList.length; index++) {
      if (this.banAnList[index].Ban_ID == this.number) {
        id = index;
      }
    }
    this.banAnTemp = this.banAnList[id];
    this.banAnTemp.Ban_TrangThai = "Đang bận";

    this.banAnservice.EditBanAn(this.number, this.banAnTemp).subscribe(data => {
      this.loadDataBanAn();
    });
  }
  updateStatusHoaDon() {
    var id;
    for (let index = 0; index < this.banAnList.length; index++) {
      if (this.banAnList[index].Ban_ID == this.number) {
        id = index;
      }
    }
    this.banAnTemp = this.banAnList[id];
    this.banAnTemp.Ban_TrangThai = "Đang trống";

    this.banAnservice.EditBanAn(this.number, this.banAnTemp).subscribe(data => {
      this.loadDataBanAn();
      
    });
  }

  pay() {
    
    if(this.chiTietHD.length <= 0) {
      this.toastr.error('can not pay for this bill','Error');
    }else{
    //update status HoaDon
    this.hoaDonService.searchIDHD(this.number).subscribe(HoaDon => {
      this.hoaDonService.getHoaDon(HoaDon.HoaDon_ID).subscribe(data => {
        data.HoaDon_TrangThai = "Đã hoàn thành";
        data.HoaDon_ThoiGianRa = this.getTimeNow();
        this.hoaDonService.EditHoaDon(HoaDon.HoaDon_ID,this.getTimeNow()).subscribe(data => { 
         
        });
      })
    })
    //update status BanAn
    for (let index = 0; index < this.banAnList.length; index++) {
      if(this.banAnList[index].Ban_ID == this.number) {
        this.banAnList[index].Ban_TrangThai = "Đang trống";
        this.banAnservice.EditBanAn(this.number,this.banAnList[index]).subscribe();
        break;    
      }    
    }

    this.getHoaDon(this.number);
    this.total =0;
    this.toastr.success('Paid for bill');

  }
  }

  edit(id: number) {
    for (let index = 0; index < this.chiTietHD.length; index++) {
      if (this.chiTietHD[index].CTHoaDon_ID == id) {
        this.chiTietHDTemp = this.chiTietHD[index];
        let a = "#ctma_" + this.chiTietHD[index].CTHoaDon_ID;
        this.chiTietHDTemp.ChiTietHD_SoLuong = +$(a).val();
        delete this.chiTietHDTemp["MonAn"];
      }
    }
    this.chiTietHoaDon
      .EditChiTietHoaDon(this.chiTietHDTemp.CTHoaDon_ID, this.chiTietHDTemp)
      .subscribe(data => {
       this.total = 0;
        this.hoaDonService.searchIDHD(this.number).subscribe(HoaDon => {
          this.getListChiTietHoaDon(HoaDon.HoaDon_ID);
          this.total += (this.chiTietHDTemp.ChiTietHD_SoLuong * this.chiTietHDTemp.ChiTietHD_DonGia);
          this.hoaDonService.updateTotalMoney(this.total ,HoaDon.HoaDon_ID).subscribe();
          this.getListChiTietHoaDon(HoaDon.HoaDon_ID);
      });
      
        this.getHoaDon(this.number);
      });
  }
  deleteCtHoaDon(ctHoaDon: CtHoaDon) {
    if (confirm("Are you sure to delete this record?")) {
      this.chiTietHoaDon.deleteChiTietHoaDon(ctHoaDon.CTHoaDon_ID).then(res => {
        this.loadDataCtMonAn();
        this.getHoaDon(this.number);
         
    this.hoaDonService.searchIDHD(this.number).subscribe(HoaDon => {
        this.getListChiTietHoaDon(HoaDon.HoaDon_ID);
        this.total = this.total - (ctHoaDon.ChiTietHD_DonGia*ctHoaDon.ChiTietHD_SoLuong);
        this.hoaDonService.updateTotalMoney(this.total,HoaDon.HoaDon_ID).subscribe();
    });
        this.toastr.warning("Deleted Successfully", "Restaurant App.");
      });
    }
  }

  getTimeNow() : string {
    var now = new Date(Date.now());
  
    if(now.getMonth() < 10) {
      var mo = "0" + (now.getMonth()+1);
    }else{
      var mo = "" + now.getMonth();
    }
    if(now.getHours() < 10) {
      var ho = "0" + now.getHours();
    }else{
      var ho = "" + now.getHours();
    }
    if(now.getMinutes() < 10){
      var mi = "0" + now.getMinutes();
    }else{
      var mi = "" + now.getMinutes();
    }
    if(now.getSeconds() < 10){
      var se = "0" + now.getSeconds();
    }else{
      var se = "" + now.getSeconds();
    }
    if(now.getDate() < 10){
      var date = "0" + now.getDate();
    }else{
      var date = "" + now.getDate();
    }
    var pareDate =  now.getFullYear() + "-" + mo + "-" + date + "T" +ho + ":" + mi + ":" + se;
    return pareDate.toString();
    
  }
 
}
