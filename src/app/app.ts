import { Component, signal } from '@angular/core';
import { BannerComponent } from "./components/banner/banner";

@Component({
  selector: 'app-root',
  imports: [BannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anybank');
}
