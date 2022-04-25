import Head from 'next/head'

interface Props {
  title: string
  description: string
}

const Meta = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="currentColor"/>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="rgb(255 255 255 / 0.95)" media="(prefers-color-scheme: light)"/>
        <meta name="theme-color" content="rgb(38 38 38 / 0.95)" media="(prefers-color-scheme: dark)"/>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} key="description" />
        <meta property="og:image" content="" />
      </Head>
    </>
  )
}

export default Meta;