import { Component, OnInit, HostListener} from '@angular/core';
import { animate } from '@angular/animations';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ flyIn ]
})
export class HomeComponent implements OnInit {
  array = [];
  dataes = [
    {
      markSrc: '../../assets/img/home/mark.png',
      speciesSrc: '../../assets/img/home/machine.png',
      info: '自助式',
      intro: '通过实时语言.动画视频,引导检测人员自主完成测量。并与之前测量数据实时对比'
    }, {
      markSrc: '../../assets/img/home/mark.png',
      speciesSrc: '../../assets/img/home/medicinechest.png',
      info: '一体化',
      intro: '将多个原来相互独立的医疗产品结合成为一个智能自助健康体检平台，类似一个体检中心'
    }, {
      markSrc: '../../assets/img/home/mark.png',
      speciesSrc: '../../assets/img/home/tablet.png',
      info: '智能化',
      intro: '通过XX分析中心，进行个人健康综合智能分析，判定个人健康状态指数，发出健康预警报告'
    }];
    mockdata = [
      {
        img: '../../assets/img/home/mock1.jpg',
       title: '助力健康升级为"生命教练"',
       detail: '近日，微康知识产权工作再传喜讯，三项发明专利：一种个人健康医疗监测系统及健康方法（专利号：201610575598.6）、一种家用监护系统及其监护方法（专利号：201610580391.8）、一种科研项目数据处理方法及系统（专利号：201610578232.4）。'
      },
      {
        img: '../../assets/img/home/mock2.jpg',
       title: '助力健康升级为"生命教练"',
       detail: 'Have you ever finally just gave in to the temptation and read your horoscope in the newspaper on Sunday morning? Sure, we all have for most of us'
      },
      {
        img: '../../assets/img/home/mock3.jpg',
       title: '助力健康升级为"生命教练"',
       detail: 'Have you ever finally just gave in to the temptation and read your horoscope in the newspaper on Sunday morning? Sure, we all have for most of us'
      }
    ];
  constructor() { }

  ngOnInit() {

    window.onscroll = () => {
      console.log(document.documentElement.scrollTop);
    };
  }

}
