import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation/';
import {
  SIGNUP_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED,
} from './signup.constants';

export async function SignupRouter(ctx) {
  ctx.store.dispatch(setActivePath(SIGNUP_ROUTE_PATH));
  authRedirectLogged(ctx, SIGNUP_REDIRECT_ON_LOGGED);
}
