const U6 = {
  "lessons": [
    {
      "id": "49",
      "title": "Automated systems",
      "subtitle": "Sense → decide → act",
      "syllabus": "6.1",
      "source": "Coursebook pp.217–229; Workbook 1 pp.84–90; syllabus 6.1.",
      "goals": [
        "Explain how sensors, microprocessors and actuators work together.",
        "Apply the control cycle to a new situation. Explain its benefits and limits."
      ],
      "sections": [
        {
          "id": "start",
          "title": "Starter: check what you remember",
          "kind": "retrieval",
          "minutes": "15 minutes",
          "lead": "Answer from memory before you check. This first lesson reviews input, output and IF conditions.",
          "html": "<section class=\"panel reveal-block\"><h2>Look before you learn</h2><div class=\"intro-grid\"><div><p>The greenhouse is getting warmer. Which part detects the change? Which part makes a decision? Which part opens the vent?</p><p>You do not need to name every device yet. Separate the <b>input data</b>, <b>processing</b> and <b>output action</b>.</p></div><figure><img src=\"assets/images/01-greenhouse.png\" alt=\"An automated greenhouse with sensors and a vent motor\"></figure></div></section>",
          "questions": [
            {
              "id": "49-r1",
              "type": "mc",
              "prompt": "Which device supplies temperature data?",
              "options": [
                "A motor",
                "A temperature sensor",
                "A loudspeaker",
                "A lamp"
              ],
              "correct": 1,
              "explain": "A temperature sensor measures a physical property and supplies input data.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "49-r2",
              "type": "mc",
              "prompt": "What is the purpose of an input device?",
              "options": [
                "To supply data to a computer",
                "To store only output",
                "To make every decision",
                "To replace all software"
              ],
              "correct": 0,
              "explain": "Input supplies data for processing. Input and processing are different steps.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "49-r3",
              "type": "written",
              "prompt": "Explain the difference between a sensor and an actuator.",
              "model": "A sensor measures a physical property and supplies input data. An actuator converts a control signal into a physical action.",
              "rubric": [
                "The sensor measures a physical property.",
                "The actuator produces a physical action from a control signal."
              ],
              "ref": "49/mechanism",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "49-r4",
              "type": "mc",
              "prompt": "IF temperature > 28 THEN fanOn. What happens at exactly 28?",
              "options": [
                "The condition is true",
                "The condition is false",
                "The sensor is broken",
                "There is not enough information to compare"
              ],
              "correct": 1,
              "explain": "The > sign does not include equality. The condition 28 > 28 is false.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "49-r5",
              "type": "written",
              "prompt": "Why does a processor need a program to control a fan?",
              "model": "The program specifies how the reading is compared with a threshold and what control signal should be sent.",
              "rubric": [
                "The program defines the condition or rule.",
                "The program defines what to do after the comparison."
              ],
              "ref": "49/mechanism",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "49-r6",
              "type": "mc",
              "prompt": "Which sequence correctly describes input–process–output?",
              "options": [
                "Motor → sensor → processor",
                "Sensor reading → comparison → control signal",
                "Comparison → reading → stored program",
                "Lamp → motor → temperature"
              ],
              "correct": 1,
              "explain": "The system reads data, processes it and then produces output.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "mechanism",
          "title": "1. How automated systems work",
          "kind": "theory",
          "minutes": "12 minutes",
          "lead": "Goal 6.1: describe a complete control cycle, not just the names of its parts.",
          "html": "<section class=\"panel reveal-block\"><h2>What is an automated system?</h2><p>An <b>automated system</b> uses hardware and software to carry out a task. A person does not need to control each action. People may still set values, watch the system, maintain it or step in when needed.</p><p>For example, a grower sets a temperature limit. The system then measures the temperature and controls a fan. Having a person watch the system does not stop it being automated.</p><div class=\"callout\"><strong>Key idea</strong><p>An automated system follows a program to carry out a task without a person controlling each step.</p></div></section><section class=\"panel reveal-block\"><h2>Three different roles</h2><div class=\"table-wrap\"><table><thead><tr><th>Component</th><th>What does it do?</th><th>Greenhouse example</th></tr></thead><tbody><tr><td>Sensor</td><td>Measures a physical property and sends data.</td><td>A temperature sensor measures the air temperature.</td></tr><tr><td>Microprocessor</td><td>Runs a program, compares data with a set value and decides the output.</td><td>If the temperature is above 28°C, it sends a signal to turn on the fan.</td></tr><tr><td>Actuator</td><td>Changes a control signal into a physical action.</td><td>A motor turns the fan or opens a vent. A valve controls water flow.</td></tr></tbody></table></div><p>Name the actuator and its action. For example, write “the motor turns the fan”. A sensor does not make the control decision or pull a door open.</p></section><section class=\"panel reveal-block\"><h2>Follow one control cycle</h2><ol class=\"step-list\"><li>The sensor measures a temperature, such as 31°C.</li><li>If its signal is analogue, an ADC converts it to digital data for the processor. Some sensors already provide digital data.</li><li>The microprocessor compares the reading with the 28°C limit.</li><li>Since 31 > 28, it sends a control signal to the motor.</li><li>The motor turns the fan. The airflow helps cool this greenhouse.</li><li>The sensor takes another reading. The processor checks it and updates the output.</li></ol><pre>IF temperature > 28 THEN\n    fan ← ON\nELSE\n    fan ← OFF\nENDIF\n// Take another reading and check again</pre><div class=\"callout\"><strong>A common mistake</strong><p>“The sensor turns on the fan” misses out the processing step. Name the measurement, the condition, the control signal and the physical action.</p></div></section><details class=\"teacher-note\"><summary>Teacher tip</summary><p>After visual 04, hide the labels and ask students to draw the cycle. Ask what happens at exactly 28°C. The threshold is a teaching example, not a real greenhouse setting.</p></details>",
          "questions": [
            {
              "id": "49-c1",
              "type": "mc",
              "prompt": "Which component compares a reading with a threshold?",
              "options": [
                "Sensor",
                "Microprocessor",
                "Fan blade",
                "Window frame"
              ],
              "correct": 1,
              "explain": "The processor carries out the comparison using its program.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "49-c2",
              "type": "written",
              "prompt": "Why must the temperature be measured again after the fan starts?",
              "model": "The fan may change the temperature. Another reading allows the processor to decide whether cooling is still required.",
              "rubric": [
                "The action changes the conditions in the environment.",
                "A new reading is needed for the next decision."
              ],
              "ref": "49/mechanism",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [
            4
          ],
          "lab": null
        },
        {
          "id": "monitoring",
          "title": "2. Monitoring, control and safety",
          "kind": "theory",
          "minutes": "8 minutes",
          "lead": "A system may only record a reading, or it may use that reading to change the environment.",
          "html": "<section class=\"panel reveal-block\"><h2>Monitoring or control?</h2><p><b>Monitoring</b> means collecting, processing, storing or displaying data. A weather station may record the temperature every hour. It does not heat or cool the atmosphere to a set temperature.</p><p><b>Control</b> means using data to control an output. A sensor detects dry soil. The processor sends a signal to open a water valve. More readings help it decide when to stop watering.</p><p>Both can be automated. One system can monitor and control at the same time. Use this difference to explain the situation clearly.</p></section><section class=\"panel reveal-block\"><h2>Train doors: detecting an obstacle</h2><ol class=\"step-list\"><li>A receiver detects a light beam from an emitter. A person in the doorway can block the beam.</li><li>The sensor sends the obstacle status to the processor.</li><li>The program checks the safety conditions before closing the doors.</li><li>If an obstacle is present, the processor sends a signal to keep the doors open or open them again.</li><li>A motor moves the doors. A separate position sensor or switch confirms that they are closed.</li></ol><div class=\"callout\"><strong>Two different questions</strong><p>“Is someone in the doorway?” and “Are the doors closed?” may need different sensor signals. One answer does not prove the other.</p></div></section><section class=\"panel reveal-block\"><h2>Car park example</h2><p>A camera captures the number plate. Character-recognition software converts the image into characters so the system can check permission to enter. The processor signals a motor to raise the barrier when entry is allowed.</p><p>After the car moves through, a sensor checks the barrier area. The barrier is lowered only when the safety conditions are met. The camera captures the image; the motor creates movement.</p><div class=\"callout warn\"><strong>Automation can still fail</strong><p>A dirty sensor, incorrect data or a software fault can cause a wrong action. Systems need maintenance, testing and suitable ways to handle faults.</p></div></section>",
          "questions": [
            {
              "id": "49-c3",
              "type": "mc",
              "prompt": "A station records wind speed without changing it. This is primarily…",
              "options": [
                "Control of the weather",
                "Monitoring",
                "Machine learning",
                "Robotic surgery"
              ],
              "correct": 1,
              "explain": "Measuring and recording wind speed is monitoring. The system does not control the wind.",
              "ref": "49/monitoring",
              "vi": "",
              "marks": 1
            },
            {
              "id": "49-c4",
              "type": "written",
              "prompt": "Why is number-plate recognition alone insufficient for closing a car-park barrier safely?",
              "model": "An authorised plate does not show that the car has cleared the barrier. A sensor must detect whether the barrier area is occupied before the motor lowers it.",
              "rubric": [
                "Permission to enter does not show that the car has cleared the barrier.",
                "The system must check whether the barrier area is clear."
              ],
              "ref": "49/monitoring",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [
            2,
            3
          ],
          "lab": null
        },
        {
          "id": "applications",
          "title": "3. Seven application areas",
          "kind": "applications",
          "minutes": "Read by context",
          "lead": "Choose one context to discuss in class. Use the others to practise applying the same ideas to new situations.",
          "html": "<section class=\"panel reveal-block\"><h2>Each example follows input → decision → output</h2><div class=\"table-wrap\"><table><thead><tr><th>Context</th><th>Data and processing</th><th>Output or action</th><th>Benefit and limitation</th></tr></thead><tbody><tr><td>Industry</td><td>A sensor measures a mixing tank's temperature. The processor compares it with a set value.</td><td>Controls a heater or a stirring motor.</td><td>Steady conditions help keep product quality consistent. An inaccurate sensor may spoil a whole batch, so it needs calibration and maintenance.</td></tr><tr><td>Transport</td><td>A distance sensor measures the gap to the car ahead. The processor checks the distance and speed.</td><td>Sends a signal to the braking system when needed.</td><td>Can react quickly. Mud, rain or an unexpected situation may cause errors.</td></tr><tr><td>Agriculture</td><td>A soil-moisture sensor supplies a reading. The processor checks whether the soil is too dry.</td><td>Controls a water pump or valve.</td><td>Watering only when needed can save water. One sensor may not represent the whole field.</td></tr><tr><td>Weather</td><td>Sensors measure temperature, pressure and wind speed. The system processes and records the readings and times.</td><td>Stores or displays readings, or gives a warning. This usually monitors the weather rather than controlling it.</td><td>Collects regular data in remote places. It needs power and reliable sensors in difficult weather.</td></tr><tr><td>Gaming</td><td>A motion sensor detects controller movement. Software uses it with the game state.</td><td>Changes images or sound. A vibration motor may provide physical feedback.</td><td>Players can control the game through movement. Delay or poor calibration may cause an incorrect response.</td></tr><tr><td>Lighting</td><td>Light and motion sensors help the processor check whether it is dark and someone is present.</td><td>A control circuit switches the lamp on or off.</td><td>Reduces lighting when it is not needed. A motion sensor may miss someone sitting still.</td></tr><tr><td>Science</td><td>A pH or temperature sensor supplies a reading. The processor compares it with the target.</td><td>Controls a dosing valve or heater.</td><td>Repeats measurements and dosing consistently and can reduce contact with hazards. Poor calibration can affect the results.</td></tr></tbody></table></div></section><section class=\"panel reveal-block\"><h2>Explain benefits and limits</h2><p>Use <b>point → reason → link to the task</b>. Do not just write “faster”, “better” or “expensive”. Explain what is faster or why it costs more.</p><p><b>Benefit:</b> “The irrigation system opens the valve only when the soil is too dry. This avoids supplying water when the crop does not need it.”</p><p><b>Limitation:</b> “A poorly placed sensor may report dry soil when other areas are wet. This can cause unnecessary watering.”</p><p>Useful ideas include working for long periods, repeating actions consistently, reacting quickly, reducing exposure to danger, setup cost, maintenance, limited flexibility, job losses and retraining. Always link the idea to the situation. Do not claim that automation is always cheaper or always correct.</p></section>",
          "questions": [
            {
              "id": "49-c5",
              "type": "written",
              "prompt": "Explain one benefit and one limitation of automatic lighting in a classroom.",
              "model": "Lights can turn off when the room is empty, reducing wasted electricity. A motion sensor may fail to detect a seated person who is not moving, so the lights may turn off while the room is occupied.",
              "rubric": [
                "Link the benefit to times when the room is empty.",
                "Explain how this saves electricity.",
                "Give a sensor limitation that fits the classroom.",
                "Explain its effect on the people using the room."
              ],
              "ref": "49/applications",
              "marks": 4,
              "vi": ""
            }
          ],
          "visuals": [
            1
          ],
          "lab": null
        },
        {
          "id": "lab",
          "title": "Activity: control a greenhouse",
          "kind": "lab",
          "minutes": "20 minutes guided practice",
          "lead": "Predict the fan, pump and lamp states before running the model. Then explain data → decision → signal.",
          "html": "<div class=\"callout\"><strong>Rules in this model</strong><p>The fan is ON when temperature > 28°C. The pump is ON when soil moisture &lt; 35%. The lamp is ON when light level &lt; 40 units. These are example thresholds. The model calculates output commands; it does not calculate how quickly the environment changes.</p></div>",
          "questions": [
            {
              "id": "49-l1",
              "type": "written",
              "prompt": "At 28°C, 35% soil moisture and light level 40, predict all three outputs and explain why.",
              "model": "The fan, pump and lamp are all off. None of the strict inequalities is true at its threshold.",
              "rubric": [
                "Fan OFF at 28°C.",
                "Pump OFF at 35%.",
                "Lamp OFF at 40 units. Explain why < and > do not include equality."
              ],
              "ref": "49/mechanism",
              "marks": 3,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": "greenhouse"
        },
        {
          "id": "practice",
          "title": "Independent practice and feedback",
          "kind": "practice",
          "minutes": "25 minutes practice + 10 minutes feedback",
          "lead": "Try each question first. If you make a mistake, return to the linked lesson, improve your explanation and try again.",
          "html": "",
          "questions": [
            {
              "id": "49-p1",
              "type": "mc",
              "prompt": "A sensor sends an analogue signal. What is needed before digital processing?",
              "options": [
                "DAC",
                "ADC",
                "A larger actuator",
                "A knowledge base"
              ],
              "correct": 1,
              "explain": "An ADC converts analogue signals to digital data. A DAC works in the opposite direction.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "49-p2",
              "type": "order",
              "prompt": "Put these irrigation-control steps in order.",
              "items": [
                "Processor compares moisture with the threshold",
                "Sensor measures soil moisture",
                "Motor starts the pump",
                "Processor sends an ON signal"
              ],
              "correct": [
                1,
                0,
                3,
                2
              ],
              "explain": "Measure → compare → send a signal → act. Then take another reading.",
              "ref": "49/mechanism",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "49-p3",
              "type": "match",
              "prompt": "Match each function to its component.",
              "pairs": [
                [
                  "Measures light level",
                  0
                ],
                [
                  "Tests whether light is below a threshold",
                  1
                ],
                [
                  "Moves a blind",
                  2
                ]
              ],
              "options": [
                "Light sensor",
                "Microprocessor",
                "Motor actuator"
              ],
              "explain": "The sensor measures, the processor compares and the motor moves.",
              "ref": "49/mechanism",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "49-p4",
              "type": "written",
              "prompt": "A tank is filled automatically. Describe how the system stops filling when the level reaches a maximum.",
              "model": "A level sensor measures the liquid level and sends the reading to the microprocessor. The processor compares it with the maximum. When the level is at or above the maximum, it sends a signal to close a valve or stop the pump. Readings are taken again for further control.",
              "rubric": [
                "Measure the liquid level.",
                "Send the reading to the processor and compare it with the maximum.",
                "Send a signal when the level reaches or exceeds the maximum.",
                "Close the valve or stop the pump; continue monitoring."
              ],
              "ref": "49/mechanism",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "49-p5",
              "type": "written",
              "prompt": "Explain two disadvantages of an automated laboratory dispensing system.",
              "model": "The equipment requires installation and calibration, increasing initial cost. A faulty sensor can cause repeated incorrect doses, affecting many samples before the fault is detected.",
              "rubric": [
                "Give a clear reason for the cost.",
                "Link the cost to installation or calibration.",
                "Describe a sensor or software fault.",
                "Link the fault to incorrect doses or samples."
              ],
              "ref": "49/applications",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "49-p6",
              "type": "mc",
              "prompt": "Which statement is most accurate?",
              "options": [
                "Every automated system uses AI",
                "A human supervisor makes automation impossible",
                "Automation can still require maintenance and supervision",
                "Sensors directly decide every action"
              ],
              "correct": 2,
              "explain": "An automated system may still need setup, maintenance and supervision.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "exit",
          "title": "Exit check",
          "kind": "exit",
          "minutes": "10 minutes, including home study",
          "lead": "Three new tasks: recall, explain and apply. Note any ideas you need to study again.",
          "html": "",
          "questions": [
            {
              "id": "49-e1",
              "type": "written",
              "prompt": "Name the three main component roles in automated control.",
              "model": "Sensor: input measurement. Microprocessor: programmed processing. Actuator: physical action.",
              "rubric": [
                "Name the sensor and its measurement role.",
                "Name the microprocessor and its processing role.",
                "Name the actuator and its action."
              ],
              "ref": "49/mechanism",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "49-e2",
              "type": "written",
              "prompt": "Explain why an automatic door needs both sensing and actuation.",
              "model": "Sensing supplies information about a person or obstacle. The processor uses it to decide a safe action. Actuation provides the force to move the door.",
              "rubric": [
                "Describe data about a person or obstacle.",
                "Explain the processor's decision.",
                "Explain how the motor moves the door."
              ],
              "ref": "49/monitoring",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "49-e3",
              "type": "written",
              "prompt": "Give one benefit of automatic pH control in an experiment and explain it.",
              "model": "Repeated measurements allow small changes in pH to be detected. The system can adjust dosing consistently, helping to maintain comparable experimental conditions.",
              "rubric": [
                "Give a benefit linked to measuring or controlling pH.",
                "Explain its effect on the experiment."
              ],
              "ref": "49/applications",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "homework",
          "title": "Between-lesson review",
          "kind": "homework",
          "minutes": "Two short sessions",
          "lead": "Review after about 2 days, then after 4–5 days. Lesson 50 checks the control cycle before introducing robotics.",
          "html": "<section class=\"panel reveal-block\"><h2>How to review</h2><p><b>Session 1, 10–15 minutes:</b> close your notes and answer questions 1–2. Open visual 04 and correct your diagram in a different colour.</p><p><b>Session 2, 15–20 minutes:</b> answer questions 3–4 about a new situation. Return to the lesson if you cannot explain an answer. Do more than just reread the model answer.</p></section>",
          "questions": [
            {
              "id": "49-h1",
              "type": "written",
              "prompt": "Draw and label an automated-control loop from memory.",
              "model": "Sensor → microprocessor → actuator → changed environment → new sensor reading.",
              "rubric": [
                "Include the three main components.",
                "Show the correct flow of data and signals.",
                "Show that the environment is measured again."
              ],
              "ref": "49/mechanism",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "49-h2",
              "type": "mc",
              "prompt": "A pump is on when moisture < 35. At 34, the pump is…",
              "options": [
                "Off",
                "On",
                "Unable to decide",
                "Learning new rules"
              ],
              "correct": 1,
              "explain": "34 is less than 35, so the condition for turning on the pump is true.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "49-h3",
              "type": "written",
              "prompt": "Describe temperature control in a refrigerated store.",
              "model": "A temperature sensor sends readings to the processor. The processor compares them with an upper limit. If too warm, it sends a signal to operate the cooling system. Further readings determine whether cooling is still needed.",
              "rubric": [
                "Name the sensor and the temperature reading.",
                "Compare the reading with a threshold.",
                "Describe the signal and cooling action.",
                "Take another reading to update the action."
              ],
              "ref": "49/mechanism",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "49-h4",
              "type": "written",
              "prompt": "Why can an automated weather station still need a technician?",
              "model": "Sensors may need calibration or replacement, and the power or communication system may fail. A technician maintains the equipment so that readings remain reliable.",
              "rubric": [
                "Give a specific maintenance need.",
                "Link maintenance to reliable readings."
              ],
              "ref": "49/applications",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        }
      ]
    },
    {
      "id": "50",
      "title": "Robotics",
      "subtitle": "Robot parts, tasks and limits",
      "syllabus": "6.2",
      "source": "Coursebook pp.230–240; Workbook 1 pp.90, 94–95; syllabus 6.2.",
      "goals": [
        "Describe robotics and the three characteristics of a robot.",
        "Explain robot tasks, benefits and limits in six areas."
      ],
      "sections": [
        {
          "id": "start",
          "title": "Recall lesson 49",
          "kind": "retrieval",
          "minutes": "15 minutes",
          "lead": "Four questions review automated systems; two review earlier ideas. Answer before opening labelled diagrams.",
          "html": "",
          "questions": [
            {
              "id": "50-r1",
              "type": "mc",
              "prompt": "Which part decides whether a fan should run?",
              "options": [
                "Temperature sensor",
                "Microprocessor executing a program",
                "Fan blade",
                "ADC alone"
              ],
              "correct": 1,
              "explain": "The program running on the processor uses the reading to decide the output.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "50-r2",
              "type": "written",
              "prompt": "Describe the data-to-action path in automatic irrigation.",
              "model": "A soil-moisture sensor supplies readings. The processor compares them with the threshold and sends a control signal to a valve or pump actuator. Water is supplied and moisture is measured again.",
              "rubric": [
                "Name a soil-moisture sensor.",
                "Explain the comparison in the processor.",
                "Describe the signal and the pump or valve.",
                "Take another reading."
              ],
              "ref": "49/mechanism",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "50-r3",
              "type": "mc",
              "prompt": "Recording temperature without changing it is…",
              "options": [
                "Monitoring",
                "Always control",
                "Always robotics",
                "A rule base"
              ],
              "correct": 0,
              "explain": "Recording temperature monitors the property.",
              "ref": "49/monitoring",
              "vi": "",
              "marks": 1
            },
            {
              "id": "50-r4",
              "type": "written",
              "prompt": "Explain one limitation of a light-controlled lamp.",
              "model": "A dirty or poorly positioned light sensor may send an unrepresentative reading, causing the lamp to switch at the wrong time.",
              "rubric": [
                "Give a specific fault or limitation.",
                "Explain its effect on the lamp."
              ],
              "ref": "49/applications",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "50-r5",
              "type": "mc",
              "prompt": "For x < 10, which value makes the condition false?",
              "options": [
                "8",
                "9",
                "10",
                "0"
              ],
              "correct": 2,
              "explain": "10 is not less than 10. Use the correct comparison sign when checking a boundary.",
              "ref": "49/mechanism",
              "vi": "",
              "marks": 1
            },
            {
              "id": "50-r6",
              "type": "written",
              "prompt": "Distinguish an input and an output using a door system.",
              "model": "The obstacle sensor supplies input data. A control signal to the door motor is output and causes movement.",
              "rubric": [
                "Name the input sensor and the data it supplies.",
                "Name the output and the motor's action."
              ],
              "ref": "49/mechanism",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "characteristics",
          "title": "1. What is a robot?",
          "kind": "theory",
          "minutes": "10 minutes",
          "lead": "A robot does not need to look human. Identify its features from its parts and how it works.",
          "html": "<section class=\"panel reveal-block\"><h2>Robotics and robots</h2><p><b>Robotics</b> is the area of computer science concerned with designing, building and operating robots. A robot is a physical device that can be programmed to carry out tasks. Examples include a factory arm, a robot vacuum cleaner and a drone.</p><p>For Unit 6, describe three characteristics: a <b>mechanical structure</b>, <b>electrical components</b> and the ability to be <b>programmed</b>. A robot does not have to look human, have feelings or use AI.</p></section><section class=\"panel reveal-block\"><h2>Three characteristics of a robot arm</h2><div class=\"table-wrap\"><table><thead><tr><th>Characteristic</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>Mechanical structure or framework</td><td>Physical parts that support, hold or move things.</td><td>A base, arm, joints and a gripper that holds a box.</td></tr><tr><td>Electrical components</td><td>Sensors, a microprocessor and actuators for sensing, control and action.</td><td>A camera captures images, a controller processes data and motors turn the joints.</td></tr><tr><td>Programmable</td><td>Instructions control its behaviour.</td><td>A program sets where to pick up a box, how far to turn and where to place it.</td></tr></tbody></table></div><p>An <b>end-effector</b> is the tool at the end of a robot arm, such as a gripper or welding tool. Motors provide movement. The end-effector carries out the task.</p></section><section class=\"panel reveal-block\"><h2>Autonomous and human-controlled robots</h2><p>An <b>autonomous</b> robot uses its program and sensor data to carry out a task without a person controlling each movement. It works within the limits of its design. A remotely controlled robot receives commands from a person, but still has physical parts, electronics and actuators.</p><p>Robots have different levels of independence. A robot that helps a surgeon does not necessarily diagnose a patient or carry out a whole operation alone. A robot following a fixed sequence is still a robot.</p><div class=\"callout\"><strong>Keep these ideas separate</strong><p>Robotics is about physical robots. AI is about computers showing intelligent behaviour. An AI program can run on a laptop without a robot body.</p></div></section>",
          "questions": [
            {
              "id": "50-c1",
              "type": "match",
              "prompt": "Match the component to a robot characteristic.",
              "pairs": [
                [
                  "Arm and joints",
                  0
                ],
                [
                  "Sensors and controller",
                  1
                ],
                [
                  "Stored movement instructions",
                  2
                ]
              ],
              "options": [
                "Mechanical structure",
                "Electrical components",
                "Programmable"
              ],
              "explain": "Give a real example for each characteristic, not just its name.",
              "ref": "50/characteristics",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "50-c2",
              "type": "mc",
              "prompt": "Which is NOT a required characteristic of a robot?",
              "options": [
                "A mechanical framework",
                "Electrical components",
                "Programmability",
                "Human-like appearance"
              ],
              "correct": 3,
              "explain": "An industrial robot or drone does not need to look human.",
              "ref": "50/characteristics",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [
            5,
            6
          ],
          "lab": null
        },
        {
          "id": "applications",
          "title": "2. Robots in six areas",
          "kind": "applications",
          "minutes": "10 minutes + further reading",
          "lead": "For each example, name the robot's task. Explain why it is useful and what could make the task difficult.",
          "html": "<section class=\"panel reveal-block\"><h2>Explain the task, benefit and limit</h2><div class=\"table-wrap\"><table><thead><tr><th>Area</th><th>Task and parts</th><th>Benefit and reason</th><th>Limitation and reason</th></tr></thead><tbody><tr><td>Industry</td><td>An arm uses motors and tools to weld, paint, assemble parts or stack boxes. Sensors help locate objects.</td><td>Repeating a path consistently helps make similar products. Robots can keep people away from hazards.</td><td>Robots cost money to set up. A new product may need new programming. A fault can stop production.</td></tr><tr><td>Transport</td><td>A warehouse robot or self-driving vehicle uses distance sensors and motors to follow a route.</td><td>It can repeat delivery tasks in a planned area for long periods.</td><td>Unexpected people or objects, or blocked sensors, may lead to errors.</td></tr><tr><td>Agriculture</td><td>A robot picks fruit, checks crops or sprays selected areas. Cameras collect data and actuators do the work.</td><td>It can cover a large area and act at selected places. It can reduce human contact with chemicals.</td><td>Different fruit shapes, positions and ground surfaces make finding and gripping fruit harder.</td></tr><tr><td>Medicine</td><td>A robot arm helps a doctor control tools with small, precise movements.</td><td>It can hold tools steady and support fine movements under suitable control.</td><td>It needs trained operators and maintenance. A technical fault can have serious effects.</td></tr><tr><td>Domestic</td><td>A robot vacuum senses obstacles and controls its wheels and cleaning parts.</td><td>It repeats a routine task and saves the user time.</td><td>Loose cables, stairs or narrow spaces may be beyond its limits.</td></tr><tr><td>Entertainment</td><td>A robotic camera repeats a filming path. A moving display figure follows programmed movements.</td><td>It can repeat steady movements and effects that are difficult to perform by hand.</td><td>It needs safe setup. A fixed path may not suit a changed scene.</td></tr></tbody></table></div></section><section class=\"panel reveal-block\"><h2>Write a clear evaluation</h2><p><b>Point:</b> A welding robot can repeat a programmed path consistently.<br><b>Link to the task:</b> This helps produce similar welds on many identical car bodies.</p><p><b>Limitation:</b> A new car-body design may need different tools and programming. This adds cost and may stop production during setup.</p><p>Do not write “robots never make mistakes”. Incorrect position data, worn tools or a faulty program can cause errors. Robots may reduce some repeated manual jobs and create a need for programming and maintenance skills. Explain the situation rather than claiming that everyone loses their job.</p></section>",
          "questions": [
            {
              "id": "50-c3",
              "type": "written",
              "prompt": "Explain one benefit and one limitation of using a robot to harvest fruit.",
              "model": "A robot can perform repeated harvesting tasks for long periods. However, fruit varies in shape and position, so the sensing and gripping system may fail to pick some fruit without damage.",
              "rubric": [
                "Link a benefit to harvesting fruit.",
                "Explain the benefit of repeating the task.",
                "Describe a problem with fruit shape or position.",
                "Explain how fruit could be missed or damaged."
              ],
              "ref": "50/applications",
              "marks": 4,
              "vi": ""
            }
          ],
          "visuals": [
            7
          ],
          "lab": null
        },
        {
          "id": "ai",
          "title": "3. Do all robots use AI?",
          "kind": "theory",
          "minutes": "5-minute check",
          "lead": "Classify the system by how it works, not by how it looks.",
          "html": "<section class=\"panel reveal-block\"><h2>Examples in three regions</h2><p><b>Robotics without AI:</b> a factory arm repeats the same programmed positions on a stable production line.</p><p><b>Robotics with AI:</b> a robot uses a trained vision model to find an object, then moves its gripper. The mechanical parts act; AI helps interpret the data.</p><p><b>AI without a physical robot:</b> an expert-system program uses facts and rules to suggest the cause of a computer fault.</p><p>A picture of a robot arm does not prove that it uses machine learning. You need to know how its program makes decisions.</p></section>",
          "questions": [
            {
              "id": "50-c4",
              "type": "mc",
              "prompt": "A factory arm repeats fixed programmed positions. Which conclusion is justified?",
              "options": [
                "It must learn from data",
                "It is not a robot",
                "It can be a robot without AI",
                "It has human intelligence"
              ],
              "correct": 2,
              "explain": "Fixed instructions can control a robot. This alone is not evidence of AI or ML.",
              "ref": "50/ai",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [
            8
          ],
          "lab": null
        },
        {
          "id": "lab",
          "title": "Activity: analyse a robot",
          "kind": "lab",
          "minutes": "20 minutes guided practice",
          "lead": "Select a part to learn its function. Then match suitable devices to the task.",
          "html": "",
          "questions": [],
          "visuals": [],
          "lab": "robot"
        },
        {
          "id": "practice",
          "title": "Independent practice and feedback",
          "kind": "practice",
          "minutes": "25 minutes practice + 10 minutes feedback",
          "lead": "Link each answer to the situation. Do not just memorise a list of advantages and disadvantages.",
          "html": "",
          "questions": [
            {
              "id": "50-p1",
              "type": "written",
              "prompt": "Define robotics.",
              "model": "Robotics concerns the design, construction and operation of robots.",
              "rubric": [
                "Design.",
                "Construction.",
                "Operation of robots."
              ],
              "ref": "50/characteristics",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "50-p2",
              "type": "written",
              "prompt": "Describe three characteristics of a warehouse robot using examples.",
              "model": "It has a mechanical chassis and wheels. It has electrical parts such as distance sensors, a controller and motors. It is programmable, with instructions for selecting routes and moving loads.",
              "rubric": [
                "Describe the structure and give an example.",
                "Describe electrical components and give examples.",
                "Explain programmability with an example."
              ],
              "ref": "50/characteristics",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "50-p3",
              "type": "match",
              "prompt": "Match each robot task to its application.",
              "pairs": [
                [
                  "Repeated welding",
                  0
                ],
                [
                  "Assisted surgery",
                  1
                ],
                [
                  "Cleaning a home",
                  2
                ]
              ],
              "options": [
                "Industry",
                "Medicine",
                "Domestic",
                "Agriculture"
              ],
              "explain": "Match the task to the area. The area alone does not tell you whether a robot uses AI.",
              "ref": "50/applications",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "50-p4",
              "type": "written",
              "prompt": "Describe how a warehouse robot can avoid a nearby obstacle.",
              "model": "A distance sensor supplies a reading. The controller compares it with a safe-distance threshold. If too close, it sends signals to the wheel motors to stop or change direction. New readings are taken before continuing.",
              "rubric": [
                "Name a distance sensor.",
                "Explain how the controller compares a reading with a threshold.",
                "Explain how motors stop or change direction.",
                "Take new readings."
              ],
              "ref": "50/characteristics",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "50-p5",
              "type": "written",
              "prompt": "Explain two disadvantages of replacing a manual packing line with robots.",
              "model": "The robots require purchase, installation and programming, increasing setup cost. If product shapes change, grippers and instructions may need adjustment, stopping the line and adding cost.",
              "rubric": [
                "Give details of the investment needed.",
                "Link these details to setup cost.",
                "Explain limited flexibility when a product changes.",
                "Link this to changing tools, changing the program or stopping production."
              ],
              "ref": "50/applications",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "50-p6",
              "type": "mc",
              "prompt": "Which is an example of AI without a physical robot?",
              "options": [
                "A metal frame alone",
                "A diagnostic expert-system program",
                "A wheel with no electronics",
                "A manually operated wrench"
              ],
              "correct": 1,
              "explain": "An expert system is AI software. It does not need a physical robot body.",
              "ref": "50/ai",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "exit",
          "title": "Exit check",
          "kind": "exit",
          "minutes": "10 minutes, including home study",
          "lead": "Apply the ideas to a robot you have not yet discussed in class.",
          "html": "",
          "questions": [
            {
              "id": "50-e1",
              "type": "written",
              "prompt": "Name three robot characteristics.",
              "model": "Mechanical framework, electrical components and programmability.",
              "rubric": [
                "Mechanical structure.",
                "Electrical components.",
                "Programmable."
              ],
              "ref": "50/characteristics",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "50-e2",
              "type": "written",
              "prompt": "Explain why a robot vacuum needs sensors and motors.",
              "model": "Sensors provide data about obstacles or edges. The controller uses those readings to choose an action, and motors move the wheels or cleaning mechanism.",
              "rubric": [
                "Sensors supply data.",
                "The controller makes a decision.",
                "Motors create movement."
              ],
              "ref": "50/characteristics",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "50-e3",
              "type": "written",
              "prompt": "Can you conclude that every robot vacuum learns from data? Explain.",
              "model": "No. A robot vacuum may follow fixed rules using sensor readings. Learning requires evidence that a model or behaviour is adapted from data or experience.",
              "rubric": [
                "Do not assume that the robot uses ML.",
                "Explain the difference between fixed rules and learning from data."
              ],
              "ref": "50/ai",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "homework",
          "title": "Between-lesson review",
          "kind": "homework",
          "minutes": "Two short sessions",
          "lead": "Answer questions 1–2 after 2 days and questions 3–4 after 4–5 days. Lesson 51 checks robotics and revisits the control cycle.",
          "html": "",
          "questions": [
            {
              "id": "50-h1",
              "type": "written",
              "prompt": "Explain the electrical components of a crop-inspection robot.",
              "model": "Sensors or cameras collect crop data. A processor runs the program. Motors move the robot or position its camera.",
              "rubric": [
                "Name sensors and their data.",
                "Explain that the processor runs the program.",
                "Explain that motors create movement."
              ],
              "ref": "50/characteristics",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "50-h2",
              "type": "mc",
              "prompt": "A robot controlled by a person during an operation…",
              "options": [
                "Cannot contain actuators",
                "Must be a chatbot",
                "Can still have a programmable physical structure",
                "Must make every decision independently"
              ],
              "correct": 2,
              "explain": "A robot's level of independence is different from its basic characteristics.",
              "ref": "50/characteristics",
              "vi": "",
              "marks": 1
            },
            {
              "id": "50-h3",
              "type": "written",
              "prompt": "Explain one benefit and one limitation of a robotic film camera.",
              "model": "A programmed camera can repeat the same motion for multiple takes. If an actor moves unexpectedly, a fixed path may need adjustment and may not capture the scene correctly.",
              "rubric": [
                "Explain the benefit of repeating a camera movement.",
                "Explain what may happen when the scene changes."
              ],
              "ref": "50/applications",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "50-h4",
              "type": "written",
              "prompt": "Give one example in each region of a robotics–AI overlap diagram.",
              "model": "Fixed-sequence factory arm: robotics only. Robot with learned object recognition: both. Expert-system software: AI without a robot.",
              "rubric": [
                "Give a robotics example that does not need AI.",
                "Give an example that uses both robotics and AI.",
                "Give an AI example without a physical robot."
              ],
              "ref": "50/ai",
              "marks": 3,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        }
      ]
    },
    {
      "id": "51",
      "title": "AI & expert systems",
      "subtitle": "From facts and rules to a conclusion",
      "syllabus": "6.3",
      "source": "Coursebook pp.241–246, 249; Workbook 1 pp.91–94; syllabus 6.3.",
      "goals": [
        "Explain AI and its main characteristics. Distinguish AI from robotics.",
        "Describe the four components of an expert system and follow its reasoning."
      ],
      "sections": [
        {
          "id": "start",
          "title": "Recall lesson 50",
          "kind": "retrieval",
          "minutes": "15 minutes",
          "lead": "Four questions review robotics; two revisit automated systems. Answer in your own words.",
          "html": "",
          "questions": [
            {
              "id": "51-r1",
              "type": "written",
              "prompt": "What is robotics?",
              "model": "The design, construction and operation of robots.",
              "rubric": [
                "Design.",
                "Construction.",
                "Operation."
              ],
              "ref": "50/characteristics",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "51-r2",
              "type": "mc",
              "prompt": "Which item is part of a robot’s mechanical structure?",
              "options": [
                "An IF condition",
                "A jointed arm",
                "A training label",
                "A database query"
              ],
              "correct": 1,
              "explain": "A jointed arm is a physical part of the robot.",
              "ref": "50/characteristics",
              "vi": "",
              "marks": 1
            },
            {
              "id": "51-r3",
              "type": "written",
              "prompt": "Explain one limitation of a domestic cleaning robot.",
              "model": "It may be unable to cross stairs or avoid loose cables, so a person must prepare the room or clean inaccessible areas.",
              "rubric": [
                "Describe a specific limit.",
                "Explain why a person may need to help."
              ],
              "ref": "50/applications",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "51-r4",
              "type": "mc",
              "prompt": "Does every programmable robot use AI?",
              "options": [
                "Yes, programming is AI",
                "No, a fixed sequence can control a robot",
                "Yes, every motor learns",
                "No robot can use AI"
              ],
              "correct": 1,
              "explain": "Being programmable does not automatically mean using AI.",
              "ref": "50/ai",
              "vi": "",
              "marks": 1
            },
            {
              "id": "51-r5",
              "type": "order",
              "prompt": "Order a door-control cycle.",
              "items": [
                "Motor moves the door",
                "Sensor detects a person",
                "Processor decides to open",
                "Processor sends a signal"
              ],
              "correct": [
                1,
                2,
                3,
                0
              ],
              "explain": "Receive data → process it → send a signal → actuator acts.",
              "ref": "49/mechanism",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "51-r6",
              "type": "written",
              "prompt": "Why is a sensor reading not the same thing as a decision?",
              "model": "A reading is input data. A decision follows when the processor applies programmed conditions to that data.",
              "rubric": [
                "Describe the input data.",
                "Explain that the processor applies conditions to the data."
              ],
              "ref": "49/mechanism",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "ai",
          "title": "1. Artificial intelligence",
          "kind": "theory",
          "minutes": "7 minutes",
          "lead": "AI uses computers to simulate intelligent behaviour. Not every AI system learns or adapts.",
          "html": "<section class=\"panel reveal-block\"><h2>Definition and main characteristics</h2><p><b>Artificial intelligence (AI)</b> is an area of computer science concerned with simulating intelligent behaviour. Examples include reasoning to reach a conclusion, recognising patterns and processing language.</p><p>For Unit 6, describe <b>data</b>, <b>rules or processes for using that data</b>, and the <b>ability to reason</b>. Some systems can also <b>learn and adapt</b>. Do not claim that every AI system learns by itself or has human thoughts and feelings.</p><p><b>Reasoning</b> means using facts and rules to reach a conclusion. For example, a user enters “travels on a road” and “uses pedals”. Suitable rules can identify a bicycle within a small example system.</p></section><section class=\"panel reveal-block\"><h2>Two ways to simulate intelligent behaviour</h2><div class=\"table-wrap\"><table><thead><tr><th>Feature</th><th>Expert system</th><th>Machine learning</th></tr></thead><tbody><tr><td>Basis for decisions</td><td>Knowledge and rules supplied by experts or developers.</td><td>Patterns learned from data during training.</td></tr><tr><td>Example</td><td>A fault-diagnosis system asks about symptoms and applies rules.</td><td>A spam filter learns from messages that have already been classified.</td></tr><tr><td>Shared features</td><td>Uses data and programmed software. It can make mistakes.</td><td>Also uses data and programmed software. Its results can be wrong.</td></tr></tbody></table></div><div class=\"callout\"><strong>Looking ahead to lesson 52</strong><p>Today we focus on expert systems. Next lesson, we will change training data and see how predictions change.</p></div></section>",
          "questions": [
            {
              "id": "51-c1",
              "type": "mc",
              "prompt": "Which statement about AI is accurate?",
              "options": [
                "All AI must have a robot body",
                "All AI must learn continuously",
                "AI can use rules to reason; some systems can learn",
                "AI never uses programmed software"
              ],
              "correct": 2,
              "explain": "Learning is possible, but not required in all AI. An expert system with fixed rules is still AI.",
              "ref": "51/ai",
              "vi": "",
              "marks": 1
            },
            {
              "id": "51-c2",
              "type": "written",
              "prompt": "Explain what reasoning means in an AI system.",
              "model": "The system uses data or facts with rules to draw a conclusion that follows from them.",
              "rubric": [
                "Use facts and rules.",
                "Draw a conclusion."
              ],
              "ref": "51/ai",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [
            8
          ],
          "lab": null
        },
        {
          "id": "components",
          "title": "2. Four expert-system components",
          "kind": "theory",
          "minutes": "8 minutes",
          "lead": "An expert system simulates an expert's decision-making in a limited subject area.",
          "html": "<section class=\"panel reveal-block\"><h2>A problem that needs more questions</h2><p>External speakers make no sound. This does not prove that the speakers are broken. They may have no power, use the wrong port or not be selected as the audio output.</p><p>An <b>expert system</b> asks about symptoms. It uses specialist knowledge and rules to reach a conclusion or suggest the next check. The user may not see all the rules, but their answers provide facts for the reasoning process.</p></section><section class=\"panel reveal-block\"><h2>Separate storage from processing</h2><div class=\"table-wrap\"><table><thead><tr><th>Component</th><th>Function</th><th>Example</th></tr></thead><tbody><tr><td>User interface</td><td>Exchanges questions and answers with the user and displays results.</td><td>Asks “Is the speaker's power light on?”</td></tr><tr><td>Knowledge base</td><td>Stores facts and knowledge about the subject. These may include objects and their properties.</td><td>Facts about speakers, or a table of vehicles and their features.</td></tr><tr><td>Rule base</td><td>Stores inference rules, often written as IF…THEN….</td><td>IF the power is off THEN suggest checking the power supply.</td></tr><tr><td>Inference engine</td><td>Applies rules to facts to reach a conclusion. It may work out which information is still needed.</td><td>Uses the power and connection status to select a suitable suggestion.</td></tr></tbody></table></div><p>The knowledge base does not run the rules. The rule base stores rules; the inference engine uses them. The interface does not make the diagnosis on its own.</p></section><section class=\"panel reveal-block\"><h2>Explain the flow</h2><ol class=\"step-list\"><li>The interface asks questions and the user enters facts.</li><li>The inference engine uses these facts with knowledge from the knowledge base.</li><li>It checks the conditions in the rule base and applies matching rules.</li><li>If information is missing, the system asks more questions or reports that it cannot yet reach a conclusion.</li><li>The interface displays the result or the next suggestion.</li></ol><div class=\"callout\"><strong>Core and extra content</strong><p>These four components are the core structure. An explanation system can show the reasoning. It is extra content and does not replace the inference engine.</p></div></section>",
          "questions": [
            {
              "id": "51-c3",
              "type": "match",
              "prompt": "Match each role to its component.",
              "pairs": [
                [
                  "Stores domain facts",
                  0
                ],
                [
                  "Stores IF–THEN rules",
                  1
                ],
                [
                  "Applies rules to facts",
                  2
                ],
                [
                  "Asks and displays information",
                  3
                ]
              ],
              "options": [
                "Knowledge base",
                "Rule base",
                "Inference engine",
                "User interface"
              ],
              "explain": "Do not confuse the place that stores rules with the part that applies them.",
              "ref": "51/components",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "51-c4",
              "type": "mc",
              "prompt": "Which component should derive a conclusion?",
              "options": [
                "User interface alone",
                "Inference engine",
                "Rule base storage alone",
                "The screen cable"
              ],
              "correct": 1,
              "explain": "The inference engine carries out the reasoning.",
              "ref": "51/components",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [
            9,
            10
          ],
          "lab": null
        },
        {
          "id": "trace",
          "title": "3. Trace and evaluate a conclusion",
          "kind": "theory",
          "minutes": "5 minutes + a guided example",
          "lead": "Use a small knowledge base to check each step of a conclusion.",
          "html": "<section class=\"panel reveal-block\"><h2>Facts and rules are different</h2><div class=\"table-wrap\"><table><thead><tr><th>Object</th><th>Surface</th><th>Power</th></tr></thead><tbody><tr><td>Tram</td><td>Rails</td><td>Electric</td></tr><tr><td>Bicycle</td><td>Road</td><td>Pedals</td></tr><tr><td>Electric car</td><td>Road</td><td>Electric</td></tr></tbody></table></div><pre>R1: IF surface = rails AND power = electric THEN tram\nR2: IF surface = road AND power = pedals THEN bicycle\nR3: IF surface = road AND power = electric THEN electric car</pre><p>The table stores objects and their properties. The IF–THEN statements are rules. If the user enters “road” and “pedals”, R1 does not match but R2 does. The conclusion is bicycle. If power changes to electric, R3 matches.</p><p>Visual 11 uses the shorter condition “rails” for a tram because only one object in that example uses rails. The activity checks both properties so you can practise using complete facts.</p></section><section class=\"panel reveal-block\"><h2>No match does not mean “guess”</h2><p>With surface = water and power = electric, none of these rules matches. The system should report <b>no supported conclusion in this rule set</b>. It should not guess electric car.</p><p>If surface = road but power is unknown, both bicycle and electric car are still possible. The system needs more information. This example contains only three vehicles, not every real-world vehicle.</p></section><section class=\"panel reveal-block\"><h2>Build and use an expert system</h2><p>Collect knowledge from experts or reliable sources. Build the knowledge base, rule base, inference engine and interface. Test cases with known answers. Correct rules and update the system when the subject knowledge changes.</p><p><b>Benefits:</b> more people can use specialist knowledge. The system can apply the same rules consistently, respond quickly and show which rules it used.</p><p><b>Limits:</b> collecting and updating knowledge takes work. Incorrect facts or missing rules can lead to a wrong answer. The system may struggle outside its subject area. A consistent answer is not always a correct or unbiased answer.</p><p>Other examples include finding machine faults, identifying plants and analysing rock samples. Explain what facts the user provides and what type of conclusion the system produces.</p></section>",
          "questions": [
            {
              "id": "51-c5",
              "type": "mc",
              "prompt": "With road and pedals, which rule matches the demonstration?",
              "options": [
                "R1",
                "R2",
                "R3",
                "All three"
              ],
              "correct": 1,
              "explain": "R2 requires both surface = road and power = pedals.",
              "ref": "51/trace",
              "vi": "",
              "marks": 1
            },
            {
              "id": "51-c6",
              "type": "written",
              "prompt": "Why should an expert system avoid giving a definite answer when no rule matches?",
              "model": "The available facts and rules do not support a conclusion. Guessing would present unsupported information as expert advice; the system should request more data or report no match.",
              "rubric": [
                "The facts or rules do not support a conclusion.",
                "Ask for more information or report that no rule matches."
              ],
              "ref": "51/trace",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [
            11,
            12
          ],
          "lab": null
        },
        {
          "id": "lab",
          "title": "Activity: an expert system",
          "kind": "lab",
          "minutes": "20 minutes guided practice",
          "lead": "Enter facts, follow the steps and identify the matching rule. Try missing facts and a case with no match.",
          "html": "",
          "questions": [],
          "visuals": [],
          "lab": "expert"
        },
        {
          "id": "practice",
          "title": "Independent practice and feedback",
          "kind": "practice",
          "minutes": "25 minutes practice + 10 minutes feedback",
          "lead": "Separate the user's answers, stored knowledge and the process of applying rules.",
          "html": "",
          "questions": [
            {
              "id": "51-p1",
              "type": "written",
              "prompt": "Define artificial intelligence.",
              "model": "AI is a branch of computer science concerned with simulating intelligent behaviour using computers.",
              "rubric": [
                "An area of computer science.",
                "Simulating intelligent behaviour."
              ],
              "ref": "51/ai",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "51-p2",
              "type": "mc",
              "prompt": "“IF leaves have spots THEN suggest checking for disease” belongs in the…",
              "options": [
                "Rule base",
                "User interface",
                "Motor",
                "Knowledge base only, never a rule"
              ],
              "correct": 0,
              "explain": "This is a rule with a condition and a conclusion.",
              "ref": "51/components",
              "vi": "",
              "marks": 1
            },
            {
              "id": "51-p3",
              "type": "order",
              "prompt": "Order a basic expert-system consultation.",
              "items": [
                "Interface displays the conclusion",
                "User provides facts through the interface",
                "Inference engine uses facts and checks rules",
                "A matching rule supports a conclusion"
              ],
              "correct": [
                1,
                2,
                3,
                0
              ],
              "explain": "Facts → apply rules → conclusion → display.",
              "ref": "51/components",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "51-p4",
              "type": "written",
              "prompt": "Explain the roles of the knowledge base and inference engine in identifying a plant.",
              "model": "The knowledge base stores facts about plants and their attributes. The inference engine uses the observed attributes and rules to find a supported identification.",
              "rubric": [
                "The knowledge base stores facts and properties about plants.",
                "The inference engine uses the facts.",
                "It applies rules to identify a plant."
              ],
              "ref": "51/components",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "51-p5",
              "type": "written",
              "prompt": "A device-diagnosis expert system gives the same wrong result repeatedly. Explain one possible cause and one improvement.",
              "model": "A rule may encode an incorrect relationship, so the engine consistently applies it to similar cases. Review that rule with an expert and test the revised system using cases with known outcomes.",
              "rubric": [
                "Explain a possible error in a rule or the data.",
                "Explain why a consistent answer can still be wrong.",
                "Describe a change that addresses the cause.",
                "Test cases with known results."
              ],
              "ref": "51/trace",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "51-p6",
              "type": "written",
              "prompt": "Explain why an expert system with fixed rules is still AI even if it does not learn.",
              "model": "It can simulate expert decision-making by reasoning with facts and rules. Learning is a possible characteristic of AI, but it is not required for every AI system.",
              "rubric": [
                "Simulate expert reasoning or decisions.",
                "Use facts and rules.",
                "Learning is not required in every AI system."
              ],
              "ref": "51/ai",
              "marks": 3,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "exit",
          "title": "Exit check",
          "kind": "exit",
          "minutes": "10 minutes, including home study",
          "lead": "Draw the diagram yourself before opening the reference image.",
          "html": "",
          "questions": [
            {
              "id": "51-e1",
              "type": "written",
              "prompt": "Name the four core components of an expert system.",
              "model": "User interface, knowledge base, rule base and inference engine.",
              "rubric": [
                "Interface.",
                "Knowledge base.",
                "Rule base.",
                "Inference engine."
              ],
              "ref": "51/components",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "51-e2",
              "type": "written",
              "prompt": "A user enters road but leaves power unknown. Why can the demonstration not yet choose a vehicle?",
              "model": "Both the bicycle and electric car have road as their surface. The system needs the power attribute to distinguish the matching rules.",
              "rubric": [
                "Road matches more than one possible vehicle.",
                "The power property is needed."
              ],
              "ref": "51/trace",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "51-e3",
              "type": "written",
              "prompt": "Explain one limitation of using an expert system to identify an unfamiliar plant.",
              "model": "If the plant or its relevant attributes are absent from the knowledge and rules, the system may fail to identify it or return an inappropriate conclusion.",
              "rubric": [
                "The knowledge or rules do not cover the case.",
                "Explain the effect on identification."
              ],
              "ref": "51/trace",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "homework",
          "title": "Between-lesson review",
          "kind": "homework",
          "minutes": "Two short sessions",
          "lead": "Answer questions 1–2 after 2 days and questions 3–4 after 4–5 days. Lesson 52 checks AI and expert systems before introducing ML.",
          "html": "",
          "questions": [
            {
              "id": "51-h1",
              "type": "written",
              "prompt": "Explain the difference between the rule base and inference engine.",
              "model": "The rule base stores rules; the inference engine selects and applies them to facts to derive conclusions.",
              "rubric": [
                "Store the rules.",
                "Apply the rules to reach a conclusion."
              ],
              "ref": "51/components",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "51-h2",
              "type": "mc",
              "prompt": "An interface is mainly used to…",
              "options": [
                "Replace the knowledge base",
                "Exchange information with the user",
                "Physically move a robot",
                "Automatically learn all rules"
              ],
              "correct": 1,
              "explain": "The interface exchanges information with the user.",
              "ref": "51/components",
              "vi": "",
              "marks": 1
            },
            {
              "id": "51-h3",
              "type": "written",
              "prompt": "Write a demonstration rule for a bicycle using road and pedals.",
              "model": "IF surface = road AND power = pedals THEN object = bicycle.",
              "rubric": [
                "Include both conditions.",
                "Use AND and conclude bicycle."
              ],
              "ref": "51/trace",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "51-h4",
              "type": "written",
              "prompt": "Explain two steps needed when updating an expert system for new equipment.",
              "model": "Experts supply facts about the new equipment and rules are added or revised. The updated system is tested against known fault cases to check its conclusions.",
              "rubric": [
                "Collect new knowledge.",
                "Update facts or rules.",
                "Test against known results."
              ],
              "ref": "51/trace",
              "marks": 3,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        }
      ]
    },
    {
      "id": "52",
      "title": "Machine learning",
      "subtitle": "Learn from data and predict new cases",
      "syllabus": "6.3",
      "source": "Coursebook pp.246–248; Workbook 1 pp.92–95; syllabus 6.3.",
      "goals": [
        "Explain how learning from data changes a system, instead of writing each answer by hand.",
        "Distinguish training from prediction. Compare ML with expert systems."
      ],
      "sections": [
        {
          "id": "start",
          "title": "Recall lesson 51",
          "kind": "retrieval",
          "minutes": "15 minutes",
          "lead": "Four questions review AI and expert systems. Two revisit automated systems and robotics.",
          "html": "",
          "questions": [
            {
              "id": "52-r1",
              "type": "mc",
              "prompt": "Which component applies inference rules?",
              "options": [
                "Rule base",
                "Knowledge base",
                "Inference engine",
                "User interface"
              ],
              "correct": 2,
              "explain": "The inference engine applies rules. The bases store information.",
              "ref": "51/components",
              "vi": "",
              "marks": 1
            },
            {
              "id": "52-r2",
              "type": "written",
              "prompt": "Describe two main characteristics of AI.",
              "model": "AI uses data and rules or processes for using that data, and can reason to produce conclusions. Some AI can also learn and adapt.",
              "rubric": [
                "Describe data and how it is used.",
                "Describe reasoning. If you mention learning, do not claim that every AI system learns."
              ],
              "ref": "51/ai",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "52-r3",
              "type": "match",
              "prompt": "Match these expert-system examples.",
              "pairs": [
                [
                  "Stored facts about plants",
                  0
                ],
                [
                  "IF–THEN statements",
                  1
                ],
                [
                  "Question and answer screen",
                  2
                ]
              ],
              "options": [
                "Knowledge base",
                "Rule base",
                "User interface"
              ],
              "explain": "Facts, rules and the interface have different roles.",
              "ref": "51/components",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "52-r4",
              "type": "written",
              "prompt": "What should happen when an expert system has insufficient facts?",
              "model": "It should ask for relevant missing information or report that a supported conclusion cannot yet be reached.",
              "rubric": [
                "Ask for more facts or report missing information.",
                "Do not give a definite conclusion without support."
              ],
              "ref": "51/trace",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "52-r5",
              "type": "written",
              "prompt": "Explain how an actuator differs from a sensor.",
              "model": "A sensor measures and supplies input; an actuator produces a physical action from a control signal.",
              "rubric": [
                "Describe measurement and input.",
                "Describe the control signal and physical action."
              ],
              "ref": "49/mechanism",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "52-r6",
              "type": "mc",
              "prompt": "Which robot can operate without machine learning?",
              "options": [
                "A fixed-sequence assembly arm",
                "No robot",
                "Only a human-shaped robot",
                "Only a robot with no program"
              ],
              "correct": 0,
              "explain": "A fixed sequence of positions does not require learning from data.",
              "ref": "50/ai",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "learning",
          "title": "1. How machine learning works",
          "kind": "theory",
          "minutes": "10 minutes",
          "lead": "Key idea: learning can change a program's model, data or processing.",
          "html": "<section class=\"panel reveal-block\"><h2>From examples to predictions</h2><p><b>Machine learning (ML)</b> is a way to build AI systems. A program learns from data or experience to change its model, data or processing. It can find patterns and make predictions about new inputs. A programmer does not write a separate answer for every possible input.</p><p>People still choose the task, data and learning method. The training software is still programmed. Learning without a hand-written answer for each case does not mean working without software.</p><p><b>Spam-filter example:</b> the system learns patterns from messages already labelled as spam or legitimate mail. It uses those patterns to classify a new message. A person writing one rule, such as “if the message contains X, mark it as spam”, is not enough to show that learning has taken place.</p></section><section class=\"panel reveal-block\"><h2>A supervised-learning example</h2><p>Visual 13 shows apple and banana cards. The training cards have known class labels. The new cards have not yet been classified. This is <b>supervised learning</b>, used here to explain the main idea. Not all machine learning needs labels.</p><ol class=\"step-list\"><li>Collect examples with input features and known correct labels.</li><li>Train: a learning method uses the examples to build or change a model.</li><li>Give the trained model a new input.</li><li>The model makes a prediction. It may be right or wrong.</li><li>Check predictions on test data that was not used for training. Study the mistakes and improve the data or model.</li></ol></section><section class=\"panel reveal-block\"><h2>Keep these terms separate</h2><div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Meaning in this example</th></tr></thead><tbody><tr><td>Feature</td><td>An input property used for classification, such as shape or size.</td></tr><tr><td>Label</td><td>The known correct class or result for a supervised-learning example.</td></tr><tr><td>Training</td><td>Using examples to build or change a model.</td></tr><tr><td>Trained model</td><td>What the system has learned, ready to use with new inputs.</td></tr><tr><td>Prediction</td><td>The result given by the model. Compare it with the correct answer to evaluate it.</td></tr></tbody></table></div><div class=\"callout\"><strong>Explain the link to data</strong><p>Examples → learning or adaptation → model or process → prediction on new data. Explain what changes through learning. Do not just say “the machine is smart”.</p></div></section>",
          "questions": [
            {
              "id": "52-c1",
              "type": "mc",
              "prompt": "Which is evidence of machine learning?",
              "options": [
                "A programmer writes the answer for every input",
                "Training examples influence the model’s later predictions",
                "A motor spins at a fixed speed",
                "A sensor measures temperature"
              ],
              "correct": 1,
              "explain": "A prediction depends on what the system learned from data. Simply receiving input does not prove learning.",
              "ref": "52/learning",
              "vi": "",
              "marks": 1
            },
            {
              "id": "52-c2",
              "type": "written",
              "prompt": "Explain the difference between training and prediction.",
              "model": "Training uses examples to build or adapt a model. Prediction applies the trained model to an input to produce a result.",
              "rubric": [
                "Use examples to build or change a model.",
                "Use the trained model to produce a result."
              ],
              "ref": "52/learning",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [
            13,
            14
          ],
          "lab": null
        },
        {
          "id": "quality",
          "title": "2. Why training data matters",
          "kind": "theory",
          "minutes": "5 minutes",
          "lead": "A prediction can be wrong. Explain how the training data and the conditions of use can affect it.",
          "html": "<section class=\"panel reveal-block\"><h2>Use suitable, varied examples</h2><p>If a model only sees red apples and yellow bananas during training, it may rely too much on colour. It may then classify a green apple or green banana incorrectly. More varied examples can help it learn useful features, but do not guarantee perfect results.</p><p>A wrong label teaches the wrong target. Too few examples, an uneven balance of classes or data unlike the real task can lead to poor predictions. More data is not automatically correct or useful data.</p><p>A model trained only to choose apple or banana may put a pear in the wrong class. It may have no way to recognise that the pear is outside its two known classes.</p></section><section class=\"panel reveal-block\"><h2>Test with examples kept separate from training</h2><p>Keep test examples separate from training examples. Make predictions first, then compare them with the correct test labels. If the model learns the test answers in advance, the test is less useful for checking how it handles new cases.</p><p>The activity counts correct predictions on <b>four fixed test points</b>. The score describes these four points only. It does not prove the same accuracy in the real world.</p><div class=\"callout\"><strong>A simple teaching model</strong><p>Visual 15 uses the nearest training example to show the effect of data. You do not need advanced formulas or algorithms for the core Unit 6 goals.</p></div></section>",
          "questions": [
            {
              "id": "52-c3",
              "type": "written",
              "prompt": "Why might a classifier trained only on clear daylight images perform poorly at night?",
              "model": "Night images may have lighting and features unlike the training examples. The model has insufficient representative experience of those conditions, so it may make incorrect predictions.",
              "rubric": [
                "Explain how the new conditions differ from the training data.",
                "Link this difference to poor or incorrect predictions."
              ],
              "ref": "52/quality",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "52-c4",
              "type": "mc",
              "prompt": "When should test labels be checked in a fair held-out evaluation?",
              "options": [
                "Before training on those same test cases",
                "After predictions are produced",
                "They must be deleted forever",
                "Only after all wrong predictions are changed"
              ],
              "correct": 1,
              "explain": "Predict first, then check the test labels. Do not use the test answers for training.",
              "ref": "52/quality",
              "vi": "",
              "marks": 1
            }
          ],
          "visuals": [
            15
          ],
          "lab": null
        },
        {
          "id": "compare",
          "title": "3. Compare and connect Unit 6 ideas",
          "kind": "theory",
          "minutes": "5 minutes",
          "lead": "One system may combine automation, robotics and AI. These terms describe different parts of how it works.",
          "html": "<section class=\"panel reveal-block\"><h2>Expert systems and ML</h2><div class=\"table-wrap\"><table><thead><tr><th>Comparison</th><th>Expert system</th><th>Machine learning</th></tr></thead><tbody><tr><td>Where decision behaviour comes from</td><td>Experts or developers supply knowledge and rules.</td><td>A learning method finds patterns or changes a model using data.</td></tr><tr><td>How it produces a result</td><td>The inference engine applies rules to facts.</td><td>A trained model predicts a result for an input.</td></tr><tr><td>How it can be improved</td><td>Change facts or rules and test the system.</td><td>Improve the examples, labels or training method, then test again.</td></tr><tr><td>Possible limits</td><td>Incorrect or missing knowledge and rules; cases outside its subject.</td><td>Unrepresentative data, incorrect labels or an unsuitable model.</td></tr></tbody></table></div><p>Both use software. An expert system may not learn. An ML model may be trained in separate sessions; it does not have to change after every use.</p></section><section class=\"panel reveal-block\"><h2>Combined example: a sorting robot</h2><ol class=\"step-list\"><li>A camera captures an image of a box — input.</li><li>A trained ML model predicts the type of box — AI supports recognition.</li><li>A control program chooses where to place the box — processing and control.</li><li>Motors move the arm and gripper — robotics and actuation.</li><li>Sensors check the position or detect obstacles. The control cycle continues — automated control.</li></ol><p>If the system instead reads a product code and uses a fixed lookup table, it can still be an automated robot. A camera alone does not prove that ML is used.</p></section><section class=\"panel reveal-block\"><h2>More ML examples</h2><p><b>Spam filtering:</b> learn from classified messages to predict the class of a new message. <b>Recommendations:</b> use patterns in choices or preferences to suggest suitable content. <b>Anomaly detection:</b> learn normal patterns and flag unusual cases for review.</p><p>These outputs are predictions or suggestions. Think about the effects of a false alarm or a missed case in the given situation. You do not need to memorise the algorithms used by a commercial product.</p></section>",
          "questions": [
            {
              "id": "52-c5",
              "type": "written",
              "prompt": "Explain how a sorting robot could use both machine learning and automated control.",
              "model": "A model trained on labelled images predicts the object class. The controller uses that result and sensor readings to send signals to motors, which move the gripper to the required destination.",
              "rubric": [
                "Explain that ML learns from images and makes a prediction.",
                "Explain how the controller uses the result and sensor data.",
                "Explain the motor or gripper action."
              ],
              "ref": "52/compare",
              "marks": 3,
              "vi": ""
            }
          ],
          "visuals": [
            16
          ],
          "lab": null
        },
        {
          "id": "lab",
          "title": "Activity: change data, change predictions",
          "kind": "lab",
          "minutes": "20 minutes guided practice",
          "lead": "Run a prediction. Change one training label and train again with the same input. Also check the score on the fixed test set.",
          "html": "<div class=\"callout\"><strong>See the effect of training data</strong><p>The model predicts using the nearest training example, based on two features. Test points have separate correct labels and are not added to the training set. This simple model helps explain why data matters.</p></div>",
          "questions": [],
          "visuals": [],
          "lab": "ml"
        },
        {
          "id": "practice",
          "title": "Independent practice and feedback",
          "kind": "practice",
          "minutes": "25 minutes practice + 10 minutes feedback",
          "lead": "Recall, explain and apply the ideas to new situations. Link each point to data, processing or a specific action.",
          "html": "",
          "questions": [
            {
              "id": "52-p1",
              "type": "written",
              "prompt": "Explain what machine learning means.",
              "model": "A program uses data or experience to adapt its model or processes, enabling it to make predictions on new inputs without a separate hand-written answer for each input.",
              "rubric": [
                "Learn from data or experience.",
                "Change a model or process.",
                "Apply it to new data."
              ],
              "ref": "52/learning",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "52-p2",
              "type": "order",
              "prompt": "Order a simple supervised-learning workflow.",
              "items": [
                "Predict labels for held-out inputs",
                "Collect labelled training examples",
                "Compare predictions with held-out labels",
                "Train a model"
              ],
              "correct": [
                1,
                3,
                0,
                2
              ],
              "explain": "Training examples → train → predict → evaluate.",
              "ref": "52/learning",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "52-p3",
              "type": "mc",
              "prompt": "A person manually changes an IF threshold from 20 to 25. Is this alone evidence of ML?",
              "options": [
                "Yes, every change is learning",
                "No, the change was manually specified",
                "Yes, IF always means AI",
                "No program can ever learn"
              ],
              "correct": 1,
              "explain": "ML needs learning or adaptation from data or experience. Manually changing a threshold is not enough.",
              "ref": "52/learning",
              "vi": "",
              "marks": 1
            },
            {
              "id": "52-p4",
              "type": "written",
              "prompt": "Explain two ways poor training data can affect an image classifier.",
              "model": "Incorrect labels teach incorrect associations, so similar new images may be misclassified. If the examples exclude an important lighting condition, the classifier may perform poorly when used in that condition.",
              "rubric": [
                "Identify incorrect labels.",
                "Explain how wrong labels can lead to wrong predictions.",
                "Explain a lack of representative examples.",
                "Link this to a new case."
              ],
              "ref": "52/quality",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "52-p5",
              "type": "written",
              "prompt": "Compare how an expert system and a machine-learning system obtain their decision behaviour.",
              "model": "An expert system uses domain knowledge and rules supplied by experts or developers. A machine-learning system adapts a model from training examples. Both use programmed software to produce results.",
              "rubric": [
                "Expert system: supplied knowledge and rules.",
                "ML: patterns or a model learned from data.",
                "Both use programmed software."
              ],
              "ref": "52/compare",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "52-p6",
              "type": "written",
              "prompt": "A crop robot identifies diseased leaves using a trained model and then sprays them. Explain the roles of its camera, model, controller and actuator.",
              "model": "The camera provides image data. The trained model predicts whether a leaf shows disease. The controller uses that prediction and safety conditions to decide whether to spray. A valve actuator controls the spray.",
              "rubric": [
                "The camera supplies image data.",
                "The model makes a prediction.",
                "The controller makes a decision and sends a signal.",
                "A valve controls the spray."
              ],
              "ref": "52/compare",
              "marks": 4,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "exit",
          "title": "Exit check",
          "kind": "exit",
          "minutes": "10 minutes, including home study",
          "lead": "Finish this lesson by checking ML. Review it again in lessons 53, 54 and 56.",
          "html": "",
          "questions": [
            {
              "id": "52-e1",
              "type": "written",
              "prompt": "Distinguish a training example from a new input.",
              "model": "A training example is used to build or adapt the model. A new input is presented for prediction after training and was not used as that training example.",
              "rubric": [
                "Its role during training.",
                "Its role during prediction."
              ],
              "ref": "52/learning",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "52-e2",
              "type": "written",
              "prompt": "Why can changing a training label change a later prediction?",
              "model": "The learning method uses those labels to associate inputs with classes. A changed label can change the learned representation or the class selected for a similar new input.",
              "rubric": [
                "Labels guide the learning process.",
                "Explain how similar inputs may get different predictions. Do not claim that every prediction must change."
              ],
              "ref": "52/quality",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "52-e3",
              "type": "written",
              "prompt": "A system reads barcodes and follows fixed routing rules. Does this description prove machine learning? Explain.",
              "model": "No. Reading a code and applying fixed rules can be done without learning from examples. Evidence of data-driven adaptation would be needed.",
              "rubric": [
                "There is not enough evidence.",
                "Fixed rules are different from learning from data."
              ],
              "ref": "52/compare",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "homework",
          "title": "Between-lesson review and preparation for lesson 53",
          "kind": "homework",
          "minutes": "Two short sessions",
          "lead": "Answer questions 1–2 after 2 days and questions 3–4 after 4–5 days. Start lesson 53 with the review questions.",
          "html": "",
          "questions": [
            {
              "id": "52-h1",
              "type": "mc",
              "prompt": "Which claim is justified by 3 correct predictions on 4 test cases?",
              "options": [
                "The system is always 75% correct",
                "It is correct on 3 of these 4 cases",
                "It cannot make errors",
                "Training is unnecessary"
              ],
              "correct": 1,
              "explain": "A test score describes performance on that test set. It does not guarantee correct results in every real situation.",
              "ref": "52/quality",
              "vi": "",
              "marks": 1
            },
            {
              "id": "52-h2",
              "type": "written",
              "prompt": "Why should a spam classifier see examples of both spam and legitimate messages?",
              "model": "Examples of both classes help it learn distinctions. With inadequate representation of legitimate messages, it may incorrectly label useful mail as spam.",
              "rubric": [
                "The system needs to distinguish both classes.",
                "Explain the effect of having no examples of legitimate email."
              ],
              "ref": "52/quality",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "52-h3",
              "type": "written",
              "prompt": "Compare a learned fruit classifier with an expert system using written fruit rules.",
              "model": "The classifier learns patterns from examples. The expert system applies supplied facts and IF–THEN rules. Either can fail if its data or knowledge does not represent the fruit being examined.",
              "rubric": [
                "Explain where ML gets its decision-making pattern.",
                "Explain where an expert system gets its knowledge and rules.",
                "Give a suitable limitation."
              ],
              "ref": "52/compare",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "52-h4",
              "type": "written",
              "prompt": "Suggest a sensible improvement if a model fails on green apples.",
              "model": "Collect correctly labelled examples that include green apples and other relevant variation, train or update the model and evaluate it on separate unseen examples.",
              "rubric": [
                "Use varied, correctly labelled data.",
                "Update the data and train again.",
                "Evaluate using separate test data."
              ],
              "ref": "52/quality",
              "marks": 3,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        }
      ]
    }
  ],
  "extras": [
    {
      "id": "review",
      "title": "Review and exam practice",
      "subtitle": "Recall over time; check each answer",
      "syllabus": "6.1–6.3",
      "source": "These original practice questions follow the Unit 6 objectives. They are not official exam questions.",
      "sections": [
        {
          "id": "53",
          "title": "Spaced review · Lesson 53",
          "kind": "retrieval",
          "minutes": "10–15 minutes",
          "lead": "Review recent ML learning and return to automated systems from lesson 49.",
          "html": "",
          "questions": [
            {
              "id": "53-1",
              "type": "written",
              "prompt": "Explain how a program can learn from sample data.",
              "model": "A training method uses examples to adapt a model or processes, which are then applied to new inputs.",
              "rubric": [
                "Use examples as training data.",
                "Adapt a model or process.",
                "Apply it to new data."
              ],
              "ref": "52/learning",
              "marks": 3,
              "vi": ""
            },
            {
              "id": "53-2",
              "type": "mc",
              "prompt": "Which is the fairest test of a classifier?",
              "options": [
                "Use the same labelled data to train and claim general success",
                "Predict on separate cases, then check their labels",
                "Change test labels to match predictions",
                "Ignore all mistakes"
              ],
              "correct": 1,
              "explain": "Test on unseen cases. Keep the test answers separate from training.",
              "ref": "52/quality",
              "vi": "",
              "marks": 1
            },
            {
              "id": "53-3",
              "type": "written",
              "prompt": "Explain a limitation of a classifier trained only on one fruit variety.",
              "model": "It may learn features specific to that variety and fail on relevant variations, so its predictions may not generalise to other examples.",
              "rubric": [
                "Explain the lack of variety.",
                "Explain the effect on new inputs."
              ],
              "ref": "52/quality",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "53-4",
              "type": "written",
              "prompt": "Describe how an automatic freezer reacts when the temperature is above its limit.",
              "model": "A sensor sends a reading; the processor compares it with the limit and signals the cooling actuator to operate. Further readings determine later actions.",
              "rubric": [
                "Measure the condition.",
                "Compare the reading with a set value.",
                "Send a signal and carry out an action.",
                "Take another reading."
              ],
              "ref": "49/mechanism",
              "marks": 4,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "54",
          "title": "Spaced review · Lesson 54",
          "kind": "retrieval",
          "minutes": "10 minutes at the start",
          "lead": "Use a different situation to check whether you can apply the same ideas.",
          "html": "",
          "questions": [
            {
              "id": "54-1",
              "type": "written",
              "prompt": "Distinguish the knowledge base and rule base in an animal-identification system.",
              "model": "The knowledge base stores animal facts and attributes. The rule base stores conditional rules used to infer an identification.",
              "rubric": [
                "Store knowledge and facts.",
                "Apply rules using the inference engine."
              ],
              "ref": "51/components",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "54-2",
              "type": "mc",
              "prompt": "Which statement links a robot benefit to context?",
              "options": [
                "Robots are better",
                "A welding robot repeats a path, helping make consistent welds",
                "All robots are cheap",
                "Robots never break"
              ],
              "correct": 1,
              "explain": "A strong answer explains the process and a specific effect.",
              "ref": "50/applications",
              "vi": "",
              "marks": 1
            },
            {
              "id": "54-3",
              "type": "written",
              "prompt": "Explain how a robot can use sensors without machine learning.",
              "model": "The controller can compare readings with fixed thresholds and select pre-programmed actions. This uses sensors but does not require learning a model from examples.",
              "rubric": [
                "Use sensors and fixed rules.",
                "Learning from data is not required."
              ],
              "ref": "50/ai",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "56",
          "title": "Spaced review · Lesson 56",
          "kind": "retrieval",
          "minutes": "10–15 minutes at the start",
          "lead": "Recall the ideas after a longer gap. If you make an error, follow the link back to the theory.",
          "html": "",
          "questions": [
            {
              "id": "56-1",
              "type": "order",
              "prompt": "Order an automatic ventilation response.",
              "items": [
                "Motor opens vent",
                "Processor sends signal",
                "Sensor reads temperature",
                "Processor compares with threshold"
              ],
              "correct": [
                2,
                3,
                1,
                0
              ],
              "explain": "Read → compare → send a signal → act.",
              "ref": "49/mechanism",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "56-2",
              "type": "written",
              "prompt": "Give one difference between expert systems and machine learning and one similarity.",
              "model": "Expert systems use supplied domain rules, while machine learning derives behaviour from examples. Both use programmed software and data to produce a result.",
              "rubric": [
                "Explain a correct difference in the basis for decisions.",
                "Give a correct similarity."
              ],
              "ref": "52/compare",
              "marks": 2,
              "vi": ""
            },
            {
              "id": "56-3",
              "type": "written",
              "prompt": "Explain why a medical-assistance robot does not remove the need for trained people.",
              "model": "Trained operators supervise and control relevant procedures, interpret information and respond to unexpected situations; technicians also maintain the system.",
              "rubric": [
                "Describe a specific human role.",
                "Link it to the situation or a robot's limitation."
              ],
              "ref": "50/applications",
              "marks": 2,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        },
        {
          "id": "exam",
          "title": "Answering exam questions",
          "kind": "exam",
          "minutes": "20–25 minutes of self-study",
          "lead": "These are original questions with practice marks for use in this course.",
          "html": "<section class=\"panel reveal-block\"><h2>Read the command word and the situation</h2><div class=\"table-wrap\"><table><thead><tr><th>Command word</th><th>How to answer</th><th>Avoid</th></tr></thead><tbody><tr><td>Identify / State / Name</td><td>Give the correct name or a clear, direct point.</td><td>A long explanation that hides your answer.</td></tr><tr><td>Describe</td><td>Give the relevant features or steps.</td><td>Listing parts without describing their roles.</td></tr><tr><td>Explain</td><td>Show how or why something happens. Link a cause to its effect.</td><td>Saying “better” or “faster” without explaining why.</td></tr><tr><td>Compare</td><td>Use the same feature to discuss both systems. Give similarities or differences as asked.</td><td>Two separate definitions with no comparison.</td></tr></tbody></table></div></section><section class=\"panel reveal-block\"><h2>Check before you finish</h2><ul><li>Have I used the correct terms and followed the command word?</li><li>Have I named the data, comparison, signal destination and physical action where needed?</li><li>Have I linked each advantage or limitation to the task?</li><li>Have I confused a sensor with a processor, a rule base with an inference engine, or AI with a robot?</li><li>Have I avoided unsupported claims such as “always”, “never” or “100% accurate”?</li></ul><p>Write clear points. One sentence does not always earn one mark. Use the official mark scheme when checking a specific past paper.</p></section>",
          "questions": [
            {
              "id": "exam-1",
              "type": "written",
              "prompt": "A museum controls lighting using light and motion sensors. Explain how the system turns on a lamp only when the area is dark and occupied.",
              "model": "The light sensor supplies a light-level reading and the motion sensor supplies occupancy-related data. The processor checks whether light is below the threshold and motion is detected. If both conditions are true, it sends a signal to switch on the lamp. Readings are taken again to update the output.",
              "rubric": [
                "Identify two suitable input data items.",
                "The processor compares the light level with a set value.",
                "Include the occupancy or movement condition using AND.",
                "Send a signal to control the lamp.",
                "Continue taking readings."
              ],
              "ref": "49/mechanism",
              "marks": 5,
              "vi": ""
            },
            {
              "id": "exam-2",
              "type": "written",
              "prompt": "A factory plans to use robots for spray painting. Describe two advantages and two disadvantages in this context.",
              "model": "Robots can repeat painting paths consistently, helping produce even coverage. They can work in the spray area, reducing worker exposure to fumes. Purchase and setup are costly. A new product shape may require new programming or tooling and cause downtime.",
              "rubric": [
                "Explain consistent paint coverage.",
                "Explain reduced exposure to paint fumes.",
                "Link setup costs to this task.",
                "Explain reprogramming or downtime for a new product."
              ],
              "ref": "50/applications",
              "marks": 4,
              "vi": ""
            },
            {
              "id": "exam-3",
              "type": "written",
              "prompt": "Explain how the four core components of an expert system cooperate to diagnose a printer fault.",
              "model": "The interface asks the user about symptoms. The knowledge base contains facts about printers and faults. The rule base contains conditional diagnostic rules. The inference engine uses the user’s facts and stored knowledge to apply matching rules, and the interface displays a supported conclusion or requests more information.",
              "rubric": [
                "The interface accepts symptoms and displays results.",
                "The knowledge base stores machine and fault facts.",
                "The rule base stores rules.",
                "The inference engine applies rules to facts.",
                "Describe the flow to a conclusion or a request for more information."
              ],
              "ref": "51/components",
              "marks": 5,
              "vi": ""
            },
            {
              "id": "exam-4",
              "type": "written",
              "prompt": "A delivery robot uses a trained vision model. Explain a possible cause of incorrect object recognition and how this could affect control.",
              "model": "If training images did not represent dark conditions, the model may misclassify an obstacle at night. The controller may then select an inappropriate movement, so suitable sensing, evaluation and safety handling are needed.",
              "rubric": [
                "Identify missing or unsuitable training data.",
                "Explain a possible incorrect prediction.",
                "Link the prediction to the controller's decision.",
                "Link the decision to a motor action or safety."
              ],
              "ref": "52/compare",
              "marks": 4,
              "vi": ""
            }
          ],
          "visuals": [],
          "lab": null
        }
      ]
    },
    {
      "id": "reference",
      "title": "Unit 6 handbook",
      "subtitle": "Key terms, learning goals and sources",
      "syllabus": "6.1–6.3",
      "source": "Coursebook Unit 6; Workbook 1 Unit 6; Cambridge syllabus 0478 2026–2028.",
      "sections": [
        {
          "id": "glossary",
          "title": "Key terms in simple English",
          "kind": "reference",
          "minutes": "Quick reference",
          "lead": "Read each definition, give an example and explain the idea in your own words.",
          "html": "<section class=\"panel reveal-block\"><h2>Key terms</h2><div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Simple meaning</th></tr></thead><tbody><tr><td><b>Automated system</b></td><td>A system that performs tasks using programmed instructions, with little or no human intervention while it runs.</td></tr><tr><td><b>Sensor</b></td><td>An input device that measures a physical condition and sends data to a processor.</td></tr><tr><td><b>Microprocessor</b></td><td>A processor that follows instructions, processes data and can send control signals.</td></tr><tr><td><b>Actuator</b></td><td>A device that turns a control signal into a physical action, such as movement.</td></tr><tr><td><b>Threshold</b></td><td>A set value used for comparison, such as a temperature limit.</td></tr><tr><td><b>Feedback</b></td><td>Using new measurements of the result to adjust what the system does next.</td></tr><tr><td><b>Monitoring</b></td><td>Measuring, recording or reporting a condition.</td></tr><tr><td><b>Control</b></td><td>Using data to decide and carry out an action that changes a condition.</td></tr><tr><td><b>ADC</b></td><td>Analogue-to-digital converter: changes an analogue signal into digital data.</td></tr><tr><td><b>Robotics</b></td><td>The design, construction and operation of robots.</td></tr><tr><td><b>Mechanical framework</b></td><td>The physical structure of a robot, such as its body, arms and joints.</td></tr><tr><td><b>Programmable</b></td><td>Able to follow instructions that can be set or changed.</td></tr><tr><td><b>Autonomous</b></td><td>Able to carry out a task without continuous human control.</td></tr><tr><td><b>End-effector</b></td><td>The tool at the end of a robot arm, such as a gripper.</td></tr><tr><td><b>Artificial intelligence (AI)</b></td><td>An area of computer science concerned with simulating intelligent behaviour in computers.</td></tr><tr><td><b>Reasoning / inference</b></td><td>Using facts and rules to reach a conclusion.</td></tr><tr><td><b>Expert system</b></td><td>An AI system that uses stored expert knowledge and rules to give advice or reach a conclusion in a specific area.</td></tr><tr><td><b>Knowledge base</b></td><td>Stored facts and knowledge about a subject.</td></tr><tr><td><b>Rule base</b></td><td>Stored rules, often written as IF–THEN statements.</td></tr><tr><td><b>Inference engine</b></td><td>The part of an expert system that applies rules to facts to reach conclusions.</td></tr><tr><td><b>User interface</b></td><td>The part through which a user enters information and receives results.</td></tr><tr><td><b>Machine learning (ML)</b></td><td>An approach in which a system learns from data or experience and adapts its model or processes.</td></tr><tr><td><b>Training data</b></td><td>Examples used to train an ML model.</td></tr><tr><td><b>Feature</b></td><td>A property of an example used by a model, such as size or colour.</td></tr><tr><td><b>Label</b></td><td>The known class or target answer attached to a training example.</td></tr><tr><td><b>Prediction</b></td><td>A result produced by a model for an input.</td></tr><tr><td><b>Test data</b></td><td>Separate examples used to evaluate a trained model.</td></tr></tbody></table></div></section>",
          "questions": [],
          "visuals": [],
          "lab": null
        },
        {
          "id": "coverage",
          "title": "Learning goals",
          "kind": "reference",
          "minutes": "Self-check",
          "lead": "Opening a page does not show that you have learnt it. Use the linked questions to check your understanding.",
          "html": "<section class=\"panel reveal-block\"><h2>Where to learn, practise and review</h2><div class=\"table-wrap\"><table><thead><tr><th>Goal</th><th>Learn and practise</th><th>Recall later</th></tr></thead><tbody><tr><td>6.1 · Components of an automated system</td><td><a href=\"#49/mechanism\">Control cycle</a> · <a href=\"#49/practice\">Practice</a></td><td><a href=\"#50/start\">Lesson 50 starter</a></td></tr><tr><td>6.1 · Uses, advantages and disadvantages</td><td><a href=\"#49/applications\">Applications</a> · <a href=\"#49/practice\">Practice</a></td><td><a href=\"#50/start\">Lesson 50 starter</a></td></tr><tr><td>6.2 · Robotics and robot characteristics</td><td><a href=\"#50/characteristics\">Characteristics</a> · <a href=\"#50/practice\">Practice</a></td><td><a href=\"#51/start\">Lesson 51 starter</a></td></tr><tr><td>6.2 · Robot roles, benefits and limitations</td><td><a href=\"#50/applications\">Applications</a> · <a href=\"#50/practice\">Practice</a></td><td><a href=\"#51/start\">Lesson 51 starter</a> · <a href=\"#review/54\">Lesson 54</a></td></tr><tr><td>6.3 · AI characteristics</td><td><a href=\"#51/ai\">AI</a> · <a href=\"#51/practice\">Practice</a></td><td><a href=\"#52/start\">Lesson 52 starter</a></td></tr><tr><td>6.3 · Four expert system components</td><td><a href=\"#51/components\">Components</a> · <a href=\"#51/lab\">Activity</a></td><td><a href=\"#52/start\">Lesson 52 starter</a> · <a href=\"#review/54\">Lesson 54</a></td></tr><tr><td>6.3 · How ML adapts using data</td><td><a href=\"#52/learning\">Learning</a> · <a href=\"#52/lab\">Activity</a></td><td><a href=\"#review/53\">Lesson 53</a> · <a href=\"#review/56\">Lesson 56</a></td></tr></tbody></table></div></section><section class=\"panel reveal-block\"><h2>A suggested 120-minute lesson</h2><div class=\"table-wrap\"><table><thead><tr><th>Time</th><th>Activity</th></tr></thead><tbody><tr><td>00–15</td><td>Recall previous learning. In lesson 49, check starting knowledge.</td></tr><tr><td>15–25</td><td>Discuss errors and fill gaps.</td></tr><tr><td>25–45</td><td>Learn the main ideas and answer short questions.</td></tr><tr><td>45–65</td><td>Complete the guided activity.</td></tr><tr><td>65–75</td><td>Take a break.</td></tr><tr><td>75–100</td><td>Answer practice questions independently.</td></tr><tr><td>100–110</td><td>Check answers and improve them.</td></tr><tr><td>110–120</td><td>Complete the exit check and plan two short reviews.</td></tr></tbody></table></div><p>Adjust these times to the class. Choose application examples to discuss, then read the others at home. Allow more time for practice if students need it.</p></section>",
          "questions": [],
          "visuals": [],
          "lab": null
        },
        {
          "id": "extension",
          "title": "Supporting ideas and extension",
          "kind": "reference",
          "minutes": "Optional reading",
          "lead": "Meet the main learning goals first. Use these ideas to support or extend your understanding.",
          "html": "<section class=\"panel reveal-block\"><h2>Supporting ideas</h2><ul><li><b>Monitoring and control:</b> monitoring measures or records a condition. Control also changes it. This helps you explain the role of an output.</li><li><b>ADC:</b> an analogue-to-digital converter changes an analogue signal into digital data. Link this to your earlier input-device learning.</li><li><b>End-effector and autonomous:</b> these words help describe robot parts and how independently a robot works.</li><li><b>Training and testing:</b> labelled examples and separate test data help show how data affects ML. The nearest-example activity is a simple illustration. Advanced mathematics and algorithm details are not required for these Unit 6 goals.</li></ul></section><section class=\"panel reveal-block\"><h2>Extension ideas</h2><ul><li><b>Explanation system:</b> can show the facts and rules used to reach a conclusion. It is an extra feature, not one of the four core expert system components in this course.</li><li><b>Expert system shell:</b> software that provides a framework for an expert system. A developer adds the knowledge and rules.</li><li><b>Neural networks and deep learning:</b> approaches used in ML. Not all ML uses neural networks. You do not need their detailed structure for this unit.</li><li><b>Turing test:</b> a historical idea about judging machine behaviour through conversation. It does not prove consciousness or the ability to complete every task.</li></ul></section>",
          "questions": [],
          "visuals": [],
          "lab": null
        },
        {
          "id": "sources",
          "title": "Sources and how to use this website",
          "kind": "reference",
          "minutes": "For teachers and students",
          "lead": "Designed for the 2026–2028 syllabus and four teaching lessons.",
          "html": "<section class=\"panel reveal-block\"><h2>Sources and scope</h2><ul><li><a href=\"https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf\" target=\"_blank\" rel=\"noopener\">Cambridge IGCSE Computer Science 0478 syllabus, 2026–2028</a>, pp. 23–24: sections 6.1–6.3.</li><li>Cambridge IGCSE Computer Science Coursebook, Unit 6: printed pp. 217–256; PDF pages 229–268 in the supplied file.</li><li>Cambridge IGCSE Computer Science Workbook 1: printed pp. 84–95; PDF pages 85–96 in the supplied file.</li><li>Related workbook situations: car park, pp. 87–88; train doors, p. 90; expert systems, pp. 91–92; AI, ML and robots, pp. 92–95. Use your own copy for the related workbook questions.</li></ul><p>The explanations, practice questions, model answers and self-check criteria on this website were written for this course. They are not official Cambridge questions or mark schemes. Check the syllabus for your exam year; this course does not automatically cover changes from 2029.</p></section><section class=\"panel reveal-block\"><h2>How to study and teach</h2><ul><li><b>Self-study:</b> follow each lesson in order. Answer before opening a model answer. Read the feedback and follow “Review this section” when needed. Written answers use self-check criteria, not automatic keyword marking.</li><li><b>Present:</b> use the Present button for larger text and a hidden sidebar. Select “Show next idea” to reveal content. When you are not typing or focused on a control, use the arrow keys to move between sections and Space to reveal the next idea. Open answers when you are ready to discuss them.</li><li><b>Images:</b> select an image to enlarge it. Where available, hide the labels and recall them yourself. The six scene illustrations are kept alongside the diagrams.</li><li><b>Saved work:</b> answers, attempt history and self-check ticks are saved only in this browser. They do not sync between devices or form a teacher gradebook. Clearing browser data or using private browsing may remove them.</li><li><b>Print:</b> print the current section. Answers that are still closed remain hidden.</li><li><b>Offline:</b> extract the ZIP and open index.html inside the dist folder. Keep the files and asset folders together.</li></ul></section>",
          "questions": [],
          "visuals": [],
          "lab": null
        }
      ]
    }
  ]
};
