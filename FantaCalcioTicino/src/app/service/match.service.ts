import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  
  constructor(private http: HttpClient) { }

  getMatches(){
      return this.http.get('http://localhost:8080/matches/');
  }

  getMatchesBySeason(matchOfSeason: string){
    return this.http.get('http://localhost:8080/matches/' + matchOfSeason);
  }
}
