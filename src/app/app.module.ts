import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routs
import { AppRouting } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

// Services
import { InfoService } from './services/info.service';
import { TeamService } from './services/team.service';
import { ProductService } from './services/product.service';
import { SearchMainComponent } from './components/search-main/search-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ProductItemComponent,
    SearchMainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting
  ],
  providers: [
    InfoService,
    TeamService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
