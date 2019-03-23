module.exports = {
  rootDir: '../src',
  transform: {
    '.+\\.jsx?$'  : 'babel-jest',
    '.*\\.tsx?$' : 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testRegex: "test\\.[jt]sx?$",
  moduleNameMapper: {
    "~modules/(.+)": "<rootDir>/modules/$1",
  },
};
