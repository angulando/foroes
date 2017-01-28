import * as moment from 'moment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostsService } from './list-posts/posts.service';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PostComponent,
    ListPostsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule,
    MomentModule,
    AppRoutes
  ],
  providers: [ 
    PostsService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

moment.locale('es');