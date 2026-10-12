import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, {Callout, Image} = _components;
  if (!Callout) _missingMdxReference("Callout", true);
  if (!Image) _missingMdxReference("Image", true);
  return _jsxs(_Fragment, {
    children: [_jsx(Callout, {
      children: _jsxs(_components.p, {
        children: ["The text below is from the ", _jsx(_components.a, {
          href: "https://play.tailwindcss.com/uj1vGACRJA?layout=preview",
          children: "Tailwind\nCSS"
        }), " docs. I copied it\nhere to test the markdown styles. ", _jsx(_components.strong, {
          children: "Tailwind is awesome. You should use it."
        })]
      })
    }), "\n", _jsx(_components.p, {
      children: "Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS."
    }), "\n", _jsxs(_components.p, {
      children: ["By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you ", _jsx(_components.em, {
        children: "really are"
      }), " just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive."]
    }), "\n", _jsx(_components.p, {
      children: "We get lots of complaints about it actually, with people regularly asking us things like:"
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["Why is Tailwind removing the default styles on my ", _jsx(_components.code, {
          children: "h1"
        }), " elements? How do I disable this? What do you mean I lose all the other base styles too?\nWe hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a ", _jsx(_components.code, {
          children: "p"
        }), " element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look ", _jsx(_components.em, {
          children: "awesome"
        }), ", not awful."]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "@tailwindcss/typography"
      }), " plugin is our attempt to give you what you ", _jsx(_components.em, {
        children: "actually"
      }), " want, without any of the downsides of doing something stupid like disabling our base styles."]
    }), "\n", _jsxs(_components.p, {
      children: ["It adds a new ", _jsx(_components.code, {
        children: "prose"
      }), " class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:"]
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
          "data-language": "html",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
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
              children: "article"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#B392F0",
                "--shiki-light": "#0550AE"
              },
              children: " class"
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
              children: "\"prose\""
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
              children: "h1"
            }), _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: ">Garlic bread with cheese: What the science tells us</"
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
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    For years parents have espoused the health benefits of eating garlic bread"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    with cheese to their children, with the food earning such an iconic status"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    in our culture that kids will often dress up as warm, cheesy loaf for"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    Halloween."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  </"
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
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    But a recent study shows that the celebrated appetizer may be linked to a"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    series of rabies cases springing up around the country."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  </"
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
              children: "article"
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
    }), "\n", _jsxs(_components.p, {
      children: ["For more information about how to use the plugin and the features it includes, ", _jsx(_components.a, {
        href: "https://github.com/tailwindcss/typography/blob/master/README.md",
        children: "read the documentation"
      }), "."]
    }), "\n", _jsx(_components.hr, {}), "\n", _jsx(_components.h2, {
      id: "what-to-expect-from-here-on-out",
      children: "What to expect from here on out"
    }), "\n", _jsxs(_components.p, {
      children: ["What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like ", _jsx(_components.strong, {
        children: "bold text"
      }), ", unordered lists, ordered lists, code blocks, block quotes, ", _jsx(_components.em, {
        children: "and even italics"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: "It's important to cover all of these use cases for a few reasons:"
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsx(_components.li, {
        children: "We want everything to look good out of the box."
      }), "\n", _jsx(_components.li, {
        children: "Really just the first reason, that's the whole point of the plugin."
      }), "\n", _jsx(_components.li, {
        children: "Here's a third pretend reason though a list with three items looks more realistic than a list with two items."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "Now we're going to try out another header style."
    }), "\n", _jsx(_components.h3, {
      id: "typography-should-be-easy",
      children: "Typography should be easy"
    }), "\n", _jsx(_components.p, {
      children: "So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable."
    }), "\n", _jsx(_components.p, {
      children: "Something a wise person once told me about typography is:"
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "It's probably important that images look okay here by default as well:"
    }), "\n", _jsx(Image, {
      src: "/images/undraw/image-01.png",
      width: "1598",
      height: "1236",
      alt: "Image"
    }), "\n", _jsx(_components.p, {
      children: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    }), "\n", _jsx(_components.p, {
      children: "Now I'm going to show you an example of an unordered list to make sure that looks good, too:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "So here is the first item in this list."
      }), "\n", _jsx(_components.li, {
        children: "In this example we're keeping the items short."
      }), "\n", _jsx(_components.li, {
        children: "Later, we'll use longer, more complex list items."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "And that's the end of this section."
    }), "\n", _jsx(_components.h2, {
      id: "what-if-we-stack-headings",
      children: "What if we stack headings?"
    }), "\n", _jsx(_components.h3, {
      id: "we-should-make-sure-that-looks-good-too",
      children: "We should make sure that looks good, too."
    }), "\n", _jsx(_components.p, {
      children: "Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be."
    }), "\n", _jsx(_components.h3, {
      id: "when-a-heading-comes-after-a-paragraph-",
      children: "When a heading comes after a paragraph …"
    }), "\n", _jsx(_components.p, {
      children: "When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like."
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "I often do this thing where list items have headings."
          })
        }), "\n", _jsx(_components.p, {
          children: "For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right."
        }), "\n", _jsx(_components.p, {
          children: "I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way."
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Since this is a list, I need at least two items."
          })
        }), "\n", _jsx(_components.p, {
          children: "I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles."
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "It's not a bad idea to add a third item either."
          })
        }), "\n", _jsx(_components.p, {
          children: "I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it."
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading."
    }), "\n", _jsx(_components.h2, {
      id: "code-should-look-okay-by-default",
      children: "Code should look okay by default."
    }), "\n", _jsxs(_components.p, {
      children: ["I think most people are going to use ", _jsx(_components.a, {
        href: "https://highlightjs.org/",
        children: "highlight.js"
      }), " or ", _jsx(_components.a, {
        href: "https://prismjs.com/",
        children: "Prism"
      }), " or something if they want to style their code blocks but it wouldn't hurt to make them look ", _jsx(_components.em, {
        children: "okay"
      }), " out of the box, even with no syntax highlighting."]
    }), "\n", _jsxs(_components.p, {
      children: ["Here's what a default ", _jsx(_components.code, {
        children: "tailwind.config.js"
      }), " file looks like at the time of writing:"]
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
          "data-language": "js",
          "data-theme": "github-dark github-light-default",
          style: {
            display: "grid"
          },
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
              children: "  purge: [],"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  theme: {"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "    extend: {},"
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
              children: "  variants: {},"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                "--shiki-dark": "#E1E4E8",
                "--shiki-light": "#1F2328"
              },
              children: "  plugins: [],"
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
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Hopefully that looks good enough to you."
    }), "\n", _jsx(_components.h3, {
      id: "what-about-nested-lists",
      children: "What about nested lists?"
    }), "\n", _jsx(_components.p, {
      children: "Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work."
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Nested lists are rarely a good idea."
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "You might feel like you are being really \"organized\" or something but you are just creating a gross shape on the screen that is hard to read."
          }), "\n", _jsx(_components.li, {
            children: "Nested navigation in UIs is a bad idea too, keep things as flat as possible."
          }), "\n", _jsx(_components.li, {
            children: "Nesting tons of folders in your source code is also not helpful."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Since we need to have more items, here's another one."
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "I'm not sure if we'll bother styling more than two levels deep."
          }), "\n", _jsx(_components.li, {
            children: "Two is already too much, three is guaranteed to be a bad idea."
          }), "\n", _jsx(_components.li, {
            children: "If you nest four levels deep you belong in prison."
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Two items isn't really a list, three is good though."
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsx(_components.li, {
            children: "Again please don't nest lists if you want people to actually read your content."
          }), "\n", _jsx(_components.li, {
            children: "Nobody wants to look at this."
          }), "\n", _jsx(_components.li, {
            children: "I'm upset that we even have to bother styling this."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["The most annoying thing about lists in Markdown is that ", _jsx(_components.code, {
        children: "<li>"
      }), " elements aren't given a child ", _jsx(_components.code, {
        children: "<p>"
      }), " tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too."]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "For example, here's another nested list."
          })
        }), "\n", _jsx(_components.p, {
          children: "But this time with a second paragraph."
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["These list items won't have ", _jsx(_components.code, {
              children: "<p>"
            }), " tags"]
          }), "\n", _jsx(_components.li, {
            children: "Because they are only one line each"
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "But in this second top-level list item, they will."
          })
        }), "\n", _jsx(_components.p, {
          children: "This is especially annoying because of the spacing on this paragraph."
        }), "\n", _jsxs(_components.ul, {
          children: ["\n", _jsxs(_components.li, {
            children: ["\n", _jsxs(_components.p, {
              children: ["As you can see here, because I've added a second line, this list item now has a ", _jsx(_components.code, {
                children: "<p>"
              }), " tag."]
            }), "\n", _jsx(_components.p, {
              children: "This is the second line I'm talking about by the way."
            }), "\n"]
          }), "\n", _jsxs(_components.li, {
            children: ["\n", _jsx(_components.p, {
              children: "Finally here's another list item so it's more like a list."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "A closing list item, but with no nested list, because why not?"
        }), "\n"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "And finally a sentence to close off this section."
    }), "\n", _jsx(_components.h2, {
      id: "there-are-other-elements-we-need-to-style",
      children: "There are other elements we need to style"
    }), "\n", _jsxs(_components.p, {
      children: ["I almost forgot to mention links, like ", _jsx(_components.a, {
        href: "https://tailwindcss.com",
        children: "this link to the Tailwind CSS website"
      }), ". We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier."]
    }), "\n", _jsx(_components.p, {
      children: "We even included table styles, check it out:"
    }), "\n", _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Wrestler"
          }), _jsx(_components.th, {
            children: "Origin"
          }), _jsx(_components.th, {
            children: "Finisher"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Bret \"The Hitman\" Hart"
          }), _jsx(_components.td, {
            children: "Calgary, AB"
          }), _jsx(_components.td, {
            children: "Sharpshooter"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Stone Cold Steve Austin"
          }), _jsx(_components.td, {
            children: "Austin, TX"
          }), _jsx(_components.td, {
            children: "Stone Cold Stunner"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Randy Savage"
          }), _jsx(_components.td, {
            children: "Sarasota, FL"
          }), _jsx(_components.td, {
            children: "Elbow Drop"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Vader"
          }), _jsx(_components.td, {
            children: "Boulder, CO"
          }), _jsx(_components.td, {
            children: "Vader Bomb"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Razor Ramon"
          }), _jsx(_components.td, {
            children: "Chuluota, FL"
          }), _jsx(_components.td, {
            children: "Razor's Edge"
          })]
        })]
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["We also need to make sure inline code looks good, like if I wanted to talk about ", _jsx(_components.code, {
        children: "<span>"
      }), " elements or tell you the good news about ", _jsx(_components.code, {
        children: "@tailwindcss/typography"
      }), "."]
    }), "\n", _jsxs(_components.h3, {
      id: "sometimes-i-even-use-code-in-headings",
      children: ["Sometimes I even use ", _jsx(_components.code, {
        children: "code"
      }), " in headings"]
    }), "\n", _jsxs(_components.p, {
      children: ["Even though it's probably a bad idea, and historically I've had a hard time making it look good. This ", _jsx(_components.em, {
        children: "\"wrap the code blocks in backticks\""
      }), " trick works pretty well though really."]
    }), "\n", _jsxs(_components.p, {
      children: ["Another thing I've done in the past is put a ", _jsx(_components.code, {
        children: "code"
      }), " tag inside of a link, like if I wanted to tell you about the ", _jsx(_components.a, {
        href: "https://github.com/tailwindcss/docs",
        children: _jsx(_components.code, {
          children: "tailwindcss/docs"
        })
      }), " repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it."]
    }), "\n", _jsxs(_components.h4, {
      id: "we-havent-used-an-h4-yet",
      children: ["We haven't used an ", _jsx(_components.code, {
        children: "h4"
      }), " yet"]
    }), "\n", _jsxs(_components.p, {
      children: ["But now we have. Please don't use ", _jsx(_components.code, {
        children: "h5"
      }), " or ", _jsx(_components.code, {
        children: "h6"
      }), " in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a ", _jsx(_components.code, {
        children: "before"
      }), " pseudo-element to scream at you if you use an ", _jsx(_components.code, {
        children: "h5"
      }), " or ", _jsx(_components.code, {
        children: "h6"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["We don't style them at all out of the box because ", _jsx(_components.code, {
        children: "h4"
      }), " elements are already so small that they are the same size as the body copy. What are we supposed to do with an ", _jsx(_components.code, {
        children: "h5"
      }), ", make it ", _jsx(_components.em, {
        children: "smaller"
      }), " than the body copy? No thanks."]
    }), "\n", _jsx(_components.h3, {
      id: "we-still-need-to-think-about-stacked-headings-though",
      children: "We still need to think about stacked headings though."
    }), "\n", _jsxs(_components.h4, {
      id: "lets-make-sure-we-dont-screw-that-up-with-h4-elements-either",
      children: ["Let's make sure we don't screw that up with ", _jsx(_components.code, {
        children: "h4"
      }), " elements, either."]
    }), "\n", _jsx(_components.p, {
      children: "Phew, with any luck we have styled the headings above this text and they look pretty good."
    }), "\n", _jsx(_components.p, {
      children: "Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document."
    }), "\n", _jsx(_components.p, {
      children: "What I've written here is probably long enough, but adding this final sentence can't hurt."
    }), "\n", _jsx(_components.h2, {
      id: "github-flavored-markdown",
      children: "GitHub Flavored Markdown"
    }), "\n", _jsxs(_components.p, {
      children: ["I've also added support for GitHub Flavored Mardown using ", _jsx(_components.code, {
        children: "remark-gfm"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["With ", _jsx(_components.code, {
        children: "remark-gfm"
      }), ", we get a few extra features in our markdown. Example: autolink literals."]
    }), "\n", _jsxs(_components.p, {
      children: ["A link like ", _jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), " or ", _jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), " would automatically be converted into an ", _jsx(_components.code, {
        children: "a"
      }), " tag."]
    }), "\n", _jsxs(_components.p, {
      children: ["This works for email links too: ", _jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
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
