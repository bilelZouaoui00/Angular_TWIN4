// shared.module.ts
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent], // Export FormsModule to make it available in other modules
})
export class SharedModule { }
