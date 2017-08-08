import { Component } from '@angular/core';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class SetupComponent {

	currentStep:number=0;

	public nextStep(){
		this.currentStep++;
	}
}
