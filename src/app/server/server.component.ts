import { Component, Input } from '@angular/core';


@Component({
	selector:'app-server',
	templateUrl:'./server.component.html'
})
export class ServerComponent {
	
	
	buttonStatus:boolean = true;
	serverCreatedStatus:string = "No Server is created!!!";

	@Input() element:{name:string, type:string, content:string};

	constructor(){
		setTimeout( ()=> {
			this.buttonStatus = false;
		}, 5000);
	}

	addServer(){
		this.serverCreatedStatus = "Server is created successfully";
	}

} 