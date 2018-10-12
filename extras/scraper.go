package main

import (
	"encoding/json"
	"fmt"
	"github.com/tidwall/gjson"
	"io/ioutil"
	"net/http"
)

var (
	YT_API_KEY     = "AIzaSyD0NnmAatMlxPOQsgUUufEADuLjiB8v1A4"
	YT_PLAYLIST_ID = "PLeCI_btMpybPMC7XxI9nTlEeESf1-3_xg"
)

type Video struct {
	// ID    string `json:"id"`
	Title string `json:"title"`
	URL   string `json:"url"`
}

type Data struct {
	Videos []Video `json:"videos"`
}

func main() {
	url := fmt.Sprintf(
		"https://www.googleapis.com/youtube/v3/playlistItems?playlistId=%s&maxResults=50&part=snippet&key=%s",
		YT_PLAYLIST_ID,
		YT_API_KEY,
	)
	fmt.Println(url)
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	data := Data{}
	data.Videos = make([]Video, 0)
	for _, video := range gjson.Get(string(body), "items").Array() {
		data.Videos = append(data.Videos, Video{
			// ID:    video.Get("snippet.resourceId.videoId").String(),
			Title: video.Get("snippet.title").String(),
			URL:   fmt.Sprintf("https://www.youtube.com/watch?v=%s", video.Get("snippet.resourceId.videoId").String()),
		})
	}
	json, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(json))
}
