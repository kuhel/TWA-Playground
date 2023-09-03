function loadColors(colors: Record<string, string>) {
   const colorNames = Object.keys(colors);
   colorNames.forEach((colorName: string) => {
      const sheet = document.styleSheets[0];
      const rules = sheet.cssRules[0] as CSSStyleRule;

      rules.style.setProperty(colorName, colors[colorName]);
   });
}

export default loadColors;
