import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [{path:"weather",component:WeatherComponent },
{path:"todo",component:TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
