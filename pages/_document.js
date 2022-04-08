import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="description" content="Antonio's portfolio site" />
				<meta name="author" content="Antonio Zamora" />
				<meta name="keywords" content="Antonio, portfolio, front end development" />
				{/* <meta name="theme-color" content="#262538" /> */}
				<meta name="language" content="English" />
				{/* <meta name="revised" content="March 22nd, 2022" /> */}
				<meta name="HandheldFriendly" content="true" />
				<link rel="stylesheet" href="https://use.typekit.net/hah6qsj.css" />

				{/* <link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
