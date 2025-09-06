const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  resolver: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);