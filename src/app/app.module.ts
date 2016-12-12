import * as moment from 'moment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostsService } from './list-posts/posts.service';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PostComponent,
    ListPostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MomentModule,
    AppRoutes
  ],
  providers: [ PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
