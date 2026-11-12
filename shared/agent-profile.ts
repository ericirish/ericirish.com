import {
  about,
  actuallyHelps,
  caseStudies,
  companies,
  contactEmail,
  experience,
  experienceIntro,
  experienceSeo,
  footer,
  github,
  headline,
  identity,
  lede,
  machinePaths,
  offers,
  pitched,
  proofHeading,
  rules,
  seo,
  shareImages,
  siteUrl,
  stacks,
  stats,
  thesis,
  thesisRight,
  thesisSold,
  timeline,
  wallet
} from './site'

const headlineText = `${headline.before}${headline.emphasis}${headline.scribble}`

function generatedOn() {
  return new Date().toISOString().slice(0, 10)
}

function abs(path: string) {
  return `${siteUrl}${path}`
}

export function llmsTxt() {
  const studies = Object.values(caseStudies)
  return `# ${identity.name}

> ${identity.name} builds invisible AI for real business operations from ${identity.location}. He embeds in how a company already works and puts the right information in front of the right person before anyone has to ask. One person, building since 2009. Contact ${contactEmail}. Canonical site: ${siteUrl}/

${identity.name} (${siteUrl}/) is an independent builder in ${identity.location}, United States. He has been building startups, companies, and the software that runs them since 2009. He built CampusSafe from 2012 to 2015. From 2016 to 2019 he was a solutions architect at Springbox, a Prophet company. From February 2019 to October 2024 he was a solutions architect at Kordami. He is a principal solutions architect at Kale Ventures (since February 2020) and Frank & Victor (since April 2024), and founder of SchoolCheck, formerly DoorCheck, since February 2024. The site names DoorCheck only as the former name of SchoolCheck. It does not describe the earlier product. ${abs(machinePaths.experience)} is the role list.

In his words: ${lede}

He will not sell a chatbot, months of discovery before anything changes, a plan he cannot build himself, or a year-long contract before anything is built. Fees are not published. The way to reach him is ${contactEmail}, with a note about what is broken in the week.

Published identity: ${identity.name}. Site ${siteUrl}/. Email ${contactEmail}. Location ${identity.location}. LinkedIn ${identity.linkedin}. GitHub ${identity.github}. Portrait ${identity.portrait} — ${identity.portraitAlt}. ${identity.portraitCaption}

Generated ${generatedOn()} from the pages on ${siteUrl}/.

## Start here

- [Full context](${abs(machinePaths.llmsFull)}): Offers, house rules, track record, and the HelloFrom, FirstToSite, and SchoolCheck work.
- [Homepage](${siteUrl}/): The page this file describes.
- [Homepage in Markdown](${abs(machinePaths.markdown)}): The same page, without the layout.
- [Experience](${abs(machinePaths.experience)}): Roles since 2009, the companies on this site, and the stack he ships with.
- [Experience in Markdown](${abs(machinePaths.experienceMarkdown)}): The same page, without the layout.

## Ways to work with him

${offers.map(offer => `- [${offer.title}](${siteUrl}/#offer): ${offer.body} Good if you have: ${offer.good} Ends with: ${offer.ends}`).join('\n')}

## Optional

- [Portrait](${identity.portrait}): ${identity.portraitAlt}. ${identity.portraitCaption}
${studies.map(study => `- [${study.name}](${study.url}): ${'display' in study ? `${study.display} ` : ''}${study.summary}`).join('\n')}
- [LinkedIn](${identity.linkedin}): ${identity.name} on LinkedIn.
- [GitHub](${identity.github}): ${identity.name} on GitHub.
`
}

export function pageMarkdown() {
  const hello = caseStudies.helloFrom
  const first = caseStudies.firstToSite
  const school = caseStudies.schoolCheck

  return `# ${headlineText}

${identity.name}. ${identity.location}. Seventeen years. One person.

${lede}

${stats.map(stat => `- ${stat.label}: ${stat.to} (${stat.note})`).join('\n')}

## What you’re usually pitched

${pitched.map(item => `- ${item}`).join('\n')}

## What actually helps your business

${actuallyHelps.map(item => `- ${item}`).join('\n')}

${wallet.lead}${wallet.emphasis}${wallet.scribble}

## ${thesis.heading}

${thesis.body}

What they sell:

${thesisSold.map(item => `- ${item}`).join('\n')}

When it’s done right:

${thesisRight.map(item => `- ${item}`).join('\n')}

${thesis.closeLead}${thesis.closeEmphasis}

## Ways to work with me

${offers.map(offer => `### ${offer.n} — ${offer.title}

${offer.body}

- Good if you have: ${offer.good}
- Ends with: ${offer.ends}`).join('\n\n')}

## Who’s this guy

${about}

${timeline.map(([when, role, note]) => `- ${when} — ${role}. ${note}`).join('\n')}

House rules:

${rules.map(rule => `- ${rule}`).join('\n')}

## ${proofHeading}

### ${hello.name}

${hello.url}

${hello.summary}

${hello.helped}

${hello.steps.map(step => `- ${step.title}: ${step.body}`).join('\n')}
- ${hello.then.title} ${hello.then.body}

${hello.footnote}

### ${first.name}

${first.url}

${first.display} ${first.summary}

${first.helped}

${first.steps.map(step => `- ${step.title}: ${step.body}`).join('\n')}
- ${first.then.title} ${first.then.body}

${first.next}

${first.footnote}

### ${school.name}

${school.url}

${school.display} ${school.summary}

${school.helped}

${school.steps.map(step => `- ${step.title}: ${step.body}`).join('\n')}
- ${school.then.title} ${school.then.body}

${school.footnote}

## Contact

${footer.hello} ${footer.note}

- Email: ${contactEmail}
- Location: ${identity.location}
- LinkedIn: ${identity.linkedin}
- GitHub: ${identity.github}
- ${footer.signoff}
`
}

export function experienceMarkdown() {
  const roles = experience.map(role => {
    const org = role.org ? ` ${role.org}.` : ''
    const note = role.note ? ` ${role.note}` : ''
    return `- ${role.when} — ${role.title}.${org}${note}`
  })

  return `# ${experienceIntro.headline}

${identity.name}. ${experienceIntro.lede}

## The work

${roles.join('\n')}

## Notable companies

${companies.map(company => {
    const label = company.url ? `[${company.name}](${company.url})` : company.name
    return company.note ? `- ${label}: ${company.note}` : `- ${label}`
  }).join('\n')}

## Preferred stack

${github.line}

${stacks.map(group => `### ${group.label}

${group.items.join(', ')}

${group.note}`).join('\n\n')}

## Contact

- Email: ${contactEmail}
- Location: ${identity.location}
- Page: ${abs(machinePaths.experience)}
`
}

export function llmsFullTxt() {
  return `# ${identity.name} — full context

This is the long version of ${abs(machinePaths.llms)}. It restates ${siteUrl}/ and ${abs(machinePaths.experience)} in Markdown. Prefer the short file when a few paragraphs are enough.

${pageMarkdown()}

${experienceMarkdown()}`
}

export function robotsTxt() {
  return `# ${siteUrl}/
# Published to be crawled, quoted, and used as model input, including training.
# Same preference as Content-Signal. Applies to GPTBot, OAI-SearchBot, ChatGPT-User,
# ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Googlebot, Applebot,
# Applebot-Extended, PerplexityBot, Perplexity-User, CCBot, Bytespider,
# meta-externalagent, Amazonbot, Bingbot, and every other agent.

User-agent: *
Allow: /
Content-Signal: search=yes, ai-input=yes, ai-train=yes

Sitemap: ${abs(machinePaths.sitemap)}
LLM-Context: ${abs(machinePaths.llms)}
`
}

export function sitemapXml(updated: string) {
  const urls = [`${siteUrl}/`, abs(machinePaths.experience)]

  const body = urls.map(loc => `  <url>
    <loc>${loc}</loc>
    <lastmod>${updated}</lastmod>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`
}

export type JsonLdPage = 'home' | 'experience'

const ids = {
  website: `${siteUrl}/#website`,
  person: `${siteUrl}/#eric`,
  business: `${siteUrl}/#business`,
  portrait: `${siteUrl}/#portrait`,
  home: `${siteUrl}/#page`,
  experience: `${siteUrl}/experience#page`,
  experienceBreadcrumb: `${siteUrl}/experience#breadcrumb`,
  schoolCheck: `${siteUrl}/#org-schoolcheck`,
  campusSafe: `${siteUrl}/#org-campussafe`
}

const address = {
  '@type': 'PostalAddress',
  addressLocality: identity.locality,
  addressRegion: identity.region,
  addressCountry: identity.country
}

// Austin first; engagements are not limited to it.
const areaServed = [
  { '@type': 'City', name: 'Austin', containedInPlace: { '@type': 'State', name: 'Texas' } },
  { '@type': 'Country', name: 'United States' }
]

const foundedOrgs: Record<string, string> = {
  SchoolCheck: ids.schoolCheck,
  CampusSafe: ids.campusSafe
}

function sharedNodes() {
  const hello = caseStudies.helloFrom
  const first = caseStudies.firstToSite
  const school = caseStudies.schoolCheck

  return [
    {
      '@type': 'WebSite',
      '@id': ids.website,
      url: `${siteUrl}/`,
      name: identity.name,
      description: seo.description,
      inLanguage: 'en',
      publisher: { '@id': ids.person }
    },
    {
      '@type': 'Person',
      '@id': ids.person,
      name: identity.name,
      givenName: identity.givenName,
      familyName: identity.familyName,
      jobTitle: identity.jobTitle,
      url: `${siteUrl}/`,
      mainEntityOfPage: { '@id': ids.home },
      image: { '@id': ids.portrait },
      email: `mailto:${contactEmail}`,
      description: `${about} ${lede}`,
      address,
      homeLocation: { '@type': 'Place', name: identity.location, address },
      sameAs: [identity.linkedin, identity.github],
      hasOccupation: {
        '@type': 'Occupation',
        name: identity.jobTitle,
        description: 'Builds invisible AI into existing business operations: quotes, bookings, follow-ups, dispatch, and compliance rounds.',
        occupationLocation: { '@type': 'City', name: identity.location },
        skills: stacks.flatMap(group => group.items).join(', ')
      },
      knowsAbout: [
        'Invisible AI',
        'AI automation for business operations',
        'Operations software',
        'Embedding software in an existing business process',
        'Quotes, bookings, and follow-ups',
        'Permit classification',
        'K-12 safety checks',
        ...stacks.flatMap(group => group.items)
      ],
      worksFor: experience.map(role => ({
        '@type': 'EmployeeRole',
        roleName: role.title,
        startDate: role.start,
        ...(role.end ? { endDate: role.end } : {}),
        ...(role.note ? { description: role.note } : {}),
        worksFor: foundedOrgs[role.org]
          ? { '@id': foundedOrgs[role.org] }
          : { '@type': 'Organization', name: role.org }
      })),
      owns: { '@id': ids.business },
      workExample: [
        {
          '@type': 'CreativeWork',
          name: hello.name,
          url: hello.url,
          description: `${hello.summary} ${hello.helped}`
        },
        {
          '@type': 'CreativeWork',
          name: first.name,
          url: first.url,
          description: `${first.display} ${first.summary} ${first.helped}`
        },
        {
          '@type': 'CreativeWork',
          name: school.name,
          url: school.url,
          description: `${school.display} ${school.summary} ${school.helped}`
        }
      ]
    },
    {
      '@type': 'Organization',
      '@id': ids.schoolCheck,
      name: school.name,
      alternateName: 'DoorCheck',
      url: school.url,
      description: `${school.display} ${school.summary}`,
      foundingDate: '2024-02',
      founder: { '@id': ids.person }
    },
    {
      '@type': 'Organization',
      '@id': ids.campusSafe,
      name: 'CampusSafe',
      foundingDate: '2012',
      dissolutionDate: '2015',
      founder: { '@id': ids.person }
    },
    {
      '@type': 'ProfessionalService',
      '@id': ids.business,
      name: identity.name,
      url: `${siteUrl}/`,
      email: contactEmail,
      image: { '@id': ids.portrait },
      description: seo.description,
      slogan: `${headline.before}${headline.emphasis}${headline.scribble}`,
      founder: { '@id': ids.person },
      address,
      areaServed,
      knowsAbout: ['AI automation', 'Operations software', 'Workflow automation'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ways to work with me',
        itemListElement: offers.map(offer => ({
          '@type': 'Offer',
          itemOffered: { '@id': `${siteUrl}/#offer-${offer.n}` }
        }))
      }
    },
    {
      '@type': 'ImageObject',
      '@id': ids.portrait,
      url: identity.portrait,
      contentUrl: identity.portrait,
      width: identity.portraitWidth,
      height: identity.portraitHeight,
      caption: `${identity.portraitCaption} ${identity.portraitAlt}`,
      creator: { '@id': ids.person }
    },
    ...offers.map(offer => ({
      '@type': 'Service',
      '@id': `${siteUrl}/#offer-${offer.n}`,
      name: offer.title,
      serviceType: 'AI automation consulting',
      description: `${offer.body} Good if you have: ${offer.good} Ends with: ${offer.ends}`,
      url: `${siteUrl}/#offer`,
      provider: { '@id': ids.business },
      areaServed
    }))
  ]
}

function shareImage(page: JsonLdPage) {
  const image = shareImages[page]
  return {
    '@type': 'ImageObject',
    url: image.url,
    contentUrl: image.url,
    width: shareImages.width,
    height: shareImages.height,
    caption: image.alt
  }
}

export function jsonLd(page: JsonLdPage, updated: string) {
  const pageNode = page === 'home'
    ? {
        '@type': 'ProfilePage',
        '@id': ids.home,
        url: `${siteUrl}/`,
        name: seo.title,
        description: seo.description,
        inLanguage: 'en',
        dateModified: updated,
        isPartOf: { '@id': ids.website },
        about: { '@id': ids.person },
        mainEntity: { '@id': ids.person },
        primaryImageOfPage: { '@id': ids.portrait },
        image: shareImage('home'),
        significantLink: [abs(machinePaths.experience), abs(machinePaths.llms)]
      }
    : {
        '@type': 'WebPage',
        '@id': ids.experience,
        url: abs(machinePaths.experience),
        name: experienceSeo.title,
        description: experienceSeo.description,
        inLanguage: 'en',
        dateModified: updated,
        isPartOf: { '@id': ids.website },
        about: { '@id': ids.person },
        breadcrumb: { '@id': ids.experienceBreadcrumb },
        image: shareImage('experience'),
        mentions: companies.map(company => ({
          '@type': 'Organization',
          name: company.name,
          ...(company.url ? { url: company.url } : {}),
          ...(company.note ? { description: company.note } : {})
        }))
      }

  const extra = page === 'experience'
    ? [{
        '@type': 'BreadcrumbList',
        '@id': ids.experienceBreadcrumb,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: identity.name, item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: experienceIntro.eyebrow, item: abs(machinePaths.experience) }
        ]
      }]
    : []

  return {
    '@context': 'https://schema.org',
    '@graph': [pageNode, ...extra, ...sharedNodes()]
  }
}
