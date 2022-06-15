import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AuthProvider from './auth-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Core({ children, auth }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider auth={auth}>

        {children}

      </AuthProvider>
    </QueryClientProvider>
  );
}

Core.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.object.isRequired,
};

export default Core;
