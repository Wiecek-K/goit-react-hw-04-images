import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { ModalContextProvider } from "./context/ModalContext.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
);
