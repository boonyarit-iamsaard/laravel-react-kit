import { useCallback, useEffect, useState } from 'react';

const APPEARANCES = ['light', 'dark', 'system'] as const;
export type Appearance = (typeof APPEARANCES)[number];

function getValidAppearance(appearance: string | null): Appearance {
    return APPEARANCES.find((a) => a === appearance) ?? 'system';
}

function prefersDark() {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setCookie(name: string, value: string, days = 365) {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
}

function applyTheme(appearance: Appearance) {
    const isDark = appearance === 'dark' || (appearance === 'system' && prefersDark());

    document.documentElement.classList.toggle('dark', isDark);
}

function mediaQuery() {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
}

function handleSystemThemeChange() {
    const currentAppearance = getValidAppearance(localStorage.getItem('appearance'));

    applyTheme(currentAppearance);
}

export function initializeTheme() {
    const savedAppearance = getValidAppearance(localStorage.getItem('appearance'));

    applyTheme(savedAppearance);

    // Add the event listener for system theme changes...
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('system');

    const updateAppearance = useCallback((mode: Appearance) => {
        setAppearance(mode);

        // Store in localStorage for client-side persistence...
        localStorage.setItem('appearance', mode);

        // Store in cookie for SSR...
        setCookie('appearance', mode);

        applyTheme(mode);
    }, []);

    useEffect(() => {
        const savedAppearance = getValidAppearance(localStorage.getItem('appearance'));
        updateAppearance(savedAppearance);

        return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
    }, [updateAppearance]);

    return { appearance, updateAppearance } as const;
}
