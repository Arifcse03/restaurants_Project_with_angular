import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';
import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
recipe!: Recipe;
id!:number;
  constructor(private recipeService:RecipeService ,
    private route:ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
    (params: Params) =>{
      this.id= +params['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
    }
  );
  }
inAddToShoppingList(){
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

}
onEditRecipe(){
this.router.navigate(['edit'],{relativeTo: this.route})


}
onDeleteRecipe() {
   this.recipeService.deleteRecipe(this.id);
   this.router.navigate(['/recipes']);
 }
}
