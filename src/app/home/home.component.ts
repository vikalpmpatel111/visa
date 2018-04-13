import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() dataSrc:any = "dataSrc"
  dataArr = []
  subData = []
  row
  search ="false"
  moveArr = [400, 556, 712, 868, 1024]
  
 
 
  show:boolean =false //false
  oldID:number
  constructor() { }

  ngOnInit() {
    for(var x in this.dataSrc){
      this.dataArr.push(x)
      this.subData.push(this.dataSrc[x])
    }
  }
 

  displayTri(index){
    let elem = document.getElementById("tri")
    if(index<100){
    elem.style.left = this.moveArr[index] + 'px'
    }else if(index == 100){
    elem.style.left = 1220 + 'px'
    }
  }

  clicked(index){
    this.displayTri(index)
    if(index == 100){
      if(this.show == false){
      this.show = true
      this.search = "y"
      }else{
        this.show = false
      }
    }else{
      this.row = this.subData[index]
      this.search ="n"
      if(index != 3){
        if(!this.show){
        this.show = true
        this.oldID = index
        }else{
          if(this.oldID != index){
            this.show = true
            }else{
              this.show = false
            }
          }
        }else{
          this.show =false
        }
    }

    if(this.show){
      document.getElementById("tri").style.visibility= "visible"
    }else{
      document.getElementById("tri").style.visibility= "hidden"
    }
 
  }
}
