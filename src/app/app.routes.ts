import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'post/:id', component: PostComponent },
	{ path: 'list', component: ListPostsComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);