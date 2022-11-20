import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url = 'http://localhost:3000/notes'
  constructor(private http: HttpClient) { }
 
  createNewNote(note:any){

    return this.http.post(this.url, note)
  }
  getAllNotes(){
    return this.http.get(this.url)
  }
  saveNote(id:number, note:any){
    return this.http.put(this.url+`/${id}`, note)
  }
  getNotewithId(id:number){
    return this.http.get(this.url+`/${id}` )
  }
  removeNote(id: number){
    return this.http.delete(this.url+`/${id}`)
  }
}
