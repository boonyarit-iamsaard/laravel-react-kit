export default {
    '**/*': 'prettier --check --ignore-unknown',
    '**/*.php,!.phpstorm.meta.php,!_ide_helper.php,!_ide_helper_models.php': './vendor/bin/duster lint',
    '**/*.{js,ts,jsx,tsx}': ['eslint'],
};
