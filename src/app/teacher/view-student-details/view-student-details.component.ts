import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.scss']
})
export class ViewStudentDetailsComponent implements OnInit {

  public id!: string;
  public _id!: string;
  public name!: string;
  public email!: string;
  constructor(private router: ActivatedRoute, private getService: UsersService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['_id'];
    console.log(`this.id`, this.id)
    this.getData();
  }

  public getData() {
    this.getService.viewData(this.id).subscribe((res) => {
      // console.log(`view`, res)
      if (res.statusCode === 200) {
        this._id = res.data[0]._id;
        this.name = res.data[0].name;
        this.email = res.data[0].email;
        this.toster.success(res.message);
      } else {
        this.toster.error(res.message);
      }
    })
  }
}
