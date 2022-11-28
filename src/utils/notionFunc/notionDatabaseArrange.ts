export const notionDatabaseArrange = (blocks: Notion.Blocks) => {
  const sortResult = [] as Notion.FilterList

  blocks.forEach((block) => {
    const { properties } = block

    const tags = properties.Tags.multi_select.map((tag: Notion.MultiSelect) => tag.name)

    sortResult.push({
      id: properties.id.rich_text[0]?.plain_text ?? '',
      key: properties.key.rich_text[0]?.plain_text ?? '',
      title: properties.Name.title[0]?.plain_text ?? '',
      cover: properties.cover.files[0]?.external?.url ?? '',
      date: properties.Date.date?.start ?? '',
      url: properties.id.rich_text[0]?.plain_text ?? '',
      type: properties.type.select?.name ?? '',
      language: properties.language.select?.name ?? '',
      tags,
    })
  })

  sortResult.sort((curr, next) => {
    const currDate = new Date(curr.date).getTime()
    const nextDate = new Date(next.date).getTime()
    return nextDate - currDate
  })

  return sortResult
}

export default notionDatabaseArrange
