import { Injectable } from "@angular/core";
import { navigation_data } from "../app.component";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  // Liste contenant 5 dictionnaires, 1 par catégorie 
  navigation_categories = [
    "Gestion de projet",
    "Expérience utilisateur",
    "Interface utilisateur",
    "Dévelopement",
    "Editorial"  
  ];

  ChangeCategories(n: number): any {
    if (this.navigation_categories[n] !== undefined) {
      return this.navigation_categories[n];
    } else {
      throw new Error("Invalid indices: Question or theme not found.");
    }
  }
}