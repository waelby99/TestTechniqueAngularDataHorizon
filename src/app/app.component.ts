import {Component, OnInit} from '@angular/core';
import {MyserviceService} from "./myservice.service";
import {PagingConfig} from "./paging-config.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppAngularNiveau1WaelBenYoussef';
  //ngOnInit method
  ngOnInit(): void {
    this.loadEmployees()
  }
  //contructor to inject the service
  constructor(private myService:MyserviceService) {
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
    }
  }
  //retrieving employees data
  ToShow:any;
  loadEmployees(){
    this.myService.fetchAllEmployees().subscribe(
      (data)=>{
        //tri function that does the tri on firstName Column and display the data
        this.ToShow = Object.values(data).sort((a: any, b: any) => {
          return a.firstName.localeCompare(b.firstName);
      })
      }
    )
  }
  //pagination configuration we implement it by just implementing ngx pagination by running npm i ngx-pagination and importing it in AppModule
  pagingConfig: PagingConfig = {} as PagingConfig;
  currentPage:number  = 1;
  itemsPerPage: number = 10;

  //when clicking on next or prev
  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event
    this.loadEmployees()
  }
}
