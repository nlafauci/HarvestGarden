const React = require('react')

function Def (html) {
    return (
        <html>
<head>
        <title>{html.title}</title>
        <link rel="icon" type="image/png" href="../images/rantFavicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link> 
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,800&family=Prompt:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
            <body>
            <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/plants">DATABASE</a>
            </li>
            <li>
              <a href="/plants/new">ADD FLORA</a>
            </li>
          </ul>
        </nav>
            <div id="root">{html.children}</div>
            </body>
        </html>
    )
}

module.exports = Def
