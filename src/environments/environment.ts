// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 BASE_URL: 'http://127.0.0.1:8000/',
 RE_CAPTCHA_SITE_KEY:'6LfUTr4ZAAAAAMRMyLg10z1Lob-eEmXmKSrRfhfC',

 //BASE_URL: 'http://192.168.84.186:4545/adc',
 //  BASE_URL: 'http://localhost:4545/adc',
  interval: {
    idle: 600, // 10 minutes
    timeout: 60, // 1 minute
    ping: 15 // 15 seconds
  }//

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
