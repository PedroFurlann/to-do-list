const express = require('express');
const checkListRouter = require ('./src/routes/checkList.js');
require('./config/database.js');
const path = require('path');
const taskRouter = require('./src/routes/task.js')
const rootRouter = require('./src/routes/index.js');
const methodOverride = require('method-override');




const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.use('/', rootRouter);
app.use('/checklists', checkListRouter);
app.use('/checklists', taskRouter.checklistDependent);
app.use('/tasks', taskRouter.simple);


app.listen(3000, () => {
  console.log(`Servidor foi iniciado`);
});





