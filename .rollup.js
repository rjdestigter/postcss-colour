import babel from 'rollup-plugin-babel';

export default {
	input: 'index.js',
	output: [
		{ exports: 'default', file: 'index.cjs.js', format: 'cjs', sourcemap: true },
		{ exports: 'default', file: 'index.es.mjs', format: 'es', sourcemap: true }
	],
	plugins: [
		babel({
			presets: [
				['@babel/env', { modules: false, targets: { node: 6 } }]
			]
		})
	]
};
