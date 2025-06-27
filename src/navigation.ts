const enum PageName {
	Home,
	Blog,
	Contact,
}

interface Page {
	name: string,
	icon: PageName,
	href: string,
}
interface Service {
	image_alt: string,
	image: string,
	name: string,
	href: string,
}
interface Navigation {
	pages: Page[],
	services: Service[]
}

const navigation: Navigation = {
	pages: [
		{
			name: "Home",
			icon: PageName.Home,
			href: "/"
		},
		{
			name: "Blog",
			icon: PageName.Blog,
			href: "/blog/"
		},
		{
			name: "Contact",
			icon: PageName.Contact,
			href: ""
		},
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

export default navigation
export {
	PageName
}