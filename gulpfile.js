var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";

elixir((mix) => {

	var bower = 'bower_components';
	var css = 'src/client/css';

	mix
		.copy(`${bower}/bootstrap/dist/css/bootstrap.min.css`,`${css}`)

		.styles([
			'bootstrap.min.css'
		],'dist/css/common.min.css')
})