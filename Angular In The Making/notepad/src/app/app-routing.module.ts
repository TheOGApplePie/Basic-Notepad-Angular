import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditNoteComponent} from './edit-note/edit-note.component';
import {AllNotesComponent} from './all-notes/all-notes.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: AllNotesComponent},
  {path: 'edit-note/:noteId', component: EditNoteComponent},
  {path: '**', pathMatch:'full', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
