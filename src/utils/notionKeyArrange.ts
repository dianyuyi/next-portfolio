export const notionKeyArrange = (blocks: Notion.blocks) => {
  const sortResult = [] as Notion.keyList

  blocks.forEach((block) => {
    const { properties } = block
    sortResult.push({
      params: {
        key: properties.key.rich_text[0]?.plain_text ?? '',
      },
    })
  })
  return sortResult
}

export default notionKeyArrange
