import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styles: [
  ]
})
export class ProductEntryComponent implements OnInit {

  constructor(public service:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.productID == 0){
      this.saveProduct(form);
    }
    else{
      this.updateProduct(form);
    }
  }

  saveProduct(form:NgForm){
    this.service.postProduct().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Saved Successfully !!!', 'Product Detail Register');
        this.service.list.push(res as Product);
      },
      err=>{
        console.log(err);
      }
    );
  }
  
  updateProduct(form:NgForm){
    this.service.putProduct().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info('Updated Successfully !!!', 'Product Detail Register');
        this.service.refreshList();
      },
      err=>{
        console.log(err);
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Product();
  }
}
