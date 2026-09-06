export const accomplishments = [
  {
    id: 'vscode-mr',
    title: 'VS Code MR Automation Plugin',
    emoji: '🔌',
    teaser: 'Automated the GitLab merge request workflow directly from VS Code, eliminating browser context-switching for the dev team.',
    description: `Built a VS Code extension that brought the full GitLab merge request workflow directly into the editor. Developers could open, review, approve, and manage MRs without ever switching to a browser tab — dramatically reducing the friction and context-switching that slowed the team down daily.

The extension integrated with GitLab's API to surface MR status, diffs, comments, and approvals in a dedicated VS Code panel, keeping engineers in their flow state longer.`,
    tags: ['VS Code', 'GitLab API', 'TypeScript', 'Developer Tooling'],
  },
  {
    id: 'vscode-theme',
    title: 'VS Code Internal Theming Plugin',
    emoji: '🎨',
    teaser: "A VS Code extension letting developers instantly preview and apply the internal design system's component themes without leaving their editor.",
    description: `Developed a VS Code extension that gave the entire development team live access to the internal design system's theming capabilities directly within their editor.

Developers could browse, preview, and apply component themes in real time — accelerating UI development and ensuring design consistency across the codebase. The extension eliminated a constant back-and-forth between Figma, the browser, and the codebase when implementing design decisions.`,
    tags: ['VS Code', 'Design Systems', 'TypeScript', 'Developer Tooling'],
  },
  {
    id: 'figma-plugin',
    title: 'Figma Design Token Plugin',
    emoji: '🔷',
    teaser: "A Figma plugin that automatically converts design variable tokens into the team's internal design system format.",
    description: `Created a Figma plugin that solved a persistent pain point between design and engineering: translating Figma design variables into the team's internal design system token format was a manual, error-prone process that slowed down every new feature.

The plugin automated this conversion entirely — designers could export their variable definitions and the plugin would generate properly-formatted design system tokens, ready to be dropped directly into the codebase. This eliminated a repetitive translation step and reduced the chance of design drift between Figma and the live product.`,
    tags: ['Figma API', 'Design Systems', 'TypeScript', 'Design ↔ Engineering'],
  },
  {
    id: 'cicd',
    title: 'GitLab CI/CD Pipeline Enhancements',
    emoji: '⚙️',
    teaser: "Enhanced the team's GitLab pipelines to automate previously manual build and deployment steps, reducing errors and toil.",
    description: `Analyzed and redesigned key stages of the team's GitLab CI/CD pipelines to eliminate manual intervention in the build and deployment process.

The enhancements automated previously hand-cranked steps, introduced better error reporting, and made the pipeline faster and more reliable. Developers spent less time babysitting deployments and more time shipping features, with greater confidence that the pipeline would catch issues before they reached production.`,
    tags: ['GitLab CI/CD', 'DevOps', 'YAML', 'Automation'],
  },
  {
    id: 'onboarding-script',
    title: 'Custom Engineer Onboarding Script',
    emoji: '🧭',
    teaser: 'Automated a new-hire onboarding checklist that used to take two days, cutting it down to about two hours.',
    description: `Reviewed the full onboarding document new hires were expected to work through before starting real work, and realized most of the manual, repetitive steps could be automated outright. Built an executable script that handles the easy parts automatically and walks the user step-by-step through the handful of steps that still need judgment or manual input, then published it to the team's internal software library for anyone to run.

What used to be a roughly two-day setup process is now a two-hour experience, freeing up new engineers to start contributing on day one instead of fighting their environment.`,
    tags: ['Automation', 'Developer Tooling', 'Onboarding'],
  },
  {
    id: 'ai-design-training',
    title: 'AI-Aided Design & Mock Building Training',
    emoji: '🎓',
    teaser: 'Trained product managers and designers to use Claude Code and internal tooling to build higher-fidelity mocks, faster.',
    description: `Put together tools and ran a training seminar for product managers and designers on how to efficiently use Claude Code alongside the team's internally-built libraries and tooling, including how to spin up a new mock project from scratch.

The training raised the quality of the mocks handed off to developers, cut down the time spent building them, and — because the mocks were generated using the same internal libraries as production — the resulting mock-up code closely resembled what would actually ship, shrinking the gap between design and engineering handoff.`,
    tags: ['AI', 'Training', 'Design Systems'],
  },
  {
    id: 'ai-troubleshooting',
    title: 'AI Troubleshooting Workflow',
    emoji: '🛠️',
    teaser: 'Replaced an ad hoc support channel with a ticketing flow that uses an internal AI agent to diagnose bugs and route them to the right team.',
    description: `The original process for handling reported issues was an open internal messaging channel where any user or customer liaison could post a problem. It was noisy: many posts were duplicates, plenty turned out to be confusion about how the page worked rather than actual bugs, and developers had to watch the channel in real time just to figure out which team should even look at it — often with little context to go on.

Replaced that with an in-app ticket flow that automatically captures the current page, the data that produced the issue, and any errors thrown. That context is sent to an internal AI agent with access to the team's logs and repositories, which diagnoses the problem, works out the fix, and identifies the right team to own it — generating a full report so the assigned developer can immediately understand what's wrong and how to resolve it.`,
    tags: ['AI', 'Automation', 'Developer Tooling'],
  },
  {
    id: 'ai-tools',
    title: 'AI Agents & UI Developer Tools',
    emoji: '🤖',
    teaser: 'Built AI-powered agents and automation tools tailored to UI development workflows, enabling the team to ship faster.',
    description: `Built a suite of AI-powered agents, skills, and automation tools purpose-built for UI development workflows. These tools automated repetitive tasks that previously consumed meaningful chunks of developer time — from generating boilerplate UI code to intelligent component suggestions.

The result: developers could generate, test, and iterate on UI components significantly faster, with less manual scaffolding and more time spent on the work that actually requires creative thinking.`,
    tags: ['AI', 'Automation', 'React', 'TypeScript', 'Developer Tooling'],
  },
  {
    id: 'vite-plugin',
    title: 'Custom Vite Plugin',
    emoji: '⚡',
    teaser: 'Authored a custom Vite plugin that extended the build pipeline with integrations not available out of the box.',
    description: `Authored a custom Vite plugin that extended the standard build pipeline with project-specific transformations and integrations the team needed but that didn't exist as off-the-shelf solutions.

The plugin hooked into Vite's build lifecycle to automate custom processing steps, enabling the team to maintain a clean and efficient build setup without resorting to manual workarounds or one-off scripts outside the pipeline.`,
    tags: ['Vite', 'Build Tools', 'TypeScript', 'Plugin Development'],
  },
]
