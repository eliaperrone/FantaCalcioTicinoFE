import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'fct-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  matches$: Object;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    console.log("MATCHES: " + this.matchService.getMatches().subscribe((matches) => this.matches$ = matches, (error) => console.log("getMatches() fail")));
  }

}
