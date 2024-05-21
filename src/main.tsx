import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom'
import App from './App.tsx'
import './index.css'

//...
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://f09a7b10a6a563639603665fb1d56e13@o4507233252933632.ingest.us.sentry.io/4507233259487232',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation: useLocation,
      useNavigationType: useNavigationType,
      createRoutesFromChildren: createRoutesFromChildren,
      matchRoutes: matchRoutes,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
