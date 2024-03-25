import { createRoot } from 'react-dom/client'
import { ErrorBoundary, StoreProvider } from 'modules/providers'
import { AppLayout } from 'modules/layout/appLayout'
import App from 'app/App'

import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <AppLayout>
          <App />
        </AppLayout>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
