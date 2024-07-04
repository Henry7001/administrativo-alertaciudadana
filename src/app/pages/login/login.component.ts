import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/modulos/usuario.service';
import { ecuadorianCedulaValidator } from 'src/app/validators/ecuadorianCedulaValidator';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  loadingLogin = false;

  constructor(private fb: FormBuilder, 
    private userService: UsuarioService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      cedula: ['', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
        ecuadorianCedulaValidator()
      ]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario válido');
      console.log(this.loginForm.value);
      this.loadingLogin=true;
      this.userService.login(this.loginForm.value).subscribe(
        (res: any) => {
          this.loadingLogin=false;
          this.messageService.add({ severity: 'success', summary: '¡Éxito!', detail: 'Se ha autenticado correctamente.' });
        },
        (error: any) => {
          console.error(error);
          this.loadingLogin=false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.mensaje });
        }
      );
    }
  }
}
