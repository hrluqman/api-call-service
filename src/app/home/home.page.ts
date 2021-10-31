import { Component } from '@angular/core';
import { JokeService } from "../services/joke.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jokeContainer:any = {};

  constructor(private service: JokeService) {}

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.service.getJoke().then((data:any)=> {
      this.jokeContainer = data;  
    });
  }
}
