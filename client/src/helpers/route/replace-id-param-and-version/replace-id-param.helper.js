const replaceRecipeIdParamAndVersionId = (route, id, versionId) => {
  return route.replace(':id', id).replace(':versionId', versionId);
};

export { replaceRecipeIdParamAndVersionId };
