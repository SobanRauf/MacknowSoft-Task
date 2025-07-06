import { LogBox } from "react-native";
import Routes from "./src/router";
import { queryClient } from "./src/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes />;
      </QueryClientProvider>
    </Provider>
  );
}
