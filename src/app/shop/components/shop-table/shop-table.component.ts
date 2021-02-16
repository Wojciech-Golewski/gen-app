import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Building } from '../../models/building.model';
import { BuildingApiService } from '../../services/building-api.service';

@Component({
  selector: 'app-shop-table',
  templateUrl: './shop-table.component.html',
  styleUrls: ['./shop-table.component.scss'],
})
export class ShopTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'hoursToMake'];
  dataSource: MatTableDataSource<Building>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private buildingApiService: BuildingApiService) {}

  ngOnInit(): void {
    this.buildingApiService.getData().subscribe((data: Building[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
