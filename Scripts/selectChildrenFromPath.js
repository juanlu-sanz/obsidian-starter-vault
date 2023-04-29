function selectChildrenFromPath(path, tp) {
  const children = tp.user.getChildrenFromPath(path);
  return tp.system.suggester(children, children);
}

module.exports = selectChildrenFromPath;
