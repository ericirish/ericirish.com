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

export function sitemapXml() {
  const lastmod = generatedOn()
  const urls = [
    { loc: `${siteUrl}/`, priority: '1.0' },
    { loc: abs(machinePaths.experience), priority: '0.9' },
    { loc: abs(machinePaths.llms), priority: '0.8' },
    { loc: abs(machinePaths.llmsFull), priority: '0.6' },
    { loc: abs(machinePaths.markdown), priority: '0.6' },
    { loc: abs(machinePaths.experienceMarkdown), priority: '0.6' }
  ]

  const body = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`
}

export function jsonLd() {
  const hello = caseStudies.helloFrom
  const first = caseStudies.firstToSite
  const school = caseStudies.schoolCheck
  const employers = experience.filter(role => role.org)
  const currentEmployers = employers.filter(role => role.when.endsWith('now'))
  const formerEmployers = employers.filter(role => !role.when.endsWith('now'))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#page`,
        url: `${siteUrl}/`,
        name: seo.title,
        description: seo.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#eric` },
        mainEntity: { '@id': `${siteUrl}/#eric` },
        primaryImageOfPage: { '@id': `${siteUrl}/#portrait` }
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: identity.name,
        description: seo.description,
        inLanguage: 'en',
        publisher: { '@id': `${siteUrl}/#eric` }
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#eric`,
        name: identity.name,
        givenName: identity.givenName,
        familyName: identity.familyName,
        url: `${siteUrl}/`,
        image: { '@id': `${siteUrl}/#portrait` },
        email: contactEmail,
        description: `${about} ${lede}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: identity.locality,
          addressRegion: identity.region,
          addressCountry: identity.country
        },
        homeLocation: {
          '@type': 'Place',
          name: identity.location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: identity.locality,
            addressRegion: identity.region,
            addressCountry: identity.country
          }
        },
        sameAs: [identity.linkedin, identity.github],
        knowsAbout: [
          'Invisible AI',
          'Operations software',
          'Embedding software in an existing business process',
          'Quotes, bookings, and follow-ups',
          'Permit classification',
          'K-12 safety checks',
          ...stacks.flatMap(group => group.items)
        ],
        ...(currentEmployers.length
          ? {
              worksFor: currentEmployers.map(role => ({
                '@type': 'Organization',
                name: role.org
              }))
            }
          : {}),
        ...(formerEmployers.length
          ? {
              alumniOf: formerEmployers.map(role => ({
                '@type': 'Organization',
                name: role.org
              }))
            }
          : {}),
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
        '@type': 'WebPage',
        '@id': `${siteUrl}/experience#page`,
        url: `${siteUrl}/experience`,
        name: experienceSeo.title,
        description: experienceSeo.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#eric` },
        mentions: companies.map(company => ({
          '@type': 'Organization',
          name: company.name,
          ...(company.url ? { url: company.url } : {}),
          ...(company.note ? { description: company.note } : {})
        }))
      },
      {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#portrait`,
        url: identity.portrait,
        contentUrl: identity.portrait,
        caption: `${identity.portraitCaption} ${identity.portraitAlt}`
      },
      ...offers.map(offer => ({
        '@type': 'Service',
        '@id': `${siteUrl}/#offer-${offer.n}`,
        name: offer.title,
        description: `${offer.body} Good if you have: ${offer.good} Ends with: ${offer.ends}`,
        url: `${siteUrl}/#offer`,
        provider: { '@id': `${siteUrl}/#eric` }
      }))
    ]
  }
}
