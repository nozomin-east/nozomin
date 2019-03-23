const path = require('path');

module.exports = {
  '~components': path.resolve(__dirname, '../src/components'),
  '~containers': path.resolve(__dirname, '../src/containers'),
  '~atoms': path.resolve(__dirname, '../src/components/atoms'),
  '~molecules': path.resolve(__dirname, '../src/components/molecules'),
  '~organisms': path.resolve(__dirname, '../src/components/organisms'),
  '~ecosystems': path.resolve(__dirname, '../src/components/ecosystems'),
  '~environments': path.resolve(__dirname, '../src/components/environments'),
  '~hoc': path.resolve(__dirname, '../src/components/hoc'),
  '~redux': path.resolve(__dirname, '../src/redux'),
  '~modules': path.resolve(__dirname, '../src/modules'),
  '~types': path.resolve(__dirname, '../src/types'),
  '~utils': path.resolve(__dirname, '../src/utils'),
  '~themes': path.resolve(__dirname, '../src/themes'),
  '~': path.resolve(__dirname, '../src'),
};
