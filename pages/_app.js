/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CssBaseline } from '@mui/material';
import '../styles/globals.css';
import { AuthProvider } from '../utils/context/authContext';
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';

function MyApp({ Component, pageProps }) {
  return (
    <CssBaseline>
      <AuthProvider>
        {' '}
        {/* gives children components access to user and auth methods */}
        <ViewDirectorBasedOnUserAuthStatus
        // if status is pending === loading
        // if status is logged in === view app
        // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider>
    </CssBaseline>
  );
}

export default MyApp;
