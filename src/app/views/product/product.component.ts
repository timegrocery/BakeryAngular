import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { Product, ProductService } from '../shared/product.service';
import { PnotifyService } from '../shared/pnotify.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: [Product];
  product: Product = {} as Product;
  @ViewChild('modal', { static: true }) modal: ModalDirective;
  constructor(private productService: ProductService, private router: Router,
    private pnotify: PnotifyService) {
  }
  ngOnInit() {
    this.productService.getAll().subscribe(res => {
      if (res.errorCode > 0) {
        this.router.navigate(['/login']);
      } else {
        this.products = res.products;
      }
    });
  }
  showModal(event = null, id: Number = 0) {
    if (event != null) {
      event.preventDefault();
    }
    if (id > 0) {
      this.productService.get(id).subscribe(res => {
        this.product = res.product;
        this.modal.show();
      });
    } else {
      this.product = {
        id: 0
      } as Product;
      this.modal.show();
    }
  }
  save() {
    console.log(this.product);
    if (this.product.id === 0) {
      // add
      this.productService.add(this.product).subscribe(res => {
        if (res.errorCode === 0) {
          this.productService.getAll().subscribe(resList => {
            this.products = resList.products;
            this.modal.hide();
          });
        }
      });
    } else {
      this.productService.update(this.product).subscribe(res => {
        if (res.errorCode === 0) {
          this.productService.getAll().subscribe(resList => {
            this.products = resList.products;
            this.modal.hide();
          });
        }
      });
    }
  }

  confirmDelete(event, id) {
    event.preventDefault();
    this.pnotify.showCofirm(confirmed => {
      if (confirmed) {
        this.productService.delete(id).subscribe(res => {
          // refresh products array
          const deletedItem = this.products.find( x => x.id === id);
          const index = this.products.indexOf(deletedItem);
          this.products.splice(index, 1);

        });
      }
    });
  }
}
