/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('hcscript');
defaultConfig.transformer = {
    getTransformOptions: async () => ({
        transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
        },
    }),
};
defaultConfig.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles'];

module.exports = defaultConfig;
