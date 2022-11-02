import { createRoot } from "react-dom/client";

import App from "./App";
import { CreateProvider } from "./useContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CreateProvider>
    <App />
  </CreateProvider>
);
