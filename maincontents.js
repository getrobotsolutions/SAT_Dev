//*******************************************************************************
//   FURO-D Contents Templage JS : 2014.10.28  by Lee Won Yong
//                           Ver : 20141028
//   Comment : (1) 
//             (2)
//             (3)  
//*******************************************************************************

//-------------------------------------------------------------------------------
// Furo-D 스크립트 변경 이력
// 2014.06.09 : 1차 통합 버전
//              - 글로벌워크샵 콘텐츠를 토대로 관리자 페이지 삽입 - 채윤현
// 2014.08.28 : 2차 통합 버전
//              - 폴더 구조 및 쓸때 없는 코드 제거 - 채윤현
// 2014.09.02 : 4개국언어 설정 추가
//-------------------------------------------------------------------------------
// 2014.10.31 : Contents 구조 정리 - 이원용 수석
//              (1) SetLangKorean ... - 삭제 --> FC_ChangeLanguage(strLanguage);  
//                  ** FC : Flash Call...   
//                  ** JC : JS Call...  
//				(2) Cookie Information
//                  - CurrentMovie : 1,2,3,4,...
//					- CurrentLanguage : Kr, En, Cn, Jp
//-------------------------------------------------------------------------------

//StartIdleMotion('true');

// [ Variables Setting ] --------------------------------------------------------
var VERSION = "20141216";
var CookieDay = 30;			//쿠키로 저장하는 기간.(Unity : Day)


//StartIdleMotion('true');
SetVoiceRecognition('false');


//------------------------------------------------------------
// Language Change. : Kr, En, Cn, Jp 
//------------------------------------------------------------
function FC_ChangeLanguage(strLanguage)
{
	//alert("ChangeLanguage : " + strLanguage);
        ChangeLanguage(strLanguage);
	writeCookie("CurrentLanguage", strLanguage, 30);
}


//------------------------------------------------------------------------------
// Service Contents Call : Main Screen에서 선택한 Service Contents를 호출함.
//------------------------------------------------------------------------------
//var autonomous = false;
function FC_ContentsCall(strContentsName, strLanguage)
{
	//[퓨처로봇 소개 서비스]---
	if(strContentsName == "FutureRobot")   
	{
		if(strLanguage=="Kr") { PlaySpeech("퓨처로봇을 소개해 드리겠습니다.");  }
		if(strLanguage=="En") { PlaySpeech("I will introduce the Future Robot.");  }
		if(strLanguage=="Cn") { PlaySpeech("今后我将介绍机器人。"); }
		if(strLanguage=="Jp") { PlaySpeech("フューチャーロボット ご紹介します。");  }
		location.href = "Contents/FutureRobot/FutureRobot.htm";
	}

	//[포토 프린트 서비스]---
	if(strContentsName == "PhotoPrinting")   
	{
		if(strLanguage=="Kr") { PlaySpeech("사진을 촬영하고 인쇄해 드립니다.");  }
		if(strLanguage=="En") { PlaySpeech("Try to take your photo and print.");  }
		if(strLanguage=="Cn") { PlaySpeech("尽量把你的照片和打印。"); }
		if(strLanguage=="Jp") { PlaySpeech("あなたの写真や印刷を取るようにしてください。");  }
		location.href = "Contents/PhotoPrinting/PhotoPrinting.htm";
	}

	//[음성인식 서비스]---
	if(strContentsName == "VoiceRecognition")   
	{
		if(strLanguage=="Kr") { PlaySpeech('음성인식 서비스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for multi-language voice recognition service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是为多语言语音识别服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、多言語音声認識サービスのためのものである。');  }
		location.href = "Contents/voiceRecognition/voiceRecognition.htm";
	}

	//[로봇제어 서비스]---
	if(strContentsName == "RobotRemote")   
	{
		if(strLanguage=="Kr") { PlaySpeech('로봇 원격 조정 서비스 입니다.');  }
	   	if(strLanguage=="En") { PlaySpeech('This is for Robot Remote control service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是机器人远程控制服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これはロボットのリモートコントロールサービス用です。');  }
		location.href = "Contents/Rms/Rms.htm";
	}

	//[음성인식 서비스]---
	if(strContentsName == "RobotDance")   
	{
		if(strLanguage=="Kr") { PlaySpeech('로봇 댄스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for introducing robot dance service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是用于将机器人舞蹈服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、ロボットダンスのサービスを導入するためである。');  }
		location.href = "Contents/RobotDance/RobotDance.htm";
	}

	//[사람추종 서비스]---
	if(strContentsName == "HumanFollow")   
	{
		if(strLanguage=="Kr") { PlaySpeech('로봇이 사람을 따라가는 서비스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for introducing following mode service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是用于引入以下模式服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、以下のモードサービスを導入するためである。');  }
		location.href = "Contents/HumanFollow/HumanFollow.htm";
	}

	//[얼굴추적 서비스]---
	if(strContentsName == "FaceTracking")   
	{
		if(strLanguage=="Kr") { PlaySpeech('사람의 얼굴을 인식하고 추적하는 서비스 입니다.');  }
		if(strLanguage=="En") { PlaySpeech('This is for introducing face tracking service.');  }
		if(strLanguage=="Cn") { PlaySpeech('这是引入人脸跟踪服务。');  }
		if(strLanguage=="Jp") { PlaySpeech('これは、顔追跡サービスを導入するためである。');  }
		location.href = "Contents/FaceTracking/FaceTracking.htm";
	}

	//[나도로봇 서비스]---
	if(strContentsName == "RobotAvatar")   
	{
		if(strLanguage=="Kr") { PlaySpeech('로봇 얼굴에 내 얼굴을 넣어보세요.');  }
		if(strLanguage=="En") { PlaySpeech('Try replacing robot avatar with your face.');  }
		if(strLanguage=="Cn") { PlaySpeech('试着用你的脸替换的机器人化身。');  }
		if(strLanguage=="Jp") { PlaySpeech('あなたの顔にロボットアバターを交換してみてください。');  }
		location.href = "Contents/RobotAvatar/RobotAvatar.htm";
	}


	//[티켓프린트 서비스]---
	if(strContentsName == "TicketPrinting")   
	{
		if(strLanguage=="Kr") { PlaySpeech('퓨로에 다양한 장치를 연결하여 티켓프린팅 서비스가 가능합니다..');  }
		if(strLanguage=="En") { PlaySpeech('Furo can print tickets and receipts for customers .');  }
		if(strLanguage=="Cn") { PlaySpeech('呋喃并可以打印票和收据');  }
		if(strLanguage=="Jp") { PlaySpeech('フランおよびチケットや領収書を印刷することができ');  }
		location.href = "Contents/TicketPrinting/TicketPrinting.htm";
	}
}

//------------------------------------------------------------------------------
// AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.
//------------------------------------------------------------------------------
function FC_ChangeAdMovie(strIdx)
{
	writeCookie("CurrentMovie", strIdx, 30);
}

//------------------------------------------------------------------------------
// AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.(Index로 관리함)
//------------------------------------------------------------------------------
function FC_ReadSelectedMovie()
{
	var tmpIdx = readCookie("CurrentMovie");
	App.JC_GetSelectedMovie(tmpIdx);
}


//------------------------------------------------------------------------------
// Selected Language 기억 : 서비스 이동 후, 복귀 시, 선택된 Language를 선택하기 위함.
//							( Kr, En, Cn, Jp )
//------------------------------------------------------------------------------
function FC_ReadSelectedLanguage()
{
	var tmpLanguage = readCookie("CurrentLanguage");
	App.JC_GetSelectedLanguage(tmpLanguage);
}



//------------------------------------------------------------------------------
// FC_LoadConfigView : 관리자 설정 페이지로 이동함.
//------------------------------------------------------------------------------
function FC_LoadConfigView()
{
	location.href = "Config/Config.htm";
}






//---------------------------------------------------------------------------//
//-- Cookie Control ---------------------------------------------------------//
//---------------------------------------------------------------------------//
function writeCookie(name, value, days)
{
	var expires = "";
	
	//쿠키가 지속되는 날짜 수를 지정. 예) 30 = 30일
	if (days) 
	{
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for (var i=0; i<cookies.length; i++) 
	{
		var c = cookies[i];
		while (c.charAt(0) == ' ')
		c = c.substring(1, c.length);
		if (c.indexOf(searchName) == 0)
		return c.substring(searchName.length, c.length);
	}
	return null;
}

function eraseCookie(name)
{
	//특정 쿠키를 삭제
	writeCookie(name, "", -1); //소멸일자 (-1일)를 소멸시켜 쿠키를 삭제함
}
//-[End Cookie Control]------------------------------------------------------//



//------------------------------------------------------------//
//---------현재까지의 버전에서 check된 내용 마지막줄----------//
//------------------------------------------------------------//





//LWY : 이부분 Check 해야 함!!!! //

/*
//로봇 시작시 확인해야할 부분
//ChangeLanguage("english");
StartIdleMotion('true');
SetVoiceRecognition('false');
//setTimeout("ReadConfig()", 1000);
//Chea();
*/



var tmChea;

function Chea()
{
	clearTimeout(tmChea);
	
	ChangeLanguage("english");
	PlaySpeech("Information Technology Division would like to invite you to attend the 2014 adma IT at a Glance event, from Tuesday 28th October to Wednesday 29th October 2014. The first part of the event will be a series of presentations which will start on Tuesday 28th October 2014, 09:00 a.m. to 10:00 a.m. in the HQ auditorium, followed by an Exhibition on the HQ 1st Floor Lobby, which will continue till Wednesday 29th October 2014. This campaign is aimed at raising the level of collaboration, communication and alignment to smoothly achieve our common objectives as set by the Company vision. Communicating our goals with you supports our mission in today’s era of global connectivity. Please note that the presentations will start at 09:00 a.m. sharp. We therefore appreciate your early presence. ");
	
	tmChea = setTimeout("Chea()", 180*1000);
}



// 상단 언어 설정 부분
function SetLangKorean()
{
	ChangeLanguage("korean");
	
	writeCookie("ChangeLanguage","korean",30);
}
function SetLangEnglish()
{
	ChangeLanguage("english");
	
	writeCookie("ChangeLanguage","english",30);
}
function SetLangJapanese()
{
	ChangeLanguage("japanese");
	
	writeCookie("ChangeLanguage","japanese",30);
}
function SetLangChinese()
{
	ChangeLanguage("chinese");
	
	writeCookie("ChangeLanguage","chinese",30);
}


var tm1, tm2, tm3;
function ClearTM()
{
	clearTimeout(tm1);
	clearTimeout(tm2);
	clearTimeout(tm3);
}

function SpeechForKorean()
{
	ChangeLanguage("korean");
	PlaySpeech('안녕하세요');
}
function SpeechForEnglish()
{
	ChangeLanguage("english");
	PlaySpeech('hello~');
}
function SpeechForJapanese()
{
	ChangeLanguage("japanese");
	PlaySpeech('こんにちは。');
}
function SpeechForChinese()
{
	ChangeLanguage("chinese");
	PlaySpeech('你好。?');
}

function SpeechForLang()
{
	ClearTM();
	
	SpeechForKorean();
	tm1 = setTimeout("SpeechForEnglish()" , 1500);
	tm2 = setTimeout("SpeechForJapanese()", 3000);
	tm3 = setTimeout("SpeechForChinese()" , 4500);
}


var approach = false;
// 사람 접근 처리
function OnUserApproached()
{
	if(approach == true) return;
	
	approach = true;
	///SpeechForLang();
	ChangeLanguage("english");
	PlaySpeech('Hello, Nice to meet you.');
	
	SetVoiceRecognition('false');
	StartIdleMotion('false');
}

var langCnt = 0;
function OnUserDisappeared()
{
	if(approach == false) return;
	
	approach = false;
	ClearTM();
	
	//렌덤 처리
	var ran = Math.random()*3;
	langCnt = Math.floor(ran);

	ChangeLanguage("english");
	if(langCnt == 1 )	    PlaySpeech("Please, don't go away.");
	else if(langCnt == 2 )	PlaySpeech("Bye bye.");
	else if(langCnt == 3 )	PlaySpeech("Where you go?");
	else if(langCnt == 4 )  PlaySpeech("I miss you.");

	//사람이 멀어지면 다시 idle 모션
	//SetVoiceRecognition('true');
	//StartIdleMotion('true');
}


//홈페이지 이동
function Home()
{
	StopSpeech();
	StartHumanFollow('false');
	SetVisualServoing('false');
	StopBehavior();

	location.href = "contents.htm";
}

