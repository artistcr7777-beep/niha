type BirthdayHighlight = { title: string; message: string; photo?: string }

const highlights: BirthdayHighlight[] = [
  {
    title: 'Janamdin Mubarak Ho Par Heal Dediya karo -_-',
    message: 'Happy Birthday, Niharika!',
  },
  {
    title: 'The year ahead',
    message: 'Wishing you a beautiful year ahead.',
  },
]

export const birthday = {
  name: 'Niharika',
  musicUrl: '',
  birthdayNote: 'A little celebration, made just for today.',
  memories: highlights,
  capsules: [
    'You deserve all the happiness in the world.',
    'Make a wish.',
    'Here’s to your next beautiful chapter.',
    'Today is all about you. Heal dediya karo :3 plz',
  ],
  letter: [
    'Happy Birthday, Niharika!',
    'I play the Better Sage vro just gemme a chance 😎(nah u better).',
    'Wishing you a beautiful year ahead. 🌟✨💫',
    'Merko painting aur charcoal shading Kab sikhaoge aap 🥹',
    'Ab m toh hu gareeb kuch college m sikhe hue m se hi banake gift kr skta hu😓. Hope u Loved it :/ Once again Happy Birthday',
  ],
}

export const chapters = [
  'Welcome', 'Birthday wishes', 'Good things ahead', 'Pick a style',
  'A few highlights', 'Birthday notes', 'Make a wish', 'A few words', 'The end',
]

export const hopes = [
  { title: 'Happiness', text: 'More moments that make you smile.', symbol: 'flower' },
  { title: 'Warmth', text: 'Good company, and time that feels unhurried.', symbol: 'sun' },
  { title: 'Wonder', text: 'Little surprises, kept just for you.', symbol: 'sparkles' },
  { title: 'Kindness', text: 'A year that meets you gently.', symbol: 'sparkles' },
  { title: 'Confidence', text: 'A beautiful year, unfolding at your pace.', symbol: 'ribbon' },
]

export const routes = [
  { title: 'A little calm', text: 'Make room for moments that help you slow down.', detail: 'A quiet hour, a favorite song, and time to breathe.', symbol: 'flower' },
  { title: 'A little fun', text: 'Make time for things that bring you joy.', detail: 'Spend the day with whatever makes you light up.', symbol: 'sun' },
  { title: 'Something new', text: 'A year to try one new thing you have been curious about.', detail: 'Take it at your own pace, and enjoy the surprise.', symbol: 'sparkles' },
  { title: 'Music and art', text: 'Make time for the music and art you enjoy.', detail: 'A song, a color, a page — whatever feels like yours.', symbol: 'ribbon' },
]

export const wishes = [
  'May you have more reasons to smile.',
  'May your bad days become shorter.',
  'May your best memories still be ahead of you.',
  'May you meet wonderful people.',
  'May you keep what makes you, you.',
  'May your dreams get a little closer.',
  'May you laugh until it feels easy.',
  'May you have a few spontaneous joys.',
  'May you find things that inspire you.',
  'May you feel sure of yourself.',
  'May you have moments you are proud of.',
  'May this year surprise you kindly.',
  'May you always have someone to talk to.',
  'May you create memories worth keeping.',
  'May you never underestimate yourself.',
  'May this year treat you kindly.',
  'May good things find you easily.',
  'May you enjoy every new experience.',
  'May the next chapter feel exciting.',
  'Here’s to your next beautiful chapter.',
]
export const number = (value: number) => String(value).padStart(2, '0')
