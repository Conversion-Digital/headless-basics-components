import DevButton from "../../../../../components/developer/devButton";
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { Suspense, useState, useEffect } from "react";


const log = getLogger("ui-base.cms.sideNavIndicator");

// Define types for the SideNavIndicator
interface GridSection {
  _id: string;
  title: string;
  sectionId: string;
}

export default function SideNavIndicatorUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to SideNavIndicatorUI", componentDetails);
    return <div>Error rendering SideNavIndicatorUI: Missing data</div>;
  }

  populateMetaData(componentDetails)

  // Extract grid sections from Sanity data
  // Handle both direct objects and references
  const gridSectionsRaw = componentDetails.data?.gridSections || [];
  
  if (!Array.isArray(gridSectionsRaw) || gridSectionsRaw.length === 0) {
    log.warn("No grid sections found for SideNavIndicator or data is not in expected format");
    return null;
  }

  // Map the grid sections to the format expected by SideNavIndicator component
  // Add more defensive coding to handle different data shapes
  const formattedGridSections = gridSectionsRaw
    .filter(section => section) // Filter out null/undefined
    .map(section => {
      // Handle both expanded references and direct references
      const sectionData = section._ref ? (section.document || {}) : section;
      
      return {
        _id: section._id || section._ref || '',
        title: sectionData.title || 'Unnamed Section',
        sectionId: sectionData.sectionId || `section-${section._id || section._ref}`
      };
    });

  if (formattedGridSections.length === 0) {
    log.warn("Could not extract any valid grid sections");
    return null;
  }

  return (
    <>
      <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      <SideNavIndicator gridSections={formattedGridSections} />
    </>
  );
}

// Moved the SideNavIndicator component directly into this file
const SideNavIndicator: React.FC<{gridSections: GridSection[]}> = ({ gridSections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Function to check which section is currently in view
    const checkVisibleSections = () => {
      if (!gridSections || gridSections.length === 0) return;
      
      for (const section of gridSections) {
        const element = document.getElementById(section.sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the element is in the viewport
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section._id);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', checkVisibleSections);
    // Initial check
    checkVisibleSections();

    return () => {
      window.removeEventListener('scroll', checkVisibleSections);
    };
  }, [gridSections]);

  if (!gridSections || gridSections.length === 0) {
    return null;
  }

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2 pl-2">
      {gridSections.map((section) => (
        <div 
          key={section._id}
          className={`cursor-pointer py-2 px-3 transition-all duration-200 hover:text-primary ${
            activeSection === section._id 
              ? 'text-primary font-bold border-l-4 border-primary' 
              : 'text-gray-600 border-l-4 border-transparent'
          }`}
          onClick={() => {
            document.getElementById(section.sectionId)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {section.title}
        </div>
      ))}
    </div>
  );
};

function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails?.metaData) 
  {
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/SideNavIndicator/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "SideNavIndicatorUI";
  }
}


