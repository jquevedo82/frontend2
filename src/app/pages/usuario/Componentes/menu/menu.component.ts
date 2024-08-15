import { Component, Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/componentes/confirmation-modal/confirmation-modal.component';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';
import { SidebarService } from 'src/app/services/sidebar.service';

@Injectable()
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menus!: any[];
  menus2!: any[];
  showInput: boolean = false;
  newMenuName!: string;
  update = true;

  selectedData!: string;

  dataList = [
    { label: 'Data 1', value: 'data1', icon: 'fa fa-users' },
    { label: 'Data 2', value: 'data2', icon: 'fa fa-home' },
    { label: 'Data 3', value: 'data3', icon: 'fa fa-envelope' },
    { label: 'Data 4', value: 'data4', icon: 'fa fa-phone' },
    { label: 'Data 5', value: 'data5', icon: 'fa fa-star' },
    { label: 'Data 6', value: 'data6', icon: 'fa fa-heart' },
    { label: 'Data 7', value: 'data7', icon: 'fa fa-book' },
    { label: 'Data 9', value: 'data9', icon: 'fa fa-cloud' },
    { label: 'Data 10', value: 'data10', icon: 'fa fa-camera' },
    { label: 'Data 11', value: 'data11', icon: 'fa fa-briefcase' },
    { label: 'Data 1', value: 'data1', icon: 'fa-address-card' },
    { label: 'Data 3', value: 'data3', icon: 'fa fa-bell ' },
    { label: 'Data 4', value: 'data4', icon: 'fa fa-bars' },
    { label: 'Data 5', value: 'data5', icon: 'fa fa-university' },
    { label: 'Data 6', value: 'data6', icon: 'fa fa-comments' },
    { label: 'Data 7', value: 'data7', icon: 'fa fa-cubes' },
    { label: 'Data 9', value: 'data9', icon: 'fa fa-folder-open' },
    { label: 'Data 10', value: 'data10', icon: 'fa fa-server' },
  ];

  constructor(
    private menuService: SidebarService,
    private modal: ConfirmationModalComponent,
    private modal2: ModalComponent
  ) {}

  ngOnInit(): void {
    this.loadMenus();
  }

  loadMenus() {
    this.menuService.getPadres().subscribe((data) => {
      this.menus = data.data;
      //this.dataList = data.data;
    });
  }

  loadHMenus() {
    this.menuService.getHijos(this.selectedData).subscribe((data) => {
      this.menus2 = data.data;
      console.log(data.data);
      //this.dataList = data.data;
    });
  }

  editMenu(menuId: number) {
    console.log(menuId);
  }
  onSelectChange(){
    this.loadHMenus();
  }
  async deleteMenu(menuId: number) {
    let x = await this.modal.confirm('Desea Eliminar el Menu');
    if (x) {
      this.menuService.deletePadres(menuId).subscribe((data) => {
        console.log(data);
        this.loadMenus();
      });
    }
  }

  toggleEditMode(menu: any) {
    menu.editing = !menu.editing;
  }

  onBlur(menu: any) {
    if (menu.Descri == '') {
      this.modal2.openModal('EL Dato no puede estar Vacio');
      return;
    }
    this.menuService.patchPadre(menu.id, menu).subscribe((data) => {
      console.log(data);
    });
    menu.editing = false;
  }
  addNewMenu() {
    this.update = false;
    if (this.newMenuName == '') {
      this.modal2.openModal('EL Dato no puede estar Vacio');
      return;
    }

    this.menuService.postPadre(this.newMenuName.toUpperCase()).subscribe((data) =>{
      console.log(data);
      this.loadMenus();
      });
      this.update = true;
      this.showInput = false;
  }

  cancelAddMenu() {
    this.showInput = false;
  }
}
