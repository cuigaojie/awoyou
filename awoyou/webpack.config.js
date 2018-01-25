module.exports={
	entry:__dirname+"/src/main.js",
	output:{
		path:__dirname+"/dist",
		filename:"bundle.js"
	},
	devServer:{
		contentBase:"./dist",
		inline:true,
		port:8080,
	},
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env']
	        }
	      }
	    },
	    {
	      test: /\.css$/,
	      exclude: /(node_modules|bower_components)/,
	      use: [{loader: 'style-loader'},{loader: 'css-loader'}]
	    }
	  ]
	}
}
