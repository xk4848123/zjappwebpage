import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//商品列表

import { ProductlistPage } from '../productlist/productlist';



import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { Config } from 'ionic-angular/config/config';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  public ProductlistPage=ProductlistPage;  /*商品列表页面*/

  public tempDatas=[]; 

  public leftCate=[];  /*左侧分类数据*/

  public rightCate=[];  /*右侧分类数据*/
  params={categoryId:0,pageNo:1}
  categories:Array<any>=[]
  products: Array<any> = [];
  constructor(public navCtrl: NavController,public config:ConfigProvider,public httpService:HttpServicesProvider) {
    
  }

  ionViewWillEnter(){
    //  console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发 每次触发");
    this.getLeftCateData();/*左侧分类*/

}
  //左侧分类的方法

  getLeftCateData(){
    var api='v1/ProductManager/getProductOfCategory';
    //var api='api/pcate'
    //网络接口请求
    this.httpService.requestData(api,(data)=>{
        this.leftCate=data.data;
        console.log(data.data);
        this.params.categoryId=this.leftCate[0].categoryId;
        this.leftCate;
        
        var i:number=0;
        for(var v in data.data){
          // aaa.Id=n[productSubCategories];
          this.tempDatas[data.data[v].id]=data.data[v].productSubCategories;
      }
 console.log(this.tempDatas);
        //调用右侧分类
        //console.log(this.leftCate);
        //  this.getRightCateData(this.leftCate[0]['id']); 
    })
    // console.log(this.tempDatas);
  }

  getRightCateData(id){
   this.rightCate=this.tempDatas[id];
}



}


