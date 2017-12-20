import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { BeastListComponent } from './beast-list.component';
import { EditBeastComponent } from './edit-beast.component';
import { NewBeastComponent } from './new-beast.component';
import { DisplaynessPipe } from './displayness.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule],
  declarations: [ AppComponent,
                  BeastListComponent,
                  EditBeastComponent,
                  NewBeastComponent,
                  DisplaynessPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
