module.exports = {
	siteMetadata: {
		title: `Peng Yang Guo`,
		description: ``,
		author: `Peng Yang Guo`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/content/projects`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		"gatsby-plugin-styled-components",
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				icon: `src/images/logo.png`,
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Comfortaa", "Montserrat"],
				},
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
