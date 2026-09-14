const TEACHING_SCRIPTS = {
  "49/start": {
    "aim": "Find out what students already know about input, processing and output.",
    "say": [
      [
        "Start the lesson",
        "Today we will study systems that do jobs for us. Look at the greenhouse. It gets hot inside. Something must measure the heat. Something must decide what to do. Something must open the vent. These are three different jobs."
      ],
      [
        "Give thinking time",
        "Keep your notes closed for now. Try the starter questions on your own. A wrong answer is useful: it shows us what to practise. We will check the reasons together."
      ]
    ],
    "demo": [
      "Point to the greenhouse image, then to a sensor and the vent.",
      "A temperature sensor measures how hot it is. The processor uses that reading. A motor opens the vent. Say the three roles with me: measure, decide, act."
    ],
    "check": [
      "Which part makes the decision: the sensor or the processor?",
      "The processor. The sensor supplies the reading.",
      "Ask: does a thermometer decide to turn on a fan, or does it only measure temperature?"
    ],
    "close": "Let us follow the data through one complete cycle."
  },
  "49/mechanism": {
    "aim": "Explain each part of an automated control cycle, including feedback.",
    "say": [
      [
        "Define automation",
        "An automated system follows a program to do a task. A person does not control every step. People may still set it up, check it and repair it. For example, a grower sets a temperature limit. The system then checks the temperature by itself."
      ],
      [
        "Give each part one job",
        "A sensor measures a physical condition. A microprocessor runs the program and makes a decision. An actuator turns a control signal into a physical action. A motor is an example: it can turn a fan. The sensor measures; it does not turn the fan itself."
      ],
      [
        "Follow the cycle",
        "The sensor reads 31 degrees Celsius. The processor compares 31 with the limit, 28. Since 31 is greater than 28, the processor sends a signal. The motor turns the fan. The fan changes the conditions. The sensor measures again. This new reading helps the system decide what to do next. We call this feedback."
      ],
      [
        "Explain the signal",
        "If a sensor gives an analogue signal, an ADC converts it into digital data for the processor. Some sensors already give digital data. In an answer, include this conversion when the signal is analogue."
      ]
    ],
    "demo": [
      "Open visual 04. Trace the arrows, then hide the labels.",
      "Imagine four people. One measures, one checks the rule, one moves the fan, and one reports the new temperature. The rule is above 28. At exactly 28, this rule is false, so the fan is OFF in our model."
    ],
    "check": [
      "Why does the system need another reading after the fan starts?",
      "The fan changes the conditions. The processor needs new data to decide whether the fan should stay on.",
      "Ask: should the fan run forever after just one hot reading?"
    ],
    "close": "Write a short chain: sensor reads, processor compares, signal is sent, actuator acts, sensor reads again."
  },
  "49/monitoring": {
    "aim": "Distinguish monitoring from control and explain two safety checks.",
    "say": [
      [
        "Monitoring",
        "Monitoring means measuring, recording or reporting a condition. A weather station records the temperature. It does not warm the whole sky. The system can collect these readings automatically."
      ],
      [
        "Control",
        "Control uses data to change something. An irrigation system measures dry soil and opens a water valve. It then takes more readings to decide when to stop. One system can both monitor and control."
      ],
      [
        "Train doors",
        "Imagine a person standing in a train doorway. A sensor detects the obstacle. The processor checks the data and sends a signal to keep the door open or open it again. A motor moves the door. A separate check confirms that the door is closed."
      ],
      [
        "Car park",
        "A camera captures a number plate. Software reads the characters and checks permission to enter. The processor signals the barrier motor. Permission to enter does not tell us whether the car has passed safely. The system must also check the space under the barrier before closing it."
      ]
    ],
    "demo": [
      "Compare the train-door and car-park images.",
      "Think of two questions: May the car enter? Is the space under the barrier clear? They are different questions. One correct answer does not answer both."
    ],
    "check": [
      "A device records wind speed every minute. Is this monitoring or control? Why?",
      "Monitoring. It records the wind speed but does not change the wind.",
      "Ask students to name a physical change made to the wind. There is none."
    ],
    "close": "When you read a scenario, ask what is measured and what, if anything, is changed."
  },
  "49/applications": {
    "aim": "Apply the same input–decision–output idea to all seven areas.",
    "say": [
      [
        "Use one pattern",
        "The setting changes, but our questions stay the same. What data enters? What does the program check? What output follows? Then explain one benefit and one limit."
      ],
      [
        "Industry, transport and farming",
        "In a factory, a temperature sensor helps control a tank heater. This helps keep the mixture at the right temperature. A bad reading can spoil the product. In transport, a distance sensor can help a braking system respond to a car ahead. Rain or dirt may affect a reading. On a farm, dry-soil readings can start a pump. This saves water, but one sensor may not represent the whole field."
      ],
      [
        "Weather and games",
        "A weather station records regular readings, even in a remote place. It still needs power and reliable sensors. A game uses motion data to change an image, a sound or a vibration. A slow response or poor calibration can make the game react incorrectly."
      ],
      [
        "Lighting and science",
        "Classroom lights may turn on when it is dark and a person is present. This can save energy, but a still person may be missed. In a science experiment, a sensor may help control a heater or dosing valve. A poor reading can affect the whole experiment."
      ],
      [
        "Explain the effect",
        "Do not stop at 'it is better'. Say what improves and why. For example: the valve opens only when the soil is dry, so the system avoids watering an already wet area."
      ]
    ],
    "demo": [
      "Choose lighting from the table. Cover the benefit and limitation columns.",
      "Imagine you sit very still while reading. The motion sensor may miss you. The lights may go out even though the room is occupied. That is a limitation linked to a real task."
    ],
    "check": [
      "Why is 'automation is expensive' an incomplete explanation?",
      "It does not say what costs money or how the cost affects this task. Name setup, sensors, testing or maintenance.",
      "Ask: what must the school buy or maintain for this lighting system?"
    ],
    "close": "Choose a second area and give your own input, decision, output, benefit and limitation."
  },
  "49/lab": {
    "aim": "Predict outputs and explain strict threshold comparisons.",
    "say": [
      [
        "Predict first",
        "Do not press Run cycle yet. Read our three rules. The fan is ON above 28 degrees. The pump is ON below 35 percent soil moisture. The lamp is ON below 40 light units. Write your predictions first."
      ],
      [
        "Run each step",
        "We will read the data, compare it, send signals and carry out actions. At each step, tell me which part is doing the work. Changing a slider gives a new reading and starts a new prediction."
      ],
      [
        "Check the limits",
        "The words above and below do not include equality. At 28 degrees, the fan is OFF. At 35 percent, the pump is OFF. At 40 light units, the lamp is OFF. These are example rules for this activity."
      ],
      [
        "Handle missing data",
        "Now select missing sensor data. Our model keeps the outputs OFF. This is a chosen response for the activity. A real system needs a safe response that fits its task. The model calculates commands; you change the readings yourself to show changes in the environment."
      ]
    ],
    "demo": [
      "Set temperature to 31, moisture to 25 and light to 60. Run the four steps. Then test 28, 35 and 40.",
      "For the first set, I predict fan ON, pump ON and lamp OFF. For the boundary set, I predict all three OFF. Let us check each comparison, not just the final lights."
    ],
    "check": [
      "At 34 percent soil moisture, should the pump be ON?",
      "Yes. 34 is less than 35, so the pump condition is true.",
      "Write 34 < 35 and ask students to read it aloud."
    ],
    "close": "Explain one output in a full sentence using the reading, rule and action."
  },
  "49/practice": {
    "aim": "Help students write complete control explanations independently.",
    "say": [
      [
        "Set the task",
        "Work on your own first. For a control question, name the measurement, the processor's comparison, the signal and the action. Use short sentences. Leave space to improve your answer."
      ],
      [
        "Model a different example",
        "Imagine a water tank. A sensor measures the water level. The processor compares it with the maximum level. If the water reaches that level, the processor sends a signal to close the inlet valve. The system keeps checking the level."
      ],
      [
        "Give feedback",
        "Open the answer only after you have tried. Tick an idea only if it is in your own answer. If you missed a step, add it in your own words. A correct device name alone may not explain its role."
      ]
    ],
    "demo": [
      "After students attempt a written question, compare their steps with its model answer.",
      "This answer says 'the sensor stops the water'. What is missing? We need the processor's decision and the signal to the valve."
    ],
    "check": [
      "Which phrase explains processing in the tank example?",
      "The processor compares the water level with the maximum level.",
      "Ask: where do we use the rule?"
    ],
    "close": "Choose one weak answer, improve it, then explain the improved version to a partner."
  },
  "49/exit": {
    "aim": "Check recall, explanation and application before leaving.",
    "say": [
      [
        "Close the notes",
        "Answer these three questions without the diagrams. I want to know what you can recall now. This is a short check of today's ideas."
      ],
      [
        "Use a clear example",
        "Think of an automatic door. A sensor detects a person. The processor uses that data to decide whether to open the door. It sends a signal to a motor, and the motor moves the door. Keep these jobs separate."
      ],
      [
        "Respond to gaps",
        "If you can name the parts but cannot explain the flow, practise the arrows again. If your steps are clear, try applying them to a new setting."
      ]
    ],
    "demo": [
      "Ask a student to trace an imaginary signal from a door sensor to a motor.",
      "The data goes to the processor first. The control signal then goes to the motor. The motor makes the physical movement."
    ],
    "check": [
      "Can a sensor alone explain how an automatic door opens?",
      "No. We also need the processor's decision, a control signal and a motor or actuator.",
      "Prompt: measure, decide, act."
    ],
    "close": "Before you leave, name one idea you understand and one idea you need to practise."
  },
  "49/homework": {
    "aim": "Set two short reviews that require recall before rereading.",
    "say": [
      [
        "First review",
        "After about two days, close the website and draw the control cycle from memory. Then answer questions one and two. Open the diagram only after you have tried. Correct missing arrows in a different colour."
      ],
      [
        "Second review",
        "After four or five days, answer questions three and four. These use another situation. Use the same pattern even when the device or setting changes."
      ],
      [
        "Prepare for next time",
        "At the start of lesson 50, we will use the control cycle again. You do not need a long paragraph from memory. You need to explain the parts and the links clearly."
      ]
    ],
    "demo": [
      "Draw three empty boxes on paper and ask students to fill them.",
      "For a cold room, a temperature sensor supplies a reading. The processor checks it. It signals a heater control. Now explain how another reading helps the next decision."
    ],
    "check": [
      "Should you read the model answer before your first attempt?",
      "No. Try to recall first, then check and improve.",
      "Say: effort first, feedback second."
    ],
    "close": "Write down your two review days now."
  },
  "50/start": {
    "aim": "Recall the control cycle before introducing robots.",
    "say": [
      [
        "Bring back last lesson",
        "Before we study robots, let us recall automated systems. Keep your notes closed. What measures a condition? What compares the reading? What makes the physical action? Try the six starter questions."
      ],
      [
        "Repair the main gap",
        "A sensor provides data. The processor runs the rule. The actuator acts. If we leave out the processor, our explanation has a gap. We will use this same chain inside a robot."
      ]
    ],
    "demo": [
      "Ask students to describe watering dry soil without opening the diagram.",
      "The sensor reports 25 percent soil moisture. Our rule says water below 35 percent. The processor sends a signal to start the pump. More readings tell us when to stop."
    ],
    "check": [
      "Does recording temperature alone control the temperature?",
      "No. It monitors temperature. Control also changes an output to affect the condition.",
      "Ask: is anything heating or cooling the room?"
    ],
    "close": "Now we will see how sensors, programs and motors work inside a physical robot."
  },
  "50/characteristics": {
    "aim": "Define robotics and explain the three main robot characteristics.",
    "say": [
      [
        "Start with familiar robots",
        "A robot does not have to look like a person. A factory arm and a robot vacuum are robots too. Robotics is about designing, building and operating robots."
      ],
      [
        "Mechanical structure",
        "First, a robot has a mechanical structure. These are its physical parts: the body, arm and joints. A gripper can hold an object. Think of the structure as the parts you can point to."
      ],
      [
        "Electrical parts",
        "Second, a robot has electrical components. Sensors collect data. A controller processes it. Motors create movement. A camera may help locate an object, while a motor turns a joint."
      ],
      [
        "Programmable",
        "Third, a robot is programmable. Instructions set its behaviour. For example: move to the box, close the gripper, lift the box and place it on a shelf. The program tells the parts what to do."
      ],
      [
        "Tools and independence",
        "The end-effector is the tool at the end of an arm, such as a gripper. Autonomous means the robot can do a task without a person controlling each movement. A remote-controlled robot still receives instructions from a person. Both may have robot structures and electrical parts."
      ]
    ],
    "demo": [
      "Point to the arm, camera and gripper in visual 05. Then use visual 06.",
      "The arm and joints show the structure. The camera and motors are electrical parts. The picture cannot show us every instruction in the program. We need to know how the robot is controlled."
    ],
    "check": [
      "Must every robot look human or use AI?",
      "No. A robot can have a different shape and follow a fixed program without AI.",
      "Use a factory arm that repeats the same movement as an example."
    ],
    "close": "Give one real example for each characteristic: structure, electrical components and programmable behaviour."
  },
  "50/applications": {
    "aim": "Explain robot tasks, benefits and limitations in six areas.",
    "say": [
      [
        "Industry and transport",
        "A factory robot can weld or paint the same shape many times. It can repeat a path and keep people away from fumes. A new product may need new tools and a new program. A warehouse robot can move boxes along a route. It must also cope with people or obstacles in its path."
      ],
      [
        "Agriculture and medicine",
        "A farm robot can find and pick fruit. This can reduce repeated manual work. Fruit has different shapes and positions, so gripping it safely can be hard. In medicine, a robot arm may help a doctor make small, steady movements. It needs trained staff and careful maintenance. It does not mean every operation happens without a doctor."
      ],
      [
        "Home and entertainment",
        "A robot vacuum repeats a cleaning task and saves time. It may struggle with cables or stairs. In entertainment, a robot camera can repeat a smooth path for filming. If the scene changes, that path may need to change too."
      ],
      [
        "Link each point",
        "A good answer links the benefit to the task. Say: the robot repeats the same welding path, so similar car bodies receive similar welds. For a limitation, say what could fail or what must be changed."
      ]
    ],
    "demo": [
      "Choose two rows in visual 07. Ask pairs to compare their tasks.",
      "For fruit picking, the robot needs to handle different fruit positions. For a fixed factory task, each part may arrive in the same position. The same robot design may not suit both jobs."
    ],
    "check": [
      "Why might a new car-body design cause extra cost?",
      "The robot may need different tools, new programming and time to test the new process.",
      "Ask: can the old movement path still fit a new shape?"
    ],
    "close": "Choose one area and explain one benefit and one limitation using 'because'."
  },
  "50/ai": {
    "aim": "Separate robotics from AI using three clear examples.",
    "say": [
      [
        "Two different ideas",
        "Robotics is about physical robots. AI is about computers carrying out tasks that involve intelligent behaviour. They can work together, but they are not the same idea."
      ],
      [
        "Three examples",
        "A factory arm repeats fixed positions. This can be robotics without AI. A picking robot uses a trained model to recognise fruit. This uses robotics and AI together. A fault-advice program on a laptop can use AI without a physical robot body."
      ],
      [
        "Look for evidence",
        "A camera on a robot does not prove that it uses machine learning. We need to know how the software uses the images. It may use fixed rules or a model learned from examples."
      ]
    ],
    "demo": [
      "Use visual 08. Place each example in a region.",
      "Put the fixed factory arm on the robotics side. Put the trained fruit-picking robot in the overlap. Put the fault-advice program on the AI side."
    ],
    "check": [
      "Does being programmable automatically make a robot AI?",
      "No. Fixed instructions can control a robot without intelligent reasoning or learning.",
      "Ask: does repeating a saved path show that the robot learned from examples?"
    ],
    "close": "Explain what the system does and how it makes decisions before deciding whether it uses AI."
  },
  "50/lab": {
    "aim": "Match robot parts to a specific task and explain the flow.",
    "say": [
      [
        "Explore the parts",
        "Select each group of parts. First find the physical structure. Then find the sensors, controller and actuators. Say what each does. Avoid giving only a device name."
      ],
      [
        "Match the task",
        "Choose the warehouse task. We need distance data, a comparison with a safe limit and wheel movement. Select a part or process for each role. Make your choices before checking."
      ],
      [
        "Change the context",
        "Now try the home robot near stairs. It needs a sensor that can detect an edge below it. A farm robot picking fruit needs image data to locate the fruit and a gripper motor to handle it. The right parts depend on the task."
      ]
    ],
    "demo": [
      "Match Distance sensor → safe-distance comparison → Wheel motors for the warehouse.",
      "The sensor measures the gap. The controller checks whether it is safe. The motors stop or move the robot. If the task changes, we may need different data or a different actuator."
    ],
    "check": [
      "Why is a speaker not the best actuator for picking fruit?",
      "A speaker produces sound. A gripper motor creates the movement needed to grip the fruit.",
      "Ask: what physical action does the task require?"
    ],
    "close": "Choose one completed chain and explain it aloud without reading the feedback."
  },
  "50/practice": {
    "aim": "Build answers that describe robot parts and evaluate their use.",
    "say": [
      [
        "Work independently",
        "Answer each question before opening the feedback. For a definition, use the correct idea. For an explanation, connect a part or benefit to the task."
      ],
      [
        "Improve a short answer",
        "'Robots are accurate' is too general. Try: a robot repeats a set path, so it can place similar parts in the same position. That explains why the feature helps."
      ],
      [
        "Discuss limits",
        "A robot may still make mistakes. A worn tool, wrong position data or a faulty program can cause an error. Explain the possible effect in the question's setting."
      ]
    ],
    "demo": [
      "Use a robot moving a box as a spoken example.",
      "The distance sensor provides a reading. The controller compares it with a safe distance. It signals the wheel motors to stop. A new reading checks whether the path is clear."
    ],
    "check": [
      "What should you add after naming a robot characteristic?",
      "Explain what it means and give a suitable example.",
      "Prompt: mechanical structure — which physical part can you name?"
    ],
    "close": "Choose one answer and replace a vague word such as 'better' with a clear reason."
  },
  "50/exit": {
    "aim": "Check whether students can apply robot ideas to an unfamiliar task.",
    "say": [
      [
        "Try without the notes",
        "For this exit check, explain the robot rather than copying a familiar example. Identify its structure, electrical parts and programmed behaviour."
      ],
      [
        "Follow one action",
        "Imagine a robot that places a parcel on a shelf. It needs a body or arm, data about the parcel or position, instructions and motors. Explain how the parts work together."
      ],
      [
        "Avoid an unsupported claim",
        "Do not add AI just because the robot looks advanced. State AI or ML only when the description gives evidence of reasoning or learning."
      ]
    ],
    "demo": [
      "Ask students to point to an imaginary robot's input, controller and output.",
      "A camera sees the parcel. The controller uses the image data and program. A motor moves the gripper. Whether this uses ML depends on how the software finds the parcel."
    ],
    "check": [
      "What evidence would support a claim that this robot uses ML?",
      "A description that it was trained on data and uses a learned model, for example to recognise parcels.",
      "Ask: does the description mention training examples or learning?"
    ],
    "close": "Finish with three phrases: physical structure, electrical components and programmable."
  },
  "50/homework": {
    "aim": "Plan two reviews that connect robot tasks with their parts.",
    "say": [
      [
        "First short review",
        "After two days, answer questions one and two. Sketch a robot and label a sensor, controller and motor. Explain the arrows, not only the labels."
      ],
      [
        "Second short review",
        "After four or five days, answer questions three and four. Use a different setting and compare robotics with AI. Choose one example that uses both and one that does not."
      ],
      [
        "Prepare for lesson 51",
        "Next lesson, we will check robotics before studying AI and expert systems. Keep the difference between a physical robot and intelligent software clear."
      ]
    ],
    "demo": [
      "Describe a robotic camera moving along a saved filming path.",
      "The robot can repeat a smooth movement. If the actor moves to a new place, the saved path may no longer work. Explain both the useful feature and its limit."
    ],
    "check": [
      "Can AI software run without an arm, wheels or a gripper?",
      "Yes. An expert-system program can run on a normal computer.",
      "Return to the AI-only area of visual 08."
    ],
    "close": "Use the two review days to recall first, then correct your answers."
  },
  "51/start": {
    "aim": "Recall robotics and the control cycle before introducing AI.",
    "say": [
      [
        "Retrieve the basics",
        "Keep your notes closed. What is robotics? Name the three robot characteristics and give an example of each. Then explain one sensor-to-motor chain."
      ],
      [
        "Use the distinction",
        "A physical robot may follow a fixed program. An AI system does not always need a robot body. Hold on to this distinction as we start today's lesson."
      ]
    ],
    "demo": [
      "Ask the class to compare a factory arm with a fault-advice program.",
      "The arm is physical and can move objects. The fault-advice program can give a conclusion on a screen. Both use software, but only one needs a robot body."
    ],
    "check": [
      "Does a robot's jointed arm show its mechanical structure or its program?",
      "Its mechanical structure. The program is the set of instructions that controls behaviour.",
      "Ask: is the arm a physical part or a written instruction?"
    ],
    "close": "We will now study how a computer can use facts and rules to give advice."
  },
  "51/ai": {
    "aim": "Define AI and explain data, rules or processes, and reasoning.",
    "say": [
      [
        "Define the idea",
        "Artificial intelligence, or AI, is an area of computer science. It is about making computers show intelligent behaviour. Examples include recognising patterns, using language and reasoning to reach a conclusion."
      ],
      [
        "Explain reasoning",
        "Reasoning means using information to reach a conclusion. Imagine three possible vehicles. The user says the vehicle travels on a road and uses pedals. A suitable rule can identify a bicycle in this small system."
      ],
      [
        "Describe the main features",
        "An AI system uses data and rules or processes for using that data. It can use reasoning. Some AI systems also learn and adapt. Not every AI system learns by itself. AI does not mean that the computer has human feelings."
      ],
      [
        "Introduce two approaches",
        "An expert system uses knowledge and rules supplied by people. Machine learning uses examples to learn a pattern or model. Both use programmed software, and both can produce wrong results. Today we will focus on expert systems."
      ]
    ],
    "demo": [
      "Compare the two columns in the lesson table.",
      "An expert system may say: if these symptoms occur, suggest this fault. An ML spam filter learns from examples of messages. Both produce a result, but the basis for that result is different."
    ],
    "check": [
      "Must every AI system learn from new data while it runs?",
      "No. An expert system can use fixed knowledge and rules.",
      "Ask: can a program apply an expert's rules without changing those rules?"
    ],
    "close": "Let us look inside an expert system and give each component a clear job."
  },
  "51/components": {
    "aim": "Explain the four expert-system components and the information flow.",
    "say": [
      [
        "Start with a problem",
        "Your speakers make no sound. Are they broken? Not necessarily. The power may be off, a cable may be loose, or the wrong audio output may be selected. We need more facts before giving advice."
      ],
      [
        "Define an expert system",
        "An expert system uses specialist knowledge and rules to reach a conclusion in a limited area. It can ask questions and use your answers. It aims to copy part of an expert's decision-making process."
      ],
      [
        "Separate the four jobs",
        "The user interface asks questions, accepts answers and displays results. The knowledge base stores facts about the subject. The rule base stores rules, often IF–THEN rules. The inference engine applies the rules to the facts and reaches a conclusion."
      ],
      [
        "Follow a fact",
        "The user enters that the power light is off. The inference engine uses that fact and checks the relevant rules. A matching rule may suggest checking the power supply. The interface shows this advice."
      ],
      [
        "Clarify the common error",
        "The rule base stores a rule; it does not apply it. The inference engine applies it. An explanation system may show why a result was chosen, but that is an extra feature, not a replacement for one of our four components."
      ]
    ],
    "demo": [
      "Open visual 10, then hide the component names.",
      "Think of a help desk. The interface is where we exchange messages. The knowledge base holds facts. The rule base holds the decision rules. The inference engine is the part that uses the rules to work out an answer."
    ],
    "check": [
      "Which component applies the rules: the rule base or the inference engine?",
      "The inference engine. The rule base stores them.",
      "Use the contrast: store a recipe versus follow the recipe. Storing and using are different jobs."
    ],
    "close": "Describe the four roles from memory, then explain one complete flow from a user's answer to a result."
  },
  "51/trace": {
    "aim": "Trace rules, handle missing facts and evaluate expert-system results.",
    "say": [
      [
        "Read the small system",
        "Our knowledge table contains a tram, a bicycle and an electric car. It stores their surface and power properties. The rules use these properties to reach a conclusion. The table and the rules do different jobs."
      ],
      [
        "Apply both conditions",
        "The user enters road and pedals. The bicycle rule needs both facts, so it matches. If power changes to electric, the electric-car rule matches instead. AND means both conditions must be true."
      ],
      [
        "Do not guess",
        "If the surface is road but the power is unknown, we need another fact. If the surface is water, no rule in our example can identify the vehicle. Say that the system has no supported conclusion. Do not invent a match."
      ],
      [
        "Build and evaluate",
        "To build an expert system, collect specialist knowledge, store facts and rules, create the interface and inference engine, and test known cases. Update the knowledge when needed. The system can give fast and consistent advice, but missing or wrong rules may give a poor result. Consistent does not mean always correct."
      ]
    ],
    "demo": [
      "Use the table and rule list. Change only the power fact.",
      "Road plus pedals gives bicycle. Road plus electric gives electric car. We changed one fact, so a different rule matched. These rules describe our small example, not every vehicle in the world."
    ],
    "check": [
      "What should the system do with road and unknown power?",
      "Ask for the power information, because more than one vehicle is still possible.",
      "Point to the bicycle and electric-car rows. Both use the road."
    ],
    "close": "When you explain a conclusion, name the facts, the matching conditions and the rule's result."
  },
  "51/lab": {
    "aim": "Use the vehicle expert system to make each reasoning step visible.",
    "say": [
      [
        "Start at the interface",
        "Choose where the vehicle travels and what powers it. These choices are facts entered through the user interface. Predict the result before pressing a button."
      ],
      [
        "Follow the engine",
        "Press Next step. Read the entered facts. Check the knowledge table. Compare the conditions in each rule. The inference engine applies a rule only when the needed facts match."
      ],
      [
        "Try a missing fact",
        "Choose road and leave power unknown. We cannot choose between bicycle and electric car yet. Missing information is different from a complete set of facts with no matching rule."
      ],
      [
        "Try an unsupported case",
        "Now choose water and electric. No rule matches these facts. The correct response is to say that this small system cannot identify the vehicle. It should not guess."
      ]
    ],
    "demo": [
      "Run road + pedals, road + unknown, then water + electric.",
      "In the first case, both bicycle conditions match. In the second, we need more information. In the third, the supplied facts are complete but no rule covers the case."
    ],
    "check": [
      "Where is the bicycle rule stored, and which part applies it?",
      "It is stored in the rule base. The inference engine applies it.",
      "Ask students to say the two verbs: stores and applies."
    ],
    "close": "Reset the activity. Ask a partner to choose facts and explain the result aloud."
  },
  "51/practice": {
    "aim": "Distinguish stored knowledge, entered facts and rule application.",
    "say": [
      [
        "Try first",
        "Work through the questions before opening a model answer. Use the exact component name, then explain its role in this situation. A list of four names is not a full explanation."
      ],
      [
        "Use another subject",
        "Imagine a plant-identification system. The knowledge base stores facts about plants. The user enters features such as leaf shape. The inference engine checks suitable rules and reaches a supported conclusion. The interface displays it."
      ],
      [
        "Evaluate a result",
        "If the same wrong rule is applied many times, the system may give the same wrong answer many times. A consistent result can still be wrong. Explain whether the problem is a fact, a missing rule or an incorrect rule."
      ]
    ],
    "demo": [
      "After an attempt, open the relevant question's model and compare roles.",
      "This answer says the rule base decides. Let us improve it: the rule base stores rules, and the inference engine applies those rules to the facts."
    ],
    "check": [
      "Does a conclusion become correct just because the system repeats it?",
      "No. Incorrect knowledge or rules can produce repeated errors.",
      "Ask: what happens if the stored rule itself is wrong?"
    ],
    "close": "Correct one role you confused and explain it without reading."
  },
  "51/exit": {
    "aim": "Check the four components and the limits of a small rule set.",
    "say": [
      [
        "Recall the structure",
        "Close the diagram. Draw the four components and explain what passes between them. Say what is stored and what is processed."
      ],
      [
        "Check the evidence",
        "A vehicle uses the road. Is that enough to identify it in our system? No. A bicycle and an electric car both use the road. We need the power fact."
      ],
      [
        "Explain the limit",
        "If a type of vehicle is absent from the knowledge and rules, the system may not identify it. This is a limit of the knowledge, not a reason to guess."
      ]
    ],
    "demo": [
      "Use the word 'road' alone, then add 'pedals'.",
      "The first fact leaves two choices. The second fact lets the bicycle rule match. Extra information can change what conclusion is supported."
    ],
    "check": [
      "What does the inference engine need before it can apply the bicycle rule?",
      "The facts road and pedals, so both conditions are satisfied.",
      "Read the rule and underline AND."
    ],
    "close": "Before the next lesson, practise explaining the difference between the knowledge base, rule base and inference engine."
  },
  "51/homework": {
    "aim": "Review expert-system roles and prepare to compare them with ML.",
    "say": [
      [
        "First review",
        "After two days, draw the four-component diagram without looking. Add one sentence for each component. Then answer questions one and two."
      ],
      [
        "Second review",
        "After four or five days, answer questions three and four. Trace the vehicle rules using both surface and power. Explain why a missing fact may require another question."
      ],
      [
        "Prepare for ML",
        "Next time, we will compare supplied rules with learning from examples. Keep this question in mind: where does the system's way of making a decision come from?"
      ]
    ],
    "demo": [
      "Ask students to turn road and pedals into a complete IF–THEN rule.",
      "IF the surface is road AND the power is pedals, THEN the vehicle is a bicycle in this example. Both facts are required."
    ],
    "check": [
      "What is the difference between storing a rule and applying it?",
      "Storing keeps the rule available. Applying checks facts against the rule to reach a result.",
      "Ask which job belongs to the rule base and which to the inference engine."
    ],
    "close": "Bring one example of an expert-system question and explain how the answer could help a rule."
  },
  "52/start": {
    "aim": "Recall expert systems and prepare to compare rules with learning.",
    "say": [
      [
        "Return to the four roles",
        "Keep your notes closed. Name the four expert-system components. Which stores facts? Which stores rules? Which applies rules? Which exchanges information with the user?"
      ],
      [
        "Trace a familiar case",
        "Use road and pedals as the facts. Explain why the bicycle rule matches. Then change pedals to electric. A different rule now matches. We changed the input facts, not the rules."
      ],
      [
        "Set up the new idea",
        "Today we will study machine learning. Instead of supplying every decision rule by hand, we use data to train a model. We will see how training data can affect a prediction."
      ]
    ],
    "demo": [
      "Ask students to describe a fault-advice system in one short flow.",
      "The user supplies symptoms through the interface. The inference engine uses knowledge and applies rules. The interface displays advice. Now keep that flow in mind as we study another approach."
    ],
    "check": [
      "Does changing the user's answer automatically mean an expert system has learned?",
      "No. It may simply apply a different fixed rule to different facts.",
      "Ask: did the rules change through learning, or did only the input change?"
    ],
    "close": "Let us separate training a model from using it to make a prediction."
  },
  "52/learning": {
    "aim": "Explain how ML uses examples, training and predictions.",
    "say": [
      [
        "Define machine learning",
        "Machine learning, or ML, is an approach in which a system learns from data or experience. It adapts a model or process and uses what it learned with new data. We still need programmed software to do this."
      ],
      [
        "Explain examples and features",
        "Suppose we want to identify apples and bananas. We give the system many examples. A feature is a property, such as colour, shape or size. A label is the known class attached to an example, such as apple. In this labelled-example approach, the examples help guide training."
      ],
      [
        "Separate the two stages",
        "Training uses examples to build or adapt a model. Prediction uses the trained model with a new input. The new result may be correct or incorrect. A prediction is not a guarantee."
      ],
      [
        "Test fairly",
        "To check the model, use separate test examples with known answers. Do not add these test examples to the training set before checking the model. We want to see how it handles cases it did not train on."
      ],
      [
        "What changes in ML?",
        "With new training data or corrected labels, the learned model or process may change. Manually changing a fixed temperature limit is not enough to show ML. We need learning or adaptation from data or experience."
      ]
    ],
    "demo": [
      "Use visuals 13 and 14. Point to labelled examples, the trained model and a new fruit.",
      "During training, these examples help the model learn. After training, a new image enters and the model predicts its class. The model might make a mistake, especially if the new image is unlike the examples."
    ],
    "check": [
      "What is the difference between training data and a new input for prediction?",
      "Training data helps build or adapt the model. A new input is given to the trained model to obtain a result.",
      "Ask: which stage changes the model, and which stage uses it?"
    ],
    "close": "Say the flow: examples, training, trained model, new input, prediction."
  },
  "52/quality": {
    "aim": "Explain why data quality and variety affect ML results.",
    "say": [
      [
        "Correct labels",
        "Imagine teaching someone that every banana is an apple. They may learn the wrong link. In ML, incorrect labels can also lead to wrong predictions. Check that training examples have suitable, correct labels."
      ],
      [
        "Enough variety",
        "If every training apple is red, the model may struggle with a green apple. Give examples that represent the cases the system will meet. Different lighting, sizes and positions may matter."
      ],
      [
        "What is missing?",
        "If the model only knows two classes, it may assign a pear to one of them incorrectly. Missing classes or very different inputs can be a problem. Good performance on familiar examples does not prove good performance everywhere."
      ],
      [
        "Evaluate and improve",
        "Use separate test data to find weaknesses. Add or correct suitable training examples, train again, and test again. A high score on a small test set describes only that set. It does not prove the system is always accurate."
      ]
    ],
    "demo": [
      "Point to red and green fruit in visual 13.",
      "Colour alone may not separate the classes. Some apples are green, and some bananas are green. Shape may help too. We need useful features and varied examples."
    ],
    "check": [
      "Why might a model trained only on bright daytime pictures fail at night?",
      "Night pictures look different from the training examples, so the model may not recognise the patterns correctly.",
      "Ask students to name what changes in the image: light, shadows or detail."
    ],
    "close": "When explaining an ML error, connect the data problem to a specific wrong prediction."
  },
  "52/compare": {
    "aim": "Compare expert systems with ML and connect AI to robot control.",
    "say": [
      [
        "Compare on the same point",
        "Ask where the basis for a decision comes from. An expert system uses supplied knowledge and rules. ML uses patterns or a model learned from data. Both use software written by programmers, and both can make errors."
      ],
      [
        "Connect the parts",
        "Imagine a farm robot that sprays selected plants. A camera supplies an image. An ML model predicts what the plant is. The controller uses that result and other data to choose an action. It sends a signal to a valve. The valve controls the spray."
      ],
      [
        "Keep the roles clear",
        "The camera supplies data. The model makes a prediction. The controller decides the output. The actuator makes a physical change. An ML prediction is only one part of the whole system."
      ],
      [
        "Explain a wrong result",
        "If the model wrongly predicts that a crop is a weed, the controller may trigger the wrong spray action. Link the error to its effect. Do not only say that AI is bad."
      ]
    ],
    "demo": [
      "Trace camera → ML result → controller → valve. Compare this with a fixed-rule greenhouse.",
      "The greenhouse may use a fixed threshold. The farm robot may use a model trained on plant images. Both still need inputs, processing and outputs."
    ],
    "check": [
      "Does an ML model physically open the spray valve?",
      "No. It supplies a result used by the controller, which sends a control signal to the actuator.",
      "Ask: which part makes the prediction and which part creates the physical action?"
    ],
    "close": "Use the same comparison point for both systems, then give one similarity."
  },
  "52/lab": {
    "aim": "Show how changing one training label can change a prediction.",
    "say": [
      [
        "Read the picture",
        "Blue circles are class A. Gold squares are class B. X is a new input. The two axes are two features. Our simple model uses the label of the nearest training example."
      ],
      [
        "Predict and train",
        "Keep X at six, five. Find the closest training example. It is example four at six, six. Its label starts as A. Predict the result before selecting Train and predict."
      ],
      [
        "Change one label",
        "Change example four from A to B. Keep X in the same place. Train again so the model uses the new labels. The same input now gets B. This shows how training data can affect a result."
      ],
      [
        "Read the test score",
        "We also have four separate test examples with known labels. In this activity, the score changes from three out of four to four out of four. This is a result for these four examples only. It does not prove perfect performance on every possible input."
      ],
      [
        "Know the model's limits",
        "This nearest-example method is a simple illustration. If distances are equal, the lower-numbered example is used. You do not need to memorise a distance formula for these Unit 6 goals."
      ]
    ],
    "demo": [
      "Run X=(6,5), change example #4 to B, then train again.",
      "First, the nearest example has label A. After the change and new training, it has label B. We did not move X. We changed the training information used by the model."
    ],
    "check": [
      "Why must we train again after changing a label in this activity?",
      "The current model uses the previous training snapshot. Training again uses the updated data.",
      "Ask: is changing the table the same as updating the trained model in this activity?"
    ],
    "close": "Reset the activity and explain the change in your own words before running it again."
  },
  "52/practice": {
    "aim": "Explain learning, data quality and AI-assisted control in written answers.",
    "say": [
      [
        "Answer with a process",
        "For an ML question, explain the role of data. What examples are used? What does the model learn or adapt? How is it used with a new input? What could make the result wrong?"
      ],
      [
        "Link cause and effect",
        "For example, if many training plant images have wrong labels, the model may learn incorrect links. It may then classify a crop as a weed. This could lead to the wrong spraying action."
      ],
      [
        "Compare clearly",
        "When comparing an expert system and ML, use one point at a time. First compare the basis for decisions. Then explain a similarity, such as both using programmed software."
      ],
      [
        "Check your answer",
        "Open the model after your attempt. Add missing links, especially between a prediction, a controller's decision and an actuator's action."
      ]
    ],
    "demo": [
      "Take the statement 'bad data causes problems' and make it specific.",
      "Incorrect labels can teach the model the wrong link between a plant image and its class. A new image may then receive the wrong class. Now the cause and result are clear."
    ],
    "check": [
      "Why is manually changing a thermostat limit not enough evidence of ML?",
      "A person changed a fixed rule. This does not show the system learning or adapting from data.",
      "Ask: what training examples did the system use to learn the new limit?"
    ],
    "close": "Improve one answer by adding the missing cause-and-effect link."
  },
  "52/exit": {
    "aim": "Check training versus prediction and avoid unsupported ML claims.",
    "say": [
      [
        "Recall without the diagram",
        "Explain training and prediction as two stages. Then explain what a label does in our labelled-example activity. Use a short example if it helps."
      ],
      [
        "Check what changed",
        "Changing a training label can affect predictions for similar inputs. It does not mean every prediction must change. Think about which examples the model uses for a particular input."
      ],
      [
        "Check the evidence",
        "A system with changing outputs is not automatically ML. Fixed rules can also produce different outputs when inputs change. Look for learning or adaptation from data."
      ]
    ],
    "demo": [
      "Use a fixed fan rule beside the nearest-example model.",
      "The fan switches when temperature crosses a set limit. That is a fixed comparison. The nearest-example model uses training examples and their labels to predict a class."
    ],
    "check": [
      "Does a perfect score on four test examples prove perfect accuracy everywhere?",
      "No. It only shows that these four test examples were classified correctly.",
      "Ask: have we checked all possible future inputs?"
    ],
    "close": "Write one sentence for training, one for prediction and one for a possible data problem."
  },
  "52/homework": {
    "aim": "Plan spaced review and connect all three Unit 6 topics.",
    "say": [
      [
        "First review",
        "After two days, answer questions one and two. Explain why training data should cover the classes and cases the model must handle. Use your own example."
      ],
      [
        "Second review",
        "After four or five days, answer questions three and four. Compare expert systems and ML. Explain one way to improve a model and how to check the improvement."
      ],
      [
        "Keep the unit connected",
        "In lesson 53, we will review ML and return to the control cycle. Later reviews will ask you to choose the correct idea for a new situation."
      ]
    ],
    "demo": [
      "Imagine a spam filter trained with spam messages only.",
      "The filter also needs suitable examples of legitimate email to distinguish the classes. Missing one class can make the training data unsuitable for that task."
    ],
    "check": [
      "After improving the training data, how should we check the model?",
      "Train again and evaluate it using suitable separate test data.",
      "Ask: should the test examples also have been used to teach the model?"
    ],
    "close": "Put the two review sessions in your plan. Start each session from memory."
  },
  "review/53": {
    "aim": "Recall ML and bring back the earlier control-cycle explanation.",
    "say": [
      [
        "Start from memory",
        "This review mixes recent learning with an older idea. Explain how a model learns from examples. Then explain how an automated system turns a reading into an action. Use the right words for each process."
      ],
      [
        "Keep the stages separate",
        "Training builds or adapts a model. Prediction uses it. Testing with separate examples helps us evaluate it. In a control cycle, a sensor measures, the processor checks conditions and an actuator acts."
      ],
      [
        "Use feedback",
        "If you make an error, return to the linked lesson and fix the reason. Do not only change the final word. Explain why the improved answer is correct."
      ]
    ],
    "demo": [
      "Compare a fruit classifier with a greenhouse fan.",
      "The classifier learns from example images. The greenhouse fan may use a fixed temperature rule. Both process data, but only the first example describes learning from data."
    ],
    "check": [
      "Why should test examples be kept separate from training?",
      "To check performance on examples the model did not use to learn.",
      "Ask: would testing only on already learned examples show how it handles new cases?"
    ],
    "close": "Choose the idea you found hardest and practise it once more before leaving."
  },
  "review/54": {
    "aim": "Apply expert-system and automation ideas in changed contexts.",
    "say": [
      [
        "Transfer the knowledge",
        "Today the examples may look different. Do not search for a sentence you remember word for word. Identify the process in the question."
      ],
      [
        "Name the right roles",
        "In an expert system, the knowledge base stores facts and the rule base stores rules. The inference engine applies the rules. In an automated controller, sensor data is compared with conditions before output signals are sent."
      ],
      [
        "Check the claim",
        "An automatic system does not have to use AI or ML. A fixed rule may be enough for a simple task. Explain what evidence the scenario gives you."
      ]
    ],
    "demo": [
      "Describe a lamp that turns on only when it is dark and a person is present.",
      "The system uses light and presence data with a fixed condition. Different outputs do not show that it has learned. They may simply show that the input conditions changed."
    ],
    "check": [
      "What would you need to describe if asked how an expert system reaches a conclusion?",
      "Entered facts, stored knowledge, matching rules, the inference engine and the displayed result.",
      "Start with the user's answer and ask where it goes next."
    ],
    "close": "Correct one answer by replacing a vague statement with the actual mechanism."
  },
  "review/56": {
    "aim": "Check longer-term recall and connect automation, robotics and AI.",
    "say": [
      [
        "Recall after a gap",
        "We are returning to Unit 6 after a longer break. Try the questions without the notes. Explain each answer to yourself before checking it."
      ],
      [
        "Connect, but do not confuse",
        "Automation performs programmed tasks. Robotics involves physical robots. AI can support intelligent tasks. ML is one approach that learns from data. One system may include several of these ideas."
      ],
      [
        "Keep people in the picture",
        "A robot may still need a person to set it up, maintain it or deal with a new situation. Name the human task and explain why it is needed."
      ]
    ],
    "demo": [
      "Imagine a fruit-picking robot in an orchard it has not seen before.",
      "The camera supplies data. A trained model may help locate fruit. The controller chooses a movement and motors act. A person may still need to deal with difficult ground or damaged equipment."
    ],
    "check": [
      "Give one difference and one similarity between an expert system and ML.",
      "An expert system uses supplied knowledge and rules; ML learns a model or patterns from data. Both use programmed software and can make errors.",
      "Use 'basis for decisions' as the same comparison point for both."
    ],
    "close": "Mark which learning goal needs another review, then use its lesson link."
  },
  "review/exam": {
    "aim": "Teach students to follow command words and link answers to context.",
    "say": [
      [
        "Read the task first",
        "Before writing, underline the command word and the system in the question. Identify or state asks for a direct point. Describe asks for features or steps. Explain asks how or why. Compare asks you to use the same point for both systems."
      ],
      [
        "Build an explanation",
        "Use a clear cause and effect. 'The robot is safer' is incomplete. Try: the robot sprays paint, so workers spend less time near paint fumes. The second version connects the task to the benefit."
      ],
      [
        "Use the context",
        "If the question is about classroom lighting, use light readings, a presence condition and a lamp output. Do not give a long unrelated answer about a greenhouse."
      ],
      [
        "Check the links",
        "In a control answer, check measurement, comparison, signal and action. In an expert-system answer, check facts, rules and the inference engine. In an ML answer, check training data, the learned model and the result."
      ],
      [
        "Use marks sensibly",
        "The marks help you judge how much relevant detail is needed. One sentence does not always equal one mark. These are course practice questions. Use the official mark scheme when checking a specific exam paper."
      ]
    ],
    "demo": [
      "Say a weak answer, then ask students to improve it: 'A painting robot is good.'",
      "A painting robot repeats a programmed path, which helps give similar coverage on identical products. It also reduces the time people spend near paint fumes. These are two clear, linked points."
    ],
    "check": [
      "What is wrong with comparing one system's cost with the other system's accuracy?",
      "They are different comparison points. Compare both on cost, or both on accuracy, with relevant reasons.",
      "Draw two columns and write the same row heading for both."
    ],
    "close": "Answer independently, check the command word again, then use the teaching notes for feedback."
  },
  "reference/glossary": {
    "aim": "Make technical terms easy to explain in plain English.",
    "say": [
      [
        "Use small groups of words",
        "Do not learn the whole table in one go. Start with sensor, microprocessor and actuator. Say one short role for each: measures, processes, acts. Then give an example."
      ],
      [
        "Expert-system terms",
        "Next use knowledge base, rule base, inference engine and user interface. Knowledge means facts about the subject. A rule is a condition linked to a result. The engine applies rules. The interface exchanges information with the user."
      ],
      [
        "ML terms",
        "A feature is a property such as colour or shape. A label is a known class or target answer. Training data helps the model learn. A prediction is the model's result for an input. Separate test data helps us check performance."
      ],
      [
        "Practise speaking",
        "Say a technical term slowly first. Then use the simple meaning in a full sentence. For example: an actuator creates a physical action; a motor turns the fan. Keep the technical term and make the rest of the sentence easy."
      ]
    ],
    "demo": [
      "Cover the meaning column. Ask pairs to explain one word and give an example.",
      "My word is threshold. It is a set value used for comparison. In our greenhouse, 28 degrees is the temperature threshold. Now give me another threshold example."
    ],
    "check": [
      "Explain 'inference engine' without using the word 'engine' again.",
      "It is the part that applies rules to facts to reach a conclusion.",
      "Offer the verbs stores, displays and applies. Ask which fits."
    ],
    "close": "Choose three words you still find difficult. Say each meaning and an example from memory."
  },
  "reference/coverage": {
    "aim": "Help students use the goals as a study plan, not just a page checklist.",
    "say": [
      [
        "Turn goals into actions",
        "A learning goal tells you what you should be able to explain. Reading a page once does not prove that you can use the idea. Look at each goal and try its practice questions."
      ],
      [
        "Use the review links",
        "The table connects learning, practice and later recall. If you can explain a control cycle today, test it again in the next lesson. Later, use a different context to check that you understand the idea."
      ],
      [
        "Plan the class rhythm",
        "We begin by recalling old learning, then fix gaps. We learn a small amount, use an example and practise. Near the end, we check understanding and plan short reviews. If an idea is still unclear, give it more practice time."
      ]
    ],
    "demo": [
      "Select the goal for expert-system components and follow the learning and review links.",
      "Can you name the four parts? Can you explain the job of each? Can you use them in a new situation? These are stronger signs of learning than simply opening the page."
    ],
    "check": [
      "What evidence shows that you understand a control cycle?",
      "You can explain each role and the flow, then apply it to a new situation without copying.",
      "Ask the student to explain a door after studying a greenhouse."
    ],
    "close": "Choose your next review from what you can explain, not from how many pages you have opened."
  },
  "reference/extension": {
    "aim": "Explain supporting terms and keep optional ideas separate from the core.",
    "say": [
      [
        "Supporting terms",
        "Monitoring records or reports a condition. Control also changes an output. An ADC converts an analogue signal into digital data. An end-effector is the tool at the end of a robot arm. Autonomous means working without a person controlling every movement."
      ],
      [
        "Extra expert-system ideas",
        "An explanation system can show which facts and rules led to a conclusion. An expert system shell is software that provides a framework. A developer adds the knowledge and rules. These ideas support the four core components."
      ],
      [
        "Other ML approaches",
        "Neural networks are one approach used in ML. Deep learning uses neural networks with many layers. Not all ML uses neural networks. For this unit, focus first on learning from data and how that affects results."
      ],
      [
        "Historical discussion",
        "The Turing test is a historical idea about judging machine behaviour through conversation. It does not prove that a machine has feelings, consciousness or the ability to do every task."
      ]
    ],
    "demo": [
      "Compare a result with an explanation of that result.",
      "A result might say bicycle. An explanation might say: the facts were road and pedals, and both matched the bicycle rule. Showing the reason helps us inspect the decision."
    ],
    "check": [
      "Does an explanation system replace the inference engine?",
      "No. The inference engine applies rules. An explanation system can show how the conclusion was reached.",
      "Ask which part does the reasoning and which part explains it to the user."
    ],
    "close": "Return to the core goals if these extra terms make the main ideas less clear."
  },
  "reference/sources": {
    "aim": "Explain how to use the course, feedback and source references.",
    "say": [
      [
        "Set the scope",
        "This course follows Unit 6 of the Cambridge IGCSE Computer Science 0478 syllabus for exams in 2026 to 2028. The page lists the syllabus and book sections used as references. Check the correct syllabus for your exam year."
      ],
      [
        "Use practice well",
        "Our website questions are original course practice. They are not official Cambridge exam questions or mark schemes. Try a question, check the explanation and improve your own answer. Use your own workbook for the linked book exercises."
      ],
      [
        "Use the website",
        "Follow each lesson in order. Select a diagram to enlarge it, or hide its labels for recall. Your answers stay in this browser when storage is available. They do not automatically reach your teacher or move to another device."
      ],
      [
        "Use teacher mode",
        "As the teacher, open Teaching script for spoken explanations, examples and quick checks. Close the script before sharing the lesson screen. Use Present to reveal the lesson ideas one at a time."
      ]
    ],
    "demo": [
      "Show a question's Review this section link after an attempted answer.",
      "If your answer misses the processor's role, return to the explanation. Then close the notes and try again. The aim is to understand the missing step."
    ],
    "check": [
      "Will reading a model answer alone show that you can answer a new question?",
      "No. You should explain it in your own words and try another situation.",
      "Ask the student to close the answer and teach the idea back to you."
    ],
    "close": "Use this website to learn, practise, receive feedback and recall over time."
  }
};
