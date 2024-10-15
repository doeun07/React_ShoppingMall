import { QueryClientProvider } from '@tanstack/react-query';
import { useRoutes } from 'react-router-dom';
import { getClient } from './queryClient';
import { routes } from './routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Gnb from './components/gnb';

const App = () => {
  const element = useRoutes(routes);
  const queryClient = getClient();

  return <QueryClientProvider client={queryClient}>
    <Gnb />
    {element}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider >;
};

export default App;
