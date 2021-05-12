import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appPRUEBA';
  aparece:boolean = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
}


