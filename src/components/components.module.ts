import { NgModule } from '@angular/core';
import { CarModalComponent } from './car-modal/car-modal';
import { ShareComponent } from './share/share';
@NgModule({
	declarations: [
    CarModalComponent,
    ShareComponent,
    ],
	imports: [],
	exports: [
    CarModalComponent,
    ShareComponent,
    ]
})
export class ComponentsModule {}
