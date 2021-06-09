/* eslint-disable @typescript-eslint/no-require-imports */

/* istanbul ignore next */
export function restoreFactory(): Function {
  const { runningInstance } = require('cache/dist/restore.js');
  return async () => {
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
