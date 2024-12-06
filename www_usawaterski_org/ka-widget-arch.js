const CSID = "2", // 
    BASE_API_URL = 'https://og2024-api.sports.gracenote.com/svc/games_v2.svc/json',
    SPORT_LIST_URL = BASE_API_URL + '/GetSportList',
    DATE_LIST_URL = BASE_API_URL + '/GetDateList',
    SCHEDULE_DATE_URL = BASE_API_URL + '/GetScheduleDate',
    KABUCKET="https://storage.googleapis.com/ka-widget/precompiled/",
    KACHED_DATA_BUCKET="https://storage.googleapis.com/ka-widget/precompiled/",
    KAASSETS="https://storage.googleapis.com/ka-widget/static/assets",
    // KABUCKET = "https://teamusastdstorage.blob.core.windows.net/collegiatepartnership2022widgets/",
    // KACHED_DATA_BUCKET = "https://teamusastdstorage.blob.core.windows.net/collegiatepartnership2022widgets/",
    // KAASSETS = "https://teamusastdstorage.blob.core.windows.net/collegiatepartnership2022widgets",
    RESULTS_MODE = "results_mode",
    LEADER_MODE = "leader_mode",
    SCHEDULE_MODE = "schedule_mode",
    MEDALS_MODE = "medals_mode",
    ACC_HREFS = { 
        results_mode: "1PtFHJO7WgkuScDNVBH_dE2SS4bGgbe3ucW4vdnVnhqM", 
        leader_mode: "17ZujO4c7zs0oyNlK3_1cRP3TbNIAWdDudSksf3u3i7c", 
        medals_mode: "12PxQmx0i7_wc3l6AvVx6NvUn_gvqyz0J69bsoM4uhcw",
        schedule_mode: "1eYZBMwxKy-k8x9WNA7G9kmCSJqFMs3PvNds8LefWzAc"
    },
    MAX_COL_CHARS = 20,
    GOLD_COL = "gold",
    SILV_COL = "silver",
    BROZ_COL = "bronze",
    ANIMATION_SPEED = 300,
    kaAllScheduleByTime = {},
    kaAllSportsRes = new Set(),
    schedule_event_ids = [205,111,107,619,123,102,305,119,310,311,312,208,124,316,126,230,128,506,116,209,101,112,117,120,201,105,106,203,223,109,118,206,318,319],
    days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."],
    months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
    icon_lookup = {
        "Breaking": "1_Breaking_uncropped.png",
        "Athletics": "1_TrackField_uncropped.png",
        "Hockey": "1_Hockey_uncropped.png",
        "Biathlon": "1_Biathlon_uncropped.png",
        "BMX Racing": "1_BMX_uncropped.png",
        "BMX Freestyle": "1_BMX_uncropped.png",
        "Luge": "1_Luge_uncropped.png",
        "Bobsleigh": "1_Bobsled_uncropped.png",
        "Nordic Combined": "1_NordicCombined_uncropped.png",
        "Cross-Country Skiing": "1_CrossCountry_uncropped.png",
        "Skeleton": "1_Skeleton_uncropped.png",
        "Curling": "1_Curling_uncropped.png",
        "Ski Jumping": "1_SkiJumping_uncropped.png",
        "Figure Skating": "1_FigureSkating_uncropped.png",
        "Snowboard": "1_Snowboard_uncropped.png",
        "Freestyle Skiing": "1_FreeSkiing_uncropped.png",
        "Speed Skating": "1_SpeedSkating_Long_uncropped.png",
        "Speed Skating": "1_SpeedSkate_Short_uncropped.png",
        "Freestyle Skiing": "1_FreestyleSkiing_uncropped.png",
        "Alpine Skiing": "1_AlpineSkiing_uncropped.png",
        "Archery": "1_Archery_uncropped.png",
        "Track and Field": "1_TrackField_uncropped.png",
        "BMX": "1_BMX_uncropped.png",
        "Badminton": "1_Badminton_uncropped.png",
        "Basketball": "1_Basketball_uncropped.png",
        "Basketball 3x3": "1_Basketball_uncropped.png",
        "Beach Volleyball": "1_BeachVolleyball_uncropped.png",
        "Boxing": "1_Boxing_uncropped.png",
        "Canoe Slalom": "1_Canoe&Kayak_uncropped.png",
        "Canoe Sprint": "1_Canoe&Kayak_uncropped.png",
        "Cycling - Road": "1_Cycling_uncropped.png",
        "Cycling - Track": "1_Cycling_uncropped.png",
        "Diving": "1_Diving_uncropped.png",
        "Equestrian - Dressage": "1_Equestrian_D_uncropped.png",
        "Equestrian - Eventing": "1_Equestrian_E_uncropped.png",
        "Equestrian - Jumping": "1_Equestrian_SJ_uncropped.png",
        "Fencing": "1_Fencing_uncropped.png",
        "Football": "1_Soccer_uncropped.png",
        "Golf": "1_Golf_uncropped.png",
        "Gymnastics - Artistic": "1_ArtisticGymnastics_uncropped.png",
        "Gymnastics - Rhythmic": "1_RhythmicGymnastics_uncropped.png",
        "Gymnastics - Trampolining": "1_Trampoline_uncropped.png",
        "Field Hockey": "1_FieldHockey_uncropped.png",
        "Judo": "1_Judo_uncropped.png",
        "Modern Pentathlon": "1_Pentathlon_uncropped.png",
        "Mountain Bike": "1_Cycling_uncropped.png",
        "Open Water Swimming": "1_Swimming_uncropped.png",
        "Rowing": "1_Rowing_uncropped.png",
        "Rugby Sevens": "1_Rugby_uncropped.png",
        "Sailing": "1_Sailing_uncropped.png",
        "Shooting": "1_Shooting_uncropped.png",
        "Skateboarding": "1_Skateboarding_uncropped.png",
        "Soccer": "1_Soccer_uncropped.png",
        "Sport Climbing": "1_Climbing_uncropped.png",
        "Surfing": "1_Surfing_uncropped.png",
        "Swimming": "1_Swimming_uncropped.png",
        "Artistic Swimming": "1_SyncSwimming_uncropped.png",
        "Table Tennis": "1_TableTennis_uncropped.png",
        "Taekwondo": "1_Taekwondo_uncropped.png",
        "Tennis": "1_Tennis_uncropped.png",
        "Triathlon": "1_Triathlon_uncropped.png",
        "Volleyball": "1_Volleyball_uncropped.png",
        "Water Polo": "1_WaterPolo_uncropped.png",
        "Weightlifting": "1_Weightlifting_uncropped.png",
        "Wrestling - Freestyle": "1_Wrestling_uncropped.png",
        "Wrestling - Greco-Roman": "1_Wrestling_uncropped.png",
    },
    sport_renames = { 
        "Athletics": "Track and Field", 
        "Synchronised Swimming": "Artistic Swimming", 
        "Hockey": "Field Hockey",
        "Football": "Soccer"
    },
    gender_renames = { 
        "o": "Open", 
        "x": "Mixed"
    },
    sports_to_collect = ["Cycling", "Equestrian", "Gymnastics", "Wrestling"];
    
var kaAllSportsMed = new Set();

function singleApiCall(base_url, csid, parser, athlete, date='', season=2024, sportId=''){
    return $.ajax({
        url: base_url,
        type: "get",
        data: {
            personId: athlete ? athlete[0] : 0, 
            season: 2024,
            languageCode: 2,
            competitionSetId: csid, 
            date: date,
            sportId: sportId
        },
        dataType: "json",
        success: function(data){
            parser(data, athlete);
        },
        error:function(e){
            console.error("Error retrieving data for " + athlete[0]);
        } 
    });
}

function loadCSS(tScript, tOnLoad) {
    var head = document.getElementsByTagName("head")[0],
    style = document.createElement("link");
    (style.href = KABUCKET + tScript),
    // console.log("style.href=" + style.href);
    (style.type = "text/css"),
    (style.rel = "stylesheet"),
    head.append(style),
    style.addEventListener("load", function () {
        tOnLoad();
    });
}
function loadScript(tScript, tOnLoad, baseBucket = KABUCKET) {
    (script = document.createElement("script")),
    (script.type = "text/javascript"),
    (script.async = !0),
    (script.src = baseBucket + tScript),
    document.body.appendChild(script),
    script.addEventListener("load", function () {
        tOnLoad();
    });
}
function loadScripts(callback) {
    loadScript("jquery-3.4.1.min.js", function () {
        loadScript("popper.min.js", function () {
            loadScript("bootstrap.min.js", function () {
                loadScript("bootstrap-select.min.js", function () {
                    loadScript("jquery.floatThead.min.js", function () {
                        callback();
                    });
                });
            });
        });
    });
}
function loadScriptsAndCss(callback) {
    loadCSS("ka-widget.css", function () {
        loadCSS("bootstrap.min.css", function () {
            loadCSS("bootstrap-select.min.css", function () {
                loadScripts(callback);
            });
        });
    });
}
function loadData(mode, callback) {
    loadScript(mode.replace("_mode", ".js"), callback, (baseBucket = KACHED_DATA_BUCKET));
    // loadScript(mode.replace("_mode", ".js?ts=<?= time() ?"), callback, (baseBucket = KACHED_DATA_BUCKET));
}
function loadExternals(mode, callback) {
    loadData(mode, callback);
}

// GetScheduleDate?date=20240801&languagecode=2&competitionSetId=1
function getKaScheduleData(csid, tSuffix){
    // console.log("getKaScheduleData");
    singleApiCall(DATE_LIST_URL, csid, function(data, _){
        var all_dates = data['Dates'];
        var dates = Object.keys(all_dates).map(function(x) {return all_dates[x]['n_Date'];});
        var asyncCalls = [];
        // console.log("dates=" + dates);
        for(var j = 0; j < dates.length; j++){
            asyncCalls.push(
                singleApiCall(SCHEDULE_DATE_URL, csid, function(data, _){
                    parseScheduleDate(data);
                }, false, date=dates[j])
            );
        }
        $.when.apply(this, asyncCalls).done(function() {
            console.log("all date API requests have completed");
            // In the post 
            buildAll_Schedule(tSuffix);
        });
    }, false, date='', season=2021);
} 

function parseScheduleDate(tDateData){
    var tSports = tDateData['SportList'];
    for (var i = 0; i < tSports.length; i++) {
        // var tSport = tSports[i]['Sport'];
        var epml = tSports[i]['EventPhaseMatchList'];
        
        for (var j = 0; j < epml.length; j++) {
            var tPhase = epml[j];

            if(tPhase['c_ODF_ScheduleStatus'] == "FINISHED"){
                continue;
            }
            if(tPhase['c_ParticipatingNOCIDList'] == null){
                continue; //because we may not know the participants yet
            }
            var tUSAp = tPhase['c_ParticipatingNOCIDList'].split(';').includes("5");
            var tSport = tPhase['Sport'];
            var tSportID = tSport['n_ID'];
            
            xsp = tSportID;
            if(tUSAp && schedule_event_ids.includes(tSportID)){
                var event_name = tSport['c_Name'] + " - " + tPhase['GenderEvent']['c_Name']
                var gender = tPhase['Gender']['c_Name'];
                var sport_name = tSport[`c_Name`];
                if (sport_name in sport_renames) {
                    sport_name = sport_renames[sport_name];
                }
                var utc = tPhase['c_TimeFirstEventUTC'];
                var tLocal = utcStringToLocal(utc);
                var tParis = utcStringToParis(utc);
                var tDay = dateReFormatter(tLocal);
                var genderName = genderNamer(gender) + " " + sport_name;

                if( !(tDay in kaAllScheduleByTime) ){
                    kaAllScheduleByTime[tDay] = {};
                }
                if( !(genderName in kaAllScheduleByTime[tDay]) ){
                    kaAllScheduleByTime[tDay][genderName] = [];
                }

                var tRow = {
                    'date': tDay,
                    'gender': gender,
                    'event_name': event_name,
                    'event': event_name,
                    'paris': tParis,
                    'local': tLocal,
                    'sport_name': sport_name,
                    'schools': [''],
                    'full_name': ''
                };

                kaAllScheduleByTime[tDay][genderName] = kaAllScheduleByTime[tDay][genderName].concat(tRow);
    
                kaAllSportsRes.add(sport_name);
                // kaAllSchoolsRes.add(school1);
                // kaAllSchoolsRes.add(school2);
            }
        }     
    }
}

TITLES={
    'results_mode': '2024 Olympic Games:\nTeam USA Collegiate Results',
    'leader_mode': '2024 Olympic Games:\nTeam USA Collegiate Medalist Leaderboard',
    'schedule_mode': '2024 Olympic Games:\nTeam USA Collegiate Schedule',
    'medals_mode': '2024 Paralympic Games:\nTeam USA Medalist Leaderboard',
}
WIDGET_NAMES={
    'results_mode': 'Results',
    'leader_mode': 'Medalist Leaderboard',
    'schedule_mode': 'Collegiate Schedule',
    'medals_mode': 'Medalist Leaderboard',
}

function loadKaWidget(Mode = RESULTS_MODE, Selector = "ka-results-widget", Title = "", CSID = CSID) {

    var tTitle = TITLES[Mode];
    var tName = WIDGET_NAMES[Mode];
    var tSuffix = getRandomSuffix();

    console.log("loading widget with Mode: " + Mode);

    loadScriptsAndCss(function () {
        if(Mode == SCHEDULE_MODE){
            buildScaffolding_Schedule(SCHEDULE_MODE, Selector, tTitle, tName, tSuffix);
            getKaScheduleData(CSID, tSuffix);
        } else {
            buildScaffolding(Mode, Selector, tTitle, tName, tSuffix);
            loadExternals(Mode, function () {
                buildAll(Mode, tSuffix);
            });
        }
    });    
}

function buildAll(tMode, tSuffix) {
    switch (tMode) {
        case RESULTS_MODE:
            buildTimeTable(tSuffix, kached_results, RESULTS_MODE), buildResultsOnlyMenuItems(tSuffix);
            break;
        case LEADER_MODE:
            var tSchools;
            buildFilterSelectMenu("school", Array.from(Object.keys(kached_leaders)).sort(), tSuffix), buildLeaderboardTable(tSuffix);
            break;
        case MEDALS_MODE:
            buildTimeTable(tSuffix, kached_medals, MEDALS_MODE), buildResultsOnlyMenuItems(tSuffix, kached_medals);
            break;
        default:
            console.error("No widget mode set!");
    }
}

function buildAll_Schedule(tSuffix){
    // cleanData();
    buildDateAndSportFilters(tSuffix, kaAllScheduleByTime, kaAllSportsRes);
    // buildFilterTextMenu('school', tSuffix);
    // var tSchools = Array.from(Object.keys(kaAllResultsBySchool)).sort();
    // buildFilterSelectMenu('school', tSchools, tSuffix);
    buildTimeTable(tSuffix, kaAllScheduleByTime, SCHEDULE_MODE);
}

function cleanData(){
    delete kaAllResultsBySchool[""];
    for (var k in kaAllResultsBySchool) {
        if(kaAllResultsBySchool[k]['total'] < 1){
            delete kaAllResultsBySchool[k];
        }
    }
    kaAllSchoolsRes.delete("");
}


function buildResultsOnlyMenuItems(tSuffix, resultsToUse = kached_results) {
    buildDateAndSportFilters(tSuffix, resultsToUse, kaAllSportsMed), buildFilterTextMenu("athlete", tSuffix), buildFilterTextMenu("school", tSuffix);
}
function buildDateAndSportFilters(tSuffix, resultsToUse, sportsToUse) {
    var tDates, tSports;
    buildFilterSelectMenu("date", Array.from(Object.keys(resultsToUse).sort(compareDateStrings)), tSuffix), buildFilterSelectMenu("sport", Array.from(sportsToUse).sort(), tSuffix);
}

// function buildTimeTable(tSuffix, tResults, tMode) {
//     var tLoading = $(`#ka-load-div-${tSuffix}`),
//         tTable = $(`#ka-table-${tSuffix}`),
//         tBody = $('<tbody class="ka-outer-table-body"/>'),
//         dates = Object.keys(tResults).sort(compareDateStrings);
//     tMode == SCHEDULE_MODE && (dates = dates.reverse());
//     for (var j = 0; j < dates.length; j++) {
//         var tDayResults = tResults[dates[j]],
//             tTarget = `date-row-${dates[j].replace(/ /g, "")}-${tSuffix}`,
//             tDateSection = buildDateSection(dates[j], tDayResults, tTarget, tSuffix, tMode);
//         tBody.append(tDateSection);
//     }
//     tLoading.remove(), tTable.append(tBody);
// }

function buildTimeTable(tSuffix, tResults, tMode){
    var tLoading = $(`#ka-load-div-${tSuffix}`);

    var tTable = $(`#ka-table-${tSuffix}`);
    var tBody = $(`<tbody class="ka-outer-table-body"/>`);
    var dates = Object.keys(tResults).sort(compareDateStrings);
    if(tMode==SCHEDULE_MODE){dates = dates.reverse();}

    //build and append all the date sections
    for (var j = 0; j < dates.length; j++) {
        
        var tDayResults = tResults[dates[j]];

        var tTarget = `date-row-${dates[j].replace(/ /g,'')}-${tSuffix}`;
        
        var tDateSection = buildDateSection(dates[j], tDayResults, tTarget, tSuffix, tMode);
        // console.log(tDateSection)
        tBody.append(tDateSection);
    }

    tLoading.remove();
    tTable.append(tBody);
}

function buildLeaderboardTable(tSuffix) {
    var tSortedResults = sortSchoolResults(kached_leaders),
        tLoading = $(`#ka-load-div-${tSuffix}`),
        tTable = $(`#ka-table-${tSuffix}`),
        tBody = $('<tbody class="ka-outer-table-body"/>'),
        tRh = buildHeader(["Rank", "School", "Total Medalists", "Gold Medalists", "Silver Medalists", "Bronze Medalists"]);
    tRh.addClass("ka-inner-thead"), tBody.append(tRh);
    for (var tRankActual = 1, tRankVisible = 1, tLastTotal = -1, j = 0; j < tSortedResults.length; j++) {
        var tSchool = tSortedResults[j][0],
            tResult = tSortedResults[j][1],
            tTotal = tResult.total;
        tTotal != tLastTotal && (tRankVisible = tRankActual), tRankActual++;
        var toggleID = "ka-toggle-" + j,
            tRow = $(`<tr data-toggle="collapse" data-target="#${toggleID}" class="ka-medal-row accordion-toggle" />`),
            tChev = `&nbsp<span class="bi bi-chevron-right"></span>&nbsp${tRankVisible}`;
        tRow.append($("<td align='left'/>").html(tChev)),
            tRow.append($("<td align='left'/>").html(schoolCleaner(tSchool))),
            tRow.append($("<td/>").html(tTotal)),
            tRow.append($("<td/>").html(tResult.gold)),
            tRow.append($("<td/>").html(tResult.silver)),
            tRow.append($("<td/>").html(tResult.bronze)),
            tRow.attr(`ka-filter-school-${tSuffix}`, charOnly(tSchool));
        var tHiddenSection = buildHiddenContent(toggleID, tResult);
        tHiddenSection.attr(`ka-filter-school-${tSuffix}`, tSchool), tBody.append(tRow), tBody.append(tHiddenSection), (tLastTotal = tTotal);
    }
    
    if(tSortedResults.length > 0){tLoading.remove();}

    tTable.append(tBody);
}

function buildHiddenContent(tId, tResult) {
    var tResRows = sortSchoolSubResults(Array.from(tResult.rows)),
        tHiddenRow = $('<tr class="ka-hidden-tr"/>'),
        tHiddenTD = $('<td colspan="6" class="hiddenRow"/>'),
        tHiddenDiv = $(`<div class="accordion-body collapse" id="${tId}"/>`),
        tTable = $('<table class="ka-inner-table table table-striped table-light table-sm" style="width:100%">');
    if (tResRows.length < 1) tHiddenDiv.html("no results");
    else {
        tTable.append($("<thead><tr><th>Sport</th><th>Athlete</th><th>Event</th><th>Medal</th></tr></thead>"));
        for (var tTableBody = $("<tbody>"), j = 0; j < tResRows.length; j++) {
            var tResRow = tResRows[j],
                tRow = $("<tr/>");
            tRow.append($("<td/>").html(tResRow.sport_name)), tRow.append($("<td/>").html(tResRow.full_name)), tRow.append($("<td/>").html(tResRow.event_name)), tRow.append($("<td/>").html(tResRow.medal)), tTableBody.append(tRow);
        }
        tTable.append(tTableBody);
    }
    return tHiddenDiv.append(tTable), tHiddenTD.append(tHiddenDiv), tHiddenRow.append(tHiddenTD), tHiddenRow;
}

function buildHeader(fields, tEClass = "") {
    for (var tHead = $('<thead class="ka-event-row-header"/>'), tRh = $("<tr/>"), j = 0; j < fields.length; j++) tRh.append($(`<th class='${tEClass}'/>`).html(fields[j]));
    return tHead.append(tRh), tHead;
}

function buildDateSection(tDate, tResult, tTarget, tSuffix, tMode) {
    var tEventNames = Object.keys(tResult);
    var tDateSection = $(`<tr data-toggle="collapse" ka-filter-date-${tSuffix}="${charOnly(tDate)}" data-target="#${tTarget}" class="ka-date-section"/>`);
    tDateSection.html(`<div class='ka-bng ka-sticky-date'>${dateReFormatter(tDate)}</div>`);

    for (var j = 0; j < tEventNames.length; j++) {
        var tEventName = tEventNames[j],
            tEventSection = buildEventSection(tEventName, tResult[tEventName], tSuffix, j, tMode);
        tDateSection.append(tEventSection);
    }
    return tDateSection;
}

function buildEventSection(tEventName, tResults, tSuffix, idx, tMode) {
    tResults = tMode == RESULTS_MODE ? sortSportEvents(tResults) : tResults;
    var tEvent = $('<tr class="ka-event-section"/>');
    var tStickyHeader = $(`<div class="ka-sticky sticky" style="z-index=${idx + 100}"/>`);
    var tSportName = tResults[0].sport_name;
    var tLookupName = tSportName;
    var tCharOnlySport = charOnly(tSportName);
    
    kaAllSportsMed.add(tCharOnlySport),
        (tEventName.includes("Gymnastics") || tEventName.includes("Equestrian") || tEventName.includes("Cycling") || tEventName.includes("Wrestling")) &&
            (tLookupName = (tLookupName = (tLookupName = tEventName.replace("Men's ", "")).replace("Women's ", "")).replace("Open ", ""));
    var tIcon = icon_lookup[tLookupName];
    // console.log("tLookupName=" + tLookupName + " tIcon=" + tIcon);
    tEvent.attr(`ka-filter-gender-${tSuffix}`, charOnly(tResults[0].gender)), tEvent.attr(`ka-filter-sport-${tSuffix}`, tCharOnlySport);
    var icon = `&nbsp&nbsp <img class="invert-icon" src='${KAASSETS}/${tIcon}' width="30" alt=""> &nbsp&nbsp`,
        tHead,
        tColsToUse;
    tStickyHeader.html(`<div class='ka-event-header'>${icon}${tEventName}${icon}</div>`);
    var tClass = "";
    if(tMode==SCHEDULE_MODE){
        tHead = buildHeader(['ROUND/EVENT', 'DATE/TIME(local)', 'DATE/TIME(Paris)'], 'extra-extra-wide');
        tColsToUse = ['event', 'local', 'paris'];
        tClass='class=extra-extra-wide';
    }
    else if(tMode == MEDALS_MODE){
        ((tHead = buildHeader(["ATHLETE", "SCHOOL", "EVENT", "MEDAL"], "extra-wide")), (tColsToUse = ["name", "schools", "event", "medal"]), (tClass = "class=extra-wide"))
    }
    else{
        ((tHead = buildHeader(["ATHLETE", "SCHOOL", "EVENT", "ROUND", "PLACE", "RESULT", "MEDAL"])), (tColsToUse = ["full_name", "schools", "event_name", "event", "place", "result", "medal"]))
    }
        tStickyHeader.append(tHead),
        tEvent.append(tStickyHeader);
    for (var j = 0; j < tResults.length; j++) {
        tEvent.append(buildRowSection(tMode, tResults[j], tColsToUse, tClass, tSuffix));
    }
    return tEvent;
}
xyz = 123;
function buildRowSection(tMode, tRes, tColsToUse, tClass, tSuffix) {
    tRes.schools = [tRes.c1, tRes.c2];
    for (var tRow = $('<tr class="ka-event-row"/>'), j = 0; j < tColsToUse.length; j++) {
        (r = tRes[tColsToUse[j]]);
        if ("result" == tColsToUse[j]) {
            r = tMode==SCHEDULE_MODE ? scheduleResultFormatter(r) : resultFormatter(r) 
        } 
        // else if (Array.isArray(r) && r.length == 2 && r[1] != "") {
        //     r = schoolsToString(r);
        // }
        tRow.append($(`<td ${tClass}/>`).html(r));
    }
    xyz = tRes;
    return (
        

        tRow.attr(`ka-filter-school-${tSuffix}`, charOnly(tRes.c1.toUpperCase())),
        tRes.c2.length > 1 && tRow.attr(`ka-filter-school2-${tSuffix}`, charOnly(tRes.c2.toUpperCase())),
        tRow.attr(`ka-filter-athlete-${tSuffix}`, charOnly(tRes.name ? tRes.name.toUpperCase() : '')),
        tRow
    );
}
function resultFormatter(result) {
    if (result.constructor == Object){
        return `<p class='ka-winner'>&#x2714 ${result.winner}</p><p class='ka-loser'>&nbsp&nbsp${result.loser}</p>`
    }
    else {
        if(result.includes(" - ")){
            res = result.split(' - ');
            return `<p class='ka-winner'>${res[0]}</p><p class='ka-loser'>&nbsp&nbsp${res[1]}</p>`;
        }
        return result
    }
}
function scheduleResultFormatter(result){
    // console.log("result=" + result);
    if(result == undefined){
        return "";
    }
    return result.length == 1 ? `<p class='ka-winner'>${result[0]}</p>` : `<p class='ka-winner'>&#x2714 ${result[0]}</p><p class='ka-loser'>&nbsp&nbsp${result[1]}</p>`;
}

function schoolsToString(tArr) {
    return tArr[0] + (tArr.length > 1 ? ", " + tArr[1] : "");
}
function buildScaffolding(tMode, tSelector, tTitle, tName, tSuffix) {
    // console.log("building scaffolding for " + tMode);
    var tWidget = $(tSelector);
    var tTitleDiv = $('<div style="clear:right;">');
    tTitleDiv.append($(`<div><h2 class="ka-title">${tTitle}</h2></div>`)),
        tWidget.append(tTitleDiv),
        (nav = buildNav(tMode, tSuffix)),
        tWidget.append(nav),
        $(".ka-select").selectpicker("refresh"),
    // Add the loading rings and the table itself
    tWidget.append(
        kaLoaderRing(tSuffix, tName).append(
            `<div class='ka-table-container'>
             <table class="ka-table table w-auto ${tMode == LEADER_MODE ? "" : "fixed-size-table"}" id="ka-table-${tSuffix}" >
             </table>
             </div>`
    ));
}

function buildScaffolding_Schedule(tMode, tSelector, tTitle, tName, tSuffix){
    var tWidget = $(tSelector);

    var tTitleDiv = $('<div style="clear:right;">');

    // if(tMode==SCHEDULE_MODE){
    //     var acc_href=`https://docs.google.com/spreadsheets/d/${ACC_HREFS[tMode]}/edit?usp=sharing`
    //     tTitleDiv.append($(`<div style="width:90%;margin:auto;clear:right;"><h2 class="ka-title">${tTitle}</h2></div><a target="_blank" href='${acc_href}'><img src='${KAASSETS}/google-sheets.png' width="34px" alt="accessibility raw data" style="margin-top: calc(-44px);float:right;"></img></a>`));
    // }else{
    //     tTitleDiv.append($(`<div><h2 class="ka-title">${tTitle}</h2></div>`));
    // }
    tTitleDiv.append($(`<div><h2 class="ka-title">${tTitle}</h2></div>`));

    tWidget.append(tTitleDiv);

    nav = buildNav(tMode, tSuffix);
    tWidget.append(nav);

    //tell BS select to show the menus
    $(`.ka-select`).selectpicker("refresh");

    // Add the loading rings and the table itself
    tWidget.append(
        kaLoaderRing(tSuffix, tName).append(
            `<table class="ka-table table w-auto ${tMode == LEADER_MODE ? '':'fixed-size-table'}" id="ka-table-${tSuffix}" >
            </table>`
    ));
}

function kaLoaderRing(tSuffix, tName){
    return $(
        `<div class='ka-table-container'>
            <div id="ka-load-div-${tSuffix}">
                <img src='${KAASSETS}/logo.png' class="shimmer"><br><br>
                <b>Paris 2024 ${tName} coming soon!<br>The Games begin July 26, 2024.</b>
            </div>
        </div>
        `
    );
}

function buildNav(tMode, tSuffix) {
    var tNav = $('<nav class="navbar navbar-expand-lg ka-navbar ka-bng" >'),
        tNavDiv = $('<div class="collapse navbar-collapse ka-navbar-collapse" id="navbarSupportedContent" >'),
        tUl = $('<ul class="navbar-nav">'),
        acc_href = `https://docs.google.com/spreadsheets/d/${ACC_HREFS[tMode]}/edit?usp=sharing`;
    (tOpts = tMode == RESULTS_MODE || tMode == MEDALS_MODE || tMode == SCHEDULE_MODE ? ["sport", "date"] : ["school"]),
        (tMode != RESULTS_MODE && tMode != MEDALS_MODE) ||
            (tNavDiv.append(
                $(
                    `<form class="form-inline my-2 my-lg-0 mr-auto" style="width:33%">\n        <input style="width:100%; background-color:white;" type="text" id="ka-athlete-text-filter-${tSuffix}" placeholder=" Filter by athlete name..." title="Type in an athlete name"></input>\n        </form>`
                )
            ),
            tNavDiv.append(
                $(
                    `<form class="form-inline my-2 my-lg-0 mr-auto" style="width:33%">\n        <input style="width:100%; background-color:white;" type="text" id="ka-school-text-filter-${tSuffix}" placeholder=" Filter by school name..." title="Type in a school name"></input>\n        </form>`
                )
            ));
    for (var j = 0; j < tOpts.length; j++) {
        var tLi = $('<li class="nav-item dropdown" >)');
        tLi.append(
            $(
                `<select class="selectpicker ka-select dropdown-primary" data-width="160px" multiple="multiple" data-actions-box="true" data-title="${capitalize(tOpts[j])}" data-selected-text-format="static" id="ka-${
                    tOpts[j]
                }-dropdown-${tSuffix}" >)`
            )
        ),
            tUl.append(tLi);
    }
    return tNavDiv.append(tUl), tNavDiv.append($(`<a target="_blank" href='${acc_href}'><img src='${KAASSETS}/google-sheets.png' width="34px" alt="accessibility raw data"></img></a>`)), tNav.append(tNavDiv), tNav;
}
function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer),
            (timer = setTimeout(function () {
                callback.apply(context, args);
            }, ms || 0));
    };
}
function buildFilterTextMenu(tKey, tSuffix) {
    var tInput = $(`#ka-${tKey}-text-filter-${tSuffix}`);
    tInput.keyup(
        delay(function () {
            var tVal = tInput.val().toUpperCase(),
                tAllRows = $(`tr[ka-filter-${tKey}-${tSuffix}]`);
            if (tVal.length) {
                var tFilterString = `tr[ka-filter-${tKey}-${tSuffix}*='${tVal}']`;
                fadeIn($(tFilterString), `ka-hidden-${tKey}`), fadeOut(tAllRows.not(tFilterString), `ka-hidden-${tKey}`);
            } else fadeIn(tAllRows, `ka-hidden-${tKey}`);
            hideEmptySections();
        }, 350)
    );
}
function buildFilterSelectMenu(tKey, tOpts, tSuffix) {
    for (var tMenu = $(`#ka-${tKey}-dropdown-${tSuffix}`), i = 0; i < tOpts.length; i++) buildMenuCheckRow(tKey, tOpts[i], tMenu);
    tMenu.selectpicker("refresh"), wireMenu(tMenu, tKey, tOpts, tSuffix);
}
function buildMenuCheckRow(tKey, tVal, baseElem) {
    tVal = "date" == tKey ? dateReFormatter(tVal) : tVal;
    var tOption = $(`<option selected="selected" ka-filter-key="${tKey}" ka-filter-val="${charOnly(tVal)}" value="${tVal}">${tVal}</option>`);
    return baseElem.append(tOption), tOption;
}
function wireMenu(tMenu, tKey, tOpts, tSuffix) {
    tMenu.on("changed.bs.select", function (e, clickedIndex, isSelected, oldValue) {
        if (($(".accordion-body.show").collapse("toggle"), null == clickedIndex && null == isSelected)) {
            isSelected = 0 != tMenu.val().length;
            var tRow = $(`tr[ka-filter-${tKey}-${tSuffix}]`),
                tRow2 = $(`tr[ka-filter-${tKey}2-${tSuffix}]`);
        } else
            var tVal = charOnly(tOpts[clickedIndex]),
                tRow = $(`tr[ka-filter-${tKey}-${tSuffix}='${tVal}']`),
                tRow2 = $(`tr[ka-filter-${tKey}2-${tSuffix}='${tVal}']`);
        var tHidingClass = `ka-hidden-${tKey}`;
        isSelected ? (fadeIn(tRow, tHidingClass), fadeIn(tRow2, tHidingClass)) : (fadeOut(tRow, tHidingClass), fadeOut(tRow2, tHidingClass));
    });
}
function getRandomSuffix() {
    return Math.random().toString(36).substring(2, 7);
}
function charOnly(tVal) {
    if (tVal === undefined) {
        return "";
    }
    return tVal.replace(/[^\w\s!?]/g, "").replace(/\s/g, "");
}
function capitalize(mystr) {
    return mystr.charAt(0).toUpperCase() + mystr.slice(1);
}
function compareDateStrings(a, b) {
    var lhs, rhs;
    return Date.parse(a) < Date.parse(b) ? 1 : -1;
}
function dateReFormatter(dateStr) {
    var date = new Date(dateStr);
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}
function sortSportEvents(tResults) {
    return tResults.sort(function (lhs, rhs) {
        var l = new Date(lhs.start),
            r = new Date(rhs.start);
        if (l == r) {
            var mo = ["Bronze", "Silver", "Gold"];
            return mo.indexOf(lhs.medal) - mo.indexOf(rhs.medal);
        }
        return l < r ? 1 : -1;
    });
}
function schoolCleaner(tSchool) {
    return (tSchool = tSchool.replace(/--/g, " "));
}
function sortSchoolResults(tResults) {
    var itemsToSort;
    return Object.keys(tResults)
        .map(function (key) {
            return [key, tResults[key]];
        })
        .sort(function (lhs, rhs) {
            var rt = rhs[1].total,
                lt = lhs[1].total;
            return rt == lt && ((rt = rhs[1].gold), (lt = lhs[1].gold)), rt == lt && ((rt = rhs[1].silver), (lt = lhs[1].silver)), rt == lt && ((rt = rhs[1].bronze), (lt = lhs[1].bronze)), rt - lt;
        });
}
function sortSchoolSubResults(tResults) {
    return tResults.sort(function (lhs, rhs) {
        return lhs.sport_name == rhs.sport_name ? (lhs.full_name < rhs.full_name ? -1 : 1) : lhs.sport_name > rhs.sport_name ? 1 : -1;
    });
}
function fadeIn(tElem, tClass) {
    Promise.all([
        tElem
            .fadeIn("fast", function () {
                $(this).removeClass(tClass);
            })
            .promise(),
    ]).then(function () {
        hideEmptySections();
    });
}
function fadeOut(tElem, tClass) {
    Promise.all([
        tElem
            .fadeOut("fast", function () {
                $(this).addClass(tClass);
            })
            .promise(),
    ]).then(function () {
        hideEmptySections();
    });
}
function hideEmptySections() {
    for (var promises = [], allSections = $(".ka-event-section"), i = 0; i < allSections.length; i++) {
        var sct = $(allSections[i]);
        promises =
            sct.find("tr.ka-event-row").length == sct.find('tr.ka-event-row[class*="ka-hidden-"]').length
                ? promises.concat(
                      sct
                          .fadeOut("fast", function () {
                              $(this).addClass("ka-hidden-section");
                          })
                          .promise()
                  )
                : promises.concat(
                      sct
                          .fadeIn("fast", function () {
                              $(this).removeClass("ka-hidden-section");
                          })
                          .promise()
                  );
    }
    Promise.all(promises).then(function () {
        hideEmptyDateSections();
    });
}

function hideEmptyDateSections() {
    for (var allDateSections = $(".ka-date-section"), i = 0; i < allDateSections.length; i++) {
        var sct = $(allDateSections[i]);
        sct.find("tr.ka-event-section").length == sct.find('tr.ka-event-section[class*="ka-hidden-"]').length
            ? sct.fadeOut("fast", function () {
                  $(this).addClass("ka-hidden-section");
              })
            : sct.fadeIn("fast", function () {
                  $(this).removeClass("ka-hidden-section");
              });
    }
}

function utcStringToLocal(tUTC){
    return new Date(tUTC + "Z").toLocaleString('en-US');
}

function utcStringToParis(tUTC){
    return new Date(tUTC + "Z").toLocaleString('en-US', { timeZone: 'Europe/Paris' });
}

function genderNamer(gender){
    switch(gender) {
        case "Men":
            return "Men's";
        case "Women":
            return "Women's";
        case "Mixed":
        case "Open":
            return gender;
        default:
            return "undefined";
    }
}