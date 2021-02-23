import Head from 'next/head'

interface SEOProps {
  title: string
}

function SEO({ title }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>

      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="keywords" content="r3nanp, exercise" />
      <meta name="description" content="A app to make you move." />

      <meta property="og:site_name" content="Move It" />
      <meta property="og:title" content="Move It" />
      <meta property="og:description" content="A app to make you move." />
      <meta property="og:image" content="/thumb.svg" />
      <meta name="twiiter:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:image" content="/thumb.svg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Move It" />
      <meta name="twitter:description" content="A app to make you move." />
      <meta name="twiiter:create" content="r3nanp" />
    </Head>
  )
}

export { SEO }
