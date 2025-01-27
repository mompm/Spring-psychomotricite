import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    activeDropdown: string | null = null; // Gère quel menu déroulant est actif

    toggleDropdown(menu: string): void {
      // Si le menu cliqué est déjà actif, on le ferme, sinon on l'ouvre
      this.activeDropdown = this.activeDropdown === menu ? null : menu;
    }
  
    // Événement global pour fermer le menu si on clique en dehors
    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
      const target = event.target as HTMLElement;
  
      // Vérifie si le clic est en dehors des menus déroulants et du bouton "Plus"
      const isClickInsideMenu = target.closest('.dropdown-menu');
      const isClickOnToggle = target.closest('.dropdown-toggle');
  
      if (!isClickInsideMenu && !isClickOnToggle) {
        this.activeDropdown = null; // Réinitialise le menu actif
      }
    }
  }