import { Box } from '@mui/joy';
import WebApp from '@twa-dev/sdk'


const TabContentAppearance = () => {
   return <Box>
      Appearance
      <Box>
         Current bg_color: {WebApp.themeParams.bg_color}
      </Box>
   </Box>;
};

export default TabContentAppearance;
