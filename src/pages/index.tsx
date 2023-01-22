import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fac-E | Face recognition app</title>
        <meta
          name="description"
          content="Find and highlight faces in pictures using AI."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#dab3f4" />
        <meta name="theme-color" content="#dab3f4"></meta>
      </Head>
      <main>
        <h1>Face recognition app</h1>
      </main>
    </>
  );
}
