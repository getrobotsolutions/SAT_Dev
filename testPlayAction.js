var cnt = 1;
var playTimer;

function StopPlaying()
{
	clearTimeout(playTimer);
	StopWheel();
	InitPose();
}

function func()
{
	var time = 2000;
	var state = true;
	
	switch(cnt)
	{
		case 1:	
			play01(); 
			break;
			
		case 2: 
			play02(); 
			break;
		
		case 3: 
			play03(); 
			break;
			
		case 4: 
			play04(); 
			break;
			
		case 5:	
			play05(); 
			break;
			
		case 6: 
			play06(); 
			break;
			
		case 7: 
			play07(); 
			break;
			
		case 8: 
			play08(); 
			break;
			
		case 9: 
			play09(); 
			break;
			
		
		default: state = false;
		break;
	}

	cnt++;

	if(!state)	cnt = 1;
	
	playTimer = setTimeout("func();",time);
}


function play01()
{
	SetEmotion("joy");
    InitPose();
}

function play02()
{
	SetHeadYaw(20, 55);
	DriveWheelTime(0.1,10,1000);
}

function play03()
{
	SetHeadYaw(0, 55);
	DriveWheelTime(0,-10,1000);
}

function play04()
{
	SetEmotion("surprise");
	SetHeadYaw(15, 55);
	DriveWheelTime(-0.1,10,1000);
}


function play05()
{
	SetHeadYaw(0, 55);
	DriveWheelTime(0,-10,1000);
}
function play06()
{
	SetHeadYaw(-15, 55);
	DriveWheelTime(0,10,1000);
}
function play07()
{
	SetEmotion("sadness");
	InitPose();
}
function play08()
{
	SetHeadYaw(-15, 55);
	DriveWheelTime(-0.1,-10,1000);
}

function play09()
{
	SetHeadYaw(15, 55);
	DriveWheelTime(0.1,10,1000);
}

