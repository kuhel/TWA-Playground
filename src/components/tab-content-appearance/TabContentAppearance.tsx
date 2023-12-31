import { useState, useMemo } from 'react';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

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

function createData(
   propertyTitle: string,
   placeholder: string,
   value: any,
   defaultValue: any,
   apiName: string,
   docLink: string,
   changeAction?: any,
   btnAction?: any,
   extraProps?: object,
 ) {
   return { propertyTitle, btnAction, changeAction, placeholder, value, defaultValue, apiName, docLink, extraProps };
}

const TabContentAppearance = () => {
   const [valueBgColor, setBgColorValue] = useState(WebApp.themeParams.bg_color);
   const [valueTextColor, setTextColorValue] = useState(WebApp.themeParams.text_color);


   const DocData = [
      createData(
         'bg_color',
         '#ffffff',
         valueBgColor,
         WebApp.themeParams.bg_color,
         'themeParams.bg_color',
         'https://core.telegram.org/bots/webapps#themeparams',
         (event: { target: { value: string; } }) => setBgColorValue(event.target.value as ThemeParams['bg_color']),
         () => WebApp.setBackgroundColor(valueBgColor),
      ),
      createData(
         'secondary_bg_color',
         '#ffffff',
         WebApp.themeParams.secondary_bg_color,
         WebApp.themeParams.secondary_bg_color,
         'themeParams.secondary_bg_color',
         'https://core.telegram.org/bots/webapps#themeparams',
      ),
      createData(
         'text_color',
         '#ffffff',
         WebApp.themeParams.text_color,
         WebApp.themeParams.text_color,
         'themeParams.text_color',
         'https://core.telegram.org/bots/webapps#themeparams',
      ),
      createData(
         'hint_color',
         '#ffffff',
         WebApp.themeParams.hint_color,
         WebApp.themeParams.hint_color,
         'themeParams.hint_color',
         'https://core.telegram.org/bots/webapps#themeparams',
      ),
      createData(
         'link_color',
         '#ffffff',
         WebApp.themeParams.link_color,
         WebApp.themeParams.link_color,
         'themeParams.link_color',
         'https://core.telegram.org/bots/webapps#themeparams',
      ),
      createData(
         'button_color',
         '#ffffff',
         WebApp.themeParams.button_color,
         WebApp.themeParams.button_color,
         'themeParams.button_color',
         'https://core.telegram.org/bots/webapps#themeparams',
      ),
      createData(
         'button_text_color',
         '#ffffff',
         WebApp.themeParams.button_text_color,
         WebApp.themeParams.button_text_color,
         'themeParams.button_text_color',
         'https://core.telegram.org/bots/webapps#themeparams',
      )
    ];

   return (
      <Box sx={{ width: '100%' }}>
         <Typography level="h1" textAlign="left" sx={{ pb: 2 }}>
            Appearance
         </Typography>
            <Box>
                  <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
                  <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                     <Typography level="h4" textAlign="left">
                        header_color
                     </Typography>
                  </FormLabel>
                  <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                     <FormControl sx={{ flex: 1 }}>
                        <FormLabel sx={{ display: { sm: 'none' } }}>
                           <Typography level="h4" textAlign="left">
                              header_color
                           </Typography>
                        </FormLabel>
                        <Select defaultValue="bg_color" onChange={(e, newValue) => {
                           if (newValue === 'secondary_bg_color') {
                              WebApp.setHeaderColor(WebApp.themeParams.secondary_bg_color);
                           } else {
                              WebApp.setHeaderColor(WebApp.themeParams.bg_color);
                           }
                        }}>
                           <Option value="bg_color">bg_color</Option>
                           <Option value="secondary_bg_color">secondary_bg_color</Option>
                        </Select>
                     </FormControl>
                     <Button
                        onClick={() => WebApp.openLink('https://core.telegram.org/bots/webapps#themeparams')}
                        startDecorator={<Launch fontSize="inherit" />}
                        variant='plain'
                        size='sm'
                        sx={{ mt: .5, ml: -1.5, fontWeight: 400 }}
                     >
                        themeParams.bg_color
                     </Button>
                  </Box>
               </Box>
         {DocData.map((row) => {
            const hasChangeAction = typeof row.changeAction !== 'undefined';
            return (
               <Box key={row.propertyTitle}>
                  <Divider role="presentation" sx={{ mt: 1, mb: 1 }} />
                  <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
                     <Typography level="h4" textAlign="left">
                        {row.propertyTitle}
                     </Typography>
                  </FormLabel>
                  <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
                     <FormControl sx={{ flex: 1 }}>
                        <FormLabel sx={{ display: { sm: 'none' } }}>
                           <Typography level="h4" textAlign="left">
                              {row.propertyTitle}
                           </Typography>
                        </FormLabel>
                        <Input
                           startDecorator={<CodeIcon />}
                           value={row.value}
                           onChange={(event) => {
                              if (hasChangeAction)
                              {
                                 row.changeAction(event);
                              }
                           }}
                           endDecorator={typeof row.btnAction !== 'undefined' ? <Button onClick={() => row.btnAction()}>Change</Button> : null}
                           placeholder={row.placeholder}
                           defaultValue={row.defaultValue}
                           disabled={!hasChangeAction}
                           variant={hasChangeAction ? 'outlined' : 'solid'}
                        />
                     </FormControl>
                     <Button
                        onClick={() => WebApp.openLink(row.docLink)}
                        startDecorator={<Launch fontSize="inherit" />}
                        variant='plain'
                        size='sm'
                        sx={{ mt: .5, ml: -1.5, fontWeight: 400 }}
                     >
                        {row.apiName}
                     </Button>
                  </Box>
               </Box>
            );
         })}
      </Box>
   );
};

export default TabContentAppearance;
