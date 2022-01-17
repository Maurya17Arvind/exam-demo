import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.scss']
})
export class ViewStudentDetailsComponent implements OnInit {

  public id: any;
  public data: any;
  constructor(private router: ActivatedRoute, private getService: UsersService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['_id'];
    console.log(`this.id`, this.id)
    this.getData();
  }

  public getData() {
    this.getService.viewData(this.id).subscribe(res => {
      console.log(`res`, res)
      this.data = res;
    })
  }
}
