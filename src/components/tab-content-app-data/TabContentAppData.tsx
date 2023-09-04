import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import InitData from '../../content/init-data/init-data';

const TabContentAppData = () => {

   return (
      <Box sx={{ width: '100%' }}>
         <Typography level="h1" textAlign="left" sx={{ pb: 2 }}>
            App Data
         </Typography>
        <Box>
            <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
            <InitData />
        </Box>
      </Box>
   );
};

export default TabContentAppData;
