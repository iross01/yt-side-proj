import { Component, NgModule } from '@angular/core';
import { YoutubeApiService} from '../../services/youtubeapi.service';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

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

export class SetupComponent {

	currentStep:number=0;

	search = new FormControl();

	results: Observable<any>;

	constructor(public youtube:YoutubeApiService){
		if(this.search.value != ''){
			this.results = this.search.valueChanges.debounceTime(200).switchMap(query => youtube.search(query));
		} else {
			this.results = null;
		}
	}

	public nextStep(){
		this.currentStep++;
	}
}