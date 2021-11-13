const notion = require('@notionhq/client')

const client = new notion.Client({ auth: process.env.NOTION_KEY })

exports.addInquiry = async function(parameters) {
  const properties = {
    'Name': {
      title: [
        {
          text: {
            content: `${parameters['会社名']} ${parameters['お名前']}`
          }
        }
      ]
    },
    'メールアドレス': {
      email: parameters['メールアドレス']
    }
  }

  const rich_text_parameters = ["お名前", 'お名前（ふりがな）', '会社名', '問い合わせ内容']

  rich_text_parameters.forEach(key => {
      properties[key] = {
        rich_text: [
          {
            text: {
              content: parameters[key]
            }
          }
        ]
      }
    }
  )

  console.log(properties)

  await client.pages.create({
    parent: { database_id: process.env.NOTION_DATABASE_ID },
    properties
  })
}