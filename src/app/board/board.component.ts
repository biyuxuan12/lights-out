import { Component } from '@angular/core';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
flag = true

getStatus(){
return this.flag?"lightsOn":"lightsOff";
}
handleLight(row:number){
  this.flag=!this.flag;
  console.log(row)
}
}
