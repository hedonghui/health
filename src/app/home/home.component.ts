import { Component, OnInit, HostListener} from '@angular/core';
import { animate } from '@angular/animations';
import { flyIn } from '../animations/fly-in';
import { HttpClient } from '@angular/common/http';
import { AssetDataService } from './asset-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AssetDataService],
  animations: [ flyIn ]
})
export class HomeComponent implements OnInit {
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
