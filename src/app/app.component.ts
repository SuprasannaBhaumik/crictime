import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crictime';
  serverElements = [
  	{
  		name:"Server 1", 
  		type:"blueprint", 
  		content:"Dev"
  	},
  	{
  		name:"Server 12", 
  		type:"server", 
  		content:"Prod"
  	}
  ];


  onServerAdded(serverData: {name:string, type:string, content:string}){
  	this.serverElements.push({
  		name:serverData.name,
  		type:serverData.type,
  		content:serverData.content
  	});
  }
  
}
