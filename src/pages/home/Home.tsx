import { useEffect } from 'react';

import i18n from 'common/language/i18n';

import useTheme from 'hooks/useTheme';

import { TabName } from 'store/slices/appSlice';

import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';

import SampleTabBlock from 'components/sample-tab-block/SampleTabBlock';
import TabContentAppearance from 'components/tab-content-appearance/TabContentAppearance';
import TabContentPopUp from 'components/tab-content-popup/TabContentPopUp';
import TabContentAppData from 'components/tab-content-app-data/TabContentAppData';

import WebApp from '@twa-dev/sdk';

const Home = () => {
   const { toggleTheme } = useTheme();

   useEffect(() => {
      WebApp.ready();
   }, []);

   return (
      <Box>
         <Typography level="h4" component="h1">
            {i18n.t('greeting')}
         </Typography>
         <Tabs aria-label="tabs" defaultValue={TabName.Appearance} sx={{ bgcolor: 'transparent' }}>
            <TabList
               sticky="top"
               variant="plain"
               sx={(theme) => ({
                  '--ListItem-minHeight': '48px',
                  top: 'calc(-1 * (var(--main-paddingTop, 0px) - var(--Header-height, 0px)))',
                  zIndex: 10,
                  width: '100%',
                  overflow: 'auto hidden',
                  alignSelf: 'flex-start',
                  scrollSnapType: 'inline',
                  '&::after': {
                     pointerEvents: 'none',
                     display: { xs: 'block', sm: 'none' },
                     content: '""',
                     position: 'absolute',
                     top: 0,
                     width: 40,
                     flex: 'none',
                     zIndex: 1,
                     right: 0,
                     borderBottom: '1px solid transparent',
                     background: `linear-gradient(to left, ${theme.vars.palette.background.body}, rgb(0 0 0 / 0))`,
                     backgroundClip: 'content-box',
                  },
                  '&::-webkit-scrollbar': {
                     width: 0,
                     display: 'none',
                  },
                  [`& .${tabClasses.root}`]: {
                     '--focus-outline-offset': '-2px',
                     paddingLeft: '10px',
                     paddingRight: '10px',
                     '&:first-of-type': {
                        ml: 'calc(-10px)',
                     },
                     scrollSnapAlign: 'start',
                     bgcolor: 'transparent',
                     flex: 'none',
                     '&:hover': {
                        bgcolor: 'transparent',
                     },
                     [`&.${tabClasses.selected}`]: {
                        color: 'primary.plainColor',
                        bgcolor: 'transparent',
                        borderBottom: `1px solid ${theme.vars.palette.primary[500]}`,
                     },
                  },
               })}
            >
               <Tab disableIndicator value={TabName.Appearance}>
                  {TabName.Appearance}
               </Tab>
               <Tab disableIndicator value={TabName.Popup}>
                   {TabName.Popup}
               </Tab>
                <Tab disableIndicator value={TabName.App_Data}>
                    {TabName.App_Data}
                </Tab>
               <Tab disableIndicator value={TabName.Buttons}>
                  Buttons
               </Tab>
               <Tab disableIndicator value={TabName.Haptic}>
                  Haptic
               </Tab>
               <Tab disableIndicator value={TabName.User_Data}>
                  User Data
               </Tab>
               <Tab disableIndicator value={TabName.Chat_Data}>
                  Chat Data
               </Tab>
               <Tab disableIndicator value={TabName.Events}>
                  Events
               </Tab>
               <Tab disableIndicator value={TabName.Security}>
                  Security
               </Tab>
            </TabList>
            <SampleTabBlock value={TabName.Appearance}>
               <TabContentAppearance />
            </SampleTabBlock>
            <SampleTabBlock value={TabName.Popup}>
              <TabContentPopUp />
            </SampleTabBlock>
            <TabPanel value={TabName.App_Data}>
                <TabContentAppData />
            </TabPanel>
         </Tabs>
      </Box>
   );
};

export default Home;
