let importAll = (requireContext) => requireContext.keys().forEach(requireContext);

try {
    importAll(require.context('./icons/',true,/\.svg$/))
} catch (error) {
    console.log('图片自动导入错误了');
}