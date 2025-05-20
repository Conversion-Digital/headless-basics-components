// Add a global uncaught exception handler to log errors before they cause Node to exit.
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

import 'dotenv/config'
import { v4 as uuidv4 } from 'uuid'
import { demoVariantData } from './demoVariantData'
import { upsertDemoDataIfBlank } from './upsertTools';

console.log('Script start: Running upsertDemoDataIfBlank...')

const componentName = '{COMPONENT}'

// The component name should be replaced by AI. If not fail this script
if(componentName.startsWith('{')){
  console.error('Component name was not set.')
  process.exit(1)
}

try {
  const componentDocId = uuidv4()
  const pageDocId = uuidv4()
  const components =       [
    {
      _id: componentDocId,
      _key: componentDocId,
      _type: componentName,
      selectableVariant: demoVariantData.variant || "",
      title: (demoVariantData as any)?.title || "",
      heading: (demoVariantData as any)?.heading || "",
      subtitle: (demoVariantData as any)?.subtitle || "",
      sortOrder: (demoVariantData as any)?.sortOrder || 0,
    },
  ];
  upsertDemoDataIfBlank(componentName, componentDocId, pageDocId, components);
} catch (error) {
  // Check if error is an instance of Error
  if (error instanceof Error) {
    console.error('Error message:', error.message);
    console.error('Stack trace:', error.stack);
  } else {
    console.error('Unexpected error type:', error);
  }
}

console.log('Script end: Finished running upsertDemoDataIfBlank.')