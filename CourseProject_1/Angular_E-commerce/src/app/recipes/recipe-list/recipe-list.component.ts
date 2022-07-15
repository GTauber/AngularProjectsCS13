import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Rebecca', 'A mais linda de todas', 'https://lh3.googleusercontent.com/pw/AM-JKLV3djWOiIuZx5deBcBFkdtpqZ6CpvfKckM48w21XPW_6KboiFPIGdrq1tspWIf16tTTFWXGF5GGdSCuyUIkAidwr6yuwfV19qNyt1KkFbSQNsju1tuTP-NMllabYCh_rM3_fGR56OBsbKSGszgHAX1rbQ=w736-h980-no?authuser=0')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
