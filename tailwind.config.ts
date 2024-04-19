import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // NOTE: 본 템플릿은 대부분이 모노톤으로 이루어져 있습니다. primary 컬러만 수정하여 사용하시는 것을 권장드립니다.
      colors: {
        GRAY_LIGHT: "#f1f3f5",
        GRAY: "#adb5bd",
        GRAY_HEAVY: "#868e96",
        GRAY_EXTRAHEAVY: "#9a9ea4",
        BLACK: "#212529",
        /**
         * @description selection(드래그 블록)에 사용되는 컬러입니다.
         */
        PRIMARY_LIGHT: "#a466e5",

        /**
         * @description 자기소개의 이름 부분, code tag의 darkmode에 사용되는 컬러입니다.
         */
        PRIMARY: "#7d23d2",

        /**
         * @description code tag, link hover icon에 사용되는 컬러입니다.
         */
        PRIMARY_HEAVY: "#54128f",

        /**
         * @description 페이지 최상단 gradient의 시작 컬러입니다.
         */
        GRADIENT_FROM: "#e69bff",

        /**
         * @description 페이지 최상단 gradient의 종료 컬러입니다.
         */
        GRADIENT_TO: "#3b0c99",
      },
    },
  },
  plugins: [],
}
export default config
