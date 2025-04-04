process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

import 'dotenv/config'
import { v4 as uuidv4 } from 'uuid'
import { demoVariantData } from './demoVariantData'

console.log('Script start: Running upsertDemoDataIfBlank for herobanner...')

const projectId = process.env.PROJECT_ID || ''
const sanityApiToken = process.env.SANITY_API_TOKEN || ''
const isUpsertEnabled = process.env.ENABLE_SANITY_UPSERTS === 'true'
const componentName = 'herobanner'

if (componentName.startsWith('{')) {
  console.error('Component name was not set.')
  process.exit(1)
}

async function pageExists(title: string): Promise<boolean> {
  console.log(`pageExists: Checking for page with title "${title}"`)
  try {
    const query = `
      query getPageByTitle($title: String!) {
        allPage(where: { title: { eq: $title } }) {
          _id
        }
      }
    `
    const variables = { title }
    const sanityQueryEndpoint = `https://${projectId}.api.sanity.io/v2023-08-01/graphql/production/default`
    console.log('pageExists: Using sanity endpoint:', sanityQueryEndpoint)
    const res = await fetch(sanityQueryEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sanityApiToken}`,
      },
      body: JSON.stringify({ query, variables }),
    })
    console.log('pageExists: Response status:', res.status)
    const json = await res.json()
    console.log('pageExists: JSON response:', json)
    const pages = json?.data?.allPage || []
    console.log(`pageExists: Found ${pages.length} page(s) for title "${title}"`)
    return pages.length > 0
  } catch (err) {
    console.error('pageExists: Error checking page existence:', err)
    return false
  }
}

export async function upsertDemoDataIfBlank() {
  console.log('upsertDemoDataIfBlank: Function started.')
  if (!isUpsertEnabled) {
    console.log('upsertDemoDataIfBlank: Sanity upserts are disabled. Set ENABLE_SANITY_UPSERTS=true to enable.')
    return
  }
  console.log('upsertDemoDataIfBlank: Sanity upserts are enabled.')

  const titleOfPage = 'herobannerDemoPage'
  const exists = await pageExists(titleOfPage)
  console.log(`upsertDemoDataIfBlank: Page exists? ${exists}`)
  if (exists) {
    console.log(`upsertDemoDataIfBlank: Page with title "${titleOfPage}" found. Skipping upsert.`)
    return
  }
  console.log(`upsertDemoDataIfBlank: Page with title "${titleOfPage}" not found. Proceeding with upsert...`)

  const sanityMutationEndpoint = `https://${projectId}.api.sanity.io/v2023-08-01/data/mutate/production`
  console.log('upsertDemoDataIfBlank: Using mutation endpoint:', sanityMutationEndpoint)

  const componentDocId = uuidv4()
  const pageDocId = uuidv4()

  console.log('upsertDemoDataIfBlank: Generated componentDocId:', componentDocId)
  console.log('upsertDemoDataIfBlank: Generated pageDocId:', pageDocId)

  // no image or button in this auto-creation, so user can set them in the Studio
  const mutationPayload = {
    mutations: [
      {
        create: {
          _id: pageDocId,
          _type: 'page',
          title: titleOfPage,
          parent: {
            _type: 'reference',
            _ref: '5bbfcbb4-84f3-4301-bc56-8345160d0cb9'
          },
          slug: {
            __typename: 'Slug',
            _key: null,
            current: `/library/${titleOfPage}`,
            source: null
          },
          components: [
            {
              _id: componentDocId,
              _key: componentDocId,
              _type: componentName,
              selectableVariant: demoVariantData.variant,
              title: demoVariantData.title,
              subtitle: demoVariantData.subtitle,
              altText: demoVariantData.altText,
              sortOrder: 0
            }
          ]
        }
      }
    ]
  }

  console.log('upsertDemoDataIfBlank: Mutation payload:', mutationPayload)

  try {
    console.log('upsertDemoDataIfBlank: Sending mutation request...')
    const res = await fetch(sanityMutationEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sanityApiToken}`,
      },
      body: JSON.stringify(mutationPayload),
    })
    console.log('upsertDemoDataIfBlank: Mutation response status:', res.status)
    const json = await res.json()
    console.log('upsertDemoDataIfBlank: Mutation JSON response:', json)
    if (json.errors) {
      console.error('upsertDemoDataIfBlank: Upsert mutation errors:', json.errors)
      return
    }
    console.log('upsertDemoDataIfBlank: Upsert mutation result:', JSON.stringify(json, null, 2))
  } catch (error) {
    console.error('upsertDemoDataIfBlank: Error in upsert mutation:', error)
  }
}

try {
  upsertDemoDataIfBlank()
} catch (error) {
  console.error('Error in upsertDemoDataIfBlank:', error)
}

console.log('Script end: Finished running upsertDemoDataIfBlank.')