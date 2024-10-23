// CustomMarkdownInput.tsx
import React from 'react'
import {MarkdownInput, type MarkdownInputProps} from 'sanity-plugin-markdown/next'

export function CustomMarkdownInput(props) {
  const reactMdeProps: MarkdownInputProps['reactMdeProps'] = React.useMemo(() => {
    return {
      options: {
        // toolbar: ['bold', 'italic'],
        // more options available, see:
        // https://github.com/Ionaru/easy-markdown-editor#options-list
      },
      // more props available, see:
      // https://github.com/RIP21/react-simplemde-editor#react-simplemde-easymde-markdown-editor
    }
  }, [])

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />
}