// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clienteURL: 'http://localhost:8081/cliente/',
  authURL: 'http://localhost:8081/auth/',
  //clienteURL: 'http://192.168.0.123:8081/cliente',
 // authURL: 'http://192.168.0.123:8081/auth/',
  usuURL: 'http://192.168.0.123:8081/usuario/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
