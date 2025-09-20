import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();

  constructor(
    private heroeService: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;

    if (id !== 'nuevo') {
      this.heroeService.getHeroe(id).subscribe((resp: HeroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
      });
    }
  }

  guardar(formulariotemplate: NgForm) {
    if (formulariotemplate.invalid) {
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    // console.log(formulariotemplate);
    // console.log(this.heroe);
    if (this.heroe.id) {
      peticion = this.heroeService.actualizarHeroe(this.heroe);
      /* .subscribe((resp) => {
        console.log('actualizar', resp);
        }); */
    } else {
      peticion = this.heroeService.crearHeroe(this.heroe);
      /* .subscribe((resp) => {
          console.log('crear', resp);
          this.heroe = resp;
        }); */
    }

    // peticion.subscribe((resp) => {
    peticion.subscribe(() => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success',
      });
    });
  }
}
