const responses = require('../module/responses');
const { request } = require("../module/commonFunction");
let authKey = process.env.authKey || 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';

exports.filterList = async (req, res) => {
    let { searchWord, maxResults } = req.query;
    try {
        if (!searchWord) responses.sendError(res, "searchWord is required");
        if (!maxResults) maxResults = 20;
        else maxResults = Number(maxResults)
        let url = `https://content.googleapis.com/youtube/v3/search?maxResults=${maxResults}&order=viewCount&part=snippet&publishedAfter=2015-01-01T00%3A00%3A00Z&q=${searchWord}&type=video&key=${authKey}`
        let data = await request(url);
        responses.success(res, JSON.parse(data))
    } catch (err) {
        responses.sendError(res, err)
    }
}


exports.getListById = async (req, res) => {
    let { id } = req.query;
    try {
        if (!id) responses.sendError(res, "id is required");
        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${authKey}`
        let data = await request(url);
        responses.success(res, JSON.parse(data))
    } catch (err) {
        responses.sendError(res, err)
    }
}