import converter from 'json-2-csv';

async function csv2Json(csv){
    return JSON.stringify(await converter.csv2jsonAsync(csv))
}

async function json2Csv(json){
    return await converter.json2csvAsync(JSON.parse(json))
}

export default {json2Csv, csv2Json}