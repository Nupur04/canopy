import { Directive, ElementRef, OnInit } from "@angular/core";
import { LgCarouselItemComponent } from "projects/canopy/src/lib/carousel/carousel-item/carousel-item.component";
import { LgCarouselComponent } from "projects/canopy/src/lib/carousel/carousel.component";

@Directive({
    selector: '[lgCarouselFocus]',
  })
  export class LgCarouselFocusDirective implements OnInit {

    constructor(public _element: ElementRef,
        private carouselItem: LgCarouselItemComponent,
        private carousel: LgCarouselComponent,
        ) {}

      ngOnInit() {
        let hostComponent = this.carousel.selectedItemIndex;
        console.log('hostComponent', hostComponent);

        let carouselItems = this.carouselItem.itemContent;
        console.log('carouselItems******************', carouselItems);

        //   this._element.nativeElement.onfocus(() => {
        //     console.log('onfocus');
        //   });
        }
  };
