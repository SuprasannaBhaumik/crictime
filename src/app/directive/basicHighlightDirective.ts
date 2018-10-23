import { OnInit, Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[onHoverGreen]'
})
export class BasicHighlightDirective implements OnInit {
	
	constructor(private elementRef:ElementRef, private renderer:Renderer2){	}

	ngOnInit(){
		//this.elementRef.nativeElement.style.background='green';
		this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','transparent');
	}


	@HostListener('mouseenter') mouseover(eventData: Event) {
		this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
	}

	@HostListener('mouseleave') mouseleave(eventData: Event) {
		this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
	}

}