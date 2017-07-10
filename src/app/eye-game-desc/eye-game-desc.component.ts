import { Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-eye-game-desc',
  templateUrl: './eye-game-desc.component.html',
  styleUrls: ['./eye-game-desc.component.css']
})
export class EyeGameDescComponent implements OnInit {
  @Input() title : string;
  @Input() eyegameimage : string;
  @Input() description : string;
  constructor() { }

  ngOnInit() {
  }

}
