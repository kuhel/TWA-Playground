import { useEffect } from 'react';

import i18n from 'common/language/i18n';

import useGetPosts from 'hooks/useGetPosts';
import useLanguage from 'hooks/useLanguage';
import useTheme from 'hooks/useTheme';
import useTab from 'hooks/useTab';

import { Language, TabName } from 'store/slices/appSlice';

import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

import SampleTabBlock from 'components/sample-tab-block/SampleTabBlock';
import TabContentAppearance from 'components/tab-content-appearance/TabContentAppearance';

import WebApp from '@twa-dev/sdk'

const Home = () => {
   const { setCurrentLanguage } = useLanguage();
   const { getPosts } = useGetPosts();
   const { toggleTheme } = useTheme();
   const { tab, setCurrentTab } = useTab();

   useEffect(() => {
      getPosts();
      WebApp.ready();
   }, [getPosts]);

   const setLanguageToTurkish = () => {
      setCurrentLanguage(Language.TR);
   };

   const setTab = (tabName: TabName) => {
      setCurrentTab(tabName);
      console.log(tabName);
   };

   return (
      <Box>
         <Typography level="h4" component="h1">
            {i18n.t('greeting')}
         </Typography>
         <Tabs aria-label="tabs" defaultValue={TabName.Appearance} sx={{ bgcolor: 'transparent' }}>
            <TabList
               disableUnderline
               sx={{
                  p: 0.5,
                  gap: 0.5,
                  borderRadius: 'xl',
                  bgcolor: 'background.level1',
                  [`& .${tabClasses.root}[aria-selected="true"]`]: {
                     boxShadow: 'sm',
                     bgcolor: 'background.surface',
                  },
               }}
            >
               <Tab disableIndicator value={TabName.Appearance}>{TabName.Appearance}</Tab>
               <Tab disableIndicator value={TabName.Plan}>Popups</Tab>
               <Tab disableIndicator value={TabName.Team}>Buttons</Tab>
               <Tab disableIndicator value={TabName.Team}>Haptic</Tab>
               <Tab disableIndicator value={TabName.Team}>App Data</Tab>
               <Tab disableIndicator value={TabName.Team}>User Data</Tab>
               <Tab disableIndicator value={TabName.Team}>Chat Data</Tab>
               <Tab disableIndicator value={TabName.Team}>Events</Tab>
               <Tab disableIndicator value={TabName.Team}>Security</Tab>
            </TabList>
            <SampleTabBlock value={TabName.Appearance}>
               <TabContentAppearance/ >
            </SampleTabBlock>
            <TabPanel value={TabName.Account}>
               <Box>
                  <Typography level='h2'>
                     {tab}
                  </Typography>
                  <Button variant="solid" onClick={setLanguageToTurkish}>Set Language to Turkish</Button>
                  <Button variant="solid" onClick={toggleTheme}>Toggle Theme</Button>
               </Box>
            </TabPanel>
            <SampleTabBlock value={TabName.Plan}>
               <b>Plan</b> tab panel
            </SampleTabBlock>
            <TabPanel value={TabName.Team}>
               <b>Team</b> tab panel
            </TabPanel>
         </Tabs>
      </Box>
   );
};

export default Home;
