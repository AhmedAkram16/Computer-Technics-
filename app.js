const $ = s => document.querySelector(s);
const $$ = (s,root=document) => [...root.querySelectorAll(s)];
const mcq = (topic,q,options,answer,explanation,context='') => ({topic,type:'mcq',q,options,answer,explanation,context});
const tf = (topic,q,answer,explanation) => ({topic,type:'tf',q,answer,explanation});
const num = (topic,q,answer,explanation) => ({topic,type:'numeric',q,answer:Array.isArray(answer)?answer:[answer],explanation});
const code = (topic,q,description,rules) => ({topic,type:'code',q,description,rules,explanation:'Local structural review checks the listed essentials. It does not execute your code.'});
const names = {fundamentals:'Computer Fundamentals',numbers:'Number Systems',algorithms:'Algorithms & Flowcharts',cpp:'C++ Programming'};
const banks = {
  fundamentals:[
    mcq('fundamentals','Which component provides communication between a computer and the outside world?',['Compact unit','I/O unit','Drivers','Storage'],1,'The Input/Output unit connects a computer to external devices.'),
    mcq('fundamentals','Cache memory is mainly used for:',['Permanent storage','Faster CPU data access','Backing up a system','Storing the OS only'],1,'Cache keeps frequently used data close to the CPU.'),
    tf('fundamentals','RAM is non-volatile memory.',false,'RAM is volatile: contents are lost without power.'),
    mcq('fundamentals','Each location in RAM has a unique identifier called:',['Index','Address','Block number','Bytecode'],1,'Each memory location has a memory address.'),
    mcq('fundamentals','The three main system buses are:',['Data, ROM, Control','Data, Control, Address','Address, RAM, Control','RAM, ROM, I/O'],1,'The standard buses are data, address, and control.'),
    mcq('fundamentals','Which is an example of a relational DBMS?',['MongoDB','MySQL','Redis','Cassandra'],1,'MySQL is a relational database management system.'),
    mcq('fundamentals','Which part is commonly called the brain of the computer?',['ALU','CPU','Memory','Input unit'],1,'The CPU coordinates and executes instructions.'),
    mcq('fundamentals','Which CPU unit performs arithmetic and logical operations?',['ALU','Control unit','Register','Input unit'],0,'The Arithmetic Logic Unit does arithmetic and logical work.'),
    mcq('fundamentals','The smallest unit of data in computer storage is:',['Byte','Word','Bit','Nibble'],2,'A bit is a single binary digit, 0 or 1.'),
    mcq('fundamentals','The physical parts of a computer are called:',['Hardware','Software','Packages','System software'],0,'Hardware means tangible physical components.'),
    tf('fundamentals','An operating system is system software.',true,'An operating system manages hardware and services.'),
    mcq('fundamentals','Which is secondary storage?',['CPU register','Cache','Hard disk','RAM'],2,'A hard disk is non-volatile secondary storage.'),
    mcq('fundamentals','Which unit converts user-entered data into computer-understandable form?',['Output unit','Input unit','Memory unit','ALU'],1,'The input unit accepts and converts input.'),
    mcq('fundamentals','Which is an output device?',['Keyboard','Microphone','Monitor','Scanner'],2,'A monitor displays data from the computer.'),
    mcq('fundamentals','Which memory is generally fastest?',['Hard disk','RAM','Cache','Optical disk'],2,'Cache is faster than RAM and secondary storage.'),
    mcq('fundamentals','Which bus carries control signals?',['Address bus','Data bus','Control bus','Power bus'],2,'The control bus carries timing and control signals.'),
    mcq('fundamentals','Which bus carries actual data?',['Data bus','Address bus','Control bus','Instruction bus'],0,'The data bus transports data itself.'),
    mcq('fundamentals','Which bus identifies the memory or I/O location?',['Control bus','Data bus','Address bus','Cache bus'],2,'The address bus carries the target address.'),
    tf('fundamentals','A byte is equal to 8 bits.',true,'A standard byte contains eight bits.'),
    tf('fundamentals','Software refers only to physical computer parts.',false,'Physical components are hardware; software is programs.')
  ],
  numbers:[
    num('numbers','Convert decimal 43 to binary.','101011','43 = 32 + 8 + 2 + 1, so it is 101011₂.'),
    num('numbers','Convert binary 11011.0011 to decimal.','27.1875','11011₂ = 27 and .0011₂ = 0.1875.'),
    num('numbers','Convert hexadecimal AB4 to decimal.','2740','A×16² + B×16 + 4 = 2740.'),
    num('numbers','Convert octal 54 to binary.','101100','5₈ = 101₂ and 4₈ = 100₂.'),
    mcq('numbers','How do you obtain the 1’s complement of a binary number?',['Add 1 to every bit','Flip every bit','Move the decimal point','Reverse digits'],1,'1’s complement changes every 0 to 1 and every 1 to 0.'),
    tf('numbers','Adding 0101 and 0011 in 4-bit two’s complement causes overflow.',true,'5 + 3 = 8, outside the 4-bit signed range −8 to +7.'),
    num('numbers','In 8-bit two’s complement, what is the decimal value of 11111010?','-6','Invert, add one, then apply a negative sign.'),
    num('numbers','Convert decimal 0.375 to binary.','0.011','0.375 = 1/4 + 1/8, therefore .011₂.'),
    num('numbers','Convert binary 1101 to decimal.','13','8 + 4 + 1 = 13.'),
    num('numbers','Convert hexadecimal B8 to decimal.','184','B×16 + 8 = 11×16 + 8 = 184.'),
    num('numbers','Convert octal 125 to decimal.','85','1×64 + 2×8 + 5 = 85.'),
    num('numbers','Convert binary 110 to octal.','6','110₂ is one group of three bits: 6₈.'),
    num('numbers','Convert binary 10.11 to octal.','2.6','Pad fractional bits then group in threes.'),
    num('numbers','Convert hexadecimal 12.B to binary.','10010.1011','1=0001, 2=0010, B=1011; omit leading zeros.'),
    num('numbers','Convert binary 11101.011 to hexadecimal.','1D.6','Group bits in fours: 0001 1101 . 0110.'),
    num('numbers','What is the 1’s complement of 10100010?','01011101','Flip every bit.'),
    num('numbers','What is the 2’s complement of 10100010?','01011110','Flip bits then add 1.'),
    mcq('numbers','For an 8-bit signed two’s complement number, the valid range is:',['−127 to +127','−128 to +127','−255 to +255','0 to 255'],1,'The range is −2⁷ to 2⁷−1.'),
    tf('numbers','The hexadecimal digit A represents decimal 10.',true,'Hexadecimal uses A=10 through F=15.'),
    mcq('numbers','Overflow in signed addition can occur when:',['Adding opposite signs','Adding two positives gives a negative','Subtracting zero','The result ends in 0'],1,'Same-sign additions that produce the opposite sign indicate overflow.')
  ],
  algorithms:[
    tf('algorithms','An algorithm is a step-by-step procedure for solving a problem.',true,'That is the core definition of an algorithm.'),
    mcq('algorithms','Which flowchart shape is used for a decision?',['Rectangle','Parallelogram','Diamond','Oval'],2,'A diamond represents a condition or decision.'),
    mcq('algorithms','To find the average of three marks, calculate:',['m1 × m2 × m3','(m1 + m2 + m3) / 3','largest mark only','m1 + m2 + m3'],1,'Add the marks and divide by 3.'),
    tf('algorithms','A flowchart is a graphical representation of an algorithm.',true,'Flowcharts show steps visually using standard symbols.'),
    mcq('algorithms','Which flowchart symbol represents input or output?',['Rectangle','Diamond','Parallelogram','Circle'],2,'A parallelogram represents input/output.'),
    mcq('algorithms','Which flowchart symbol marks Start or End?',['Oval','Rectangle','Diamond','Parallelogram'],0,'An oval/terminator represents Start and End.'),
    mcq('algorithms','Which flowchart symbol represents processing?',['Rectangle','Oval','Diamond','Arrow'],0,'A rectangle represents a processing step.'),
    tf('algorithms','Pseudocode must use exact C++ syntax.',false,'Pseudocode is language-independent and focuses on logic.'),
    mcq('algorithms','For printing even values up to n, a suitable starting value is:',['0 or 2','1','n + 1','−1 only'],0,'Begin at 0 or 2, then increase by 2.'),
    mcq('algorithms','What gives a remainder when testing odd/even values?',['/','%','*','+'],1,'The modulus operator gives a remainder.'),
    mcq('algorithms','What must happen before F = C × 9 / 5 + 32?',['Print F','Read C','End algorithm','Compare C to zero'],1,'Read the Celsius value first.'),
    tf('algorithms','An algorithm should have a finite number of steps.',true,'A well-formed algorithm terminates.'),
    mcq('algorithms','For finding the maximum of three values, a key operation is:',['Compare values','Print before reading','Use a disk','Convert to hex'],0,'Comparisons choose the largest value.'),
    mcq('algorithms','Which is valid pseudocode for reading a value?',['READ n','n == READ','PRINT INPUT n','END n'],0,'READ n is a common input instruction.'),
    mcq('algorithms','Which is valid pseudocode for showing a result?',['INPUT result','PRINT result','result = PRINT','READ output'],1,'PRINT displays a result.'),
    tf('algorithms','A decision can branch as Yes and No.',true,'A decision normally branches true/false.'),
    mcq('algorithms','To calculate cubes from 1 to n, calculate:',['i + 3','i × i × i','i / 3','i − n'],1,'The cube is i × i × i.'),
    mcq('algorithms','Which order is best for problem solving?',['Implement, understand, test','Understand, design, implement','Test, output, ignore input','Compile, then decide'],1,'Understand the problem before design and implementation.'),
    tf('algorithms','A loop is useful when steps need to be repeated.',true,'Loops represent repetition efficiently.'),
    mcq('algorithms','A number that is neither positive nor negative is:',['Odd','Even','Zero','Invalid'],2,'Zero is neither positive nor negative.')
  ],
  cpp:[
    mcq('cpp','What best describes a syntax error?',['An error only after execution','Violating a language grammar rule','Wrong output with no error','An infinite loop'],1,'Syntax errors violate grammar rules and usually prevent compilation.'),
    mcq('cpp','What is printed by this code?',['3 9 7','3 7 9','7 9 3','The program will not run'],1,'y++ uses 6, then increments y to 7; r becomes 9.','int x = 3, y = 6;\nint r = x + y++;\ncout << x << " " << y << " " << r;'),
    tf('cpp','A compiler can automatically correct syntax errors.',false,'A compiler reports syntax errors; the programmer corrects them.'),
    mcq('cpp','Which data type suits a fractional value?',['bool','double','char','int'],1,'double stores fractional values.'),
    tf('cpp','A logical error may compile but produce a wrong result.',true,'Logical errors affect meaning, not necessarily syntax.'),
    tf('cpp','A C++ variable name can start with a number.',false,'Identifiers cannot begin with a digit.'),
    mcq('cpp','Which function is the normal start point of a C++ program?',['start()','main()','run()','program()'],1,'C++ execution begins at main().'),
    mcq('cpp','Which operator reads input using cin?',['<<','>>','==','%'],1,'cin >> variable reads input.'),
    mcq('cpp','Which operator writes output with cout?',['>>','<<','&&','!='],1,'cout << value sends output.'),
    mcq('cpp','Which statement chooses among several cases?',['for','switch','while','return'],1,'switch chooses a matching case label.'),
    mcq('cpp','What does default handle in switch?',['First case','No matching case','Syntax error','Every case'],1,'default runs if no case matches.'),
    mcq('cpp','Which expression tests equality?',['x = 5','x == 5','x += 5','x != 5 only'],1,'== compares; = assigns.'),
    mcq('cpp','Which expression correctly tests n is even?',['n / 2 == 0','n % 2 == 0','n + 2 == 0','n * 2 == 0'],1,'Even numbers leave zero remainder when divided by 2.'),
    mcq('cpp','int sum = a - b; when the aim is addition contains a:',['Syntax error','Logical error','Runtime error','No error'],1,'It compiles but subtracts instead of adds.'),
    tf('cpp','A missing semicolon after cout is a syntax error.',true,'Output statements must end in a semicolon.'),
    mcq('cpp','Which condition is correct for a leap year?',['year % 4 == 0 only','year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)','year % 100 == 0 only','Every year'],1,'Century years require divisibility by 400.'),
    code('cpp','Write an Even or Odd checker','Read an integer and print Even or Odd using if / else and modulus.',[['Read an integer using cin.',/cin\s*>>\s*\w+/],['Use the modulus operator.',/%\s*2/],['Use an if statement.',/\bif\s*\(/],['Include an else path.',/\belse\b/],['Print with cout.',/cout\s*<</]]),
    code('cpp','Write a Simple Calculator','Read two numbers and an operation. Use switch for +, -, *, / and guard division by zero.',[['Read values with cin.',/cin\s*>>/],['Use switch.',/\bswitch\s*\(/],['Handle +, -, *, and /.',/case\s*['"]?\+['"]?[\s\S]*case\s*['"]?\-['"]?[\s\S]*case\s*['"]?\*['"]?[\s\S]*case\s*['"]?\/['"]?/],['Guard division by zero.',/\w+\s*==\s*0/],['Provide default.',/\bdefault\s*:/]]),
    code('cpp','Write Maximum of Three Numbers','Read three integers and print the largest using conditions.',[['Read three values.',/cin\s*>>\s*\w+\s*>>\s*\w+\s*>>\s*\w+/],['Use conditional logic.',/\bif\s*\(/],['Compare values.',/(>|>=)/],['Print maximum.',/cout\s*<</]]),
    code('cpp','Write a Positive, Negative, or Zero checker','Read a number and print positive, negative, or zero.',[['Read input.',/cin\s*>>\s*\w+/],['Use an if statement.',/\bif\s*\(/],['Use else if.',/\belse\s+if\b/],['Use an else case.',/\belse\b/],['Print a result.',/cout\s*<</]])
  ]
};

const all = Object.values(banks).flat();
const practice = {topic:null,questions:[],index:0,score:0,selected:null,answered:false,completed:0,correct:0};
const exam = {questions:[],index:0,answers:[],results:[],seconds:3600,timer:null,started:false};
const shuffle = items => [...items].sort(() => Math.random() - .5);
const answerExists = value => value !== null && value !== undefined && value !== '';
const normal = value => String(value).toLowerCase().replace(/[\s,_]/g,'').replace(/[₂₈₁₀₁₆]/g,'').replace(/^\+/,'');
const label = question => ({mcq:'MULTIPLE CHOICE',tf:'TRUE / FALSE',numeric:'FINAL ANSWER',code:'WRITE C++ CODE'})[question.type];

function go(route) {
  $$('.view').forEach(view => view.classList.toggle('active',view.id === route));
  $$('.nav-link').forEach(button => button.classList.toggle('active',button.dataset.route === route));
  window.scrollTo({top:0,behavior:'smooth'});
  if (route === 'practice' && !practice.questions.length) startQuiz(null);
}
function startQuiz(topic) {
  practice.topic = topic; practice.questions = topic ? [...banks[topic]] : shuffle(all).slice(0,20);
  practice.index=0; practice.score=0; practice.selected=null; practice.answered=false;
  $('#results-card').hidden=true;
  $('#quiz-kicker').textContent = topic ? 'MODULE 0' + (Object.keys(names).indexOf(topic)+1) + ' · 20 QUESTIONS' : 'MIXED REVIEW · 20 QUESTIONS';
  $('#quiz-title').textContent=topic ? names[topic] : 'Practice arena'; renderPractice();
}
function answerArea(question,root,selected,onSelect) {
  root.innerHTML='';
  if (question.type === 'mcq') {
    const choices=document.createElement('div'); choices.className='answer-options';
    question.options.forEach((option,index) => { const button=document.createElement('button'); button.className='option' + (selected===index?' selected':''); button.innerHTML='<span class="choice-letter">' + String.fromCharCode(65+index) + '</span><span>' + option + '</span>'; button.addEventListener('click',() => { $$('.option',choices).forEach(item=>item.classList.remove('selected')); button.classList.add('selected'); onSelect(index); }); choices.append(button); }); root.append(choices);
  } else if (question.type === 'tf') {
    const choices=document.createElement('div'); choices.className='tf-group';
    [true,false].forEach(value => { const button=document.createElement('button'); button.className='tf-option' + (selected===value?' selected':''); button.textContent=value?'True':'False'; button.addEventListener('click',() => { $$('.tf-option',choices).forEach(item=>item.classList.remove('selected')); button.classList.add('selected'); onSelect(value); }); choices.append(button); }); root.append(choices);
  } else if (question.type === 'numeric') {
    const input=document.createElement('input'); input.className='answer-input'; input.placeholder='Type the final answer…'; input.autocomplete='off'; input.value=selected||''; input.addEventListener('input',()=>onSelect(input.value)); root.append(input);
  } else {
    const note=document.createElement('p'); note.className='code-notice'; note.textContent=question.description + ' Start from a completely blank file - include every line you need.';
    const input=document.createElement('textarea'); input.className='answer-code'; input.spellcheck=false; input.placeholder='// Start your C++ solution from scratch\n#include <iostream>'; input.value=selected||''; input.addEventListener('input',()=>onSelect(input.value)); root.append(note,input);
  }
}
function assess(question,selected) {
  if (question.type === 'numeric') return {right:question.answer.some(item=>normal(item)===normal(selected)),detail:question.explanation};
  if (question.type === 'code') { const missed=question.rules.filter(([,rule])=>!rule.test(selected)); return {right:missed.length===0,detail:missed.length?'Still needed: ' + missed.map(item=>item[0]).join(' '):'The structural checker found every required building block.'}; }
  return {right:selected===question.answer,detail:question.explanation};
}
function renderPractice() {
  const question=practice.questions[practice.index]; practice.selected=null; practice.answered=false;
  $('#question-count').textContent='Question ' + (practice.index+1) + ' of ' + practice.questions.length; $('#live-score').textContent=practice.score+' pts'; $('#progress-fill').style.width=(practice.index/practice.questions.length*100)+'%';
  $('#question-type').textContent=label(question); $('#question-text').textContent=question.q; $('#question-context').hidden=!question.context; $('#question-context').textContent=question.context||'';
  $('#feedback').textContent=''; $('#feedback').className='feedback'; $('#submit-answer').hidden=false; $('#next-question').hidden=true;
  answerArea(question,$('#answer-area'),null,value=>practice.selected=value);
}
function checkPractice() {
  if (practice.answered) return; const question=practice.questions[practice.index];
  if (!answerExists(practice.selected)) { $('#feedback').textContent='Choose or type an answer first.'; $('#feedback').className='feedback bad'; return; }
  const result=assess(question,practice.selected); practice.answered=true; practice.completed++; if(result.right){practice.score+=10;practice.correct++;}
  $('#feedback').className='feedback ' + (result.right?'good':'bad'); $('#feedback').textContent=(result.right?'✓ Correct. ':'✕ Not quite. ')+result.detail; $('#submit-answer').hidden=true; $('#next-question').hidden=false; readiness();
}
function nextPractice() { if(practice.index+1<practice.questions.length){practice.index++;renderPractice();}else{showPracticeResults();} }
function showPracticeResults() {
  $('#progress-fill').style.width='100%'; $('#next-question').hidden=true; const result=$('#results-card'); result.hidden=false;
  const percent=Math.round(practice.score/(practice.questions.length*10)*100); const note=percent>=80?'Excellent work - you are looking midterm-ready.':percent>=50?'Good foundation. Revisit the explanations and go again.':'Keep going. Another focused round is the fastest route to improvement.';
  result.innerHTML='<p class="eyebrow">ROUND COMPLETE</p><h2>'+practice.score+' / '+(practice.questions.length*10)+' points</h2><p>'+note+'</p><div class="result-actions"><button class="button button-primary" id="retry-quiz">Try another round</button><button class="button button-quiet" id="home-from-results">Back to dashboard</button></div>';
  $('#retry-quiz').addEventListener('click',()=>startQuiz(practice.topic)); $('#home-from-results').addEventListener('click',()=>go('home'));
}
function readiness() { const ratio=practice.completed?Math.round(practice.correct/practice.completed*100):0; $('#readiness-score').textContent=ratio+'%'; $('#readiness-meter').style.width=ratio+'%'; $('#readiness-note').textContent=practice.correct+' correct answer'+(practice.correct===1?'':'s')+' out of '+practice.completed+'.'; }

const challenges = {
  evenOdd:{tag:'CONDITIONS',title:'Even or Odd checker',description:'Read an integer, then print whether it is even or odd using modulus and if / else.',checks:['input with cin','modulus %','if / else','output with cout'],rules:banks.cpp[16].rules,reference:'#include <iostream>\nusing namespace std;\n\nint main() {\n  int number;\n  cin >> number;\n  if (number % 2 == 0) {\n    cout << "Even";\n  } else {\n    cout << "Odd";\n  }\n  return 0;\n}'},
  calculator:{tag:'SWITCH STATEMENTS',title:'Simple calculator',description:'Read two numbers and an operation (+, -, *, /). Use switch and handle division by zero.',checks:['two numbers','switch','four operations','zero guard'],rules:banks.cpp[17].rules,reference:'#include <iostream>\nusing namespace std;\n\nint main() {\n  double x, y;\n  char op;\n  cin >> x >> y >> op;\n  switch (op) {\n    case \'+\': cout << x + y; break;\n    case \'-\': cout << x - y; break;\n    case \'*\': cout << x * y; break;\n    case \'/\': if (y == 0) cout << "Error"; else cout << x / y; break;\n    default: cout << "Invalid operation";\n  }\n  return 0;\n}'},
  fixSyntax:{tag:'DEBUGGING',title:'Fix the syntax error',description:'Write the corrected full program that prints Hello World.',checks:['iostream','main function','cout statement','semicolon'],rules:[['Include iostream.',/#include\s*<iostream>/],['Declare main.',/\bint\s+main\s*\(/],['Use cout.',/cout\s*<</],['End cout with a semicolon.',/cout\s*<<[^\n]*;/]],reference:'#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello World";\n  return 0;\n}'}
};
let active='evenOdd';
function esc(text){return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function highlight(source) {
  return esc(source||'').replace(/("(?:\\.|[^"\\])*")|(\/\/.*$)|(#[^\n]*)|\b(int|double|char|bool|void|return|if|else|switch|case|break|default|using|namespace|include)\b|\b(\d+(?:\.\d+)?)\b|([+\-*\/%=<>!&|]+)/gm,(full,string,comment,prep,keyword,number)=>{
    if(string)return '<span class="token-string">'+full+'</span>'; if(comment)return '<span class="token-comment">'+full+'</span>'; if(prep)return '<span class="token-preprocessor">'+full+'</span>'; if(keyword)return '<span class="'+(['int','double','char','bool','void'].includes(keyword)?'token-type':'token-keyword')+'">'+full+'</span>'; if(number)return '<span class="token-number">'+full+'</span>'; return '<span class="token-operator">'+full+'</span>';
  });
}
function syncEditor() { const source=$('#code-input').value; $('#code-highlight code').innerHTML=highlight(source)+(source.endsWith('\n')?' ':''); $('#line-numbers').textContent=Array.from({length:source.split('\n').length},(_,i)=>i+1).join('\n'); }
function selectChallenge(key) { active=key; const item=challenges[key]; $$('.challenge-choice').forEach(button=>button.classList.toggle('selected',button.dataset.challenge===key)); $('#challenge-tag').textContent=item.tag; $('#challenge-title').textContent=item.title; $('#challenge-description').textContent=item.description; $('#challenge-checks').innerHTML=item.checks.map(check=>'<span>'+check+'</span>').join(''); $('#code-input').value=''; $('#code-feedback').hidden=true; syncEditor(); }
function diff(input,reference) {
  const lines=input.split('\n'),expected=reference.split('\n'); let html='';
  for(let line=0;line<Math.max(lines.length,expected.length);line++){const actual=lines[line]||'',wanted=expected[line]||'';if(actual===wanted){html+=(line+1)+'  '+esc(actual)+'\n';continue;}let value='';for(let i=0;i<Math.max(actual.length,wanted.length);i++){if(actual[i]===wanted[i])value+=esc(actual[i]||'');else if(actual[i])value+='<span class="wrong-char">'+esc(actual[i])+'</span>';else value+='<span class="missing-char">'+esc(wanted[i])+'</span>';}html+=(line+1)+'  '+value+'\n';}return html;
}
function reviewCode() {
  const source=$('#code-input').value,item=challenges[active],feedback=$('#code-feedback'); if(!source.trim()){feedback.hidden=false;feedback.innerHTML='<div class="review-status bad">Start writing first - this editor intentionally begins with a blank file.</div>';return;}
  const passed=item.rules.filter(([,rule])=>rule.test(source)),missed=item.rules.filter(([,rule])=>!rule.test(source)),good=missed.length===0; feedback.hidden=false;
  feedback.innerHTML='<div class="review-status '+(good?'good':'bad')+'">'+(good?'✓ Great structure - every required building block is present.':'Review found pieces to improve.')+'</div><ul class="review-list">'+passed.map(item=>'<li>✓ '+item[0]+'</li>').join('')+missed.map(item=>'<li>• '+item[0]+'</li>').join('')+'</ul>'+(good?'':'<p class="diff-title">REFERENCE COMPARISON · red = extra/different character · amber = expected character</p><pre class="code-diff">'+diff(source,item.reference)+'</pre>');
  feedback.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function beginExam() {
  const normalCpp=banks.cpp.filter(item=>item.type!=='code'),cppCode=banks.cpp.filter(item=>item.type==='code');
  exam.questions=shuffle([...shuffle(banks.fundamentals).slice(0,10),...shuffle(banks.numbers).slice(0,10),...shuffle(banks.algorithms).slice(0,8),...shuffle(normalCpp).slice(0,8),...cppCode]);
  exam.index=0;exam.answers=Array(40).fill(null);exam.results=Array(40).fill(null);exam.seconds=3600;exam.started=true;clearInterval(exam.timer);exam.timer=setInterval(()=>{exam.seconds--;timer();if(exam.seconds<=0)finishExam(true);},1000);
  $('#exam-intro').hidden=true;$('#exam-run').hidden=false;$('#exam-results').hidden=true;renderExam();timer();
}
function timer(){const mins=Math.max(0,Math.floor(exam.seconds/60)),secs=Math.max(0,exam.seconds%60);$('#exam-timer').textContent=String(mins).padStart(2,'0')+':'+String(secs).padStart(2,'0');$('#exam-timer').style.color=exam.seconds<300?'#ff6e83':'';}
function renderExam() {
  const question=exam.questions[exam.index]; $('#exam-progress-text').textContent='Question '+(exam.index+1)+' / 40'; $('#exam-question-type').textContent=label(question);$('#exam-question-text').textContent=question.q;$('#exam-question-context').hidden=!question.context;$('#exam-question-context').textContent=question.context||'';$('#exam-feedback').textContent='';$('#exam-feedback').className='feedback';
  answerArea(question,$('#exam-answer-area'),exam.answers[exam.index],value=>{exam.answers[exam.index]=value;examMap();});examMap();
}
function examMap(){$('#exam-map').innerHTML=exam.questions.map((question,index)=>'<button class="'+(index===exam.index?'current ':'')+(answerExists(exam.answers[index])?'saved':'')+'" data-exam-index="'+index+'">'+(index+1)+'</button>').join('');$$('#exam-map button').forEach(button=>button.addEventListener('click',()=>{exam.index=Number(button.dataset.examIndex);renderExam();}));}
function checkExam(){const question=exam.questions[exam.index],selected=exam.answers[exam.index],feedback=$('#exam-feedback');if(!answerExists(selected)){feedback.textContent='Choose or type an answer first.';feedback.className='feedback bad';return;}const result=assess(question,selected);exam.results[exam.index]=result;feedback.className='feedback '+(result.right?'good':'bad');feedback.textContent=(result.right?'✓ Saved - correct. ':'Saved. ')+result.detail;examMap();}
function nextExam(){if(exam.index<39){exam.index++;renderExam();}else finishExam(false);}
function finishExam(timeUp){if(!exam.started)return;exam.started=false;clearInterval(exam.timer);$('#exam-run').hidden=true;const result=$('#exam-results');result.hidden=false;result.classList.add('exam-finished');const correct=exam.results.filter(item=>item&&item.right).length,answered=exam.answers.filter(answerExists).length;result.innerHTML='<p class="eyebrow">'+(timeUp?'TIME IS UP':'EXAM SUBMITTED')+'</p><h2>'+(correct*2.5)+' / 100</h2><p>You answered '+answered+' of 40 questions. '+(correct>=30?'A seriously strong result - keep the momentum.':'Review missed topics, then start a fresh simulation.')+'</p><div class="result-actions"><button class="button button-primary" id="retake-exam">Retake 60-minute exam</button><button class="button button-quiet" id="exam-home">Back to dashboard</button></div>';$('#retake-exam').addEventListener('click',beginExam);$('#exam-home').addEventListener('click',()=>go('home'));window.scrollTo({top:0,behavior:'smooth'});}
function leaveExam(){clearInterval(exam.timer);exam.started=false;$('#exam-run').hidden=true;$('#exam-results').hidden=true;$('#exam-intro').hidden=false;}
function switchTheme(){const light=document.body.classList.toggle('light');localStorage.setItem('bytebridge-theme',light?'light':'dark');$('#theme-toggle').setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');}
function savedTheme(){if(localStorage.getItem('bytebridge-theme')==='light'){document.body.classList.add('light');$('#theme-toggle').setAttribute('aria-label','Switch to dark mode');}}

$$('[data-route]').forEach(button=>button.addEventListener('click',()=>{if(!button.classList.contains('topic-card'))go(button.dataset.route);}));
$$('.topic-card').forEach(card=>card.addEventListener('click',()=>{startQuiz(card.dataset.topic);go('practice');}));
$('#quick-reveal').addEventListener('click',()=>{$('#quick-answer').hidden=false;$('#quick-reveal').hidden=true;});
$('#submit-answer').addEventListener('click',checkPractice);$('#next-question').addEventListener('click',nextPractice);
$$('.challenge-choice').forEach(button=>button.addEventListener('click',()=>selectChallenge(button.dataset.challenge)));
$('#code-input').addEventListener('input',syncEditor);$('#code-input').addEventListener('scroll',()=>{$('#code-highlight').scrollTop=$('#code-input').scrollTop;$('#code-highlight').scrollLeft=$('#code-input').scrollLeft;$('#line-numbers').scrollTop=$('#code-input').scrollTop;});$('#review-code').addEventListener('click',reviewCode);$('#reset-code').addEventListener('click',()=>selectChallenge(active));
$('#begin-exam').addEventListener('click',beginExam);$('#exam-check-answer').addEventListener('click',checkExam);$('#exam-next-question').addEventListener('click',nextExam);$('#submit-exam').addEventListener('click',()=>finishExam(false));$('#leave-exam').addEventListener('click',leaveExam);$('#theme-toggle').addEventListener('click',switchTheme);
savedTheme();selectChallenge('evenOdd');
