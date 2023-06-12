function introduction(name) {
  return `Hi, my name is ${name}.`;
}


introduction("Michael");

function introductionWithLanguage(name, language) {
 console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);}

introductionWithLanguage("Lydia", "JavaScript")

function introductionWithLanguageOptional(name, language = "Javascript") {
  console.log(`Hi, my name is ${name} and I am learning toprogram in ${language} `)
}

introductionWithLanguageOptional("Lydia")