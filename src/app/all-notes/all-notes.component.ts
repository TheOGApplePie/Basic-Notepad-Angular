import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesService } from '../notes.service'
@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {
  
  constructor(private note:NotesService) { }
  allNotes :any = []
  numOfFiles = 1
  ngOnInit(): void {
    this.note.getAllNotes().subscribe((allData)=>{
      this.allNotes = allData;
      console.log(this.allNotes)
      this.numOfFiles = Object.keys(allData).length

    })
  }
/**
 * 
 */
newNote(){
  let note = {
    title:`New Note ${this.numOfFiles+1}`,
    doc:"",
    date: new Date()
  }
  this.note.createNewNote(note).subscribe()
    alert("New Note created!")
  }
  
}
