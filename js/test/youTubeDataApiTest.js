﻿define([
    'youTubeDataApi'
], function (YouTubeDataAPI) {
    'use strict';
    
    describe('YouTubeDataAPI', function () {

        it('Should be able to get auto-generated playlist data', function () {
            YouTubeDataAPI.getAutoGeneratedPlaylistData();
        });

    });
    
});
