import path from 'path';
import Express from 'express';

var app = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../../dist/css');
const PATH_SCRIPTS = path.resolve(__dirname, '../../dist/js');
const PATH_IMG = path.resolve(__dirname, '../../dist/img');
const PATH_FONT = path.resolve(__dirname, '../../dist/fonts');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/css', Express.static(PATH_STYLES));
app.use('/img', Express.static(PATH_IMG));
app.use('/fonts', Express.static(PATH_FONT));
app.use('/js', Express.static(PATH_SCRIPTS));

app.use(Express.static(PATH_DIST));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});


server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Running at localhost:%s', port);
});
