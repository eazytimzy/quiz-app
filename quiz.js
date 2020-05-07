
// //Assign DOM elements to variables with const and let
// const options = document.querySelector(".options").children;
// const answerTrackerContainer = document.querySelector(".answers-tracker");
// const questionNumberSpan = document.querySelector(".question-num-value");
// const totalQuestionSpan = document.querySelector(".total-question");
// const correctAnswerSpan = document.querySelector(".correct-answers");
// const totalQuestionSpan2 = document.querySelector(".total-question2");
// const percentage = document.querySelector(".percentage");
// const question = document.querySelector(".question");
// const opt1 = document.querySelector(".option1");
// const opt2 = document.querySelector(".option2");
// const opt3 = document.querySelector(".option3");
// const opt4 = document.querySelector(".option4");
// let questionIndex;
// let index = 0;
// let myArray = [];
// let score = 0;

// const questions = [
//     {
//         q: "In HTML, the <'p'> tag is usually used for ?",
//         options: ["Pointers", "Paragraphs", "Parenthesis", "Programming"],
//         answer: 1
//     },
//     {
//         q: "The full meaning of NI is  ?",
//         options: ["National Insurance", "Nigerian Investment", "News Information", "New Informant"],
//         answer: 0
//     },
//     {
//         q: "A frontend developer should understand basically ?",
//         options: ["Python and PHP", "NodeJS and C+", "HTML, CSS and JavaScript", "Ruby and GO"],
//         answer: 2
//     },
//     {
//         q: "Radioactive Carbon-14 in the atmosphere is as a result of reaction of neutron and ?",
//         options: ["Nitrogen", "Neon", "Phosphorus", "Oxygen"],
//         answer: 0
//     },
//      {
//         q: "Will i qualify to stage 5 ?",
//         options: ["No", "Yes", "Maybe", "Hopefully"],
//         answer: 1
//     }
// ]

// totalQuestionSpan.innerHTML = questions.length;

// //this function is to assign the options value to the values in the array using the .innerHTMLfeature to access the options from the array of options above.
// function load(){
//     questionNumberSpan.innerHTML = index + 1;
//     question.innerHTML = questions[questionIndex].q;
//     opt1.innerHTML = questions[questionIndex].options[0];
//     opt2.innerHTML = questions[questionIndex].options[1];
//     opt3.innerHTML = questions[questionIndex].options[2];
//     opt4.innerHTML = questions[questionIndex].options[3];
//     index++;
// }

// //This function checks for value of answer if correct or wrong and records the value
// function check(element){
//     if (element.id == questions[questionIndex].answer){
//         element.classList.add("correct");
//         updateAnswerTracker("correct");
//         score++;
//         console.log("score:" + score);
//     } else {
//         element.classList.add("wrong");
//         updateAnswerTracker("wrong");
//     }
//     disabledOptions();
// }

// /*This function loops through the option array to check the validity of the option, and compares it with answer to see if they are the same or not. This function is called in the function above to test and record score*/
// function disabledOptions(){
//     for (let i = 0; i < options.length; i++){
//         options[i].classList.add("disabled");
//         if (options[i].id == questions[questionIndex].answer){
//             options[i].classList.add("correct");
//         }
//     }
// }

// function enableOptions(){
//     for (let i = 0; i < options.length; i++){
//         options[i].classList.remove("disabled", "correct", "wrong");
//     }
// }
// //This function is to ensure user clicks on an option before going ahead, if no option is clicked the user gets an alert message to select an option
// function validate(){
//     if (!options[0].classList.contains("disabled")){
//         alert("Select an option");
//     } else {
//         enableOptions();
//         randomQuestion();
//     }
// }
// /*The function below is used to randomise the question order and check if all question has been answered to avoid repetition of question, you should be familiar with most of the syntax in use and the ones you are not familiar with, google them*/
// function randomQuestion(){
//     let randomNumber = Math.floor(Math.random() * questions.length);
//     let hitDuplicate = 0;
//     if (index == questions.length){
//         quizOver();
//     } else {
//         if (myArray.length > 0){
//             for (let i = 0; i < myArray.length; i++){
//                 if(myArray[i] == randomNumber){
//                     hitDuplicate = 1;
//                     break;
//                 }
//             } 
//             if (hitDuplicate == 1){
//                 randomQuestion();
//             } else { 
//                 questionIndex = randomNumber; 
//                 load();
//             }
//         }
//         if (myArray.length == 0){
//             questionIndex = randomNumber; 
//             load();
//     }
    
//     }
//     myArray.push(randomNumber);
// }

// function next(){
//     validate();
// }
// //This function below goes with the circular dots below the option to track progress or as score counter 
// function answerTracker(){
//     for (let i = 0; i < questions.length; i++){
//         const div = document.createElement("div");
//         answerTrackerContainer.appendChild(div);
//     }
// }

// function updateAnswerTracker(classNam){
//     answerTrackerContainer.children[index - 1].classList.add(classNam);
// }
// //This quizover function returns the result as percentage to the qizover div we have created earlier 
// function quizOver(){
//     document.querySelector(".quiz-over").classList.add("show");
//     correctAnswerSpan.innerHTML = score;
//     totalQuestionSpan2.innerHTML = questions.length;
//     percentage.innerHTML = (score/questions.length) * 100 + "%";
// }

// function tryAgain(){
//     window.location.reload();
// }

// window.onload = function(){
//    randomQuestion();
//    answerTracker();
// }
