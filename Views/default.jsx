function Def (html) {
    return (
        <Def>
        <html>
           <head>
  <title>Hello, world!</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link rel="stylesheet" href="style.css"/>
</head>
            <body>
                {html.children}
            </body>
        </html>
    </Def>
    )
  }