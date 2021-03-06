import { Component, NgModule, EventEmitter } from '@angular/core';
import { YoutubeApiService } from '../../services/youtubeapi.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Channel} from "../../interfaces/channel";
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./../../app.component.scss'],
  providers: [YoutubeApiService],
  outputs: ['outputCurrentStep','chosenChannels']
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

	justAdded = false;

	outputCurrentStep: EventEmitter<number> = new EventEmitter<number>();
	
	chosenChannels: EventEmitter<Channel[]> = new EventEmitter<Channel[]>();

	constructor(public youtube:YoutubeApiService, private dragula: DragulaService){
		this.results = this.search.valueChanges.debounceTime(200).switchMap(query => youtube.search(query));
		this.dragula.setOptions('bag-channels', {
	      revertOnSpill: true
	    });
	}

	public nextStep(){
		this.currentStep++;
		this.outputCurrentStep.emit(this.currentStep);
		if(this.currentStep===3){
			this.chosenChannels.emit(this.channels);
		}
	}

	public prevStep(){
		this.currentStep--;
		this.outputCurrentStep.emit(this.currentStep);
	}

	public clearSearch(){
		this.search.setValue(null);
	}

	public addToSelected(channelSelected){
		for(let channel of this.channels){
			if(channel.url === 'https://www.youtube.com/c/' + channelSelected.snippet.channelId){
				return;
			}
		}
		this.channels.push({name: channelSelected.snippet.channelTitle, 
			icon:channelSelected.snippet.thumbnails.default.url,
			url:'https://www.youtube.com/c/' + channelSelected.snippet.channelId,
			id:channelSelected.snippet.channelId});
		this.clearSearch();
		this.justAdded=true;
		setTimeout(() => {
			this.justAdded = false;
		}, 100);
	}
}