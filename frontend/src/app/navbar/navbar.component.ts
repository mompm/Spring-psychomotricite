import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isDropdownVisible: boolean = false; // Variable pour gérer la visibilité du menu déroulant

    toggleDropdown(): void {
      this.isDropdownVisible = !this.isDropdownVisible; // Basculer l'état
    }
  
    // Événement global pour fermer le menu si on clique en dehors
    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
      const target = event.target as HTMLElement;
  
      // Vérifie si l'utilisateur clique en dehors du bouton "Plus" ou du menu
      const isClickInsideMenu = target.closest('.dropdown-menu');
      const isClickOnToggle = target.closest('.dropdown-toggle');
  
      if (!isClickInsideMenu && !isClickOnToggle) {
        this.isDropdownVisible = false;
      }
    }
  }