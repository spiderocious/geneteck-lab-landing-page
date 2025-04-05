import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initializeText } from './utils/text';
import './index.css';

const initializeApp = async () => {
  await initializeText();
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
initializeApp().catch((error) => {
  console.error("Error initializing app:", error);
});
