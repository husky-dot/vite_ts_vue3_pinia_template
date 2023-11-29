export enum PageEnum {
  //登录页面
  LOGIN = '/login',
  // 申请试
  APPLY = '/apply',
  PRIVACY = '/privacy',
  SERVICE = '/service',
  APPLY_SUCCESS = '/apply_success',
  //无权限页面
  ERROR_403 = '/403',
  // 404
  ERROR_404 = '/:pathMatch(.*)*',
  INDEX = '/',
  HOME = '/home',
  HOME_INDEX = '/home/index',
}
