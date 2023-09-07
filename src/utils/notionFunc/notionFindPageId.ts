export const notionFindPageId = (languageCode: string, pageCollect: Notion.Blocks) => {
  let pageId = ''
  pageCollect.forEach((item: Notion.Block) => {
    if (item.properties.language.select.name === languageCode)
      pageId = item.properties.id.rich_text[0].plain_text
  })
  return pageId
}

export default notionFindPageId
