import { useState } from 'react';

import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';

import Launch from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';

import WebApp from '@twa-dev/sdk';

interface ThemeParams {
   bg_color: `#${string}`;
   secondary_bg_color: `#${string}`;
   text_color: `#${string}`;
   hint_color: `#${string}`;
   link_color: `#${string}`;
   button_color: `#${string}`;
   button_text_color: `#${string}`;
}

const TabContentAppearance = () => {
   const [valueBgColor, setBgColorValue] = useState(WebApp.themeParams.bg_color);
   const [valueTextColor, setTextColorValue] = useState(WebApp.themeParams.text_color);

   return (
      <Box sx={{ width: '100%' }}>
         <Typography level="h3" textAlign="left" sx={{ pb: 2 }}>
            Appearance
         </Typography>
         <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>bg_color</FormLabel>
         <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
               <FormLabel sx={{ display: { sm: 'none' } }}>bg_color</FormLabel>
               <Input
                  startDecorator={<CodeIcon />}
                  value={valueBgColor}
                  onChange={({ target: { value } }) =>
                     setBgColorValue(value as ThemeParams['bg_color'])
                  }
                  endDecorator={
                     <Button onClick={() => WebApp.setBackgroundColor(valueBgColor)}>Change</Button>
                  }
                  placeholder="#ffffff"
                  defaultValue={WebApp.themeParams.bg_color}
               />
            </FormControl>
            <Link
               href="https://core.telegram.org/bots/webapps#themeparams"
               startDecorator={<Launch fontSize="inherit" />}
               sx={{ mt: 1.5, mb: 1 }}
               level="body-sm"
               underline="always"
            >
               Doc
            </Link>
         </Box>
         <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />

         <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>text_color</FormLabel>
         <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
               <FormLabel sx={{ display: { sm: 'none' } }}>text_color</FormLabel>
               <Input
                  startDecorator={<CodeIcon />}
                  value={valueTextColor}
                  onChange={({ target: { value } }) =>
                     setTextColorValue(value as ThemeParams['text_color'])
                  }
                  placeholder="#ffffff"
                  defaultValue={WebApp.themeParams.bg_color}
               />
            </FormControl>
            <Link
               href="https://core.telegram.org/bots/webapps#themeparams"
               startDecorator={<Launch fontSize="inherit" />}
               sx={{ mt: 1.5, mb: 1 }}
               level="body-sm"
               underline="always"
            >
               Doc
            </Link>
         </Box>
         <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
      </Box>
   );
};

export default TabContentAppearance;
