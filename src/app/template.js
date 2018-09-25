export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600" rel="stylesheet">
      </head>
      <body>
      <style>
        * {
          padding: 0px;
          margin: 0px;
        }
      </style>
        <div id="root">${body}</div>
      </body>
    </html>
  `
}
