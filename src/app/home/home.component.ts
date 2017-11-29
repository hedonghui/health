import { Component, OnInit, HostListener, HostBinding} from '@angular/core';
import { animate } from '@angular/animations';
import { slideInDownAnimation } from '../animations/routerAnimation';
import { HttpClient } from '@angular/common/http';
import { AssetDataService } from './asset-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AssetDataService],
  animations: [ slideInDownAnimation ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  mockdata;
  dataes;
  constructor(private http: HttpClient, private assetData: AssetDataService) { }
  ngOnInit() {
    this.http.get('/mock-data/homeNews.json').subscribe(data => {
    this.mockdata = data['list'];
    });
    this.dataes = this.assetData.getAssetData();
  }
}
