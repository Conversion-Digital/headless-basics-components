import React, { ReactNode } from 'react';
import SectionWrapperTailwind from './sectionWrapperTailwind';

const SectionOneColumn: React.FC<{ 
  children: ReactNode
}> = ({
  children
}) => {
  return (
    <SectionWrapperTailwind>
        {children}
    </SectionWrapperTailwind>
  );
};

export default SectionOneColumn;

