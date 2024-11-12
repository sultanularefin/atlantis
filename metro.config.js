const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {};




// metro.config.js
/*const {
    wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');*/

const config = {
    // Your existing Metro configuration options
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = wrapWithReanimatedMetroConfig(config);

// module.exports = wrapWithReanimatedMetroConfig(config);
