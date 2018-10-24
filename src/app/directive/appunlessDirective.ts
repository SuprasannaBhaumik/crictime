import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class AppUnlessDirective{

  constructor(private viewContainer:ViewContainerRef,private template:TemplateRef<Object>) { }

  @Input('unless') set unless(value:boolean) {
  	if(!value) {
  		this.viewContainer.createEmbeddedView(this.template);
  	} else {
  		this.viewContainer.clear();
  	}
  }

}
