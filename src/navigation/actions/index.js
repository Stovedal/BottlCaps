//@flow
import { NavigationActions } from 'react-navigation'
import TopNavigator from '../TopNavigator';

export const navigateTo = (screen: string, params: ? Object) => {
  if (screen === undefined) {
    console.error("Undefined screen-key in navigationaction: ", screen)
  }
  let navAction;
  navAction = TopNavigator.router.getActionForPathAndParams(screen);
  if (!navAction) { console.error("Undefined navigation action for screen: ", screen) }
  navAction['action'] = undefined;
  navAction['params'] = params;
  return navAction;
}

export const navigateBack = (screen: string) => {
  let backAction = NavigationActions.back()
  backAction['routeName'] = screen;
  return backAction;
}
