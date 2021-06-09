/* eslint-disable @typescript-eslint/no-require-imports */

/* istanbul ignore next */
export function restoreFactory(): Function {
  return async () => {
    const { runningInstance } = require('cache/dist/restore.js');
    await runningInstance;
    console.log("Aus die Maus!");
  }
  //
  // return async () => await require('cache/dist/restore.js')
}

/* istanbul ignore next */
export function saveFactory(): Function {
  return async () => await require('cache/dist/save.js')
}
