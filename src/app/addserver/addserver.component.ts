import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.css']
})
export class AddserverComponent implements OnInit {

  
  serverType:string = "";
  serverContent:string = "";

  @Output() serverCreated = new EventEmitter<{name:string, type:string, content:string}>();

  constructor() {
  	console.log("called constructor");
  }

  ngOnInit() { 
  	console.log("called oninit");
  }

  addServer(serverNameInput:HTMLInputElement){
  	this.serverCreated.emit(
  		{
  			name:serverNameInput.value, 
  		 	type:this.serverType, 
  		 	content:this.serverContent
  		}
  	);
  }

}
