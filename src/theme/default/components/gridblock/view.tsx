'use server'
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic"

const GridblockUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) })

const serializeForClient = (obj: any): any => {
  if (!obj) return null;
  
  if (Array.isArray(obj)) {
    return obj.map(item => serializeForClient(item));
  }
  
  if (typeof obj === 'object') {
    const serialized: Record<string, any> = {};
    
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === 'function') {
          continue;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          serialized[key] = serializeForClient(obj[key]);
        } else {
          serialized[key] = obj[key];
        }
      }
    }
    
    return serialized;
  }
  
  return obj;
};

export async function View(dynamicComponent: ViewComponentProps) {
  const serializedProps = serializeForClient(dynamicComponent);
  return <GridblockUI {...serializedProps} />
}