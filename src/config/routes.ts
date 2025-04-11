import { Detail, Resume, Work } from '@/routes';

/**
 * @interface RouteData
 *  @prop {string} path - route path
 *  @prop {string} key - unique route id
 *  @prop {string} element - root React node for route outlet
 *  @prop {boolean} [excludeFromNav] - hide route from main navigation
 */
export interface RouteData {
  path: string;
  key: string;
  element: React.FC;
  menuLabel?: string;
  excludeFromNav?: boolean;
}

//------------------------------------------------------
// Route paths.
// Exported to use in other components when focus and
// ReactRouter get out of sync during local development.
//------------------------------------------------------
export const HOME_ROUTE = '/';
export const WORK_ROUTE = '/work';
export const RESUME_ROUTE = '/resume';

export const routes: RouteData[] = [
  {
    path: HOME_ROUTE,
    key: 'home',
    element: () => false,
    menuLabel: 'Home'
  },

  {
    path: WORK_ROUTE,
    key: 'work',
    element: Work,
    menuLabel: 'Work'
  },

  {
    path: `${WORK_ROUTE}/:id`,
    key: 'work-detail',
    element: Detail,
    excludeFromNav: true
  },

  {
    path: RESUME_ROUTE,
    key: 'resume',
    element: Resume,
    menuLabel: 'Resume'
  }
];

export default routes;
