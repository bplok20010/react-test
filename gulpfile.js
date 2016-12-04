var gulp=require("gulp"), 
babel = require("gulp-babel"), 
es2015 = require("babel-preset-es2015"), 
bp = require("babel-preset-stage-0"), 
breact = require("babel-preset-react"), 
webpack = require("gulp-webpack");
var path = require('path');  

gulp.task("default",function(){
  gulp.src("./demo/**/*.jsx")
    .pipe(babel({
		presets:[es2015,bp, breact],
		"plugins": [
		  //单页测试，暂时不开启
		  //["transform-es2015-classes", { "loose": true }],// babel 在使用一些特殊属性时会不支持IE9一下
		  //"transform-runtime"
		]	
	}))
	.on('error', function(err){
		console.log(err);	
	})
    .pipe(gulp.dest(function(data){
		return path.dirname(data.history[0]);	
	}));
});

gulp.watch("./demo/**/*.jsx",function(){
	console.log('files change...')
	gulp.run('default');
});


gulp.task("webpack",function(){
  gulp.src("./webpack-demo/cmd/*.js")
    .pipe(webpack({
	  //config : 'webpack.config.amd.js',
	  output:{
        filename:"all.js",
		publicPath : './dest/'
      },
	  entry: {
		index : './webpack-demo/example.cmd',
	//	index2 : './webpack-demo/example.cmd2'
	  },
      stats:{
        colors:true
      },
	  // 新添加的module属性
	  module: {
		loaders: [
		  {test: /\.js$/, loader: "babel"},
		  {test: /\.css$/, loader: "style!css"},
		  {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
		  {test: /\.scss$/, loader: "style!css!sass"}
		]
	  }
    }))
    .pipe(gulp.dest("./dest"));
	//包装好的js目录
});