export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      </head>
      <body style="">
        <div id="root">${body}</div>
      </body>
    </html>
  `
}
