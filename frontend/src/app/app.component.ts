import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
  oculto = false;
  nomePagina: string = ''; 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset) 
  .pipe( 
    map(result => result.matches), 
    shareReplay() 
  ); 
constructor(private breakpointObserver: BreakpointObserver, private router: Router) {} 

  ngOnInit(): void {
    this.setNamePage();
  }

  private setNamePage(): void { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/'){
          this.nomePagina = 'Funcionario';
          return;
        }
        this.nomePagina = event.url.split('/')[1];
        this.nomePagina = this.nomePagina.charAt(0).toUpperCase() + this.nomePagina.slice(1);
        this.nomePagina = this.nomePagina.replace(/([A-Z])/g, ' $1').trim();
      }
    });
  }

} 
