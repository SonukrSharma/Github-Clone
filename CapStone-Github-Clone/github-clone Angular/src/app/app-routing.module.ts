import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/dash-board/overview/overview.component';
import { RepositoryComponent } from './components/dash-board/repository/repository.component';
import { SearchComponent } from './components/search/search.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GenerateRepoComponent } from './components/generate-repo/generate-repo.component';
import { RepoContentComponent } from './components/repo-content/repo-content.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {
    path:'dashboard/:id',
    component:DashBoardComponent,
    children : [
        {path:'',component:OverviewComponent},
        {path:'overview',component:OverviewComponent},
        {path:'repo',component:RepositoryComponent}
    ]
  },

  {path:'BetaVersion',component:EditProfileComponent},
  {path:'new',component:GenerateRepoComponent},
  {path:'dashboard/:username/:repo',component:RepoContentComponent},
  {path:'search/:query',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
