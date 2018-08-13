import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
//A组件
import { IonModleAComponent} from './../components/ion-modle-a/ion-modle-a';
//B组件
import { IonModleBComponent} from './../components/ion-modle-b/ion-modle-b';
//C组件
import { IonModleCComponent} from './../components/ion-modle-c/ion-modle-c';
//D组件
import{ IonModleDComponent} from './../components/ion-modle-d/ion-modle-d';
//G组件
import { IonModleGComponent} from './../components/ion-modle-g/ion-modle-g';
//轮播页面
import { IndexAdvPage } from '../pages/index-adv/index-adv';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { CartPage } from '../pages/cart/cart';
import { UserPage } from '../pages/user/user';
//登录
import { LoginPage } from '../pages/login/login';
//注册
import { RegisterPage } from '../pages/register/register';
import { RegistersignPage } from '../pages/registersign/registersign';
import { RegisterpasswordPage } from '../pages/registerpassword/registerpassword';
//搜索页面
import { SearchPage } from '../pages/search/search';


//商品列表
import { ProductlistPage } from '../pages/productlist/productlist';

//商品详情
import { PcontentPage } from '../pages/pcontent/pcontent';

//账户管理

import { PersonalPage } from '../pages/personal/personal';


//订单页面
import { OrderPage } from '../pages/order/order';

//收货地址列表
import { AddressPage } from '../pages/address/address';


//增加收货地址
import { AddaddressPage } from '../pages/addaddress/addaddress';

//修改收货地址
import { EditaddressPage } from '../pages/editaddress/editaddress';


//选择支付方式
import { PaymentPage } from '../pages/payment/payment';
//设置页面
import { SettingPage } from '../pages/setting/setting';

//我的粉丝

import { FansPage } from '../pages/fans/fans';

import { MywalletPage } from '../pages/mywallet/mywallet';

//粉丝详情
import { FandetailPage } from '../pages/fandetail/fandetail';

//全部订单
import { OrdersPage} from '../pages/orders/orders';


import { RechargePage } from '../pages/recharge/recharge';

import { VippresentPage } from '../pages/vippresent/vippresent';

import { VippresentdetailPage } from '../pages/vippresentdetail/vippresentdetail';

import { TabsPage } from '../pages/tabs/tabs';
import { ConfigProvider } from '../providers/config/config';
import { HttpServicesProvider } from '../providers/http-services/http-services';

import { StorageProvider } from '../providers/storage/storage';
import { ToolsProvider } from '../providers/tools/tools';
import { ThemeableBrowser} from '@ionic-native/themeable-browser';
import { AlertProvider } from '../providers/alert/alert';
import { ClearloginProvider } from '../providers/clearlogin/clearlogin';

import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import {File} from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ImgProvider } from '../providers/img/img';
import { ToastProvider } from '../providers/toast/toast';
// import { Alipay } from '@ionic-native/alipay';


@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    CartPage,
    UserPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    RegisterpasswordPage,
    SearchPage,
    ProductlistPage,
    PcontentPage,
    PersonalPage,
    OrderPage,
    AddressPage,
    AddaddressPage,
    EditaddressPage,
    PaymentPage,
    FansPage,
    FandetailPage,
    SettingPage,
    CameraPage,
    IndexAdvPage,
    IonModleAComponent,
    IonModleBComponent,
    IonModleCComponent,
    IonModleDComponent,
    IonModleGComponent,
    MywalletPage,
    RechargePage,
    OrdersPage,
    VippresentPage,
    VippresentdetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
      backButtonText: '' /*配置返回按钮*/
    })        
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    CartPage,
    UserPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegistersignPage,
    RegisterpasswordPage,
    SearchPage,
    ProductlistPage,
    PcontentPage,
    PersonalPage,
    OrderPage,
    AddressPage,
    AddaddressPage,
    EditaddressPage,
    PaymentPage,
    FansPage,
    FandetailPage,
    SettingPage,
    CameraPage,
    IndexAdvPage,
    IonModleAComponent,
    IonModleBComponent,
    IonModleCComponent,
    IonModleDComponent,
    IonModleGComponent,
    MywalletPage,
    RechargePage,
    OrdersPage,
    VippresentPage,
    VippresentdetailPage
  ],
  providers: [  /*引入了自定义的服务*/
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServicesProvider,
    StorageProvider,
    ToolsProvider,
    ThemeableBrowser,
    AlertProvider,
    ClearloginProvider,
    Camera,
    ImagePicker,
    File,
    FileTransferObject,
    FileTransfer,
    ImgProvider,
    ToastProvider,
    // Alipay
  ]
})
export class AppModule {}
