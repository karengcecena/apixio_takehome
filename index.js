'use strict';

var data = [
        {
            "Id" : 1,
            "Name" : "Mohammad Smith",
            "DoB" : "1/1/2010",
            "FavoriteColor" : "Blue",
            "Pets" :
                [
                    { "type":"Bird", "Name":"Tweety"}
                ]
        },
        {
            "Id" : 2,
            "Name" : "Ilya Chang",
            "DoB" : "2/1/1980",
            "Pets" :
                [
                    { "type":"Bird", "Name":"Fluffy"},
                    { "type":"Cat", "Name":"Leon"}
                ]
        },
        {
            "Id" : 3,
            "Name" : "Chris",
            "DoB" : "10/31/19870",
            "Pets" :
                [
                    { "type":"Dog", "Name":"Corky"},
                    { "type":"Cat", "Name":"Bella"}
                ]
        },
        {
            "Id" : 4,
            "Name" : "Sanjay Grant",
            "DoB" : "10/31/1987",
        },
        {
            "Id" : 5,
            "Name" : "Anna Kang",
            "DoB" : "11/30/2004",
            "Pets" :
                [
                    { "type":"Lizard", "Name":"Kermit"},
                    { "type":"Lizard", "Name":"Dino"}
                ]
        },
        {
            "Id" : 6,
            "Name" : "Smith Adebayo",
            "DoB" : "11/30/2004",
            "Pets" :
                [
                    { "type":"Cat", "Name":"Walter"},
                    { "type":"Lizard", "Name":"Lizzo"},
                    { "type":"Bird", "Name":"Ladybird"}
                ]
        }
    ];

for (const key of data) {
        console.log(key)
    };