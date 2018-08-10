export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      </head>
      <style>
        body {
          background-color: #4C4B4E;
          font-family: Helvetica;
        }
      </style>
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `
}
