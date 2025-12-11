/* eslint-env node */

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Exclude test files and mocks from the bundle
config.resolver.blockList = [
  /\.(test|spec)\.(js|jsx|ts|tsx)$/,
  /__tests__\//,
  /__mocks__\//,
  /jest-setup\.ts$/,
  /src\/lib\/test\//,
];

module.exports = withNativeWind(config, { input: './global.css' });
