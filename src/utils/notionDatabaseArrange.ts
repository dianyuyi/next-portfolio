export const notionDatabaseArrange = (blocks: Notion.blocks) => {
  const sortResult = [] as Notion.filterList

  blocks.forEach((block) => {
    const { properties } = block

    const tags = properties.Tags.multi_select.forEach((tag: Notion.multiSelect) => tag.name)

    sortResult.push({
      id: properties.id.rich_text[0]?.plain_text ?? '',
      key: properties.key.rich_text[0]?.plain_text ?? '',
      title: properties.Name.title[0]?.plain_text ?? '',
      cover: properties.cover.files[0]?.external?.url ?? '',
      date: properties.Date.date[0]?.start ?? '',
      url: properties.id.rich_text[0]?.plain_text ?? '',
      type: properties.type.select?.name ?? '',
      language: properties.language.select?.name ?? '',
      tags,
    })
  })
  return sortResult
}

export default notionDatabaseArrange
