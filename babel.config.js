module.exports=function(api) {
    api.cache(true);
    return {
        presets:["babel-preset-expo"],
        plugins:[
            ["module-resolver",{
                alias:{
                    "actions":"./src/Store/Actions",
                    "assets":"./src/Assets",
                    "routes":"./src/Routes",
                    "resources":"./src/Resources",
                    "css":"./src/index.style.js",
                    "components":"./src/Components",
                }
            }],
        ],
    };
};
