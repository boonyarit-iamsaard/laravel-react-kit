export default {
    '**/*': 'prettier --check --ignore-unknown',
    '**/*.{js,jsx,cjs,mjs,ts,tsx}': ['eslint'],
    '**/*.php,!**/*.blade.php': ['./vendor/bin/pint --test', 'vendor/bin/rector --dry-run', './vendor/bin/phpstan analyse --memory-limit=2G'],
};
