import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {}

  getJoke() {
    var url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single';
    return new Promise(resolve=> {
      this.http.get(url).subscribe((data:any)=> {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
