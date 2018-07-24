import { Injectable } from '@angular/core';

import {Http,Jsonp,Headers} from "@angular/http";

import 'rxjs/add/operator/map';

//配置文件
import { ConfigProvider } from '../../providers/config/config';


/*
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServicesProvider {

  //设置post的格式
  private headers =new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http,public jsonp:Jsonp,public config:ConfigProvider) {
    console.log('Hello HttpServicesProvider Provider');
  }
  
  //get请求数据
  requestData(apiUrl,callback){
      var api=this.config.apiUrl + apiUrl;
      this.http.get(api).subscribe(function(data){
        callback(data.json());        /*回调函数*/
      },function(err){
         console.log(err);
      })
  }

  //post 提交数据
  doPost(apiUrl,json,callback){
    var api=this.config.apiUrl + apiUrl;
    this.http.post(api,JSON.stringify(json),{headers:this.headers}).subscribe(function(res){
      console.log(res);
      console.log(res.json());
        callback(res.json());
    },function(err){
      console.log(err);
    })

  }


}
