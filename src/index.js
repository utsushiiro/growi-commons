module.exports = {
  BasicInterceptor: require('./util/basic-interceptor'),
  pathUtils: require('./util/path-utils'),
  // plugin
  customTagUtils: require('./plugin/util/custom-tag-utils'),
  // service
  LocalStorageManager: require('./service/localstorage-manager'),
};
