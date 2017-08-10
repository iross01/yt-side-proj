import { Component, NgModule } from '@angular/core';
import { YoutubeApiService} from '../../services/youtubeapi.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Channel} from "../../interfaces/channel";


@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./../../app.component.scss'],
  providers: [YoutubeApiService]
})
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ]})

export class SetupComponent{

	currentStep:number=0;

	search = new FormControl();

	results: Observable<any>;

	channels: Channel[] = [];

	clone=false;

	constructor(public youtube:YoutubeApiService){
		this.results = this.search.valueChanges.debounceTime(200).switchMap(query => youtube.search(query));
	}

	public nextStep(){
		this.currentStep++;
	}

	public clearSearch(){
		this.search.setValue(null);
	}

	public addToSelected(channelSelected){
		this.channels.push({name: channelSelected.snippet.channelTitle, 
			icon:channelSelected.snippet.thumbnails.default.url,
			url:'https://www.youtube.com/c/' + channelSelected.snippet.channelId});
		console.log(this.channels);
		this.clearSearch();
	}
}