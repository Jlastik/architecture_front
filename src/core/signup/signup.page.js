import { SignupContainer } from './signup.container';
import {
  PageLayout,
  AuthLayout,
  ContentLayout,
} from '../../lib/elements/layout';

export const SignupPage = () => {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SignupContainer />
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
};
