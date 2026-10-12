import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {Callout, Image} = _components;
  if (!Callout) _missingMdxReference("Callout", true);
  if (!Image) _missingMdxReference("Image", true);
  return _jsxs(_Fragment, {
    children: [_jsx(Callout, {
      children: _jsxs(_components.p, {
        children: ["The text below is from the ", _jsx(_components.a, {
          href: "https://nextjs.org/docs/app/guides/mdx",
          children: "Vercel"
        }), "\ndocs. I copied it here to test the markdown styles. ", _jsx(_components.strong, {
          children: "Vercel is awesome. You\nshould use it."
        })]
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://daringfireball.net/projects/markdown/syntax",
        children: "Markdown"
      }), " is a lightweight markup language used to format text. It allows you to write using plain text syntax and convert it to structurally valid HTML. It's commonly used for writing content on websites and blogs."]
    }), "\n", _jsx(_components.p, {
      children: "You write..."
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "md",
        "data-theme": "github-dark github-light-default",
        children: _jsx(_components.code, {
          "data-language": "md",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "I "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-dark-font-weight": "bold",
                "--shiki-light": "#1F2328",
                "--shiki-light-font-weight": "bold"
              },
              children: "**love**"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " using ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#DBEDFF",
                "--shiki-dark-text-decoration": "underline",
                "--shiki-light": "#0A3069",
                "--shiki-light-text-decoration": "inherit"
              },
              children: "Next.js"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "]("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-dark-text-decoration": "underline",
                "--shiki-light": "#1F2328",
                "--shiki-light-text-decoration": "underline"
              },
              children: "https://nextjs.org/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ")"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Output:"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "html",
        "data-theme": "github-dark github-light-default",
        children: _jsx(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">I <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "strong"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">love</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "strong"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "> using <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " href"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "\"https://nextjs.org/\""
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">Next.js</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "></"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://mdxjs.com/",
        children: "MDX"
      }), " is a superset of markdown that lets you write ", _jsx(_components.a, {
        href: "https://react.dev/learn/writing-markup-with-jsx",
        children: "JSX"
      }), " directly in your markdown files. It is a powerful way to add dynamic interactivity and embed React components within your content."]
    }), "\n", _jsx(_components.p, {
      children: "Next.js can support both local MDX content inside your application, as well as remote MDX files fetched dynamically on the server. The Next.js plugin handles transforming markdown and React components into HTML, including support for usage in Server Components (the default in App Router)."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Good to know"
        }), ": View the ", _jsx(_components.a, {
          href: "https://vercel.com/templates/next.js/portfolio-starter-kit",
          children: "Portfolio Starter Kit"
        }), " template for a complete working example."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "install-dependencies",
      children: "Install dependencies"
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "@next/mdx"
      }), " package, and related packages, are used to configure Next.js so it can process markdown and MDX. ", _jsx(_components.strong, {
        children: "It sources data from local files"
      }), ", allowing you to create pages with a ", _jsx(_components.code, {
        children: ".md"
      }), " or ", _jsx(_components.code, {
        children: ".mdx"
      }), " extension, directly in your ", _jsx(_components.code, {
        children: "/pages"
      }), " or ", _jsx(_components.code, {
        children: "/app"
      }), " directory."]
    }), "\n", _jsx(_components.p, {
      children: "Install these packages to render MDX with Next.js:"
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "bash",
        "data-theme": "github-dark github-light-default",
        children: "Terminal"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "github-dark github-light-default",
        children: _jsx(_components.code, {
          "data-language": "bash",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " @next/mdx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " @mdx-js/loader"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " @mdx-js/react"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " @types/mdx"
            })]
          })
        })
      })]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsxs(_components.h2, {
      id: "configure-nextconfigmjs",
      children: ["Configure ", _jsx(_components.code, {
        children: "next.config.mjs"
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["Update the ", _jsx(_components.code, {
        children: "next.config.mjs"
      }), " file at your project's root to configure it to use MDX:"]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "next.config.mjs"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " createMDX "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@next/mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "/** "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "@type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " {import('next').NextConfig}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: " */"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " nextConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Configure `pageExtensions` to include markdown and MDX files"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  pageExtensions: ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'js'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'jsx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'md'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'ts'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'tsx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "],"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Optionally, add any other Next.js config below"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " createMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Add markdown plugins here, as desired"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "});"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Merge MDX config with Next.js config"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "nextConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["This allows ", _jsx(_components.code, {
        children: ".mdx"
      }), " files to act as pages, routes, or imports in your application."]
    }), "\n", _jsxs(_components.h3, {
      id: "handling-md-files",
      children: ["Handling ", _jsx(_components.code, {
        children: ".md"
      }), " files"]
    }), "\n", _jsxs(_components.p, {
      children: ["By default, ", _jsx(_components.code, {
        children: "next/mdx"
      }), " only compiles files with the ", _jsx(_components.code, {
        children: ".mdx"
      }), " extension. To handle ", _jsx(_components.code, {
        children: ".md"
      }), " files with webpack, update the ", _jsx(_components.code, {
        children: "extension"
      }), " option:"]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "next.config.mjs"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " createMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  extension:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " /"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-dark-font-weight": "bold",
                "--shiki-light": "#116329",
                "--shiki-light-font-weight": "bold"
              },
              children: "\\."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#DBEDFF",
                "--shiki-light": "#0A3069"
              },
              children: "(md"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#DBEDFF",
                "--shiki-light": "#0A3069"
              },
              children: "mdx)"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "$"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "});"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Good to know"
        }), ": ", _jsx(_components.a, {
          href: "/docs/app/api-reference/turbopack",
          children: "Turbopack"
        }), " does not currently support the ", _jsx(_components.code, {
          children: "extension"
        }), " option and therefore does not support ", _jsx(_components.code, {
          children: ".md"
        }), " files."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsxs(_components.h2, {
      id: "add-an-mdx-componentstsx-file",
      children: ["Add an ", _jsx(_components.code, {
        children: "mdx-components.tsx"
      }), " file"]
    }), "\n", _jsxs(_components.p, {
      children: ["Create an ", _jsx(_components.code, {
        children: "mdx-components.tsx"
      }), " (or ", _jsx(_components.code, {
        children: ".js"
      }), ") file in the root of your project to define global MDX Components. For example, at the same level as ", _jsx(_components.code, {
        children: "pages"
      }), " or ", _jsx(_components.code, {
        children: "app"
      }), ", or inside ", _jsx(_components.code, {
        children: "src"
      }), " if applicable."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "mdx-components.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { MDXComponents } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'mdx/types'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " useMDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "components"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " MDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " MDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "    ..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "components,"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "mdx-components.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " useMDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "components"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "    ..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "components,"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Good to know"
        }), ":"]
      }), "\n", _jsxs(_components.ul, {
        children: ["\n", _jsxs(_components.li, {
          children: [_jsx(_components.code, {
            children: "mdx-components.tsx"
          }), " is ", _jsx(_components.strong, {
            children: "required"
          }), " to use ", _jsx(_components.code, {
            children: "@next/mdx"
          }), " with App Router and will not work without it."]
        }), "\n", _jsxs(_components.li, {
          children: ["Learn more about the ", _jsxs(_components.a, {
            href: "/docs/app/api-reference/file-conventions/mdx-components",
            children: [_jsx(_components.code, {
              children: "mdx-components.tsx"
            }), " file convention"]
          }), "."]
        }), "\n", _jsxs(_components.li, {
          children: ["Learn how to ", _jsx(_components.a, {
            href: "#using-custom-styles-and-components",
            children: "use custom styles and components"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "rendering-mdx",
      children: "Rendering MDX"
    }), "\n", _jsx(_components.p, {
      children: "You can render MDX using Next.js's file based routing or by importing MDX files into other pages."
    }), "\n", _jsx(_components.h3, {
      id: "using-file-based-routing",
      children: "Using file based routing"
    }), "\n", _jsx(_components.p, {
      children: "When using file based routing, you can use MDX pages like any other page."
    }), "\n", _jsxs(_components.p, {
      children: ["In App Router apps, that includes being able to use ", _jsx(_components.a, {
        href: "/docs/app/getting-started/metadata-and-og-images",
        children: "metadata"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["Create a new MDX page within the ", _jsx(_components.code, {
        children: "/app"
      }), " directory:"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "plaintext",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "plaintext",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  my-project"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  ├── app"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  │   └── mdx-page"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  │       └── page.(mdx/md)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  |── mdx-components.(tsx/js)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  └── package.json"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "You can use MDX in these files, and even import React components, directly inside your MDX page:"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "mdx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { MyComponent } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'my-component'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold",
                "--shiki-light": "#0550AE",
                "--shiki-light-font-weight": "bold"
              },
              children: "# Welcome to my MDX page!"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "This is some "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "**"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "bold"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "**"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " and "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "italics"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " text."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "This is a list in markdown:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " One"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Two"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Three"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "Checkout my React component:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "MyComponent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Navigating to the ", _jsx(_components.code, {
        children: "/mdx-page"
      }), " route should display your rendered MDX page."]
    }), "\n", _jsx(_components.h3, {
      id: "using-imports",
      children: "Using imports"
    }), "\n", _jsxs(_components.p, {
      children: ["Create a new page within the ", _jsx(_components.code, {
        children: "/app"
      }), " directory and an MDX file wherever you'd like:"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "plaintext",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "plaintext",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  ."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  ├── app/"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  │   └── mdx-page/"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  │       └── page.(tsx/js)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  ├── markdown/"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  │   └── welcome.(mdx/md)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  ├── mdx-components.(tsx/js)"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              children: "  └── package.json"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "You can use MDX in these files, and even import React components, directly inside your MDX page:"
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "mdx",
        "data-theme": "github-dark github-light-default",
        children: "markdown/welcome.mdx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "mdx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { MyComponent } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'my-component'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold",
                "--shiki-light": "#0550AE",
                "--shiki-light-font-weight": "bold"
              },
              children: "# Welcome to my MDX page!"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "This is some "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "**"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "bold"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "**"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " and "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "italics"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "_"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " text."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "This is a list in markdown:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " One"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Two"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Three"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "Checkout my React component:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "MyComponent"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />"
            })]
          })]
        })
      })]
    }), "\n", _jsx(_components.p, {
      children: "Import the MDX file inside the page to display the content:"
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/page.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Welcome "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@/markdown/welcome.mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Welcome"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/page.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "jsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Welcome "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@/markdown/welcome.mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Welcome"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["Navigating to the ", _jsx(_components.code, {
        children: "/mdx-page"
      }), " route should display your rendered MDX page."]
    }), "\n", _jsx(_components.h3, {
      id: "using-dynamic-imports",
      children: "Using dynamic imports"
    }), "\n", _jsx(_components.p, {
      children: "You can import dynamic MDX components instead of using filesystem routing for MDX files."
    }), "\n", _jsx(_components.p, {
      children: "For example, you can have a dynamic route segment which loads MDX components from a separate directory:"
    }), "\n", _jsx(Image, {
      src: "/images/undraw/image-01.png",
      width: "1598",
      height: "1236",
      alt: "Image"
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/docs/app/api-reference/functions/generate-static-params",
        children: _jsx(_components.code, {
          children: "generateStaticParams"
        })
      }), " can be used to prerender the provided routes. By marking ", _jsx(_components.code, {
        children: "dynamicParams"
      }), " as ", _jsx(_components.code, {
        children: "false"
      }), ", accessing a route not defined in ", _jsx(_components.code, {
        children: "generateStaticParams"
      }), " will 404."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "app/blog/[slug]/page.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "  params"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: ","
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "  params"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " Promise"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "<{ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " string"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }>;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "}) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " params;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "Post"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "`@/content/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "}.mdx`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Post"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " generateStaticParams"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " [{ slug: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'welcome'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }, { slug: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'about'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }];"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " dynamicParams"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " false"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: "app/blog/[slug]/page.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "jsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "params"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " params;"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "Post"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "`@/content/${"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "slug"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "}.mdx`"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Post"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " generateStaticParams"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " [{ slug: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'welcome'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }, { slug: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'about'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }];"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " dynamicParams"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " false"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          })]
        })
      })]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Good to know"
        }), ": Ensure you specify the ", _jsx(_components.code, {
          children: ".mdx"
        }), " file extension in your import. While it is not required to use ", _jsx(_components.a, {
          href: "/docs/app/getting-started/installation#set-up-absolute-imports-and-module-path-aliases",
          children: "module path aliases"
        }), " (e.g., ", _jsx(_components.code, {
          children: "@/content"
        }), "), it does simplify your import path."]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "using-custom-styles-and-components",
      children: "Using custom styles and components"
    }), "\n", _jsx(_components.p, {
      children: "Markdown, when rendered, maps to native HTML elements. For example, writing the following markdown:"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "md",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "md",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold",
                "--shiki-light": "#0550AE",
                "--shiki-light-font-weight": "bold"
              },
              children: "## This is a heading"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "This is a list in markdown:"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " One"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Two"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Three"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Generates the following HTML:"
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "html",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "html",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">This is a heading</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h2"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">This is a list in markdown:</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "ul"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">One</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">Two</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">Three</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "li"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "ul"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "To style your markdown, you can provide custom components that map to the generated HTML elements. Styles and components can be implemented globally, locally, and with shared layouts."
    }), "\n", _jsx(_components.h3, {
      id: "global-styles-and-components",
      children: "Global styles and components"
    }), "\n", _jsxs(_components.p, {
      children: ["Adding styles and components in ", _jsx(_components.code, {
        children: "mdx-components.tsx"
      }), " will affect ", _jsx(_components.em, {
        children: "all"
      }), " MDX files in your application."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "mdx-components.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Image, { ImageProps } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'next/image'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { MDXComponents } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'mdx/types'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// This file allows you to provide custom React components"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// to be used in MDX files. You can import and use any"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// React component you want, including inline styles,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// components from other libraries, and more."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " useMDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "components"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " MDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " MDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "    // Allows customizing built-in components, e.g. to add styling."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "    h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ": ({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ color: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'red'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", fontSize: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'48px'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ),"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "    img"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "props"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Image"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: "        sizes"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "\"100vw\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: "        style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ width: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'100%'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", height: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'auto'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "        {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "(props "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "as"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " ImageProps"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      />"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ),"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "    ..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "components,"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "mdx-components.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Image "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'next/image'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// This file allows you to provide custom React components"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// to be used in MDX files. You can import and use any"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// React component you want, including inline styles,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// components from other libraries, and more."
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " useMDXComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "components"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "    // Allows customizing built-in components, e.g. to add styling."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "    h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ": ({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ color: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'red'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", fontSize: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'48px'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ),"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "    img"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ": ("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "props"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Image"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: "        sizes"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "\"100vw\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: "        style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ width: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'100%'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", height: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'auto'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "        {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "props"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      />"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ),"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "    ..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "components,"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  };"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsx(_components.h3, {
      id: "local-styles-and-components",
      children: "Local styles and components"
    }), "\n", _jsxs(_components.p, {
      children: ["You can apply local styles and components to specific pages by passing them into imported MDX components. These will merge with and override ", _jsx(_components.a, {
        href: "#global-styles-and-components",
        children: "global styles and components"
      }), "."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/page.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Welcome "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@/markdown/welcome.mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " CustomH1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ color: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'blue'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", fontSize: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'100px'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " overrideComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  h1: CustomH1,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Welcome"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " components"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "overrideComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/page.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "jsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " Welcome "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@/markdown/welcome.mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " CustomH1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ color: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'blue'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", fontSize: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'100px'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " overrideComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  h1: CustomH1,"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "Welcome"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " components"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "overrideComponents"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsx(_components.h3, {
      id: "shared-layouts",
      children: "Shared layouts"
    }), "\n", _jsxs(_components.p, {
      children: ["To share a layout across MDX pages, you can use the ", _jsx(_components.a, {
        href: "/docs/app/api-reference/file-conventions/layout",
        children: "built-in layouts support"
      }), " with the App Router."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/layout.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " MdxLayout"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " React"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: "ReactNode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Create any shared layout or styles here"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ color: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'blue'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/layout.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "jsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " MdxLayout"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Create any shared layout or styles here"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " style"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{ color: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'blue'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "</"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsx(_components.h3, {
      id: "using-tailwind-typography-plugin",
      children: "Using Tailwind typography plugin"
    }), "\n", _jsxs(_components.p, {
      children: ["If you are using ", _jsx(_components.a, {
        href: "https://tailwindcss.com",
        children: "Tailwind"
      }), " to style your application, using the ", _jsxs(_components.a, {
        href: "https://tailwindcss.com/docs/plugins#typography",
        children: [_jsx(_components.code, {
          children: "@tailwindcss/typography"
        }), " plugin"]
      }), " will allow you to reuse your Tailwind configuration and styles in your markdown files."]
    }), "\n", _jsxs(_components.p, {
      children: ["The plugin adds a set of ", _jsx(_components.code, {
        children: "prose"
      }), " classes that can be used to add typographic styles to content blocks that come from sources, like markdown."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#installation",
        children: "Install Tailwind typography"
      }), " and use with ", _jsx(_components.a, {
        href: "#shared-layouts",
        children: "shared layouts"
      }), " to add the ", _jsx(_components.code, {
        children: "prose"
      }), " you want."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/layout.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " MdxLayout"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " React"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: "ReactNode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Create any shared layout or styles here"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " className"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "\"prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white\""
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page/layout.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "jsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " MdxLayout"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#FFAB70",
                "--shiki-light": "#953800"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: " }) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Create any shared layout or styles here"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " className"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "\"prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white\""
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "children"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#85E89D",
                "--shiki-light": "#116329"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  );"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "frontmatter",
      children: "Frontmatter"
    }), "\n", _jsxs(_components.p, {
      children: ["Frontmatter is a YAML like key/value pairing that can be used to store data about a page. ", _jsx(_components.code, {
        children: "@next/mdx"
      }), " does ", _jsx(_components.strong, {
        children: "not"
      }), " support frontmatter by default, though there are many solutions for adding frontmatter to your MDX content, such as:"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/remarkjs/remark-frontmatter",
          children: "remark-frontmatter"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/remcohaszing/remark-mdx-frontmatter",
          children: "remark-mdx-frontmatter"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/jonschlinkert/gray-matter",
          children: "gray-matter"
        })
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "@next/mdx"
      }), " ", _jsx(_components.strong, {
        children: "does"
      }), " allow you to use exports like any other JavaScript component:"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "mdx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-language": "mdx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " metadata"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  author: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'John Doe'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-dark-font-weight": "bold",
                "--shiki-light": "#0550AE",
                "--shiki-light-font-weight": "bold"
              },
              children: "# Blog post"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Metadata can now be referenced outside of the MDX file:"
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: "app/blog/page.tsx"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " BlogPost, { metadata } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@/content/blog-post.mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'metadata: '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", metadata);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  //=> { author: 'John Doe' }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "BlogPost"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: "app/blog/page.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "jsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " BlogPost, { metadata } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@/content/blog-post.mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " Page"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'metadata: '"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", metadata);"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  //=> { author: 'John Doe' }"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "BlogPost"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["A common use case for this is when you want to iterate over a collection of MDX and extract data. For example, creating a blog index page from all blog posts. You can use packages like ", _jsxs(_components.a, {
        href: "https://nodejs.org/api/fs.html",
        children: ["Node's ", _jsx(_components.code, {
          children: "fs"
        }), " module"]
      }), " or ", _jsx(_components.a, {
        href: "https://www.npmjs.com/package/globby",
        children: "globby"
      }), " to read a directory of posts and extract the metadata."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Good to know"
        }), ":"]
      }), "\n", _jsxs(_components.ul, {
        children: ["\n", _jsxs(_components.li, {
          children: ["Using ", _jsx(_components.code, {
            children: "fs"
          }), ", ", _jsx(_components.code, {
            children: "globby"
          }), ", etc. can only be used server-side."]
        }), "\n", _jsxs(_components.li, {
          children: ["View the ", _jsx(_components.a, {
            href: "https://vercel.com/templates/next.js/portfolio-starter-kit",
            children: "Portfolio Starter Kit"
          }), " template for a complete working example."]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "remark-and-rehype-plugins",
      children: "remark and rehype Plugins"
    }), "\n", _jsx(_components.p, {
      children: "You can optionally provide remark and rehype plugins to transform the MDX content."
    }), "\n", _jsxs(_components.p, {
      children: ["For example, you can use ", _jsx(_components.a, {
        href: "https://github.com/remarkjs/remark-gfm",
        children: _jsx(_components.code, {
          children: "remark-gfm"
        })
      }), " to support GitHub Flavored Markdown."]
    }), "\n", _jsxs(_components.p, {
      children: ["Since the remark and rehype ecosystem is ESM only, you'll need to use ", _jsx(_components.code, {
        children: "next.config.mjs"
      }), " or ", _jsx(_components.code, {
        children: "next.config.ts"
      }), " as the configuration file."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "next.config.mjs"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " createMDX "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@next/mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " remarkGfm "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'remark-gfm'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "/** "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "@type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " {import('next').NextConfig}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: " */"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " nextConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Allow .mdx extensions for files"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  pageExtensions: ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'js'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'jsx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'md'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'ts'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'tsx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "],"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Optionally, add any other Next.js config below"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " createMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // Add markdown plugins here, as desired"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  options: {"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    remarkPlugins: [remarkGfm],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    rehypePlugins: [],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "});"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Combine MDX and Next.js config"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "nextConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          })]
        })
      })]
    }), "\n", _jsx(_components.h3, {
      id: "using-plugins-with-turbopack",
      children: "Using Plugins with Turbopack"
    }), "\n", _jsxs(_components.p, {
      children: ["To use plugins with ", _jsx(_components.a, {
        href: "/docs/app/api-reference/turbopack",
        children: "Turbopack"
      }), ", upgrade to the latest ", _jsx(_components.code, {
        children: "@next/mdx"
      }), " and specify plugin names using a string:"]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "next.config.mjs"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " createMDX "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " '@next/mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "/** "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "@type"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#953800"
              },
              children: " {import('next').NextConfig}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: " */"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " nextConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  pageExtensions: ["
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'js'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'jsx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'md'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'mdx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'ts'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'tsx'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "],"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "};"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " createMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  options: {"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    remarkPlugins: [],"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    rehypePlugins: [["
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'rehype-katex'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", { strict: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ", throwOnError: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " }]],"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "});"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "nextConfig"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: ")"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          })]
        })
      })]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Good to know"
        }), ":"]
      }), "\n", _jsxs(_components.p, {
        children: ["remark and rehype plugins without serializable options cannot be used yet with ", _jsx(_components.a, {
          href: "/docs/app/api-reference/turbopack",
          children: "Turbopack"
        }), ", due to ", _jsx(_components.a, {
          href: "https://github.com/vercel/next.js/issues/71819#issuecomment-2461802968",
          children: "inability to pass JavaScript functions to Rust"
        })]
      }), "\n"]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "remote-mdx",
      children: "Remote MDX"
    }), "\n", _jsxs(_components.p, {
      children: ["If your MDX files or content lives ", _jsx(_components.em, {
        children: "somewhere else"
      }), ", you can fetch it dynamically on the server. This is useful for content stored in a CMS, database, or anywhere else. A community package for this use is ", _jsx(_components.a, {
        href: "https://github.com/ipikuka/next-mdx-remote-client?tab=readme-ov-file#the-part-associated-with-nextjs-app-router",
        children: _jsx(_components.code, {
          children: "next-mdx-remote-client"
        })
      }), "."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Good to know"
        }), ": Please proceed with caution. MDX compiles to JavaScript and is executed on the server. You should only fetch MDX content from a trusted source, otherwise this can lead to remote code execution (RCE)."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["The following example uses ", _jsx(_components.code, {
        children: "next-mdx-remote-client"
      }), ":"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { MDXRemote } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'next-mdx-remote-client/rsc'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " RemoteMdxPage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // MDX text - can be from a database, CMS, fetch, anywhere..."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " res"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'https://...'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " markdown"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "MDXRemote"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " source"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "markdown"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: "app/mdx-page-remote/page.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "jsx",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { MDXRemote } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'next-mdx-remote-client/rsc'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " default"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " RemoteMdxPage"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#953800"
              },
              children: "() "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "{"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "  // MDX text - can be from a database, CMS, fetch, anywhere..."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " res"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " fetch"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'https://...'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ");"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " markdown"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "text"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "();"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  return"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#116329"
              },
              children: "MDXRemote"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " source"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "markdown"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#CF222E"
              },
              children: "}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " />;"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["Navigating to the ", _jsx(_components.code, {
        children: "/mdx-page-remote"
      }), " route should display your rendered MDX."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "deep-dive-how-do-you-transform-markdown-into-html",
      children: "Deep Dive: How do you transform markdown into HTML?"
    }), "\n", _jsxs(_components.p, {
      children: ["React does not natively understand markdown. The markdown plaintext needs to first be transformed into HTML. This can be accomplished with ", _jsx(_components.code, {
        children: "remark"
      }), " and ", _jsx(_components.code, {
        children: "rehype"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "remark"
      }), " is an ecosystem of tools around markdown. ", _jsx(_components.code, {
        children: "rehype"
      }), " is the same, but for HTML. For example, the following code snippet transforms markdown into HTML:"]
    }), "\n", _jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " rehypeSanitize "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'rehype-sanitize'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " rehypeStringify "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'rehype-stringify'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " remarkParse "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'remark-parse'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " remarkRehype "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'remark-rehype'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " { unified } "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'unified'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ";"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "main"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "();"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "async"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " function"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " main"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "  const"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: " file"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " await"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " unified"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "()"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "(remarkParse) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Convert into markdown AST"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "(remarkRehype) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Transform to HTML AST"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "(rehypeSanitize) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Sanitize HTML input"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "(rehypeStringify) "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Convert AST into serialized HTML"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    ."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "process"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: "'Hello, Next.js!'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ");"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  console."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "log"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: "String"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "(file)); "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// <p>Hello, Next.js!</p>"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "remark"
      }), " and ", _jsx(_components.code, {
        children: "rehype"
      }), " ecosystem contains plugins for ", _jsx(_components.a, {
        href: "https://github.com/atomiks/rehype-pretty-code",
        children: "syntax highlighting"
      }), ", ", _jsx(_components.a, {
        href: "https://github.com/rehypejs/rehype-autolink-headings",
        children: "linking headings"
      }), ", ", _jsx(_components.a, {
        href: "https://github.com/remarkjs/remark-toc",
        children: "generating a table of contents"
      }), ", and more."]
    }), "\n", _jsxs(_components.p, {
      children: ["When using ", _jsx(_components.code, {
        children: "@next/mdx"
      }), " as shown above, you ", _jsx(_components.strong, {
        children: "do not"
      }), " need to use ", _jsx(_components.code, {
        children: "remark"
      }), " or ", _jsx(_components.code, {
        children: "rehype"
      }), " directly, as it is handled for you. We're describing it here for a deeper understanding of what the ", _jsx(_components.code, {
        children: "@next/mdx"
      }), " package is doing underneath."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "using-the-rust-based-mdx-compiler-experimental",
      children: "Using the Rust-based MDX compiler (experimental)"
    }), "\n", _jsxs(_components.p, {
      children: ["Next.js supports a new MDX compiler written in Rust. This compiler is still experimental and is not recommended for production use. To use the new compiler, you need to configure ", _jsx(_components.code, {
        children: "next.config.js"
      }), " when you pass it to ", _jsx(_components.code, {
        children: "withMDX"
      }), ":"]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "next.config.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "module"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "exports"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  experimental: {"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    mdxRs: "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ","
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "});"
            })
          })]
        })
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "mdxRs"
      }), " also accepts an object to configure how to transform mdx files."]
    }), "\n", _jsxs(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: [_jsx(_components.figcaption, {
        "data-rehype-pretty-code-title": "",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: "next.config.js"
      }), _jsx(_components.pre, {
        style: {
          "--shiki-dark": "#e1e4e8",
          "--shiki-light": "#1f2328",
          "--shiki-dark-bg": "#24292e",
          "--shiki-light-bg": "#ffffff"
        },
        tabIndex: "0",
        "data-language": "js",
        "data-theme": "github-dark github-light-default",
        children: _jsxs(_components.code, {
          "data-line-numbers": "",
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "module"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "."
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#79B8FF",
                "--shiki-light": "#0550AE"
              },
              children: "exports"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " ="
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#8250DF"
              },
              children: " withMDX"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "({"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  experimental: {"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    mdxRs: {"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      jsxRuntime?: string            "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Custom jsx runtime"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      jsxImportSource"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: " string       "
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: "// Custom jsx import source,"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "      mdxType"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: "?:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'gfm'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#F97583",
                "--shiki-light": "#CF222E"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#9ECBFF",
                "--shiki-light": "#0A3069"
              },
              children: " 'commonmark'"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#6A737D",
                "--shiki-light": "#6E7781"
              },
              children: " // Configure what kind of mdx syntax will be used to parse & transform"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "})"
            })
          })]
        })
      })]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "helpful-links",
      children: "Helpful Links"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://mdxjs.com",
          children: "MDX"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://www.npmjs.com/package/@next/mdx",
          children: _jsx(_components.code, {
            children: "@next/mdx"
          })
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/remarkjs/remark",
          children: "remark"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://github.com/rehypejs/rehype",
          children: "rehype"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://markdoc.dev/docs/nextjs",
          children: "Markdoc"
        })
      }), "\n"]
    })]
  });
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
