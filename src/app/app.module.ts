import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
import { FormsModule} from '@angular/forms';
import { HeadMenuComponent } from './headmenu/head-menu/head-menu.component';
import { NavMenuLeftComponent } from './headmenu/nav-menu-left/nav-menu-left.component';
import { NavMenuRightComponent } from './headmenu/nav-menu-right/nav-menu-right.component';
import { SearchBarComponent } from './headmenu/search-bar/search-bar.component';
import { NavCategoryComponent } from './headmenu/nav-category/nav-category.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
//

@NgModule({
  declarations: [
    AppComponent,
    HeadMenuComponent,
    NavMenuLeftComponent,
    NavMenuRightComponent,
    SearchBarComponent,
    NavCategoryComponent,
    TopBannerComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
