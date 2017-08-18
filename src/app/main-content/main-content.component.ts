import { Component } from '@angular/core';
import {Channel} from "../interfaces/channel";
import { YoutubeApiService } from '../services/youtubeapi.service';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./../app.component.scss']
})
export class MainContentComponent {

	public currentStep:number;
	public channels:Channel[];
	public results:any[] = [];
	public showSetup = true;

	constructor(public youtubeService:YoutubeApiService){
		this.results = [];
	}

	public generateSubs(channels){
		for(let channel of channels){
			this.youtubeService.getVideos(channel)
			.subscribe(value => this.results.push(value[0]));
		}
		console.log(this.results);
		this.showSetup=false;
	}
}
