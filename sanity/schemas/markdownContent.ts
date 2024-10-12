import {  defineType } from 'sanity'

export default defineType({
  title: 'markdown富文本',
  name: 'markDownContent',
  type: 'document',
  fields: [
    {
      type: 'markdown',
      description: 'A Github flavored markdown field with image uploading',
      name: 'bio',
    },
  ],
})