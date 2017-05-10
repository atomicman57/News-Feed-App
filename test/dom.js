
// import jsdom from 'jsdom'
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(`<!DOCTYPE html>`);
// var exposedProperties = ['window', 'navigator', 'document'];

// global.document = new JSDOM('')
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });

// global.navigator = {
//   userAgent: 'node.js'
// };'


//  const virtualConsole = jsdom.createVirtualConsole()
//     const document = jsdom.jsdom(undefined, {
//         virtualConsole: virtualConsole.sendTo(console)
//     })
//     virtualConsole.on('log', (...args) => {
//         // do something with `args` sent to logs
//         // e.g, assign result to a variable and run your assertions over it
//     })
//     window = document.defaultView
//     global.window = window
//     global.document = document