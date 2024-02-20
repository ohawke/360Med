import axios from 'axios';
function cleanData(rawData) {
    rawData = rawData.replaceAll("<FieldValue>", "");
    rawData = rawData.replaceAll("</Field>", "");
    rawData = rawData.replaceAll("<FieldList>", "");
    rawData = rawData.replaceAll("</FieldList>", "");
    rawData = rawData.replaceAll("</FieldValue>", "");
    rawData = rawData.replaceAll("</Field>", "");
    rawData = rawData.replaceAll("<StudyFieldsList>", "");
    rawData = rawData.replaceAll("<StudyFields>", "");
    rawData = rawData.replaceAll("<FieldValues>", "");
    rawData = rawData.replaceAll("</FieldValues>", "");
    rawData = rawData.replaceAll("<StudyFields Rank='1'>\n", "");
    rawData = rawData.replaceAll("<FieldValues Field='BriefTitle">'', "");
    rawData = rawData.replaceAll("<FieldValues Field='Condition'>", "");
    rawData = rawData.replaceAll("<FieldValues Field='BriefSummary">'', "");
    rawData = rawData.replaceAll("</StudyFieldsList>", "");
    rawData = rawData.replaceAll("</StudyFields>", "");
    rawData = rawData.replaceAll("</StudyFieldsResponse>", "");
    rawData = rawData.replaceAll(":", "");
    return rawData;
}

async function apiRequest(fields, input) {
    /*const response = axios({
        method: "get",
        url: 'https://uts-ws.https://classic.clinicaltrials.gov/api/query/nlm.nih.gov/rest/search/current',
        params: {
            'study_fields': input,
            'fields': ['BriefTitle', 'Condition', 'BriefSummary', ],
            'min_rnk': 1,
            'max_rnk': 10,
            'fmt': 'xml'
        },
    });
    const data = await response.xml();
    return data;*/
    try {
        let url;
        if (fields) {
            url = `https://classic.clinicaltrials.gov/api/query/study_fields?expr=${input}&fields=BriefTitle%2CCondition%2CBriefSummary%2C${fields}&min_rnk=1&max_rnk=10&fmt=xml`;
        } else {
            url = `https://classic.clinicaltrials.gov/api/query/study_fields?expr=${input}&fields=BriefTitle%2CCondition%2CBriefSummary&min_rnk=1&max_rnk=10&fmt=xml`;
        }

        const response = await fetch(url);

        const data = await response.text();

        return data;
    } catch (error) {
        console.log(error);
        return "Invalid request";

    }
}
async function printData(lines, fields) {

    if (lines.length < 4) {
        console.log("Error: lines array must have at least 4 elements");
        return;
    }

    for (let i = 13; i < lines.length; i++) {
        if (i >= lines.length - 1) {
            break;
        }

        if (lines[i].includes("BriefSummary") || lines[i].includes("BriefTitle") || lines[i].includes(fields)) {

            if (lines[i].includes("BriefTitle")) {
                console.log("Study Title: ");
            } else if (lines[i].includes("BriefSummary")) {
                console.log("Study Summary: ");
            }

            try {

                let output = lines[i + 1];

                if (output.length > 170) {
                    console.log(output.substring(0, 170));
                    let substring = output.substring(170);

                    if (substring.length > 170) {
                        console.log(substring.substring(0, 170));
                        console.log(substring.substring(170) + "\n");
                    } else {
                        console.log(substring + "\n");
                    }
                } else {
                    console.log(lines[i + 1]);
                }

            } catch (error) {
                console.log("Error printing output");
            }
        }
    }
}

    async function pullData(searchTerm) {

        searchTerm = searchTerm.replace(/\s/g, '%20');

        const apiData = await apiRequest("", searchTerm);

        const cleanedData = cleanData(apiData);

        return cleanedData;

    }

    async function main(searchTerm) {
        let output = pullData(searchTerm);
        return output;
        //const resultElement = document.getElementById('result');
        //resultElement.innerText = output;
    }

    export default main;
