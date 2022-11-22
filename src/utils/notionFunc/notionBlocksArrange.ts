export const notionBlocksArrange = (page: Notion.Page, blocks: Notion.Blocks) => {
  const sortResult = {
    id: page.id,
    title: page.properties.title.title[0].plain_text,
    cover: page.cover.external.url,
    date: null,
    url: null,
    tags: [],
    workList: [],
    contexts: [],
  } as Notion.PageContent

  blocks.map((block) => {
    const { type } = block

    switch (type) {
      case 'heading_2':
        sortResult.date = block[type].rich_text[0]?.plain_text ?? ''
        break
      case 'heading_3':
        sortResult.url = block[type].rich_text[0]?.plain_text ?? ''
        break
      case 'numbered_list_item':
        sortResult.tags.push({
          annotations: block[type].rich_text[0]?.annotations,
          text: block[type].rich_text[0]?.plain_text ?? '',
          href: block[type].rich_text[0]?.href ?? '',
        })
        break
      case 'bulleted_list_item':
        sortResult.workList.push({
          annotations: block[type].rich_text[0]?.annotations ?? {},
          text: block[type].rich_text[0]?.plain_text ?? '',
        })
        break
      default:
        if (block[type].rich_text) {
          sortResult.contexts.push({
            annotations: block[type].rich_text[0]?.annotations ?? {},
            text: block[type].rich_text[0]?.plain_text ?? '',
            href: block[type].rich_text[0]?.href ?? '',
          })
        }
        break
    }
  })
  return sortResult
}

export default notionBlocksArrange
