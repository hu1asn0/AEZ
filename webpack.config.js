module.exports = {
entry: {
	App: "./app/assets/scripts/app.js",
	Vendor: "./app/assets/scripts/Vendor.js"
},
//entry: "./app/temp/waypoints.js",
output: {
	path: "./app/temp/scripts",
//	path: "./app/temp",
	filename: "[name].js"	
//	filename: "app_wp.js"
		},
module: { /*object definition*/
	loaders: [
		{
		loader: 'babel', /*Property*/
		query: {			/*object definition*/
			presets: ['es2015']
				},
		test: /\.js$/,				/*.js files only - Property*/
		exclude: /node_modules/		/* in dir only - Property*/
		}
		]
		}

}