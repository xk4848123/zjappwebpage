import { NgModule } from '@angular/core';
import { IonModleAComponent } from './ion-modle-a/ion-modle-a';
import { IonModleBComponent } from './ion-modle-b/ion-modle-b';
import { IonModleCComponent } from './ion-modle-c/ion-modle-c';
import { IonModleDComponent } from './ion-modle-d/ion-modle-d';
import { IonModleGComponent } from './ion-modle-g/ion-modle-g';
@NgModule({
	declarations: [IonModleAComponent,
    IonModleBComponent,
    IonModleCComponent,
    IonModleDComponent,
    IonModleGComponent],
	imports: [],
	exports: [IonModleAComponent,
    IonModleBComponent,
    IonModleCComponent,
    IonModleDComponent,
    IonModleGComponent]
})
export class ComponentsModule {}
