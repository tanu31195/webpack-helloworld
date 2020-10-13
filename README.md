[Webpack tutorial](https://www.youtube.com/watch?v=MpGLUVbqoYQ)

https://github.com/Colt/webpack-demo-app/

npm install --save-dev webpack webpack-cli


First we have to declare which files depend on what through imports and exports

Default behavior of webpack is it will find the index.js file, if no webpack config is found


https://alligator.io/nodejs/how-to-use__dirname/

## Errors

`ERROR in Entry module not found: Error: Can't resolve './src' in 'D:\WebstormProjects\webpack-helloworld'
 npm ERR! code ELIFECYCLE
`
This is due webpack cannot find index.js in ./src


`ERROR in ./src/app/alert.service.js 21:15
 Module parse failed: Unexpected token (21:15)
 You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
 |     };
 |
     hideErrors = () => {
 |         this.errorBox.classList.add("invisible");
 |     };
  @ ./src/index.js 2:0-49 5:25-37
 npm ERR! code ELIFECYCLE
`

change to 
`hideErrors() {
         this.errorBox.classList.add("invisible");
     };`
