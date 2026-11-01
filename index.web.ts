// Entrada para a versão web (opcional, só para testar no navegador: `npm run web`).
// O Skia na web precisa carregar o CanvasKit (WebAssembly) antes do app.
import '@expo/metro-runtime';
import { registerRootComponent } from 'expo';
import { LoadSkiaWeb } from '@shopify/react-native-skia/lib/module/web/LoadSkiaWeb';

LoadSkiaWeb({ locateFile: (f: string) => `/${f}` }).then(async () => {
  const App = (await import('./App')).default;
  registerRootComponent(App);
});
