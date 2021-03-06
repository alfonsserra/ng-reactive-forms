import { Component, OnInit } from '@angular/core';

@Component({
	selector:    'app-template-driven-sample-form',
	templateUrl: './template-driven-sample-form.component.html',
	styleUrls:   ['./template-driven-sample-form.component.scss']
})
export class TemplateDrivenSampleFormComponent implements OnInit {

	public person;

	constructor() {
	}

	public ngOnInit() {
		this.person = {'firstName': '', 'lastName': '', 'gender': {'id': 'M', 'description': 'COMMON_MALE'}};
	}

	public go() {
		console.log(this.person);
	}
}
