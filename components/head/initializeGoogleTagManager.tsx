/** @jsxImportSource theme-ui */
const InitializeGoogleTagManager = () => {
  const ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_ID}', {
              page_path: window.location.pathname,
              'anonymize_ip': true,
            });
          `,
        }}
      />
    </>
  );
};

export default InitializeGoogleTagManager;
