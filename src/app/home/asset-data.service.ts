import { Injectable } from '@angular/core';

@Injectable()
export class AssetDataService {
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
  constructor() { }
  getAssetData() {
    return this.dataes;
  }
}
