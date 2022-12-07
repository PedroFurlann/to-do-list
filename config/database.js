const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/to-do-list2', { useUnifiedTopoLogy: true})
  .then(() => console.log('Conectando ao MongoDB'))
  .catch((err) => console.log(err));




