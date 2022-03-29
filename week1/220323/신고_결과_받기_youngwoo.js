function makeIdMap(map, id_list) {
    id_list.forEach((id, idx) => {
        map.set(id, idx);
    });
}

function analyzeReport(reported, idMap, report) {

    report.forEach(r => {
        let [ing, ed] = r.split(" ").map(id => idMap.get(id));
        reported[ed].push(ing);
    });
}

function sendEmail(reported, k) {
    let result = new Array(reported.length).fill(0);

    reported
        .filter(reporters => reporters.length >= k)
        .forEach(reporters => {
            reporters.forEach(reporter => {
                result[reporter]++;
            })
        })

    return result;
}

function solution(id_list, report, k) {
    let idMap = new Map();
    let reported = new Array(id_list.length).fill(0).map(_ => new Array());
    report = new Set(report);


    makeIdMap(idMap, id_list);
    analyzeReport(reported, idMap, report);
    return sendEmail(reported, k);
}