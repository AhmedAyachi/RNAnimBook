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
                    "actions":"./src/Store/Actions.js",
                    "routes":"./src/Routes",
                    "css":"./src/index.style.js",   
                }
            }],
            "react-native-reanimated/plugin",
        ],
    };
};
