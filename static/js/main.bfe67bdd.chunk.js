(this.webpackJsonptrivia=this.webpackJsonptrivia||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),o=a(2),c=a(3),l=a(1),h=a(5),u=a(4),d=JSON.parse(function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText}("https://opentdb.com/api_category.php"));var m=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChangeNumero=n.handleChangeNumero.bind(Object(l.a)(n)),n.handleChangeId=n.handleChangeId.bind(Object(l.a)(n)),n.getTrivia=n.getTrivia.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){!function(e){e.trivia_categories.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.text=e.name,document.getElementById("categorias").add(t)}))}(d)}},{key:"handleChangeNumero",value:function(e){this.props.handleChangeNquestions(e.target.value),this.setState({numero:e.target.value})}},{key:"handleChangeId",value:function(e){this.props.handleChangeCategory(e.target.value)}},{key:"getTrivia",value:function(){this.setState({selected:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"intro border border-dark rounded text-center",style:{marginBottom:"30px"}},s.a.createElement("div",{className:"row d-flex justify-content-center  ",style:{marginTop:"30px"}},s.a.createElement("h1",null,"Welcome to TriviaApp")),s.a.createElement("div",{className:"row d-flex justify-content-center  ",style:{margin:"20px"}},s.a.createElement("h4",null,"Choose category"),s.a.createElement("select",{name:"categorias",id:"categorias",onChange:this.handleChangeId})),s.a.createElement("div",{className:"row d-flex justify-content-center  "},s.a.createElement("h4",null,"Choose the number of questions")),s.a.createElement("div",{className:"row d-flex justify-content-center  "},s.a.createElement("input",{type:"range",min:"1",max:"30",onChange:this.handleChangeNumero}),s.a.createElement("h4",null,this.props.nquestions)),s.a.createElement("button",{className:"btn btn-dark ",onClick:this.props.getTrivia,style:{margin:"10px"}},"Get Trivia"))}}]),a}(s.a.Component),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"intro border border-dark rounded text-center",style:{marginBottom:"30px"}},s.a.createElement("div",{className:"row d-flex justify-content-center  ",style:{marginTop:"30px"}},s.a.createElement("h1",null,"Welcome to this ",s.a.createElement("b",null,this.props.category," Trivia"))),s.a.createElement("div",{className:"row d-flex justify-content-center  "},s.a.createElement("h4",null,"For each question, ",s.a.createElement("b",null,"choose the correct answer."))),s.a.createElement("div",{className:"row   ",style:{margin:"10px"}},s.a.createElement("div",{className:"col d-flex justify-content-center"},s.a.createElement("p",null,s.a.createElement("b",null," Points:")," ",this.props.score)),s.a.createElement("div",{className:"col d-flex justify-content-center"},s.a.createElement("p",null,s.a.createElement("b",null," Round:")," ",this.props.round))))}}]),a}(s.a.Component),g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectedOption:"",checked:!1,isOne:!1,isTwo:!1,isThree:!1,isFour:!1},n.handleOptionChange=n.handleOptionChange.bind(Object(l.a)(n)),n.check=n.check.bind(Object(l.a)(n)),n.nextQuestion=n.nextQuestion.bind(Object(l.a)(n)),n.endTrivia=n.endTrivia.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"handleOptionChange",value:function(e){this.state.checked||(this.clearRadio(),this.setState({selectedOption:e.target.value}),"1"===e.target.id&&this.setState({isOne:!0}),"2"===e.target.id&&this.setState({isTwo:!0}),"3"===e.target.id&&this.setState({isThree:!0}),"4"===e.target.id&&this.setState({isFour:!0}))}},{key:"check",value:function(){""!==this.state.selectedOption&&(this.state.selectedOption===this.props.realanswer?(this.props.increaseScore(),this.setState({checked:!0}),document.getElementById(this.state.selectedOption).style.backgroundColor="green"):(document.getElementById(this.state.selectedOption).style.backgroundColor="red",document.getElementById(this.props.realanswer).style.backgroundColor="green"),this.setState({checked:!0}))}},{key:"endTrivia",value:function(){this.props.endMainTrivia()}},{key:"clearRadio",value:function(){this.setState({isOne:!1,isTwo:!1,isThree:!1,isFour:!1})}},{key:"nextQuestion",value:function(){document.getElementById(this.state.selectedOption).style.backgroundColor="",document.getElementById(this.props.realanswer).style.backgroundColor="",this.props.nextQuestion(),this.clearRadio(),this.setState({checked:0,selectedOption:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row text-center d-flex justify-content-center"},s.a.createElement("h1",null,this.props.question)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col d-flex justify-content-center"},s.a.createElement("table",{className:"table table-bordered "},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center",id:this.props.answer1},s.a.createElement("input",{type:"radio",id:"1",value:this.props.answer1,name:"answer",checked:this.state.isOne,onChange:this.handleOptionChange}),this.props.answer1),s.a.createElement("td",{className:"text-center",id:this.props.answer2},s.a.createElement("input",{type:"radio",id:"2",value:this.props.answer2,name:"answer",checked:this.state.isTwo,onChange:this.handleOptionChange}),this.props.answer2))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center",id:this.props.answer3},s.a.createElement("input",{type:"radio",id:"3",value:this.props.answer3,name:"answer",checked:this.state.isThree,onChange:this.handleOptionChange}),this.props.answer3),s.a.createElement("td",{className:"text-center ",id:this.props.answer4},s.a.createElement("input",{type:"radio",id:"4",value:this.props.answer4,name:"answer",checked:this.state.isFour,onChange:this.handleOptionChange}),this.props.answer4)))))),s.a.createElement("div",{className:"row  d-flex justify-content-center"},this.props.round<=this.props.lenght&&!this.state.checked?s.a.createElement("button",{disabled:this.state.checked,className:"btn btn-dark ",onClick:this.check,style:{margin:"30px"}},"Check"):null,this.state.checked&&this.props.round<this.props.lenght?s.a.createElement("button",{className:"btn btn-info ",onClick:this.nextQuestion,style:{margin:"30px"}},"Next Question"):null,this.state.checked&&this.props.round===this.props.lenght?s.a.createElement("button",{className:"btn btn-info ",onClick:this.endTrivia,style:{margin:"30px"}},"End Trivia"):null))}}]),a}(s.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("center",null,s.a.createElement("footer",{id:"footer"},"made by ",s.a.createElement("b",null,"Cedomka")))}}]),a}(s.a.Component),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"newTrivia",value:function(){window.location.reload()}},{key:"render",value:function(){return s.a.createElement("div",{className:"intro border border-dark rounded text-center",style:{marginBottom:"20px"}},s.a.createElement("div",{className:"row d-flex justify-content-center  ",style:{marginTop:"20px"}},s.a.createElement("h1",null,"Final Score: ",s.a.createElement("b",null,this.props.score))),s.a.createElement("div",{className:"row d-flex justify-content-center  "},this.props.score/this.props.lenght*100>=65?s.a.createElement("h4",null," ",s.a.createElement("b",null,"Excellent"),", keep it up"):s.a.createElement("h4",null,s.a.createElement("b",null,"Better luck")," next time")),s.a.createElement("div",{className:"row  d-flex justify-content-center "},s.a.createElement("button",{className:"btn btn-info ",onClick:this.newTrivia,style:{margin:"10px"}},"New trivia")))}}]),a}(s.a.Component);function w(e,t){var a="https://opentdb.com/api.php?amount=".concat(t,"&category=").concat(e,"&difficulty=easy&type=multiple"),n=new XMLHttpRequest;return n.open("GET",a,!1),n.send(null),JSON.parse(n.responseText)}var y=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:w(n.props.category,n.props.nquestions),realanswer:"",answer1:"",answer2:"",answer3:"",answer4:"",round:0,score:0,finished:!1},console.log(n.state.data.resuls),n.nextQuestion=n.nextQuestion.bind(Object(l.a)(n)),n.increaseScore=n.increaseScore.bind(Object(l.a)(n)),n.endMainTrivia=n.endMainTrivia.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Math.round(3*Math.random()+1);this.setState({round:this.state.round+1,realanswer:this.state.data.results[this.state.round].correct_answer,question:this.state.data.results[this.state.round].question}),1===e&&this.setState({answer1:this.state.data.results[this.state.round].correct_answer,answer2:this.state.data.results[this.state.round].incorrect_answers[0],answer3:this.state.data.results[this.state.round].incorrect_answers[1],answer4:this.state.data.results[this.state.round].incorrect_answers[2]}),2===e&&this.setState({answer1:this.state.data.results[this.state.round].incorrect_answers[1],answer2:this.state.data.results[this.state.round].correct_answer,answer3:this.state.data.results[this.state.round].incorrect_answers[0],answer4:this.state.data.results[this.state.round].incorrect_answers[2]}),3===e&&this.setState({answer1:this.state.data.results[this.state.round].incorrect_answers[1],answer2:this.state.data.results[this.state.round].incorrect_answers[0],answer3:this.state.data.results[this.state.round].correct_answer,answer4:this.state.data.results[this.state.round].incorrect_answers[2]}),4===e&&this.setState({answer1:this.state.data.results[this.state.round].incorrect_answers[1],answer2:this.state.data.results[this.state.round].incorrect_answers[0],answer3:this.state.data.results[this.state.round].incorrect_answers[2],answer4:this.state.data.results[this.state.round].correct_answer})}},{key:"endMainTrivia",value:function(){this.setState({finished:!0})}},{key:"increaseScore",value:function(){this.setState({score:this.state.score+1})}},{key:"nextQuestion",value:function(){this.componentDidMount()}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(p,{category:this.state.data.results[0].category,round:this.state.round,score:this.state.score}),this.state.finished?null:s.a.createElement(g,{endMainTrivia:this.endMainTrivia,finished:this.state.finished,lenght:this.state.data.results.length,score:this.state.score,round:this.state.round,nextQuestion:this.nextQuestion,increaseScore:this.increaseScore,realanswer:this.state.realanswer,question:this.state.question,answer1:this.state.answer1,answer2:this.state.answer2,answer3:this.state.answer3,answer4:this.state.answer4}),this.state.finished?s.a.createElement(b,{score:this.state.score,lenght:this.state.data.results.length}):null,s.a.createElement(v,null))}}]),a}(s.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={category:"9",nquestions:30,selected:!1},n.handleChangeCategory=n.handleChangeCategory.bind(Object(l.a)(n)),n.handleChangeNquestions=n.handleChangeNquestions.bind(Object(l.a)(n)),n.getTrivia=n.getTrivia.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"handleChangeCategory",value:function(e){this.setState({category:e})}},{key:"handleChangeNquestions",value:function(e){this.setState({nquestions:e})}},{key:"getTrivia",value:function(){this.setState({selected:!0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"text-center",style:{marginBottom:"30px"}},this.state.selected?null:s.a.createElement(m,{getTrivia:this.getTrivia,nquestions:this.state.nquestions,handleChangeNquestions:this.handleChangeNquestions,handleChangeCategory:this.handleChangeCategory}),this.state.selected?s.a.createElement(y,{category:this.state.category,nquestions:this.state.nquestions}):null)}}]),a}(s.a.Component);i.a.render(s.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.bfe67bdd.chunk.js.map