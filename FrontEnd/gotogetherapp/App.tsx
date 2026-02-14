import "react-native-reanimated";
import "react-native-get-random-values";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./src/reducers/store";
import { PaperProvider } from "react-native-paper";
import Layout from "./src/components/Layout/Layout";
import ApplicationNavigator from "./src/routers";

const queryClient = new QueryClient();

const SocketWapper = ({ children }: { children: React.ReactNode }) => {
  const token = useSelector((state: RootState) => state.login.accessToken);
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PaperProvider>
          <Layout>
            <ApplicationNavigator />
          </Layout>
        </PaperProvider>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
