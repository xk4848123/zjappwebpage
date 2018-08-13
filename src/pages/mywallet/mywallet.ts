import { Component,Renderer2, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RechargePage } from '../recharge/recharge';
/**
 * Generated class for the MywalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mywallet',
  templateUrl: 'mywallet.html',
})
export class MywalletPage {

  public RechargePage = RechargePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,private el: ElementRef,
    private renderer2: Renderer2) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MywalletPage');
    //把图标居中
    let templateDiv = this.el.nativeElement.querySelector('#templateDiv');
    //剩余空间宽段
    let remianWidth = screen.width - templateDiv.offsetWidth * 5;

    //小球宽度
    let smallBallWidth = templateDiv.offsetWidth
    //两边宽度
    let rimWidth = remianWidth * 0.2;
    //间隙宽度
    let intervalWidth = remianWidth * 0.15;
    let img_div_one = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:first-child');
    let img_div_two = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(3)');
    let img_div_three = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(5)');
    let img_div_four = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(7)');
    let img_div_five = this.el.nativeElement.querySelector('.rank_parent_div > .img_div:nth-child(9)');
    let width_one = rimWidth;
    let width_two = width_one + smallBallWidth + intervalWidth;
    let width_three = width_two + smallBallWidth + intervalWidth;
    let width_four = width_three + smallBallWidth + intervalWidth;
    let width_five = width_four + smallBallWidth + intervalWidth;
    this.renderer2.setStyle(img_div_one,'left',width_one+2 +'px');
    this.renderer2.setStyle(img_div_two,'left',width_two +'px');
    this.renderer2.setStyle(img_div_three,'left',width_three +'px');
    this.renderer2.setStyle(img_div_four,'left',width_four +'px');
    this.renderer2.setStyle(img_div_five,'left',width_five +'px');
   //把线给居中
   let line_div_arrays = this.el.nativeElement.querySelectorAll('.update_line');
   let line_one_left = rimWidth + smallBallWidth;
   let line_tow_left = line_one_left + intervalWidth + smallBallWidth;
   let line_three_left = line_tow_left + intervalWidth + smallBallWidth;
   let line_four_left = line_three_left + intervalWidth + smallBallWidth;
   this.renderer2.setStyle(line_div_arrays[0],'left',line_one_left+4 +'px');
   this.renderer2.setStyle(line_div_arrays[1],'left',line_tow_left+4 +'px');
   this.renderer2.setStyle(line_div_arrays[2],'left',line_three_left+4 +'px');
   this.renderer2.setStyle(line_div_arrays[3],'left',line_four_left+4 +'px');
   this.renderer2.setStyle(line_div_arrays[0],'top',smallBallWidth*17/10 +'px');
   this.renderer2.setStyle(line_div_arrays[1],'top',smallBallWidth*17/10 +'px');
   this.renderer2.setStyle(line_div_arrays[2],'top',smallBallWidth*17/10 +'px');
   this.renderer2.setStyle(line_div_arrays[3],'top',smallBallWidth*17/10 +'px');
   this.renderer2.setStyle(line_div_arrays[0],'width',intervalWidth-8 +'px');
   this.renderer2.setStyle(line_div_arrays[1],'width',intervalWidth-8 +'px');
   this.renderer2.setStyle(line_div_arrays[2],'width',intervalWidth-8 +'px');
   this.renderer2.setStyle(line_div_arrays[3],'width',intervalWidth-8 +'px');
    let rank_parent_div = this.el.nativeElement.querySelector('.rank_parent_div');
    this.renderer2.setStyle(rank_parent_div,'padding-top',smallBallWidth*1.2 +'px');
  //图标居中
  let treasureImgDivArrays = this.el.nativeElement.querySelectorAll('#treasure .treasure_img_div');
  let treasureImgDIvParent = this.el.nativeElement.querySelector('#treasure .treasure_img_div_parent');
  let iconWidth = treasureImgDivArrays[0].offsetWidth;
  let treasureImgDIvInterval = (treasureImgDIvParent.offsetWidth - iconWidth * 4)/5
  // 计算出图标left
  let treasureImgOneLeft = treasureImgDIvInterval;
  let treasureImgTwoLeft = treasureImgOneLeft + treasureImgDivArrays[0].offsetWidth + treasureImgDIvInterval;
  let treasureImgThreeLeft = treasureImgTwoLeft + treasureImgDivArrays[0].offsetWidth + treasureImgDIvInterval;
  let treasureImgFourLeft = treasureImgThreeLeft + treasureImgDivArrays[0].offsetWidth + treasureImgDIvInterval;
  this.renderer2.setStyle(treasureImgDivArrays[0],'left',treasureImgOneLeft +'px');
  this.renderer2.setStyle(treasureImgDivArrays[1],'left',treasureImgTwoLeft +'px');
  this.renderer2.setStyle(treasureImgDivArrays[2],'left',treasureImgThreeLeft +'px');
  this.renderer2.setStyle(treasureImgDivArrays[3],'left',treasureImgFourLeft +'px');
  
}

}
