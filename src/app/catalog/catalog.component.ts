import { Component } from '@angular/core';
import { CatalogRepositoryService } from "../catalog/catalog.repository.service";
import { UserRepositoryService } from '../services/user-repository.service';
import { IClass } from './class.model';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class catalogComponent {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(private catalogRepositoryService: CatalogRepositoryService, public userRepositoryService: UserRepositoryService) { }

  ngOnInit() {
    this.catalogRepositoryService.getCatalog()
      .subscribe((classes: IClass[]) => { this.classes = classes; this.applyFilter('') });
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.userRepositoryService.enroll(classToEnroll.classId)
      .subscribe({
        error: (err) => { console.error(err); classToEnroll.processing = false },
        complete: () => { classToEnroll.processing = false; classToEnroll.enrolled = true; },
      });
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepositoryService.drop(classToDrop.classId)
      .subscribe({
        error: (err) => { console.error(err); classToDrop.processing = false },
        complete: () => { classToDrop.processing = false; classToDrop.enrolled = false; }
      });
  }

  applyFilter(filter: string) {
    if (!filter) {
      this.visibleClasses = this.classes;
      return;
    }

    if (filter === 'GEN') {
      this.visibleClasses = this.classes.filter(c =>
        !c.course.courseNumber.startsWith('CH') &&
        !c.course.courseNumber.startsWith('PO') &&
        !c.course.courseNumber.startsWith('SP'));
    } else {
      this.visibleClasses = this.classes.filter(c => c.course.courseNumber.startsWith(filter));
    }
  }
}
