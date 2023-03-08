import {Component, ElementRef} from '@angular/core';
type lightStatus = "lightsOn" | "lightsOff";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  flag = true
  rank:number = 5;
  lightsOn: lightStatus="lightsOn";
  lightsOff: lightStatus="lightsOff";
  lightsMap: Array<Array<boolean>>;

  constructor(private elem: ElementRef) {
    this.lightsMap = new Array<Array<boolean>>(this.rank);
    for(let i =0; i<this.rank; i++ )
    {
      this.lightsMap[i]=new Array(this.rank).fill(true);
    }
   const lightWidth=1000/this.rank+"px";
    this.elem.nativeElement.style.setProperty('--light-width', lightWidth);
  }

  ngOnInit() {
  }

  getStatus(row: number, column: number) :lightStatus  {
    return this.lightsMap[row][column] ? this.lightsOn : this.lightsOff;
  }
  handleLight(row: number, column: number) {
    console.log("change: ",row,column)
    if(row>=0&& row<this.rank &&column>=0 &&column<this.rank )
    {this.lightsMap[row][column] = !this.lightsMap[row][column];}
  }
  handleAround(row: number, column: number){
    this.handleLight(row,column);
    this.handleLight(row-1,column);
    this.handleLight(row+1,column);
    this.handleLight(row,column-1);
    this.handleLight(row,column+1);
  }


}
