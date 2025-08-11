import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import { initializeTheme } from './hooks/use-appearance';

// TODO: @t3-oss/env
function getAppName(env: unknown): string {
    if (typeof env === 'string' && env.length > 0) {
        return env;
    }

    return 'Laravel React Kit';
}

const appName = getAppName(import.meta.env.VITE_APP_NAME);

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
}).catch((error) => {
    console.error('An error occurred while rendering the application: ', error);
});

// This will set light / dark mode on load...
initializeTheme();
