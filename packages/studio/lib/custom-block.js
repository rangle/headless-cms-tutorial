import React from 'react'
import { Link } from 'phosphor-react'

// import '../../design-system/src/styles.scss'

export default (
  selectedDecorators, // ie: bold italic
  selectedStyles, // ie: h1 h2 largebody
  selectedLists, // ie: bullet, number
  selectedAnnotations // ie: link, image
) => {
  const options = {
    // Decorators
    codehighlight: {
      title: 'Code Highlight',
      value: 'codeHighlight',
      blockEditor: {
        icon: () => 'C',
        render: ({ children }) => (
          <span className='radius'>
            <span className='ds-code-highlight'>{children}</span>
          </span>
        )
      }
    },
    italic: { title: 'Italic', value: 'em' },
    strong: { title: 'Strong', value: 'strong' },
    underline: { title: 'Underline', value: 'underline' },

    // Block styles
    h1: { title: 'H1', value: 'h1' },
    h2: { title: 'H2', value: 'h2' },
    h3: { title: 'H3', value: 'h3' },
    largebody: {
      title: 'Large Body',
      value: 'largeBody',
      blockEditor: {
        render: ({ children }) => (
          <span className='radius'>
            <p className='ds-large-body'>{children}</p>
          </span>
        )
      }
    },
    smallbody: {
      title: 'Small Body',
      value: 'smallBody',
      blockEditor: {
        render: ({ children }) => (
          <span className='radius'>
            <p className='ds-small-body'>{children}</p>
          </span>
        )
      }
    },
    // Lists
    bullet: { title: 'Bullet', value: 'bullet' },
    number: { title: 'Number', value: 'number' },
    // Annotations
    figure: {
      title: 'Content',
      name: 'content',
      type: 'reference',
      to: [{ type: 'figure' }]
    },
    link: {
      title: 'Link',
      name: 'inlineLink',
      type: 'object',
      fields: [
        {
          title: 'URL',
          name: 'href',
          type: 'string'
        }
      ],
      blockEditor: {
        icon: () => <Link />
      }
    }
  }

  const getCustomSelections = (selections) => {
    return selections.map((selection) => {
      return options[selection.toLowerCase()]
    })
  }

  let decorators = []
  if (selectedDecorators) {
    decorators = getCustomSelections(selectedDecorators.split(' '))
  }

  let styles = []
  if (selectedStyles) {
    styles = getCustomSelections(selectedStyles.split(' '))
  }

  let lists = []
  if (selectedLists) {
    lists = getCustomSelections(selectedLists.split(' '))
  }

  let annotations = []
  if (selectedAnnotations) {
    annotations = getCustomSelections(selectedAnnotations.split(' '))
  }

  return {
    title: 'Rich Text',
    type: 'block',
    name: 'richText',
    styles: styles,
    lists: [...lists],
    marks: {
      decorators: [...decorators],
      annotations: [...annotations]
    }
  }
}
