module.exports=(api)=>{
    const envname=api.env();
    const isDevEnv=envname.startsWith("dev");
    const isProdEnv=envname.startsWith("prod");
    api.cache(true);
    return {
        presets:["babel-preset-expo"],
        plugins:[
            ["transform-define",{
                isDevEnv,isProdEnv,
            }],
            ["module-resolver",{
                alias:{
                    "assets":"./src/Assets",
                    "components":"./src/Components",
                    "resources":"./src/Resources",
                    "actions":"./src/Store/Actions.js",
                    "screens":"./src/Screens",
                    "stylesheet":"./src/index.style.js",
                }
            }],
            "react-native-reanimated/plugin",
        ],
    };
};
