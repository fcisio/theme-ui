import { styles } from '../src'

test('snapshot', () => {
  expect(styles).toMatchInlineSnapshot(`
    Object {
      "b": Object {
        "fontWeight": "bold",
      },
      "blockquote": Object {
        "margin": 0,
        "marginBottom": 3,
        "mx": 3,
        "padding": 0,
      },
      "code": Object {
        "fontSize": "85%",
      },
      "h1": Object {
        "fontFamily": "heading",
        "fontSize": 5,
        "fontWeight": "heading",
        "lineHeight": "heading",
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
      },
      "h2": Object {
        "fontFamily": "heading",
        "fontSize": 4,
        "fontWeight": "heading",
        "lineHeight": "heading",
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
      },
      "h3": Object {
        "fontFamily": "heading",
        "fontSize": 3,
        "fontWeight": "heading",
        "lineHeight": "heading",
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
      },
      "h4": Object {
        "fontFamily": "heading",
        "fontSize": 2,
        "fontWeight": "heading",
        "lineHeight": "heading",
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
      },
      "h5": Object {
        "fontFamily": "heading",
        "fontSize": 1,
        "fontWeight": "heading",
        "lineHeight": "heading",
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
      },
      "h6": Object {
        "fontFamily": "heading",
        "fontSize": 0,
        "fontWeight": "heading",
        "lineHeight": "heading",
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
      },
      "hr": Object {
        "border": 0,
        "borderBottom": "1px solid",
        "margin": 0,
        "marginBottom": 3,
        "mb": 3,
        "mt": "-1px",
        "padding": 0,
      },
      "img": Object {
        "margin": 0,
        "marginBottom": 3,
        "maxWidth": "100%",
        "padding": 0,
      },
      "li": Object {
        "mb": 2,
        "ol": Object {
          "ml": 3,
          "my": 2,
        },
        "p": Object {
          "mb": 2,
        },
        "pl": 0,
        "ul": Object {
          "ml": 3,
          "my": 2,
        },
      },
      "ol": Object {
        "listStyleImage": "none",
        "listStylePosition": "outside",
        "margin": 0,
        "marginBottom": 3,
        "ml": 3,
        "padding": 0,
      },
      "p": Object {
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
      },
      "pre": Object {
        "fontSize": "85%",
        "margin": 0,
        "marginBottom": 3,
        "padding": 3,
      },
      "root": Object {
        "fontFamily": "body",
        "fontSize": 2,
        "fontWeight": "body",
        "lineHeight": "body",
      },
      "strong": Object {
        "fontWeight": "bold",
      },
      "table": Object {
        "borderCollapse": "collapse",
        "margin": 0,
        "marginBottom": 3,
        "padding": 0,
        "width": "100%",
      },
      "td": Object {
        ":first-child": Object {
          "pl": 0,
        },
        ":last-child": Object {
          "pr": 0,
        },
        "borderBottom": "1px solid",
        "mt": "-1px",
        "px": 2,
        "py": 1,
        "textAlign": "left",
      },
      "th": Object {
        ":first-child": Object {
          "pl": 0,
        },
        ":last-child": Object {
          "pr": 0,
        },
        "borderBottom": "1px solid",
        "px": 2,
        "py": 1,
        "textAlign": "left",
      },
      "ul": Object {
        "listStyleImage": "none",
        "listStylePosition": "outside",
        "margin": 0,
        "marginBottom": 3,
        "ml": 3,
        "padding": 0,
      },
    }
  `)
})
