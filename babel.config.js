module.exports=function(api) {
    api.cache(true);
    return {
        presets:["babel-preset-expo"],
        plugins:[
            ["module-resolver",{
                alias:{
                    "assets":"./src/Assets",
                    "components":"./src/Components",
                    "resources":"./src/Resources",
                    "routes":"./src/Routes",
                    "actions":"./src/Store/Actions.js",
                    "css":"./src/index.style.js",
                }
            }],
            ["react-native-reanimated/plugin",{}],
        ],
    };
};
