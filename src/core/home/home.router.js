import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation/';
import { SIGNUP_ROUTE_PATH } from '../signup/signup.constants';
import { HOME_ROUTE_PATH } from './home.constant';

export async function HomeRouter(ctx) {
  ctx.store.dispatch(setActivePath(HOME_ROUTE_PATH));
  authRedirectPrivated(ctx, SIGNUP_ROUTE_PATH);
}
