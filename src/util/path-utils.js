
function encodePagePath(path) {
  const paths = path.split('/');
  paths.forEach((item, index) => {
    paths[index] = encodeURIComponent(item);
  });
  return paths.join('/');
}

function encodePagesPath(pages) {
  pages.forEach((page) => {
    if (!page.path) {
      return;
    }
    page.path = encodePagePath(page.path);
  });
  return pages;
}

function matchSlashes(path) {
  // https://regex101.com/r/Z21fEd/5
  return path.match(/^((\/+)?(.+?))(\/+)?$/);
}

function hasHeadingSlash(path) {
  const match = matchSlashes(path);
  return (match[2] != null);
}

function hasTrailingSlash(path) {
  const match = matchSlashes(path);
  return (match[4] != null);
}

function addHeadingSlash(path) {
  if (path === '/') {
    return path;
  }

  if (!hasHeadingSlash(path)) {
    return `/${path}`;
  }
  return path;
}

function addTrailingSlash(path) {
  if (path === '/') {
    return path;
  }

  if (!hasTrailingSlash(path)) {
    return `${path}/`;
  }
  return path;
}

function removeTrailingSlash(path) {
  if (path === '/') {
    return path;
  }

  const match = matchSlashes(path);
  return match[1];
}

function normalizePath(path) {
  const match = matchSlashes(path);
  if (match == null) {
    return '/';
  }
  return `/${match[3]}`;
}

module.exports = {
  encodePagePath,
  encodePagesPath,
  hasHeadingSlash,
  hasTrailingSlash,
  addHeadingSlash,
  addTrailingSlash,
  removeTrailingSlash,
  normalizePath,
};
