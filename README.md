# AlgoCore — Unit 6 Learning

An HTML, CSS and JavaScript teaching and study website for Cambridge IGCSE Computer Science 0478, for exams in 2026–2028.

All teaching content, instructions, activities, feedback and reference material use English. Explanations use short sentences and simple vocabulary while keeping the technical terms needed for the course.

## Public website

- Study online: https://algocoreedu-coder.github.io/igcse-unit-6-learning/
- Source repository: https://github.com/algocoreedu-coder/igcse-unit-6-learning

The public website does not require a GitHub account. GitHub Pages publishes the `dist` folder. Changes to `dist` pushed to `main` deploy automatically through `.github/workflows/pages.yml`. The workflow can also be run manually from the repository's Actions tab.

The original textbook and workbook PDFs are not included. Use your own copies for the source exercises.

## Open the course

Open `dist/index.html` in a browser, or use the deployed website. For offline use, keep the entire `dist` folder and its images together. Lesson addresses such as `#49/mechanism` work without a server.

- Four main lessons: 49 Automated systems, 50 Robotics, 51 AI and expert systems, 52 Machine learning.
- 40 lesson, review and handbook sections; 111 original questions.
- 16 main visuals and 10 versions with labels hidden; four interactive activities.
- Each lesson includes six starter questions, short checks after theory, six independent practice questions, three exit questions and two between-lesson reviews.
- Spaced reviews for lessons 53, 54 and 56, plus exam-style practice with course-specific self-check criteria.

## Teach directly from the website

Choose **Student** or **Teacher** on the entry page and enter the matching four-digit class code. The selected role stays in this tab using session storage. **Sign out** returns to the entry page. Student practice keeps the existing browser storage key; teacher practice uses a separate key so demonstrations do not overwrite student work on the same browser.

This is a simple classroom role gate on a static GitHub Pages website, not secure authentication. Codes and teaching scripts can be inspected in the public source, and browser role state can be changed. Do not use it to protect private records or confidential material. Real access protection would require a server-side authentication service.

In Teacher mode, **Teaching script** opens a reading panel for the current section. All 40 sections have original spoken English scripts, examples to demonstrate, questions to ask, expected answers, prompts for students who need help, and a closing transition. Sections with questions also have question-by-question teaching notes. Use **A− / A+**, **Print script**, and the previous/next controls in the panel. Close it before sharing the lesson screen: a script visible on your screen is also visible to anyone watching that screen.

Choose a lesson and section from the contents. **Present** makes the text larger, hides the sidebar and allows you to reveal ideas one at a time. Use the previous and next buttons, or the arrow keys when you are not typing or focused on a control. Press Space to show the next idea.

Select a visual to enlarge it. Where available, hide its labels and ask students to recall them. In presentation mode, teachers can open written model answers without entering an answer first. This supports teaching; it is not an answer-security feature.

Written questions have model answers and checklists. They are not marked automatically by keywords. Multiple-choice, matching and ordering questions give feedback and save the first and latest scores. Ordering questions earn one practice mark per correctly placed step. These criteria are not official Cambridge mark schemes.

**Print** prints the current section and keeps unopened answers hidden. Answers and attempt history are saved locally when the browser allows it. They do not sync between devices or send grades to the teacher. There is no class gradebook or automatic reminder service.

## Interactive activities

1. **Greenhouse:** adjust temperature, soil moisture and light. Run one step or a full cycle; try threshold boundaries, missing data and reset. The model calculates control commands, not changes in the physical environment. Keeping outputs OFF when readings are missing is a choice for this activity, not a general safety rule.
2. **Robot:** explore part functions, then match a sensor, controller and actuator to warehouse, home or farming tasks.
3. **Expert system:** identify one of three vehicles using two properties. Follow the facts, knowledge base, rule base, reasoning and result. Try missing information or a case with no matching rule.
4. **ML:** use six training examples and four separate test examples. The nearest-example method is a simple illustration. After changing a label, train again before predicting. Changing example #4 from A to B with X=(6,5) changes the prediction from A to B and the fixed test score from 3/4 to 4/4. This does not guarantee similar results in other ML systems.

## Editing

- `dist/content.js`: theory, goals, questions, answers, review schedule and sources.
- `dist/app.js`: navigation, presentation mode, questions and browser storage.
- `dist/access.js`: classroom code matching and tab-local role selection.
- `dist/teaching-scripts.js`: spoken teaching scripts for all 40 sections.
- `dist/labs.js`: the four activities.
- `dist/styles.css`: desktop, mobile and print styles.
- `dist/visuals.js` and `dist/assets/`: image descriptions and assets.
- `dist/webmcp.js`: optional browser integration. The website works without it.

See **Handbook → Sources and how to use this website** and **Learning goals** for source references and coverage.

Syllabus: https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf  
Coursebook Unit 6: printed pp. 217–256. Workbook 1 Unit 6: printed pp. 84–95.

## Validation

The original website was checked across all 40 routes, question feedback, saved answers, four activities, presentation controls, keyboard use and mobile layout.

The English update was checked for JavaScript syntax, content structure, route references, asset references and remaining Vietnamese text. Question identifiers and answer keys remain unchanged, preserving existing browser work. The English update did not include a new browser layout test.

The classroom-role update was checked in a browser for both matching codes, wrong-role codes, entry through a deep link, role persistence, sign-out, student and teacher work separation, unavailable storage, all 40 teaching scripts, the 111 question notes, script navigation, presentation answers, desktop and mobile layouts, and complete script printing.
