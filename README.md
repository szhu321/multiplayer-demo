# Learn Multiplayer

This document is a tutorial on how to set up a multiplayer game server using Colyseus. The client side of this demo game will be in a seperate repo [here](https://github.com/szhu321/phaser-demo/tree/multiplayer)

## NPM
Before we start we need to download npm (node package manager), which we will use to manage our packages. You can download it [here](https://nodejs.org/en/). Downloading Node.js will also download npm.

Make sure to create a .gitignore file if you are using git. Here is a template:
```.gitignore
node_modules/
dist/bundle.js
dist/bundle.js.LICENSE.txt
```

## VSCode
I will be using VSCode IDE to code this project. VSCode can be found [here](https://code.visualstudio.com/). Feel free to use any IDE you like.


## Creating a new project
Start by creating a new folder in a location of your choice. Then open up the folder with VSCode. Create a new terminal with VSCode and initialize a npm project.
```bash
npm init -y
```

## Setting up Express and Typescript 
In this tutorial we will be using Typescript. We are also going to be using Express as our server.  
To install run: 
```bash
npm i express typescript
```

Next we need to install type definitions for node and express. We also need ts-node to run a development server written with Typescript.

```bash
npm i @types/node @types/express ts-node -D
```

Now that we have Typescript install we need to create a tsconfig.json file to manage Typescript. Create this file in the root folder.
```json
{
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "ES6",
        "module": "CommonJS",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "rootDir": "./",
        "outDir": "./build"
    }
}
```

### Creating a Express server
Create a new file in the root folder called server.ts
```Typescript
import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello from Colyseus server!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on https://localhost:${PORT}`)
});
```

Now we are going to add some scripts to package.json
```json
    "server-nodemon": "nodemon server.ts",
    "server": "npx ts-node server.ts",
    "build": "tsc --project ./"
```
The first script will run the server with nodemon. This will reload the server when you make changes to the code. The second script will run the server with ts-node (use this if you don't use nodemon). The third script will compile your Typescript files to Javascript files.  

To run the server run: 
```bash
npm run server
```

Once the server is running you should see the print out in the terminal.

## Credits
Thanks to Alligator.io for the Typesciprt installation tutorial. [Link here](https://www.digitalocean.com/community/tutorials/typescript-new-project).