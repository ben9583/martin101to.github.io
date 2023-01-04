# Website for Martin101_TO

This repository is for Martin101_TO website. It runs using React and `create-react-app` and deploys using Github Pages. Livelink:([martin101to.com](https://martin101to.com/))

# Setup

First, clone the repository and `cd` into the directory. Then, run the following `npm` scripts:

```sh
npm i
npm run prepare # install pre-commit hooks
```

# Develop

To begin development after setting up, run the following script to set up a development webpack server.

```sh
npm run start
```

You can open `http://localhost:3000` and changes will be refreshed automatically when they are made locally.

# Build and Deploy

To make a production-ready build, run the following:

```sh
npm run build
```

Deployments will be made automatically when a push is made to master.
