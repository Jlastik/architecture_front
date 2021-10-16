import React, { useEffect } from 'react';

import { HomeComponent } from './home.component';
import { useDispatch, useSelector } from 'react-redux';
import { homeUploadAccountData } from './home.action';
import { HOME_STORE_NAME } from './home.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

export function HomeContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[HOME_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  useEffect(() => {
    console.log('Useeffect work');
    dispatch(homeUploadAccountData());
  }, []);
  return <HomeComponent />;
}
