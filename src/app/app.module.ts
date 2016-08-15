import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { RecipeListComponent } from './recipes/recipe-list';
import { RecipeItemComponent } from './recipes/recipe-list';
import { RecipeDetailComponent} from './recipes/recipe-detail';
import { ShoppingListComponent,ShoppingListAddComponent } from './shopping-list';
import { DropdownDirective } from './dropdown.directive';
@NgModule({
  declarations: [RecipeBookAppComponent,
                 HeaderComponent,
                 RecipesComponent,
                 RecipeListComponent,
                 RecipeItemComponent,
                 RecipeDetailComponent,
                 ShoppingListAddComponent,
                 ShoppingListComponent,
                 DropdownDirective],
  imports: [BrowserModule],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
