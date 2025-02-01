import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        "box-border": "rgba(41,43,61,1)",
      },
      colors: {
        dark: " #0a0f21 ", //  #000000 0a0f21backgroundColor
        customBlue: "rgba(125,189,248,1)",
      },
      animation: {
        glideX: "glideX 10s linear infinite",
        glideY: "glideY 15s  linear infinite",
      },
      keyframes: {
        // X-axis box glide Animation

        glideX: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        // Y-axis box glide Animation

        glideY: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },

      // radial-gradient(55.5% 42.49% at 50% 45.95%,
      //   rgba(255,255,255,
      //   1)0%,
      //   rgba(18,213,245,
      //   0.9)6%,
      //   rgba(67,133,243,0.8)50%,
      //    rgba(0,0,0,0)100%)`,
      backgroundImage: {
        // grayish gradient for boxes
        "box-color":
          "linear-gradient(90deg,rgba(124,130,177,0.12),rgba(17,18,27,0))",
        // gradient text color
        "mixed-blue":
          " linear-gradient(90deg,rgba(54,55,160,1),rgba(9,198,222,1),rgba(70,3,137,1))",
        // glowing dark bg
        "glowing-dark": `radial-gradient(95.5% 70.49% at 50% 40.95%,  
        rgba(255,255,255,0.1)0%, 
        rgba(10,10,10,0.4)20%, 
        rgba(0,0,0,0.3)100%,#0a0a0a )
        
        `,
        //  clients box background
        "client-box": "linear-gradient(rgba(34,34,34,1),rgba(34,34,34,1))",
        // background grid pattern lines
        "grid-pattern": `linear-gradient(to right,rgba(255,255,255,0.1)0px,transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.1)0px, transparent 2px)
        `,
        // colorful glowing bg
        "radial-glow": `radial-gradient( 45.5% 15.49% at 50% 40.95%, rgba(18,213,245,0.61)0%, 
        rgba(67,133,243,0.41)10%,
        rgba(0,0,0,0)100%
        )`,
        // lit  bg
        "lit-bg": `radial-gradient( 50.7% 50.49% at 50% 40.85%, rgba(18,213,245,0.61)8%, 
         rgba(0,0,2,50.1)35%,
         rgba(0,0,0,0.5)60%,
         rgba(0,0,0,0.5)100%
         )`,
        "footer-glow": `radial-gradient( 50.7% 50.39% at 50% 10.85%, rgba(18,213,245,0.61)8%, 
         rgba(0,0,2,50.1)35%,
         rgba(0,0,0,0.5)70%,
         rgba(0,0,0,0.5)100%
         )`,
        //  67,133,243,0.41
        // circle at   center ,
        //  30.7% 15.49% at 50% 30.85%
      },
      backgroundSize: {
        "grid-size": "35px 35px", //grid spacing
      },
      backgroundBlendMode: {
        screen: "screen",
      },
      textShadow: {
        glow: "0px 0px 15px rgba(0,212,255,0.8)", //  glowing text shadow
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          ".gradient-text": {
            backgroundImage: "var(--tw-gradient-stops)",
            "-webkitBackgroundClip": "text",
            "-webkitTextFillColor": "transparent",
          },
          ".text-shadow-glow": {
            textShadow: "0px 0px 15px rgba(0,212,255,0.8)",
          },
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    // require('tailwindcss-textshadow'),
  ],
} satisfies Config;
