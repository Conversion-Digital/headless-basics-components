import { fetchMutationAPI } from "@conversiondigital/headless-basics-data";

export async function upsertDemoDataIfBlank() {
  const pageMutation = {
    mutations: [
      {
        create: {
          _type: "page",
          title: "Demo Page with Side Nav",
          parent: {
            _type: "reference",
            _ref: "5bbfcbb4-84f3-4301-bc56-8345160d0cb9"
          },
          components: []
        }
      }
    ]
  };

  const pageResponse = await fetchMutationAPI(pageMutation);
  const pageId = pageResponse?.results[0]?._id;

  const componentMutation = {
    mutations: [
      {
        create: {
          _type: "xComponent",
          selectableVariant: "xDemo",
          sortOrder: 1,
          title: "Demo Side Navigation",
          subtitle: "Demonstrates active navigation state",
          navItems: [
            { label: "Home", active: true },
            { label: "About", active: false },
            { label: "Services", active: false },
            { label: "Contact", active: false }
          ],
          parent: {
            _type: "reference",
            _ref: "5bbfcbb4-84f3-4301-bc56-8345160d0cb9"
          }
        }
      }
    ]
  };

  await fetchMutationAPI(componentMutation);
}