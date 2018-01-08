# Setup & Install
First, install the necessary packages using `npm install`. Then start the server with continous build like this:

```
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:seed:all
./node_modules/.bin/tsc
node dev.js
```

While the server is running, all changes to frontend code will be built as soon as the files are saved.