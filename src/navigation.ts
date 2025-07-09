type PageName = "Home" | "Blog" | "Contact" | "Projects" | "404" | "500"

interface Service {
	image_alt: string,
	image: string,
	name: string,
	href: string,
}
interface Navigation {
	pages: string[],
	services: Service[]
}

const navigation: Navigation = {
	//Visible pages to the user via ui navigation
	pages: [
		"Home",
		"Projects",
		"Blog",
		"Contact",
	],
	services: [
		{
			image_alt: "Gitea repositories",
			image: "/header/gitea-logo.webp",
			name: "Gitea",
			href: "https://git.rhpidfyre.io/",
		},
		{
			image_alt: "GitHub repositories",
			image: "/header/github-mark-white.webp",
			name: "GitHub",
			href: "https://github.com/unixtensor/",
		},
		{
			image_alt: "PufferPanel",
			image: "/header/pufferpanel.webp",
			name: "PufferPanel",
			href: "https://gsm.rhpidfyre.io/",
		},
		{
			image_alt: "Seafile",
			image: "/header/seafile.webp",
			name: "Seafile",
			href: "https://files.rhpidfyre.io/",
		},
		{
			image_alt: "AI",
			image: "/header/open_webui.webp",
			name: "AI",
			href: "https://ai.rhpidfyre.io/",
		},
		{
			image_alt: "Matrix",
			image: "/header/matrix.webp",
			name: "Matrix",
			href: "https://matrix.to/#/@rhpidfyre:matrix.rhpidfyre.io/",
		}
	]
}

function format_pagelink(page: string): string {
	return page === "Home" ? "/" : `/${page.toLowerCase()}/`
}

export default navigation
export {
	type PageName,
	format_pagelink,
}