export const siteUrl = 'https://eric.irish'
export const contactEmail = 'hello@eric.irish'

export const identity = {
  name: 'Eric Irish',
  givenName: 'Eric',
  familyName: 'Irish',
  location: 'Austin, Texas',
  locality: 'Austin',
  region: 'TX',
  country: 'US',
  linkedin: 'https://www.linkedin.com/in/ecirish',
  github: 'https://github.com/ericirish',
  portrait: `${siteUrl}/EricIrish.jpg`,
  portraitAlt: 'Eric Irish in a cowboy hat, suede jacket, and a Texas belt buckle',
  portraitCaption: 'That’s me. Not an AI photo.'
} as const

export const seo = {
  title: 'Eric Irish — Yes, AI can do real work in your business. I’m the guy who actually builds it.',
  description:
    'I embed with how your business already runs and build invisible AI — the right information in front of the right person, no prompt. Seventeen years in startups and ops software. Plain talk on where it helps and where it doesn’t.',
  ogTitle: 'Yes, AI can do real work in your business. I’m the guy who actually builds it.',
  ogDescription:
    'Hands-on AI transformation: embedded in your processes, not a chat bubble on your homepage. One person, seventeen years, Austin TX.'
} as const

export const headline = {
  before: 'Yes, AI can do real work in your business. ',
  emphasis: 'I’m the guy who actually ',
  scribble: 'builds it.'
} as const

export const lede =
  'I embed with how you already work — invisible AI that puts the answer in front of the right person before anyone has to ask. Seventeen years in startups and the systems behind them. I’ll tell you plainly where that earns its keep and where it doesn’t. No snake oil.'

export const headerLine = 'Invisible AI · embedded in your process'

export const footer = {
  hello: 'Say hello.',
  note: 'Tell me what’s broken in your week. I’ll tell you if AI can help.',
  signoff: 'You talk to me, not a team.'
} as const

export const stats = [
  { label: 'Years building this stuff', from: 0, to: 17, note: 'since 2009' },
  { label: 'People you’ll deal with', from: 12, to: 1, note: 'no handoffs' },
  { label: 'Strategy decks before code', from: 40, to: 0, note: 'on purpose' }
] as const

export const pitched = [
  'Months of “discovery” before anything changes',
  'To “optimize you for ChatGPT”',
  'Software that only works if someone asks it a question',
  'A monthly report full of charts',
  'A year-long contract before anything gets built'
] as const

export const actuallyHelps = [
  'Someone embedded long enough to learn how the week actually runs',
  'The facts your people keep in their heads — written where the system can use them',
  'The stuff you do by hand every day — quotes, bookings, follow-ups — turned into a flow',
  'Invisible AI on that flow: the answer already on screen, nobody typing a prompt',
  'One person you can call who will tell you no'
] as const

export const wallet = {
  lead: 'AI can’t invent a process you never had. ',
  emphasis: 'If they can’t name the step in your week they’d change — the handoff, the check, the quote — ',
  scribble: 'keep your wallet closed.'
} as const

export const thesis = {
  heading: 'Good AI is invisible. You shouldn’t have to chat with it.',
  body: 'The wrong move is making your people ask for information they should already have. “Talk to your business.” That’s a prompt where a screen should have been enough.',
  closeLead: 'You don’t need a chatbot. ',
  closeEmphasis:
    'You need the right thing in front of the right person at the right time — already there, no prompt. Then they get back to the customer.'
} as const

export const thesisSold = [
  'A chat window so someone can “ask the system”',
  'A box where your staff has to prompt a robot for last week’s numbers',
  'A wrapper on your data that still needs a conversation',
  'A demo that looks smart until someone asks a real question'
] as const

export const thesisRight = [
  'The quote is already drafted when they sit down',
  'The booking is already on the calendar',
  'The number they needed is already on the screen',
  'Nobody typed a prompt. The work just showed up.'
] as const

export const offers = [
  {
    n: '01',
    glyph: 'lasso',
    title: 'One job off your plate',
    body: 'Quotes, bookings, follow-ups, the questions people call you about. I turn that one job into a system. AI only when it earns its keep on that job.',
    good: 'One thing on your week that’s eating you.',
    ends: 'That job runs. You don’t hover.'
  },
  {
    n: '02',
    glyph: 'gears',
    title: 'Embed in how you operate',
    body: 'I work inside your process — quoting, booking, dispatch, compliance rounds, whatever actually runs the week — and wire it so information shows up where people already are. Not a side project. Not a new tool they have to remember to open.',
    good: 'Smart people repeating the same steps every morning.',
    ends: 'The flow runs. The answer was already there.'
  },
  {
    n: '03',
    glyph: 'flow',
    title: 'Invisible AI on real work',
    body: 'The inbox, the spreadsheet, the handoff between teams — that’s where the mess is. I plug AI into those moments so your people get what they need without interviewing a chatbot.',
    good: 'You know what should be automatic. Nobody’s had time to build it.',
    ends: 'Information delivered. No prompt.'
  },
  {
    n: '04',
    glyph: 'badge',
    title: 'Keep me around',
    body: 'After the build, I stick around part-time. When the next vendor pitch lands, I’ll tell you if it’s real work or theater. When something should be automated, I build it. When it shouldn’t, I say so.',
    good: 'After a big operational push, or a team with nobody technical.',
    ends: 'It doesn’t. That’s the point.'
  }
] as const

export const about =
  'I’ve been building since 2009 — startups, companies, the ops software people actually touch. Agency years in the middle, then on my own in Austin. The hat is not a bit. Neither is the work. I embed, I ship, and I build AI that stays out of the way — the thesis, not a sticker on a marketing site.'

export const timeline = [
  ['2009 — now', 'Building', 'Startups, companies, and the software that runs them.'],
  ['2015 — 2019', 'At an agency', 'Same job, more meetings.'],
  ['2019 — now', 'On my own', 'One person, no account manager. DoorCheck along the way.']
] as const

export const rules = [
  'I start with the work that’s eating your week — not a deck about “AI strategy.”',
  'I won’t make your team prompt a robot for numbers they already needed on screen.',
  'I won’t hand you a plan I can’t build myself.',
  'I won’t hand you buzzwords when you needed working software.'
] as const

export const caseStudies = {
  helloFrom: {
    name: 'HelloFrom',
    url: 'https://hellofrom.to',
    kicker: 'Case study · HelloFrom',
    summary:
      'A postcard company. A guest scans a code at the counter, writes a note on their phone, and HelloFrom prints it and mails it. Nothing for the place to stock.',
    helped:
      'The postcards were already working. They needed the next account without another hire. I wired agents into prospecting — find the place, write the note, style the card — invisible work, not another tool to log into.',
    steps: [
      { n: '01', title: 'Finds the place', body: 'Research and photos. No spreadsheet, no list to work through.' },
      { n: '02', title: 'Writes the note', body: 'First person, in their voice, about that one specific place.' },
      { n: '03', title: 'Styles the card', body: 'Photo, layout, the look of the thing. No designer in the queue.' }
    ],
    then: { title: 'A person hits send.', body: 'That part stays human. On purpose.' },
    linkLabel: 'hellofrom.to',
    footnote: 'Their team still approves. The machine does the first pass.'
  },
  firstToSite: {
    name: 'FirstToSite',
    url: 'https://austin.firsttosite.com',
    kicker: 'Case study · FirstToSite',
    display: 'New permits, alerted to you first.',
    summary:
      'Every Austin municipal permit, scored by trade, scope, and scale. A contractor sets an alert. The match arrives. They reach the job before the crowd.',
    helped:
      'They already had the permit feed. They needed the right job in a contractor’s pocket, not a spreadsheet hunt. I helped them plug in Jev — trade, scope, scale the moment each filing lands. No prompt. No chat widget.',
    next: 'Next with them: automated prospecting — same invisible stack, pointed at who’s worth calling before the crowd shows up.',
    steps: [
      { n: '01', title: 'Reads the permit', body: 'Every Austin filing, the morning it drops. No one is hunting the city’s website.' },
      { n: '02', title: 'Jev classifies it', body: 'Instant. Trade, scope, scale. A roof is not a remodel. No one typed a prompt.' },
      { n: '03', title: 'Sends the alert', body: 'Email or text. Address, what it is, how big. Already in their pocket.' }
    ],
    then: { title: 'They call first.', body: 'That part stays human. On purpose.' },
    linkLabel: 'austin.firsttosite.com',
    footnote: 'Jev scores the permit. The contractor gets the match.'
  },
  schoolCheck: {
    name: 'SchoolCheck',
    url: 'https://schoolcheck.app',
    kicker: 'Case study · SchoolCheck',
    display: 'Checks-first for K-12. Know the round happened.',
    summary:
      'Doors, AEDs, extinguishers, emergency phones — checks for the morning walk, inspections when leaders need audit-ready depth. When something fails, tags and routing should already be right from what staff wrote.',
    helped:
      'They run safety operations across every campus. I helped them put Jev on finding classification — issue summary in, catalog tags out — plus the hooks into notifications and records so nobody re-labels the same latch in a spreadsheet.',
    steps: [
      { n: '01', title: 'Run the check', body: 'One question at the door, AED, or gate. Seconds — finish before the bell.' },
      { n: '02', title: 'Jev tags it', body: 'Issue summary → the district’s tag catalog. Phrase match if Jev is offline.' },
      { n: '03', title: 'Record sticks', body: 'Open finding, notifications, audit trail — every asset type, same platform.' }
    ],
    then: { title: 'Staff fix it.', body: 'That part stays human. On purpose.' },
    linkLabel: 'schoolcheck.app',
    footnote: 'One tap on the check. Tags on the finding. Proof for the district.'
  }
} as const

export const proofHeading = 'Real companies, real AI transformation — not a slide deck.'

export const machinePaths = {
  llms: '/llms.txt',
  llmsFull: '/llms-full.txt',
  markdown: '/index.md',
  robots: '/robots.txt',
  sitemap: '/sitemap.xml',
  wellKnown: '/.well-known/llm-context'
} as const
