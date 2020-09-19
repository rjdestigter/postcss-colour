import postcss from "postcss";

const rx = /^((?:.*)-)?colour$/i;

const postCssColour = () => {
	return {
		postcssPlugin: "postcss-colour",
		Root(root) {
			// for each colour declaration
			root.walkDecls(rx, (decl) => {
				const prefix = decl.prop.match(rx)[1] || "";
				const values = postcss.list.space(decl.value);

				decl.cloneBefore({
					prop: `${prefix}color`,
					value: values[0],
				});

				// remove the original size declaration
				decl.remove();
			});
		},
	};
};

Object.defineProperty(postCssColour, 'postcss', { value: true });

export default postCssColour;
