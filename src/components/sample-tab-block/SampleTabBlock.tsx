import TabPanel from '@mui/joy/TabPanel';

import { TabName } from 'store/slices/appSlice';

interface SamplePageBlockProps {
   children: React.ReactNode | React.ReactNode[];
   value: TabName;
}

const SamplePageBlock = ({ children, value }: SamplePageBlockProps) => {
   return <TabPanel value={value}>
         {children}
      </TabPanel>;
};

export default SamplePageBlock;
