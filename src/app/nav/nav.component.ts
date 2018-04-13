import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {
  @Input() row:any ="row"
  @Input() search:any ="search"
  show:boolean
  head = []
  imgData = []
  
  constructor() { }

  ngOnInit() {
    this.render()
  }
  ngOnChanges() {
    this.render()
  }

  render(){
    this.head = []
    this.imgData = []
    
    for(let x in this.row){
      this.head.push(x)
      this.imgData.push(this.row[x])
    }
    if(this.search == "y"){
      this.show = true
    }else if(this.search == "n"){
      this.show = false
    }
  }

}
