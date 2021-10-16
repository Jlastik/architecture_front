import React from 'react';

import { SignupFormContainer } from './frame/signup-form';

export function SignupComponent(props) {
  return (
    <div>
      <h2>Регистрация</h2>
      <SignupFormContainer {...props} />
      <div>
        Есть аккаунт? <span>Войти</span>
      </div>
    </div>
  );
}
