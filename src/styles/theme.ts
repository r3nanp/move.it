export const themes = {
  light: {
    bg: '#f2f3f5',
    white: '#fff',
    text: '#666',
    title: '#2e384d',
    red: '#e83f58',
    green: '#4cd62b',
    blue: '#5965e0',
    border: '#f0f1f3',
    'gray-line': '#dcdde0',
    'text-highlight': '#b3b9ff',
    'blue-dark': '#4953b8',
    'blue-twitter': '#2aa9e0',
    'failed-button': '#FFF5F5',
    'completed-button': '#F7FFF5'
  },
  dark: {
    bg: '#121214',
    white: '#29292e',
    red: '#e83f58',
    text: '#e1e1e6',
    title: '#d1d2d3',
    green: '#4cd62b',
    blue: '#5965e0',
    border: '#202024',
    'gray-line': '#dcdde0',
    'text-highlight': '#b3b9ff',
    'blue-dark': '#4953b8',
    'blue-twitter': '#2aa9e0',
    'failed-button': '#FFF5F5',
    'completed-button': '#F7FFF5'
  }
}

export type ThemeName = keyof typeof themes
export type ThemeType = typeof themes.light | typeof themes.dark
