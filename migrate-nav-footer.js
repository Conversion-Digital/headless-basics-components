// Migration script to convert old cdnav/cdfooter to new reference components
const sanityClient = require('@sanity/client')
require('dotenv').config({ path: '../../.env.local' })

// Configure Sanity client
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

async function findGlobalComponents() {
  console.log('🔍 Finding global navigation and footer components...')
  
  // Find global navigation
  const globalNavs = await client.fetch(`*[_type == "cdnav"] | order(_createdAt desc)[0...5]{
    _id,
    title,
    _createdAt
  }`)
  
  // Find global footer
  const globalFooters = await client.fetch(`*[_type == "cdfooter"] | order(_createdAt desc)[0...5]{
    _id,
    title,
    _createdAt
  }`)
  
  console.log('\n📋 Available Global Navigation Components:')
  globalNavs.forEach((nav, i) => {
    console.log(`  ${i + 1}. ${nav.title || 'Untitled'} (ID: ${nav._id})`)
  })
  
  console.log('\n📋 Available Global Footer Components:')
  globalFooters.forEach((footer, i) => {
    console.log(`  ${i + 1}. ${footer.title || 'Untitled'} (ID: ${footer._id})`)
  })
  
  // Return the first ones (most recent) as defaults
  return {
    navId: globalNavs[0]?._id,
    footerId: globalFooters[0]?._id
  }
}

async function migrateComponents() {
  try {
    console.log('🚀 Starting migration...\n')
    
    // Get global component IDs
    const { navId, footerId } = await findGlobalComponents()
    
    if (!navId || !footerId) {
      console.error('❌ Error: Could not find global navigation or footer components.')
      console.log('\n📝 Please create global components first:')
      console.log('   1. Go to Sanity Studio')
      console.log('   2. Navigate to "Global Components"')
      console.log('   3. Create a Navigation (CD) document')
      console.log('   4. Create a Footer (CD) document')
      console.log('   5. Run this migration script again')
      return
    }
    
    console.log(`\n✅ Using global navigation: ${navId}`)
    console.log(`✅ Using global footer: ${footerId}\n`)
    
    // Fetch all pages and homepage with old components
    const documents = await client.fetch(`
      *[_type in ["page", "homepage"] && defined(components) && count(components[_type in ["cdnav", "cdfooter"]]) > 0]{
        _id,
        _type,
        _rev,
        title,
        "componentTypes": components[]._type,
        components
      }
    `)
    
    console.log(`📄 Found ${documents.length} documents to migrate\n`)
    
    for (const doc of documents) {
      console.log(`\n🔄 Processing ${doc._type}: ${doc.title || doc._id}`)
      console.log(`   Current components: ${doc.componentTypes.join(', ')}`)
      
      // Transform components
      const updatedComponents = doc.components.map((component, index) => {
        if (component._type === 'cdnav') {
          console.log(`   ✏️  Converting cdnav at position ${index} to cdnavReference`)
          return {
            _type: 'cdnavReference',
            _key: component._key || `nav-${Date.now()}`,
            globalComponentSource: {
              _type: 'reference',
              _ref: navId
            }
          }
        }
        
        if (component._type === 'cdfooter') {
          console.log(`   ✏️  Converting cdfooter at position ${index} to cdfooterReference`)
          return {
            _type: 'cdfooterReference',
            _key: component._key || `footer-${Date.now()}`,
            globalComponentSource: {
              _type: 'reference',
              _ref: footerId
            }
          }
        }
        
        return component
      })
      
      // Update the document
      try {
        await client
          .patch(doc._id)
          .set({ components: updatedComponents })
          .commit()
        
        console.log(`   ✅ Successfully updated ${doc._type}: ${doc.title || doc._id}`)
      } catch (error) {
        console.error(`   ❌ Failed to update ${doc._id}:`, error.message)
      }
    }
    
    console.log('\n✨ Migration complete!')
    console.log('\n📝 Next steps:')
    console.log('   1. Rebuild your project: pnpm build')
    console.log('   2. Redeploy GraphQL API: pnpm sanity graphql deploy --force')
    console.log('   3. Test your site')
    console.log('   4. Remove temporary types from page.ts schema')
    
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    console.error('\n💡 Make sure you have:')
    console.error('   - Valid Sanity API token in SANITY_API_TOKEN')
    console.error('   - Correct project ID and dataset')
    console.error('   - Created global navigation and footer components')
  }
}

// Run the migration
migrateComponents()