export default {

  /**
   * Node server host
   */
  host: process.env.NODE_HOST || 'localhost',

  /**
   * Node server port
   */
  port: process.env.PORT || '5000',

  /**
   * Back-end server base url
   */
  apiBaseUrl: 'https://localhost:8000',

  /**
   * Site base url
   */
  siteBaseUrl: 'http://localhost:8000',

  /**
   * Default connect timeout, ms
   */
  connectTimeout: 20000,

  /**
   * Default error string for backend request without answer
   */
  connectErrorMessage: 'Connect error, try again later or contact the service administrator.',

  /**
   * Default error string for backend request with returned status >= 500
   */
  serverErrorMessage: 'Server error, try again later or contact the service administrator.',

  /**
   * Default meta content
   */
  app: {
    title: 'Море',
    titleTemplate: '%s',
    meta: [
      {
        name: 'description',
        content: 'Море'
      },
      {
        name: 'keywords',
        content: 'Море'
      },
      {
        name: 'theme-color',
        content: '#FFFFFF'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      }
    ]
  }
};
