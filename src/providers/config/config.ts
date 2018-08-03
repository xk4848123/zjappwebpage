import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  //api请求地址
  //public apiUrl="http://39.108.159.135/";

  //  public apiUrl="http://192.168.1.70/zjapp/";
  //  public imgUrl="http://192.168.1.70";

  //地址失效请访问 API 接口实时更新地址：https://www.itying.com/article-11.html
   public apiUrl="http://192.168.1.71/zjapp/";
   public domain="http://192.168.1.71";
  constructor() {
    console.log('Hello ConfigProvider Provider');
  }


}
