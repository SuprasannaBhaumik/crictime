import { Component, Input } from '@angular/core';


@Component({
	selector:'app-server',
	templateUrl:'./server.component.html'
})
export class ServerComponent {
	
	serverName:string = "";
	serverType:string = "";
	serverContent: string = "";

	@Input() element:{name:string, type:string, content:string};

    /* Lifecycle methods are commented
	
	ngOnChanges() {
		console.log("input has changed");
	}

    ngDoCheck() {
    	console.log("always called when changes occurs like Click, Observable, etc");
    }

    ngAfterContentInit() {
     	console.log("called once during ng-template")
    }

    ngAfterContentChecked() {
    	console.log("called multiple times for ng-template");
    }

    */
} 