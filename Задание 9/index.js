// Sentry.onLoad(function() {
//   Sentry.init({
//       // Tracing
//       tracesSampleRate: 1.0, // Capture 100% of the transactions
//       // Session Replay
//       replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//       replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
//     });
// });

import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';
Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',

  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

testFunc();