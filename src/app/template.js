export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <style>
        body {
          background-color: #4C4B4E
        }
      </style>
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `
}
