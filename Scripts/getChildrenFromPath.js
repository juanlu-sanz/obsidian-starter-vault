function getChildrenFromPath (path) {
  return Object.values(Object.values(app.vault.fileMap).find(f => f.path === path).children).map(f => f.name)
}
module.exports = getChildrenFromPath;

