import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  constructor(public service:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  active:number=1;
  retrieveProduct(selectedRecord:Product){
    this.service.formData = Object.assign({}, selectedRecord);
    this.active = 0;
  }

  tabClick(tabChangeEvent:MatTabChangeEvent){
    this.active = tabChangeEvent.index;
}

  onDeleteProduct(id:number){
    if(confirm("Confirm to Delete?")){
      this.service.deleteProduct(id).subscribe(
        res=>{
          this.service.refreshList();
          this.service.formData=new Product();
          this.toastr.error('Deleted Successfully !!!', 'Product Detail Register');
        },
        err=>{
          console.log(err);
        }
      );
    }
  }
}