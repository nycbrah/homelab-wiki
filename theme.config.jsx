export default {
  logo: <span>Homelab Wiki</span>,
  project: {
    link: 'https://github.com/nycbrah/homelab-wiki'
  },
  docsRepositoryBase: 'https://github.com/nycbrah/homelab-wiki/blob/main',
  darkMode: true,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    )
  },
  gitTimestamp({ locale, timestamp }) {
      return (
          <>
              Last updated on{" "}
              {timestamp.toLocaleDateString(locale, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
              })}
          </>
      );
  }
 }