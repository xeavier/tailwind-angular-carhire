import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultsComponent } from './pages/results/results.component';
import { CarsComponent } from './components/cars/cars.component';
import { ModelComponent } from './components/model/model.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ResultsComponent, CarsComponent, ModelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
