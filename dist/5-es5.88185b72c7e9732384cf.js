function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(n,t,e){"use strict";e.r(t);var o,c=e("ofXK"),i=e("tyNb"),r=e("fXoL"),b=e("wZkO"),a=((o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=r.Ib({type:o,selectors:[["app-shareholding-dialog"]],decls:24,vars:0,consts:[[1,"register-dialog"],["label","Invite by email"],[1,"tab-content"],[1,"text-email"],["placeholder","Valid email address"],["label","Invite by link"]],template:function(n,t){1&n&&(r.Ub(0,"div",0),r.Ub(1,"h1"),r.zc(2,"Invite your colleagues"),r.Tb(),r.Ub(3,"p"),r.zc(4," Know a few people who you like to appoint as shareholders or directors? "),r.Tb(),r.Ub(5,"mat-tab-group"),r.Ub(6,"mat-tab",1),r.Ub(7,"div",2),r.Ub(8,"div",3),r.zc(9,"Enter the email address (comma separated)"),r.Tb(),r.Pb(10,"input",4),r.Ub(11,"select"),r.Ub(12,"option"),r.zc(13,"Select role"),r.Tb(),r.Ub(14,"option"),r.zc(15,"Select role"),r.Tb(),r.Ub(16,"option"),r.zc(17,"Select role"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(18,"mat-tab",5),r.Ub(19,"div",2),r.Ub(20,"div",3),r.zc(21,"Invite by link"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(22,"button"),r.zc(23,"INVITE"),r.Tb(),r.Tb())},directives:[b.b,b.a],styles:['body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], html[_ngcontent-%COMP%], input[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0;padding:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{outline:none;border:none}button[_ngcontent-%COMP%]:hover{outline:none;cursor:pointer}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{text-decoration:none}button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus{outline:none!important}select[_ngcontent-%COMP%]{outline:none}@font-face{src:url(Ubuntu-B.e0008b580192405f144f.ttf) format("truetype");font-family:Ubuntu-Bold}@font-face{src:url(Ubuntu-M.785d8031758d1fac4002.ttf) format("truetype");font-family:Ubuntu-Medium}@font-face{src:url(Ubuntu-R.1c5965c2b1dcdea439b5.ttf) format("truetype");font-family:Ubuntu-Regular}.register[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover{background-color:transparent}@media(max-width:480px){.mat-dialog-container[_ngcontent-%COMP%]{padding:12px}}.register-dialog[_ngcontent-%COMP%]{padding:20px 4px;box-sizing:border-box}.register-dialog[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-family:Ubuntu-Bold;color:#2f2e33;margin-bottom:32px}.register-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-family:Ubuntu-Regular;color:#2f2e33;margin-bottom:38px}.register-dialog[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{height:200px;box-sizing:border-box}.register-dialog[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .text-email[_ngcontent-%COMP%]{color:#2f2e33;font-family:Ubuntu-Medium;font-size:14px;margin:24px 0}.register-dialog[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register-dialog[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:1px solid #d0d0d0;height:40px;display:-webkit-box;display:flex;border-radius:4px;-webkit-box-pack:center;justify-content:center;align-content:center;padding-left:20px;margin-bottom:24px}.register-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:194px;height:40px;background:#3b7097!important;color:#fff;background:#fff;font-size:14px;font-family:Ubuntu-Regular;border-radius:50px;border:1px solid #d0d0d0;float:right}']}),o),g=e("3Pt+"),p=e("0IaG"),s=e("xHqg"),l=e("kmnG"),d=e("qFsG"),P=e("bTqV");function C(n,t){1&n&&r.zc(0,"Company info")}function M(n,t){1&n&&r.zc(0,"Personal info")}function _(n,t){1&n&&r.zc(0,"Company details")}function O(n,t){1&n&&r.zc(0,"Confirmation")}function u(n,t){1&n&&r.zc(0,"Payment")}var m,h,f,x,y=[{path:"register",component:(h=function(){function n(t,e){_classCallCheck(this,n),this.fb=t,this.dialog=e,this.registrationForm=this.fb.group({companyInfo:this.fb.group({input1:[]}),personalInfo:this.fb.group({input2:[]}),companyDetails:this.fb.group({input3:[]}),confirmation:this.fb.group({input4:[]}),payment:this.fb.group({input5:[]})})}return _createClass(n,[{key:"ngOnInit",value:function(){console.log(this.registrationForm.value)}},{key:"saveInfo",value:function(){console.log(this.registrationForm.value)}},{key:"shareholdingChange",value:function(n){console.log(n.target.value),"< 100%"==n.target.value&&this.dialog.open(a,{width:"400",height:"480"})}}]),n}(),h.\u0275fac=function(n){return new(n||h)(r.Ob(g.c),r.Ob(p.a))},h.\u0275cmp=r.Ib({type:h,selectors:[["app-register"]],decls:297,vars:2,consts:[[1,"register"],[1,"register-title"],[1,"register-form",3,"formGroup"],["labelPosition","bottom",3,"linear"],["stepper",""],["matStepLabel",""],[1,"steps-content"],[1,"second-title"],[1,"proposed-company-name"],[1,"third-title"],[1,"inputs"],["placeholder","1st choice"],["placeholder","2nd choice"],[1,"btn-upload"],["for","file-input"],["id","file-input","type","file"],["placeholder","Private company limited by shares","disabled","",1,"gray-input"],[1,"horizontal-blocks"],[1,"hr-block"],[1,"hr-input"],["type","radio","name","yes-no","value","yes"],["type","radio","name","yes-no","value","no"],["type","radio","name","later-not","value","later"],["type","radio","name","later-not","value","not"],[1,"foot-btns"],[1,"btn-prev"],["matStepperNext","",1,"btn-next"],[1,"third-block"],["placeholder","Enter your name as per your passport"],["placeholder","Enter a valid passport number"],["placeholder","Select","type","date",1,""],["placeholder","Select",1,""],["placeholder","At least ten characters"],[1,"resid-address"],["placeholder","Address line 1"],[1,"dot-color"],["placeholder","Address line 2"],[1,"postcode-address"],["placeholder","Postcode"],[1,"director-shareholder"],[1,"dir-input"],[3,"change"],[1,"inputs","flex-start"],[1,"btn-upload-input"],["src","assets/img/attach.png"],["placeholder","As per records","disabled","",1,"back-gray"],["placeholder","As per records","type","date","disabled","",1,"back-gray"],[1,"inputs","last-block"],[1,"inputs","two-blocks"],["placeholder","Use ACRA's model constitution at the time of incorporation","disabled","",1,"back-gray"],["placeholder","Type here"],["placeholder","31 12 2020","disabled","",1,"back-gray"],["formGroupName","confirmation"],["matInput","","formControlName","input4"],["matStepperNext","","mat-raised-button","","color","primary"],["formGroupName","payment"],["matInput","","formControlName","input5"],["mat-raised-button","","color","accent",3,"click"],["mat-button","","matStepperPrevious",""],["mat-raised-button","",3,"click"]],template:function(n,t){if(1&n){var e=r.Vb();r.Ub(0,"div",0),r.Ub(1,"h1",1),r.zc(2," Information required for incorporation of new Company in Singapore "),r.Tb(),r.Ub(3,"form",2),r.Ub(4,"mat-horizontal-stepper",3,4),r.Ub(6,"mat-step"),r.yc(7,C,1,0,"ng-template",5),r.Ub(8,"div",6),r.Ub(9,"h3",7),r.zc(10,"Company Name"),r.Tb(),r.Ub(11,"div",8),r.Ub(12,"h3",9),r.zc(13,"Proposed Company Name"),r.Tb(),r.Ub(14,"div",10),r.Pb(15,"input",11),r.Pb(16,"input",12),r.Tb(),r.Ub(17,"div",13),r.Ub(18,"label",14),r.Ub(19,"span"),r.zc(20,"+"),r.Tb(),r.zc(21," Add choice "),r.Tb(),r.Pb(22,"input",15),r.Tb(),r.Tb(),r.Ub(23,"h3",7),r.zc(24,"Company Type"),r.Tb(),r.Ub(25,"h3",9),r.zc(26,"Type of Company"),r.Tb(),r.Pb(27,"input",16),r.Ub(28,"div",17),r.Ub(29,"div",18),r.Ub(30,"h3",9),r.zc(31,"Have you obtained approval from relevant authorities?"),r.Tb(),r.Ub(32,"div",19),r.Ub(33,"div"),r.Pb(34,"input",20),r.zc(35,"Yes"),r.Pb(36,"br"),r.Tb(),r.Ub(37,"div"),r.Pb(38,"input",21),r.zc(39," No, not required"),r.Pb(40,"br"),r.Tb(),r.Tb(),r.Tb(),r.Ub(41,"div",18),r.Ub(42,"h3",9),r.zc(43,"Will this new company take over another company?"),r.Tb(),r.Ub(44,"div",19),r.Ub(45,"div"),r.Pb(46,"input",22),r.zc(47,"Yes, maybe later"),r.Pb(48,"br"),r.Tb(),r.Ub(49,"div"),r.Pb(50,"input",23),r.zc(51,"No, not now"),r.Pb(52,"br"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(53,"div",24),r.Ub(54,"button",25),r.Ub(55,"span"),r.zc(56," < "),r.Tb(),r.zc(57,"Previous"),r.Tb(),r.Ub(58,"button",26),r.zc(59,"Next"),r.Ub(60,"span"),r.zc(61," > "),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(62,"mat-step"),r.yc(63,M,1,0,"ng-template",5),r.Ub(64,"div",6),r.Ub(65,"h3",7),r.zc(66,"Director / Shareholder"),r.Tb(),r.Ub(67,"div",27),r.Ub(68,"div",10),r.Ub(69,"div"),r.Ub(70,"label"),r.zc(71,"First and Last Name"),r.Tb(),r.Pb(72,"input",28),r.Tb(),r.Ub(73,"div"),r.Ub(74,"label"),r.zc(75,"Passport Number"),r.Tb(),r.Pb(76,"input",29),r.Tb(),r.Ub(77,"div"),r.Ub(78,"label"),r.zc(79,"Passport Expiry"),r.Tb(),r.Pb(80,"input",30),r.Tb(),r.Tb(),r.Ub(81,"div",10),r.Ub(82,"div"),r.Ub(83,"label"),r.zc(84,"Nationality"),r.Tb(),r.Ub(85,"select"),r.Ub(86,"option"),r.zc(87,"Enter your name as per your passport"),r.Tb(),r.Ub(88,"option"),r.zc(89,"Jonh Dae"),r.Tb(),r.Ub(90,"option"),r.zc(91,"Mahatma Gandi"),r.Tb(),r.Ub(92,"option"),r.zc(93,"Paulo Colyo"),r.Tb(),r.Tb(),r.Tb(),r.Ub(94,"div"),r.Ub(95,"label"),r.zc(96,"Date of Birth"),r.Tb(),r.Pb(97,"input",30),r.Tb(),r.Ub(98,"div"),r.Ub(99,"label"),r.zc(100,"Mobile number"),r.Tb(),r.Pb(101,"input",31),r.Tb(),r.Tb(),r.Ub(102,"div",10),r.Ub(103,"div"),r.Ub(104,"label"),r.zc(105,"Password"),r.Tb(),r.Pb(106,"input",32),r.Tb(),r.Ub(107,"div",33),r.Ub(108,"label"),r.zc(109,"Residential address"),r.Tb(),r.Pb(110,"input",34),r.Tb(),r.Ub(111,"div",33),r.Ub(112,"label",35),r.zc(113,"."),r.Tb(),r.Pb(114,"input",36),r.Tb(),r.Ub(115,"div",37),r.Ub(116,"label",35),r.zc(117,"."),r.Tb(),r.Pb(118,"input",38),r.Tb(),r.Tb(),r.Ub(119,"div",10),r.Ub(120,"div",39),r.Ub(121,"label"),r.zc(122,"Are you both a director and shareholder?"),r.Tb(),r.Ub(123,"div",40),r.Pb(124,"input",20),r.zc(125,"Yes, I'm both the director and shareholder"),r.Pb(126,"br"),r.Tb(),r.Tb(),r.Ub(127,"div",39),r.Ub(128,"label",35),r.zc(129,"."),r.Tb(),r.Ub(130,"div",40),r.Pb(131,"input",21),r.zc(132,"No, I'm the director but not a shareholder"),r.Pb(133,"br"),r.Tb(),r.Tb(),r.Ub(134,"div"),r.Ub(135,"label"),r.zc(136,"Shareholding Percentage (%)"),r.Tb(),r.Ub(137,"select",41),r.cc("change",(function(n){return t.shareholdingChange(n)})),r.Ub(138,"option"),r.zc(139,"100 %"),r.Tb(),r.Ub(140,"option"),r.zc(141,"< 100%"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(142,"div",42),r.Ub(143,"div",43),r.Ub(144,"label",14),r.zc(145,"Attach file"),r.Pb(146,"img",44),r.Tb(),r.Pb(147,"input",15),r.Tb(),r.Ub(148,"div",43),r.Ub(149,"label",14),r.zc(150,"Attach file"),r.Pb(151,"img",44),r.Tb(),r.Pb(152,"input",15),r.Tb(),r.Tb(),r.Ub(153,"div",13),r.Ub(154,"label",14),r.Ub(155,"span"),r.zc(156,"+"),r.Tb(),r.zc(157," Add director/shareholder "),r.Tb(),r.Pb(158,"input",15),r.Tb(),r.Ub(159,"h3",7),r.zc(160,"Nominee Director"),r.Tb(),r.Ub(161,"div",10),r.Ub(162,"div"),r.Ub(163,"label"),r.zc(164,"First and Last Name"),r.Tb(),r.Pb(165,"input",45),r.Tb(),r.Ub(166,"div"),r.Ub(167,"label"),r.zc(168,"Passport Number"),r.Tb(),r.Pb(169,"input",45),r.Tb(),r.Ub(170,"div"),r.Ub(171,"label"),r.zc(172,"Passport Expiry"),r.Tb(),r.Pb(173,"input",46),r.Tb(),r.Tb(),r.Ub(174,"div",47),r.Ub(175,"div"),r.Ub(176,"label"),r.zc(177,"Mobile number"),r.Tb(),r.Pb(178,"input",45),r.Tb(),r.Ub(179,"div"),r.Ub(180,"label"),r.zc(181,"Email address"),r.Tb(),r.Pb(182,"input",45),r.Tb(),r.Ub(183,"div"),r.Ub(184,"label"),r.zc(185,"Residential address"),r.Tb(),r.Pb(186,"input",45),r.Tb(),r.Ub(187,"div"),r.Ub(188,"label",35),r.zc(189,"."),r.Tb(),r.Pb(190,"input",45),r.Tb(),r.Ub(191,"div"),r.Ub(192,"label",35),r.zc(193,"."),r.Tb(),r.Pb(194,"input",45),r.Tb(),r.Tb(),r.Tb(),r.Ub(195,"div",24),r.Ub(196,"button",25),r.Ub(197,"span"),r.zc(198," < "),r.Tb(),r.zc(199,"Previous"),r.Tb(),r.Ub(200,"button",26),r.zc(201,"Next"),r.Ub(202,"span"),r.zc(203," > "),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(204,"mat-step"),r.yc(205,_,1,0,"ng-template",5),r.Ub(206,"div",6),r.Ub(207,"h3",7),r.zc(208,"Business Information"),r.Tb(),r.Ub(209,"div",27),r.Ub(210,"div",48),r.Ub(211,"div"),r.Ub(212,"label"),r.zc(213,"Principal Business Activities"),r.Tb(),r.Ub(214,"select"),r.Ub(215,"option"),r.zc(216,"Multiselect"),r.Tb(),r.Ub(217,"option"),r.zc(218,"Multiselect"),r.Tb(),r.Ub(219,"option"),r.zc(220,"Multiselect"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(221,"div",48),r.Ub(222,"div"),r.Ub(223,"label"),r.zc(224,"Registered Office"),r.Tb(),r.Pb(225,"input",45),r.Tb(),r.Ub(226,"div"),r.Ub(227,"label"),r.zc(228,"Constitution"),r.Tb(),r.Pb(229,"input",49),r.Tb(),r.Tb(),r.Ub(230,"h3",7),r.zc(231,"Ordinary Shares"),r.Tb(),r.Ub(232,"div",10),r.Ub(233,"div"),r.Ub(234,"label"),r.zc(235,"Number of Shares"),r.Tb(),r.Pb(236,"input",50),r.Tb(),r.Ub(237,"div"),r.Ub(238,"label"),r.zc(239,"Amount of Issued Share Capital ($)"),r.Tb(),r.Pb(240,"input",50),r.Tb(),r.Ub(241,"div"),r.Ub(242,"label"),r.zc(243,"Currency:"),r.Tb(),r.Ub(244,"select"),r.Ub(245,"option"),r.zc(246,"Select"),r.Tb(),r.Ub(247,"option"),r.zc(248,"Select"),r.Tb(),r.Ub(249,"option"),r.zc(250,"Select"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(251,"div",47),r.Ub(252,"div"),r.Ub(253,"label"),r.zc(254,"Secretary"),r.Tb(),r.Pb(255,"input",45),r.Tb(),r.Ub(256,"div"),r.Ub(257,"label"),r.zc(258,"Financial Year End"),r.Tb(),r.Pb(259,"input",51),r.Tb(),r.Pb(260,"div"),r.Tb(),r.Tb(),r.Ub(261,"div",24),r.Ub(262,"button",25),r.Ub(263,"span"),r.zc(264," < "),r.Tb(),r.zc(265,"Previous"),r.Tb(),r.Ub(266,"button",26),r.zc(267,"Next"),r.Ub(268,"span"),r.zc(269," > "),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(270,"mat-step"),r.yc(271,O,1,0,"ng-template",5),r.Ub(272,"div",52),r.Ub(273,"span"),r.zc(274,"Step 4"),r.Tb(),r.Ub(275,"mat-form-field"),r.Pb(276,"input",53),r.Tb(),r.Ub(277,"button",54),r.zc(278,"Next"),r.Tb(),r.Tb(),r.Tb(),r.Ub(279,"mat-step"),r.yc(280,u,1,0,"ng-template",5),r.Ub(281,"div",55),r.Ub(282,"span"),r.zc(283,"Step 5"),r.Tb(),r.Ub(284,"mat-form-field"),r.Pb(285,"input",56),r.Tb(),r.Ub(286,"button",54),r.zc(287,"Next"),r.Tb(),r.Tb(),r.Ub(288,"p"),r.zc(289,"You are now done."),r.Tb(),r.Ub(290,"div"),r.Ub(291,"button",57),r.cc("click",(function(n){return t.saveInfo()})),r.zc(292,"Submit"),r.Tb(),r.Ub(293,"button",58),r.zc(294,"Back"),r.Tb(),r.Ub(295,"button",59),r.cc("click",(function(n){return r.sc(e),r.qc(5).reset()})),r.zc(296,"Reset"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb()}2&n&&(r.Cb(3),r.lc("formGroup",t.registrationForm),r.Cb(1),r.lc("linear",!1))},directives:[g.r,g.l,g.e,s.a,s.b,s.c,s.e,g.n,g.q,g.f,l.a,d.b,g.b,g.k,g.d,P.a,s.f],styles:['body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], html[_ngcontent-%COMP%], input[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0;padding:0}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{outline:none;border:none}button[_ngcontent-%COMP%]:hover{outline:none;cursor:pointer}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{text-decoration:none}button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus{outline:none!important}select[_ngcontent-%COMP%]{outline:none}@font-face{src:url(Ubuntu-B.e0008b580192405f144f.ttf) format("truetype");font-family:Ubuntu-Bold}@font-face{src:url(Ubuntu-M.785d8031758d1fac4002.ttf) format("truetype");font-family:Ubuntu-Medium}@font-face{src:url(Ubuntu-R.1c5965c2b1dcdea439b5.ttf) format("truetype");font-family:Ubuntu-Regular}.register[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover{background-color:transparent}@media(max-width:480px){.mat-dialog-container[_ngcontent-%COMP%]{padding:12px}}div[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{box-sizing:border-box}.register[_ngcontent-%COMP%]{max-width:1200px;margin:80px auto 0;padding:40px}.register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%]{font-size:24px;color:#2f2e33;padding-bottom:25px;font-family:Ubuntu-Bold;border-bottom:1px solid #eee}@media(max-width:480px){.register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%]{font-size:20px;padding-bottom:7px}}.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{margin-top:50px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .back-gray[_ngcontent-%COMP%]{background:#f1f1f1!important}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .second-title[_ngcontent-%COMP%]{color:#3b7097;margin-top:20px;font-size:16px;margin-bottom:20px;padding-bottom:10px;font-family:Ubuntu-Bold;border-bottom:1px solid #eee}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-title[_ngcontent-%COMP%]{color:#2f2e33;font-size:16px;font-family:Ubuntu-Medium;margin-bottom:10px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .gray-input[_ngcontent-%COMP%]{width:35%;border:1px solid #d0d0d0;height:40px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;align-content:center;padding-left:20px;background:#f1f1f1;margin-bottom:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin-top:30px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-block[_ngcontent-%COMP%]{width:46%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:18px;height:18px;margin-right:9px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:1px solid #d0d0d0;width:43%;height:40px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;color:#2f2e33;font-size:14px;padding-left:20px;font-family:Ubuntu-Regular}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .small-radio[_ngcontent-%COMP%]{width:18px!important;height:18px!important;margin-right:9px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;align-content:center}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:46%;border:1px solid #d0d0d0;height:40px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;align-content:center;padding-left:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]{width:160px;height:40px;border:1px solid #3b7097;display:grid;color:#3b7097;-webkit-box-pack:center;justify-content:center;align-content:center;border-radius:50px;font-size:16px;margin:30px auto 20px;font-family:Ubuntu-Regular}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]:hover{cursor:pointer}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]{width:260px;height:40px;border:1px solid #3b7097;display:grid;color:#3b7097;-webkit-box-pack:center;justify-content:center;align-content:center;border-radius:50px;font-size:16px;margin:30px auto 20px;font-family:Ubuntu-Regular}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]:hover{cursor:pointer}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;display:block}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .flex-start[_ngcontent-%COMP%]{-webkit-box-pack:start!important;justify-content:flex-start!important}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload-input[_ngcontent-%COMP%]{margin-right:20px;width:100%;border:1px solid #d0d0d0;height:40px;line-height:40px;display:-webkit-box;padding-left:14px;padding-right:14px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload-input[_ngcontent-%COMP%]:hover{cursor:pointer}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;display:block;height:40px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none!important}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;align-content:center;margin-bottom:30px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .director-shareholder[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:18px;height:18px;margin-right:9px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .director-shareholder[_ngcontent-%COMP%]   .dir-input[_ngcontent-%COMP%]{width:100%;border:1px solid #d0d0d0;height:40px;-webkit-box-align:center;align-items:center;color:#2f2e33;display:-webkit-box;display:flex;font-size:14px;padding-left:20px;font-family:Ubuntu-Regular}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:32%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .resid-address[_ngcontent-%COMP%]{width:27%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .postcode-address[_ngcontent-%COMP%]{width:100px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#2f2e33;font-size:14px;font-family:Ubuntu-Medium;margin-bottom:15px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;border:1px solid #d0d0d0;height:40px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;align-content:center;padding-left:14px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{color:transparent;opacity:1;display:block;background:url(calendar.1dc59491d8b213a0511c.png) no-repeat;width:20px;height:20px;border-width:thin;-webkit-appearance:none}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs.two-blocks[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:48%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs.last-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:94%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .dot-color[_ngcontent-%COMP%]{color:#fff!important}.foot-btns[_ngcontent-%COMP%]{margin-top:110px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.foot-btns[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]{color:#2f2e33;background:#fff}.foot-btns[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%], .foot-btns[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]{width:134px;height:40px;font-size:14px;font-family:Ubuntu-Regular;border-radius:50px;border:1px solid #d0d0d0}.foot-btns[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]{background:#3b7097!important;color:#fff;background:#fff}.foot-btns[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 5px}@media(max-width:992px){.register[_ngcontent-%COMP%]{padding:10px}.register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%]{font-size:21px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-block[_ngcontent-%COMP%]{width:49%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:46%;padding-left:4px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:16px;height:16px;margin-right:3px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .director-shareholder[_ngcontent-%COMP%]   .dir-input[_ngcontent-%COMP%]{padding-left:8px;font-size:11px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:11px}}@media(max-width:767px){.register[_ngcontent-%COMP%]{margin-top:67px;padding:8px}.register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%]{font-size:19px;line-height:24px;text-align:center}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-block[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:46%;padding-left:4px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:16px;height:16px;margin-right:3px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:95%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:10px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .resid-address[_ngcontent-%COMP%]{width:95%;margin-top:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .resid-address[_ngcontent-%COMP%]   .dot-color[_ngcontent-%COMP%]{display:none}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .postcode-address[_ngcontent-%COMP%]{width:95%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload-input[_ngcontent-%COMP%]{margin-bottom:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:18px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs.last-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs.two-blocks[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:95%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:10px;margin-bottom:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-title[_ngcontent-%COMP%]{line-height:22px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .gray-input[_ngcontent-%COMP%]{width:100%}.foot-btns[_ngcontent-%COMP%]{margin-top:60px}}@media(max-width:480px){.register[_ngcontent-%COMP%]{margin-top:67px;padding:8px}.register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%]{font-size:19px;line-height:24px;text-align:center}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-block[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .horizontal-blocks[_ngcontent-%COMP%]   .hr-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:16px;height:16px;margin-right:3px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .proposed-company-name[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:10px;margin-bottom:20px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-title[_ngcontent-%COMP%]{line-height:22px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .gray-input[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding-left:6px;font-size:11px}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .inputs.two-blocks[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%}.register[_ngcontent-%COMP%]   .steps-content[_ngcontent-%COMP%]   .third-block[_ngcontent-%COMP%]   .btn-upload[_ngcontent-%COMP%]{width:90%;height:35px;font-size:13px}.foot-btns[_ngcontent-%COMP%]{margin-top:60px}}']}),h)},{path:"new-company",component:(m=function(){function n(t){_classCallCheck(this,n),this.router=t}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),m.\u0275fac=function(n){return new(n||m)(r.Ob(i.a))},m.\u0275cmp=r.Ib({type:m,selectors:[["app-new-company"]],decls:24,vars:0,consts:[[1,"new-company"],[1,"new-company-title"],[1,"new-company-content"],[1,"new-company-item"],[1,"new-company-block"],[1,"new-company-img"],["src","assets/img/img-2.png"],[1,"btn-create-company",3,"click"],["src","assets/img/img-1.png"],[1,"btn-create-company"]],template:function(n,t){1&n&&(r.Ub(0,"section",0),r.Ub(1,"h1",1),r.zc(2," Let\u2019s get started "),r.Tb(),r.Ub(3,"div",2),r.Ub(4,"div",3),r.Ub(5,"div",4),r.Ub(6,"h2"),r.zc(7,"Create a new company"),r.Tb(),r.Ub(8,"p"),r.zc(9,"Setup a new company account from scratch"),r.Tb(),r.Ub(10,"div",5),r.Pb(11,"img",6),r.Tb(),r.Ub(12,"a",7),r.cc("click",(function(n){return t.router.navigate(["auth/register"])})),r.zc(13,"Create a company"),r.Tb(),r.Tb(),r.Tb(),r.Ub(14,"div",3),r.Ub(15,"div",4),r.Ub(16,"h2"),r.zc(17,"Find or join an existing company"),r.Tb(),r.Ub(18,"p"),r.zc(19,"Find and join an existing company"),r.Tb(),r.Ub(20,"div",5),r.Pb(21,"img",8),r.Tb(),r.Tb(),r.Ub(22,"a",9),r.zc(23,"Find a company"),r.Tb(),r.Tb(),r.Tb(),r.Tb())},styles:[".new-company[_ngcontent-%COMP%]{max-width:1200px;margin:80px auto 0;padding:40px}.new-company[_ngcontent-%COMP%]   .new-company-title[_ngcontent-%COMP%]{font-size:24px;color:#2f2e33;padding-bottom:25px;font-family:Ubuntu-Bold;border-bottom:1px solid #eee}@media(max-width:480px){.new-company[_ngcontent-%COMP%]   .new-company-title[_ngcontent-%COMP%]{font-size:20px;padding-bottom:7px}}.new-company[_ngcontent-%COMP%]   .new-company-content[_ngcontent-%COMP%]{margin:140px auto 0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]{margin-right:15px;border:1px solid #d0d0d0;border-radius:4px;width:325px;height:400px;padding:25px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   .new-company-block[_ngcontent-%COMP%]{height:300px;margin-bottom:50px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#2f2e33;font-size:20px;margin-bottom:20px;font-family:Ubuntu-Bold}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#2f2e33;font-size:16px;margin-bottom:20px;font-family:Ubuntu-Regular}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   .new-company-img[_ngcontent-%COMP%]{text-align:center;margin-bottom:57px;margin-top:60px;height:164px}.new-company[_ngcontent-%COMP%]   .btn-create-company[_ngcontent-%COMP%]{display:grid;-webkit-box-pack:center;justify-content:center;align-content:center;height:44px;width:100%;background:#3b7097;color:#fff;border-radius:31px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.new-company[_ngcontent-%COMP%]   .btn-create-company[_ngcontent-%COMP%]:hover{cursor:pointer}@media(max-width:992px){.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]{width:280px;padding:15px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin-bottom:15px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:15px}}@media(max-width:767px){.new-company[_ngcontent-%COMP%]   .new-company-content[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;align-content:center;-webkit-box-pack:center;justify-content:center}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]{margin:0 auto 30px;width:280px;padding:25px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin-bottom:15px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:15px}}@media(max-width:480px){.new-company[_ngcontent-%COMP%]{padding:10px}.new-company[_ngcontent-%COMP%]   .new-company-content[_ngcontent-%COMP%]{margin-top:20px}.new-company[_ngcontent-%COMP%]   .btn-create-company[_ngcontent-%COMP%]{height:40px;margin:0 auto;width:85%}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]{width:90%;padding:15px;height:335px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   .new-company-block[_ngcontent-%COMP%]{height:210px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   .new-company-img[_ngcontent-%COMP%]{margin-bottom:29px;margin-top:25px;height:142px}.new-company[_ngcontent-%COMP%]   .new-company-item[_ngcontent-%COMP%]   .new-company-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px}}"]}),m)}],U=((f=function n(){_classCallCheck(this,n)}).\u0275mod=r.Mb({type:f}),f.\u0275inj=r.Lb({factory:function(n){return new(n||f)},imports:[[i.b.forChild(y)],i.b]}),f),w=e("gNIp"),T=((x=function n(){_classCallCheck(this,n)}).\u0275mod=r.Mb({type:x}),x.\u0275inj=r.Lb({factory:function(n){return new(n||x)},imports:[[c.c,w.a,g.g,g.o],w.a,g.g,g.o]}),x);e.d(t,"AuthModule",(function(){return v}));var k,v=((k=function n(){_classCallCheck(this,n)}).\u0275mod=r.Mb({type:k}),k.\u0275inj=r.Lb({factory:function(n){return new(n||k)},imports:[[c.c,U,T]]}),k)}}]);