import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[SignupComponent]
})
export class SignupModule { }
