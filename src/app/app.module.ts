import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{TaskService} from './task.service'
import { AppComponent } from './app.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import{JsonServer} from 'jsonserver'
@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule ],
  declarations: [ AppComponent,  HeaderComponent, ButtonComponent, TasksComponent, TasksItemComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [TaskService],
})
export class AppModule { }
