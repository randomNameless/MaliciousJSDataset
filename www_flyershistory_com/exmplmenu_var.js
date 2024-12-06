/***********************************************************************************
*       (c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*       For info write to menus@burmees.nl                        *
*       You may remove all comments for faster loading            *             
***********************************************************************************/

        var NoOffFirstLineMenus=8;                      // Number of first level items
        var LowBgColor='#FF6600';                       // Background color when mouse is not over
        var LowSubBgColor='white';                      // Background color when mouse is not over on subs
        var HighBgColor='black';                        // Background color when mouse is over
        var HighSubBgColor='black';                     // Background color when mouse is over on subs
        var FontLowColor='white';                       // Font color when mouse is not over
        var FontSubLowColor='black';                    // Font color subs when mouse is not over
        var FontHighColor='#FF6600';                    // Font color when mouse is over
        var FontSubHighColor='#FF6600';                 // Font color subs when mouse is over
        var BorderColor='black';                        // Border color
        var BorderSubColor='black';                     // Border color for subs
        var BorderWidth=1;                              // Border width
        var BorderBtwnElmnts=1;                 // Border between elements 1 or 0
        var FontFamily="arial,comic sans ms,technical"  // Font family menu items
        var FontSize=7;                         // Font size menu items
        var FontBold=0;                         // Bold menu items 1 or 0
        var FontItalic=0;                               // Italic menu items 1 or 0
        var MenuTextCentered='left';                    // Item text position 'left', 'center' or 'right'
        var MenuCentered='center';                      // Menu horizontal position 'left', 'center' or 'right'
        var MenuVerticalCentered='top';         // Menu vertical position 'top', 'middle','bottom' or static
        var ChildOverlap=.2;                            // horizontal overlap child/ parent
        var ChildVerticalOverlap=.2;                    // vertical overlap child/ parent
        var StartTop=155;                               // Menu offset x coordinate
        var StartLeft=1;                                // Menu offset y coordinate
        var VerCorrect=0;                               // Multiple frames y correction
        var HorCorrect=0;                               // Multiple frames x correction
        var LeftPaddng=3;                               // Left padding
        var TopPaddng=2;                                // Top padding
        var FirstLineHorizontal=1;                      // SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
        var MenuFramesVertical=0;                       // Frames in cols or rows 1 or 0
        var DissapearDelay=1000;                        // delay before menu folds in
        var TakeOverBgColor=1;                  // Menu frame takes over background color subitem frame
        var FirstLineFrame='navig';                     // Frame where first level appears
        var SecLineFrame='space';                       // Frame where sub levels appear
        var DocTargetFrame='space';                     // Frame where target documents appear
        var TargetLoc='';                               // span id for relative positioning
        var HideTop=0;                          // Hide first level when loading new document 1 or 0
        var MenuWrap=1;                         // enables/ disables menu wrap 1 or 0
        var RightToLeft=0;                              // enables/ disables right to left unfold 1 or 0
        var UnfoldsOnClick=0;                   // Level 1 unfolds onclick/ onmouseover
        var WebMasterCheck=0;                   // menu tree checking on or off 1 or 0
        var ShowArrow=1;                                // Uses arrow gifs when 1
        var KeepHilite=1;                               // Keep selected path highligthed
        var Arrws=['/tri.gif',5,20,'/tridown.gif',20,5,'/trileft.gif',5,10];       // Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//      MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//      For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","http://www.flyershistory.com","",0,20,60);
Menu2=new Array("News","http://www.flyershistory.com/cgi-bin/flyernewsmain.cgi","",0,20,60);

Menu3=new Array("Stats","blank.htm","",3,20,60);
        Menu3_1=new Array("Individual","blank.htm","",7,20,150);
                Menu3_1_1=new Array("Scoring Stats","http://www.flyershistory.com/cgi-bin/playstat.cgi","",0,20,150);
                Menu3_1_2=new Array("Goalie Stats","http://www.flyershistory.com/cgi-bin/goalstat.cgi","",0,20,150);
                Menu3_1_3=new Array("Playoff Stats","http://www.flyershistory.com/cgi-bin/poffstat.cgi","",0,20,150);
                Menu3_1_4=new Array("Regular Season Super-Stats","http://www.flyershistory.com/cgi-bin/rssuperstat.cgi","",0,20,150);
                Menu3_1_5=new Array("Playoff Super-Stats","http://www.flyershistory.com/cgi-bin/poffsuperstat.cgi","",0,20,150);
                Menu3_1_6=new Array("Scoring vs Opponent","http://www.flyershistory.com/cgi-bin/scoringbyopp.cgi","",0,20,150);
                Menu3_1_7=new Array("Opposition Goalie Stats","http://www.flyershistory.com/cgi-bin/goalieversus.cgi","",0,20,150);
        Menu3_2=new Array("Team","blank.htm","",5,20,150);
                Menu3_2_1=new Array("W-L-T Record","http://www.flyershistory.com/cgi-bin/record.cgi","",0,20,150);
                Menu3_2_2=new Array("Special Teams","http://www.flyershistory.com/cgi-bin/special.cgi","",0,20,150);
                Menu3_2_3=new Array("Annual Attendance","http://www.flyershistory.com/cgi-bin/attend.cgi","",0,20,150);
                Menu3_2_4=new Array("Annual Scoring Leaders","http://www.flyershistory.com/cgi-bin/leader.cgi","",0,20,150);
                Menu3_2_5=new Array("Record vs Every Team","http://www.flyershistory.com/cgi-bin/tversus.cgi","",0,20,150);
        Menu3_3=new Array("AHL","http://www.flyershistory.com/AHL.htm","",0,20,150);

Menu4=new Array("Record Book","http://www.flyershistory.com/best.htm","",0,20,60);

Menu5=new Array("All-Time Lists","blank.htm","",4,20,60);
        Menu5_1=new Array("Feats","blank.htm","",13,20,150);
                Menu5_1_1=new Array("Player Goals List","http://www.flyershistory.com/cgi-bin/goalscorerlist.cgi","",0,20,150);
                Menu5_1_2=new Array("Flyer Firsts","http://www.flyershistory.com/cgi-bin/firsts.cgi","",0,20,150);
                Menu5_1_3=new Array("Team Banner Years","http://www.flyershistory.com/cgi-bin/banner.cgi","",0,20,150);
                Menu5_1_4=new Array("Hattricks","http://www.flyershistory.com/cgi-bin/3goals.cgi","",0,20,150);
                Menu5_1_5=new Array("Hattricks Against","http://www.flyershistory.com/3goalversus.htm","",0,20,150);
                Menu5_1_6=new Array("Gordie Howe Hattricks","http://www.flyershistory.com/cgi-bin/gordiehowe.cgi","",0,20,150);
                Menu5_1_7=new Array("Playoff Gordie Howe Hattricks","http://www.flyershistory.com/cgi-bin/gordiehowepo.cgi","",0,20,150);
                Menu5_1_8=new Array("Shutouts","http://www.flyershistory.com/cgi-bin/shut.cgi","",0,20,150);
                Menu5_1_9=new Array("Shutouts Against","http://www.flyershistory.com/cgi-bin/soversus.cgi","",0,20,150);
                Menu5_1_10=new Array("Playoff OT Goals","http://www.flyershistory.com/cgi-bin/otgoals.cgi","",0,20,150);
                Menu5_1_11=new Array("Regular Season OT Goals","http://www.flyershistory.com/cgi-bin/otrsgoal.cgi","",0,20,150);
                Menu5_1_12=new Array("Penalty Shots","http://www.flyershistory.com/cgi-bin/pshot.cgi","",0,20,150);
                Menu5_1_13=new Array("Fifty Goals / 100 Points","http://www.flyershistory.com/cgi-bin/fiftyg.cgi","",0,20,150);
                Menu5_1_14=new Array("NHL Records Held by Flyers","http://www.flyershistory.com/cgi-bin/nhlrec.cgi","",0,20,150);
        Menu5_2=new Array("Personnel","blank.htm","",12,20,150);
                Menu5_2_1=new Array("All Time Roster","http://www.flyershistory.com/cgi-bin/roster.cgi","",0,20,150);
                Menu5_2_2=new Array("All Time Playoff Roster","http://www.flyershistory.com/cgi-bin/poroster.cgi","",0,20,150);
                Menu5_2_3=new Array("Roster By Jersey #","http://www.flyershistory.com/rosternum.htm","",0,20,150);
                Menu5_2_4=new Array("Retired Jerseys","http://www.flyershistory.com/cgi-bin/retired.cgi","",0,20,150);
                Menu5_2_5=new Array("Trades","http://www.flyershistory.com/cgi-bin/trade.cgi","",0,20,150);
                Menu5_2_6=new Array("Injuries","http://www.flyershistory.com/cgi-bin/injury.cgi","",0,20,150);
                Menu5_2_7=new Array("Suspensions","http://www.flyershistory.com/cgi-bin/suspensions.cgi","",0,20,150);
                Menu5_2_8=new Array("Draft Choices","http://www.flyershistory.com/cgi-bin/draft.cgi","",0,20,150);
                Menu5_2_9=new Array("Coaches/GMs/Captains","http://www.flyershistory.com/cgi-bin/key.cgi","",0,20,150);
                Menu5_2_10=new Array("Front Office Personnel","http://www.flyershistory.com/cgi-bin/frontoffice.cgi","",0,20,150);
                Menu5_2_11=new Array("Training Camp Rosters","http://www.flyershistory.com/cgi-bin/trainingcamp.cgi","",0,20,150);
                Menu5_2_12=new Array("Free Agent & Waiver Transactions","http://www.flyershistory.com/cgi-bin/transactions.cgi","",0,20,150);
        Menu5_3=new Array("Game Results","blank.htm","",5,20,150);
                Menu5_3_1=new Array("Every Regular Season Game","http://www.flyershistory.com/cgi-bin/games.cgi","",0,20,150);
                Menu5_3_2=new Array("Every Playoff Game","http://www.flyershistory.com/cgi-bin/poffs.cgi","",0,20,150);
                Menu5_3_3=new Array("Opening Games","http://www.flyershistory.com/cgi-bin/opener.cgi","",0,20,150);
                Menu5_3_4=new Array("Neutral Site Games","http://www.flyershistory.com/cgi-bin/nsgames.cgi","",0,20,150);
                Menu5_3_5=new Array("Games vs Non-NHL teams","http://www.flyershistory.com/cgi-bin/nonnhl.cgi","",0,20,150);
        Menu5_4=new Array("Awards","blank.htm","",8,20,150);
                Menu5_4_1=new Array("NHL Awards","http://www.flyershistory.com/cgi-bin/NHLawd.cgi","",0,20,150);
                Menu5_4_2=new Array("NHL Award Votes","http://www.flyershistory.com/cgi-bin/awardvotes.cgi","",0,20,150);
                Menu5_4_3=new Array("Player of the Week","http://www.flyershistory.com/cgi-bin/playerweek.cgi","",0,20,150);
                Menu5_4_4=new Array("Post Season All-Stars","http://www.flyershistory.com/cgi-bin/allstars.cgi","",0,20,150);
                Menu5_4_5=new Array("All-Star Game Reps","http://www.flyershistory.com/cgi-bin/asgame.cgi","",0,20,150);
                Menu5_4_6=new Array("Flyers All-Star Game Stats","http://www.flyershistory.com/cgi-bin/asstats.cgi","",0,20,150);
                Menu5_4_7=new Array("Team Awards","http://www.flyershistory.com/cgi-bin/taward.cgi","",0,20,150);
                Menu5_4_8=new Array("NHL Milestone Awards","http://www.flyershistory.com/cgi-bin/nhlmile.cgi","",0,20,150);
Menu6=new Array("Current Info","blank.htm","",6,20,60);
        Menu6_1=new Array("Flyer News Links","http://www.flyershistory.com/news.htm","",0,20,150);
        Menu6_2=new Array("Roster","http://www.flyershistory.com/cgi-bin/croster.cgi","",0,20,150);
        Menu6_3=new Array("Today In Flyers History","http://www.flyershistory.com/cgi-bin/thisday.cgi","",0,20,150);
        Menu6_4=new Array("Current AHL Stats","http://www.flyershistory.com/cgi-bin/ml-season.cgi","",0,20,150);
        Menu6_5=new Array("Links To Flyer Prospects","http://www.flyershistory.com/cgi-bin/prospects.cgi","",0,20,150);
        Menu6_6=new Array("Upcoming Milestones","http://www.flyershistory.com/cgi-bin/mileston.cgi","",0,20,150);

Menu7=new Array("Looking Back","blank.htm","",8,20,60);
        Menu7_1=new Array("Galleries","blank.htm","",3,20,150);
                Menu7_1_1=new Array("Team Photos","http://www.flyershistory.com/cgi-bin/photoalbum.cgi?teamphotohistory","",0,20,150);
                Menu7_1_2=new Array("Goalie Masks","http://www.flyershistory.com/cgi-bin/gm.cgi","",0,20,150);
                Menu7_1_3=new Array("Jersey History","http://www.flyershistory.com/cgi-bin/jerseyhistory.cgi","",0,20,150);
                Menu7_2=new Array("Meltzers Heroes Of The Past","http://www.flyershistory.com/cgi-bin/herolist.cgi","",0,20,150);
                Menu7_3=new Array("Historic Moments","http://www.flyershistory.com/cgi-bin/hmoments.cgi","",0,20,150);
                Menu7_4=new Array("Philadelphia Quakers","http://quakers.flyershistory.com","",0,20,150);
                Menu7_5=new Array("Philadelphia Blazers","http://www.flyershistory.com/blazers","",0,20,150);
                Menu7_6=new Array("Unbeaten Streak","http://www.flyershistory.com/streak.htm","",0,20,150);
                Menu7_7=new Array("Flyers Hall Of Fame Bios","http://www.flyershistory.com/cgi-bin/fhof.cgi","",0,20,150);
                Menu7_8=new Array("Hockey Hall Of Fame Bios","http://www.flyershistory.com/cgi-bin/hhof.cgi","",0,20,150);

Menu8=new Array("Interactive","blank.htm","",8,20,60);
        Menu8_1=new Array("Merchandise Links","http://www.flyershistory.com/cgi-bin/special.cgi","",0,20,150);
        Menu8_2=new Array("Feedback/Suggestions","http://www.flyershistory.com/cgi-bin/feedback2.cgi","",0,20,150);
        Menu8_3=new Array("Flyers Fan Forum Message Board","http://www.flyershistory.net/fff","",0,20,150);
        Menu8_4=new Array("Java Chat","http://www.flyershistory.com/chat.htm","",0,20,150);
        Menu8_5=new Array("View Guestbook","http://www.flyershistory.com/cgi-bin/gstbook.cgi?999","",0,20,150);
        Menu8_6=new Array("Sign Guestbook","http://www.flyershistory.com/gstbook.htm","",0,20,150);
        Menu8_7=new Array("Email","mailto:flyershistory@hockeymail.com","",0,20,150);
        Menu8_8=new Array("Links & Credits","http://www.flyershistory.com/cgi-bin/links.cgi","",0,20,150);


