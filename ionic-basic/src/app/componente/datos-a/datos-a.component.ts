import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Alumno } from 'src/app/interface/alumno';

@Component({
  selector: 'app-datos-a',
  templateUrl: './datos-a.component.html',
  styleUrls: ['./datos-a.component.scss'],
})
export class DatosAlComponent  implements OnInit {

  @Input() alumnosList:Alumno[] =[];
  @Output() eliminar: any = new EventEmitter<Alumno[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}