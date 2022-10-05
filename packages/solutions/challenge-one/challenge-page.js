// The only code change needed for this challenge is to add the `quote` type to the content array for the page (line 20)

export default {
  title: 'Challenge Page',
  name: 'challengePage',
  type: 'document',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Page Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'mediaModule' },
        { type: 'quote' }
      ]
    },
  ]
}
