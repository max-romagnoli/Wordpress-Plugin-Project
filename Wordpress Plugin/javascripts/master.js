// ARRAY

var myArray = [{
  header: "Lorem ipsum",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  link: "https://www.youtube.com/embed/lx9qeRLUYs8",
  submenus: [[
  ]]
},{
  header: "Paragraph 1",
  text: "Voluptatem quidem, Brute, si ipsa pro se loquatur nec tam pertinaces habeat patronos, concessuram arbitror convictam superiore libro dignitati. etenim sit inpudens, si virtuti diutius repugnet, aut si honestis iucunda anteponat aut pluris esse contendat dulcedinem corporis ex eave natam laetitiam quam gravitatem animi atque constantiam. quare illam quidem dimittamus et suis se finibus tenere iubeamus, ne blanditiis eius inlecebrisque impediatur disputandi severitas. [2] quaerendum est enim, ubi sit illud summum bonum, quod reperire volumus, quoniam et voluptas ab eo remota est, et eadem fere contra eos dici possunt, qui vacuitatem doloris finem bonorum esse voluerunt, nec vero ullum probetur <oportet> summum bonum, quod virtute careat, qua nihil potest esse praestantius.",
  link: "https://www.youtube.com/embed/6v2L2UGZJAM",
  submenus: [[
  ]]
},{
  header: "Paragraph 2",
  text: "Atque haec quidem de rerum nominibus. de ipsis rebus autem saepenumero, Brute, vereor ne reprehendar, cum haec ad te scribam, qui cum in philosophia, tum in optimo genere philosophiae tantum processeris. quod si facerem quasi te erudiens, iure reprehenderer. sed ab eo plurimum absum neque, ut ea cognoscas, quae tibi notissima sunt, ad te mitto, sed quia facillime in nomine tuo adquiesco, et quia te habeo aequissimum eorum studiorum, quae mihi communia tecum sunt, existimatorem et iudicem. attendes igitur, ut soles, diligenter eamque controversiam diiudicabis, quae mihi fuit cum avunculo tuo, divino ac singulari viro.",
  link: "https://www.youtube.com/embed/mZb_gat5YCY",
  submenus: [[
  ]]
},{
  header: "Paragraph 3",
  text: "Egone quaeris, inquit, quid sentiam? quos bonos viros, fortes, iustos, moderatos aut audivimus in re publica fuisse aut ipsi vidimus, qui sine ulla doctrina naturam ipsam secuti multa laudabilia fecerunt, eos melius a natura institutos fuisse, quam institui potuissent a philosophia, si ullam aliam probavissent praeter eam, quae nihil aliud in bonis haberet nisi honestum, nihil nisi turpe in malis; ceterae philosophorum disciplinae, omnino alia magis alia, sed tamen omnes, quae rem ullam virtutis expertem aut in bonis aut in malis numerent, eas non modo nihil adiuvare arbitror neque firmare, quo meliores simus, sed ipsam depravare naturam. nam nisi hoc optineatur, id solum bonum esse, quod honestum sit, nullo modo probari possit beatam vitam virtute effici.",
  link: "https://www.youtube.com/embed/BHACKCNDMW8",
  submenus: [[
  ]]
}]


// BUTTONS

function loremIpsum() {
  document.getElementById("articleHeader").innerHTML = myArray[0]["header"];
  document.getElementById("articlePar").innerHTML = myArray[0]["text"];
  document.getElementById("articleVideo").src = myArray[0]["link"];
}

function button1() {
  document.getElementById("articleHeader").innerHTML = myArray[1]["header"];
  document.getElementById("articlePar").innerHTML = myArray[1]["text"];
  document.getElementById("articleVideo").src = myArray[1]["link"];
}

function button2() {
  document.getElementById("articleHeader").innerHTML = myArray[2]["header"];
  document.getElementById("articlePar").innerHTML = myArray[2]["text"];
  document.getElementById("articleVideo").src = myArray[2]["link"];
}

function button3() {
  document.getElementById("articleHeader").innerHTML = myArray[3]["header"];
  document.getElementById("articlePar").innerHTML = myArray[3]["text"];
  document.getElementById("articleVideo").src = myArray[3]["link"];
}
