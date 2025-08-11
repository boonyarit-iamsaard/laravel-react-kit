import { useCallback } from 'react';

export function useInitials(fallback = '?') {
    return useCallback(
        (fullName: string): string => {
            if (!fullName.trim()) return fallback;

            const names = fullName
                .trim()
                .split(/\s+/)
                .filter((n) => n.length > 0);

            if (names.length === 0) return fallback;
            if (names.length === 1) return names[0]?.[0]?.toUpperCase() ?? fallback;

            const firstInitial = names[0]?.[0] ?? '';
            const lastInitial = names[names.length - 1]?.[0] ?? '';

            return `${firstInitial}${lastInitial}`.toUpperCase() || fallback;
        },
        [fallback],
    );
}
