import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'team',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Team.home.title' },
    loadChildren: () => import('./rostermicrov2/team/team.routes'),
  },
  {
    path: 'team-plan',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2TeamPlan.home.title' },
    loadChildren: () => import('./rostermicrov2/team-plan/team-plan.routes'),
  },
  {
    path: 'resource',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Resource.home.title' },
    loadChildren: () => import('./rostermicrov2/resource/resource.routes'),
  },
  {
    path: 'resource-plan',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2ResourcePlan.home.title' },
    loadChildren: () => import('./rostermicrov2/resource-plan/resource-plan.routes'),
  },
  {
    path: 'shift-demand',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2ShiftDemand.home.title' },
    loadChildren: () => import('./rostermicrov2/shift-demand/shift-demand.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Task.home.title' },
    loadChildren: () => import('./rostermicrov2/task/task.routes'),
  },
  {
    path: 'facility',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Facility.home.title' },
    loadChildren: () => import('./rostermicrov2/facility/facility.routes'),
  },
  {
    path: 'shift-type',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2ShiftType.home.title' },
    loadChildren: () => import('./rostermicrov2/shift-type/shift-type.routes'),
  },
  {
    path: 'ref-calendar',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2RefCalendar.home.title' },
    loadChildren: () => import('./rostermicrov2/ref-calendar/ref-calendar.routes'),
  },
  {
    path: 'resource-training',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2ResourceTraining.home.title' },
    loadChildren: () => import('./rostermicrov2/resource-training/resource-training.routes'),
  },
  {
    path: 'training',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Training.home.title' },
    loadChildren: () => import('./rostermicrov2/training/training.routes'),
  },
  {
    path: 'position-requirement',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2PositionRequirement.home.title' },
    loadChildren: () => import('./rostermicrov2/position-requirement/position-requirement.routes'),
  },
  {
    path: 'position',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Position.home.title' },
    loadChildren: () => import('./rostermicrov2/position/position.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Department.home.title' },
    loadChildren: () => import('./rostermicrov2/department/department.routes'),
  },
  {
    path: 'shift',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Shift.home.title' },
    loadChildren: () => import('./rostermicrov2/shift/shift.routes'),
  },
  {
    path: 'shift-template',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2ShiftTemplate.home.title' },
    loadChildren: () => import('./rostermicrov2/shift-template/shift-template.routes'),
  },
  {
    path: 'role',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2Role.home.title' },
    loadChildren: () => import('./rostermicrov2/role/role.routes'),
  },
  {
    path: 'resource-roles',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2ResourceRoles.home.title' },
    loadChildren: () => import('./rostermicrov2/resource-roles/resource-roles.routes'),
  },
  {
    path: 'ref-rotation',
    data: { pageTitle: 'rostermicrov2App.rostermicrov2RefRotation.home.title' },
    loadChildren: () => import('./rostermicrov2/ref-rotation/ref-rotation.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
