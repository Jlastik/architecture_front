import { routesInit } from './router.core';
import { SignupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { HomeRouter, HOME_ROUTE_PATH } from '../../core/home'; 

export const routes = {
  [SIGNUP_ROUTE_PATH]: SignupRouter,
  [HOME_ROUTE_PATH]: HomeRouter,
};

export const Router = routesInit(routes);
