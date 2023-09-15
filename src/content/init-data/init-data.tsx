import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import WebApp from '@twa-dev/sdk';

const InitData = () => {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [viewport, setViewport] = useState({
        viewportHeight: WebApp.viewportHeight,
        viewportStableHeight: WebApp.viewportStableHeight,
    });

    const handleViewportChanged = useCallback((event: { isStateStable: boolean; }) => {
        if (event.isStateStable) {
            WebApp.showAlert('Resizing is finished');
            setViewport({
                viewportHeight: WebApp.viewportHeight,
                viewportStableHeight: WebApp.viewportStableHeight,
            });
        }
    }, []);

    useEffect(() => {
        WebApp.onEvent('viewportChanged', handleViewportChanged);

    }, [handleViewportChanged]);

    return (
        <Box
            sx={{
                width: 320,
                pl: '24px',
            }}
        >
            <List
                size="sm"
                sx={(theme) => ({
                    '--joy-palette-primary-plainColor': '#8a4baf',
                    '--joy-palette-neutral-plainHoverBg': 'transparent',
                    '--joy-palette-neutral-plainActiveBg': 'transparent',
                    '--joy-palette-primary-plainHoverBg': 'transparent',
                    '--joy-palette-primary-plainActiveBg': 'transparent',
                    [theme.getColorSchemeSelector('dark')]: {
                        '--joy-palette-text-secondary': '#635e69',
                        '--joy-palette-primary-plainColor': '#d48cff',
                    },

                    '--List-insetStart': '0px',
                    '--ListItem-paddingY': '0px',
                    '--ListItem-paddingRight': '16px',
                    '--ListItem-paddingLeft': '21px',
                    '--ListItem-startActionWidth': '0px',
                    '--ListItem-startActionTranslateX': '-50%',

                    [`& .${listItemButtonClasses.root}`]: {
                        borderLeftColor: 'divider',
                    },
                    [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                        borderLeftColor: 'currentColor',
                    },
                    '& [class*="startAction"]': {
                        color: 'var(--joy-palette-text-tertiary)',
                    },
                })}
            >
                <ListItem
                    nested
                    sx={{ my: 1 }}
                    startAction={
                        <IconButton
                            variant="plain"
                            size="sm"
                            color="neutral"
                            onClick={() => setOpen(!open)}
                        >
                            <KeyboardArrowDown
                                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                            />
                        </IconButton>
                    }
                >
                    <ListItem>
                        <Typography
                            level="inherit"
                            sx={{
                                fontWeight: 'bold',
                                color: open ? 'text.primary' : 'inherit',
                            }}
                        >
                            App Data
                        </Typography>
                    </ListItem>
                    {open && (
                        <List sx={{ '--ListItem-paddingY': '8px' }}>
                            <ListItem>
                                <Typography level="inherit">Version: </Typography>
                                <Typography component="span" level="body-xs" sx={{ ml: 1 }}>
                                    {WebApp.version}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level="inherit">Platform: </Typography>
                                <Typography component="span" level="body-sm" sx={{ ml: 1 }}>
                                    {WebApp.platform}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level="inherit">Color Scheme: </Typography>
                                <Typography component="span" level="body-sm" sx={{ ml: 1 }}>
                                    {WebApp.colorScheme}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level="inherit">Is Expanded?: </Typography>
                                <Typography component="span" level="body-sm" sx={{ ml: 1 }}>
                                    {WebApp.isExpanded ? 'true' : 'false'}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level="inherit">Viewport Height: </Typography>
                                <Typography component="span" level="body-sm" sx={{ ml: 1 }}>
                                    {viewport.viewportHeight}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography level="inherit">Viewport Stable Height: </Typography>
                                <Typography component="span" level="body-sm" sx={{ ml: 1 }}>
                                    {viewport.viewportStableHeight}
                                </Typography>
                            </ListItem>
                        </List>
                    )}
                </ListItem>
                <ListItem
                    nested
                    sx={{ my: 1 }}
                    startAction={
                        <IconButton
                            variant="plain"
                            size="sm"
                            color="neutral"
                            onClick={() => setOpen2((bool) => !bool)}
                        >
                            <KeyboardArrowDown
                                sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
                            />
                        </IconButton>
                    }
                >
                    <ListItem>
                        <Typography
                            level="inherit"
                            sx={{
                                fontWeight: 'bold',
                                color: open2 ? 'text.primary' : 'inherit',
                            }}
                        >
                            Init Data
                        </Typography>
                    </ListItem>
                    {open2 && (
                        <List sx={{ '--ListItem-paddingY': '8px' }}>
                            <ListItem>
                                <pre style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word',maxWidth: '100%'}}>{WebApp.initData}</pre>
                            </ListItem>
                        </List>
                    )}
                </ListItem>
            </List>
        </Box>
    );
}

export default InitData;
