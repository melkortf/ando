// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // where the anne server is running
  anneDomain: 'http://localhost:3000',

  socialLinks: [
    {
      icon: 'github',
      target: 'https://github.com/melkortf'
    },
    {
      icon: 'steam',
      target: 'https://steamcommunity.com/id/nieduzy/'
    }
  ],

  // static pages
  pages: [
    {
      slug: 'faq',
      source: 'https://raw.githubusercontent.com/melkortf/documents/master/FAQ.md'
    }
  ]
};
