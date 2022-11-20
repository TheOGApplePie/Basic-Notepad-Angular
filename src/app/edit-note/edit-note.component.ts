import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(private notes:NotesService, private route: ActivatedRoute) { }
  note: any | undefined

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const noteIdFromRoute = Number(routeParams.get('noteId'))
    this.notes.getNotewithId(noteIdFromRoute).subscribe((returned)=>{
      this.note = returned
      this.editNote.patchValue({
        title: this.note.title,
        doc: this.note.doc
      })
    })
    
  }
  editNote= new FormGroup({
    title: new FormControl(''),
    doc: new FormControl(''),
    date: new FormControl(new Date())
  })
  saveNote() {
    console.log(this.note.id)
    this.notes.saveNote(this.note.id, this.editNote.value).subscribe()
    }
    deleteNote(){
      this.notes.removeNote(this.note.id).subscribe((returned)=>{
        alert(`${this.note.title} deleted successfully`)
      })
    }
}
