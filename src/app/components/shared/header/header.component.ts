import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navItems = [
    {
      path: '',
      title: 'client',
      subItems: [
        { path: '/proposal/create', title: 'proposal application' },
        { path: '/proposal/list', title: 'proposal list' },
      ],
    },
    {
      path: '/',
      title: 'student',
      subItems: [
        { path: '/student-team/add', title: 'team' },
        { path: '/project/list', title: 'projects' },
      ],
    },
    {
      path: '/',
      title: 'faculty',
      subItems: [{ path: '/project/list', title: 'assigned project' }],
    },
    {
      path: '/',
      title: 'coordinator',
      subItems: [
        { path: '/project/list', title: 'projects' },
        { path: '/student-team/list', title: 'student teams' },
        { path: '/', title: 'school term' },
      ],
    },
    {
      path: '/qna/list',
      title: 'QNA',
      subItems: [],
    },
    {
      path: '/admin',
      title: '⚙️',
      subItems: [],
    },
  ];

  isLogged: boolean = false;
  displayAuthToolbar: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onAuthContainerClick() {
    this.displayAuthToolbar = !this.displayAuthToolbar;
  }

  toggleClicked: boolean = false;
  onToggleClick() {
    this.toggleClicked = !this.toggleClicked;
  }
}
