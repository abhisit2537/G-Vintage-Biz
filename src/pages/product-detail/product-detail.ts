import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorService, ProductModel, ProductService } from "@ngcommerce/core";
/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  items = {} as ProductModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService) {
    {
          this.productService.getProductByID(this.navParams.data._id).then(data => {
            console.log(data);
            this.items = data;
          }).catch(e => {
            console.log(e);
          })
        }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }
}