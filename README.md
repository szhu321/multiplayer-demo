# Learn Multiplayer

This document is a tutorial on how to set up a multiplayer game server using Colyseus. The client side of this demo game will be in a [seperate repo](https://github.com/szhu321/phaser-demo/tree/multiplayer)

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

## Setting up Typescript 
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

### Creating a Colyseus server
Create a new file in the root folder called server.ts
```Typescript
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Colyseus server!");
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
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


### Setting up a waiting room
- client creates a waiting room. That client is now the owner of the waiting room.
- other clients join the waiting room.
- owner starts the game by creating the game room. 
- owner sends game room info to the server.
- server sends game room info to all clients.
- all clients join the game room.


### Setting up a game room
- all clients join the game room. 
- game goes into a 3 second countdown.
- after 3 seconds players can move around and shoot.
- shooting will create a projectile. 
- projectiles can bounce off of the edge of the screen.
- if a player is hit by a projectile, the projectile disappears and the player gets a point.
- at the end of 2 minute the player with the least amount of points wins.


## Credits
Thanks to Soumya for the Typesciprt installation tutorial. [Link here](https://dev.to/soumyadey/node-express-server-but-with-typescript-2h6e).