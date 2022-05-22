var APP_DATA = {
  "scenes": [
    {
      "id": "0-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.2619891178866389,
        "pitch": -0.2562748711274594,
        "fov": 1.3550372252191931
      },
      "linkHotspots": [
        {
          "yaw": 0.09119541532071906,
          "pitch": 0.010878569456481912,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7127798485065533,
          "pitch": -0.49739987718740153,
          "title": "<span id=\"docs-internal-guid-b7a05170-7fff-e320-4c6a-00cc6284f7c0\"><h2 dir=\"ltr\" style=\"line-height:1.3800000000000001;text-indent: 36pt;margin-top:18pt;margin-bottom:6pt;\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Azerbaijan University of Languages Dormitory N:1&nbsp;</span></h2></span>",
          "text": "<span id=\"docs-internal-guid-4f6dc196-7fff-1413-3fd3-df232374b9f5\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 12pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Jeyhun Hajibeyli Street, located about 30 minutes from the city center by bus.</span></p><br><p dir=\"ltr\" style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 12pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Before the war, the five-story building was home to university students. In 1992, however, the students were relocated and displaced families were assigned rooms. There are 110 families living and sharing a single common bathroom/public toilet. Over the course of the 30 years the families have been living here, they have become its de facto owners. </span></p><div><span style=\"font-size: 12pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\"><br></span></div></span>"
        }
      ]
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8534870232472453,
          "pitch": 0.3631518117623891,
          "rotation": 0,
          "target": "0-courtyard"
        },
        {
          "yaw": 0.05302923407267457,
          "pitch": 0.044605645652925574,
          "rotation": 0,
          "target": "2-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ground-floor",
      "name": "Ground Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6409720760902182,
          "pitch": 0.1191636380838279,
          "rotation": 0,
          "target": "0-courtyard"
        },
        {
          "yaw": -0.06948194524210116,
          "pitch": 0.10004033081486519,
          "rotation": 0,
          "target": "3-turajs-door-and-a-corridor"
        },
        {
          "yaw": -0.4757609652116983,
          "pitch": -0.3012615078815877,
          "rotation": 0,
          "target": "11-third-floor-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-turajs-door-and-a-corridor",
      "name": "Turaj's Door and a Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.5762203578458713,
        "pitch": -0.013304598038649473,
        "fov": 1.3550372252191931
      },
      "linkHotspots": [
        {
          "yaw": 0.06945935296843864,
          "pitch": 0.21325658799201896,
          "rotation": 7.0685834705770345,
          "target": "5-corridor-towards-the-tea-room"
        },
        {
          "yaw": -0.2890551072064511,
          "pitch": 0.379857125288531,
          "rotation": 5.497787143782138,
          "target": "2-ground-floor"
        },
        {
          "yaw": -0.03519727783051252,
          "pitch": 0.16940948619637197,
          "rotation": 0,
          "target": "4-kitchen-door"
        },
        {
          "yaw": -2.267941533686809,
          "pitch": 0.43596007936513104,
          "rotation": 0,
          "target": "8-turajs-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1037316641192856,
          "pitch": 0.2787692187613757,
          "title": "",
          "text": "<span id=\"docs-internal-guid-90fe5fc5-7fff-5f69-69bf-b3a663dfb92e\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Residents have lost interest in cleaning it as many believe they will receive new housing soon.</span></span>"
        }
      ]
    },
    {
      "id": "4-kitchen-door",
      "name": "Kitchen Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.2337677409092507,
        "pitch": 0.21217247636989,
        "fov": 1.3550372252191931
      },
      "linkHotspots": [
        {
          "yaw": 1.174892838547807,
          "pitch": 0.24256938034338305,
          "rotation": 0,
          "target": "3-turajs-door-and-a-corridor"
        },
        {
          "yaw": 2.88645598157754,
          "pitch": 0.4972057283034612,
          "rotation": 0,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9490217301651107,
          "pitch": -0.1435918772134741,
          "title": "",
          "text": "<span id=\"docs-internal-guid-282f9250-7fff-0302-7faf-7b1560028eb0\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Families share a common kitchen and common bathrooms.</span></span>"
        }
      ]
    },
    {
      "id": "5-corridor-towards-the-tea-room",
      "name": "Corridor towards the tea room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8954525859899753,
          "pitch": 0.3041329373738755,
          "rotation": 5.497787143782138,
          "target": "3-turajs-door-and-a-corridor"
        },
        {
          "yaw": 0.08083875106429694,
          "pitch": 0.2946750672156959,
          "rotation": 0,
          "target": "6-the-way-to-the-tea-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-the-way-to-the-tea-room",
      "name": "The way to the tea-room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.345171919111653,
          "pitch": 0.3652489272528072,
          "rotation": 0,
          "target": "5-corridor-towards-the-tea-room"
        },
        {
          "yaw": 0.3857219903787463,
          "pitch": 0.030639944243834094,
          "rotation": 0,
          "target": "9-the-tea-room-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.892682595505791,
          "pitch": 0.32611758619759357,
          "rotation": 0,
          "target": "4-kitchen-door"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5915478885044543,
          "pitch": -0.057542395899691456,
          "title": "",
          "text": "<span id=\"docs-internal-guid-6a903156-7fff-8440-c075-c904112229ce\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Residents in the dormitory note that relationships between their neighbors are getting worse as conditions in the building deteriorate.&nbsp; </span></span>"
        }
      ]
    },
    {
      "id": "8-turajs-room",
      "name": "Turaj's Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.23656705324255256,
        "pitch": -0.08693272578944722,
        "fov": 1.3550372252191931
      },
      "linkHotspots": [
        {
          "yaw": 2.9927724336070707,
          "pitch": 0.14899033355474245,
          "rotation": 0,
          "target": "3-turajs-door-and-a-corridor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2075251957613347,
          "pitch": -0.1327499711447846,
          "title": "",
          "text": "<span id=\"docs-internal-guid-09fd2df5-7fff-95a8-1578-ca185483a597\"><span style=\"background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline;\"><div style=\"\"><font color=\"#000000\" face=\"Times New Roman\"><span style=\"font-size: 14.6667px; white-space: pre-wrap;\">Turaj Aliyarov was born in 1993 and has been living in a small room on the first floor of the dormitory with his parents for 29 years. His family arrived from Zengilan, a city in Karabakh. Both of his parents work as tailors now; he used to work as a taxi driver but had to sell his car so he is unemployed.&nbsp;</span></font></div><div style=\"\"><font color=\"#000000\" face=\"Times New Roman\"><span style=\"font-size: 14.6667px; white-space: pre-wrap;\">Turaj was born after the family was&nbsp; forced to leave their home, 396&nbsp; kilometers from Baku. When he thinks about before&nbsp; his family settled in the dormitory, Turaj imagines a whole group of people arriving at the locked building and breaking down the doors to get in.&nbsp;</span></font></div>\n</span></span>"
        },
        {
          "yaw": 1.683885745082348,
          "pitch": 0.3442997592778596,
          "title": "",
          "text": "<span id=\"docs-internal-guid-78bdb301-7fff-b995-1857-10f647b4a82f\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">If you live with your family in one room, you can't have a comfortable private space. Imagine you have a significant other and you have to go out all the time to talk to her. Even if you leave the room, your voice is still audible. I go out in my spare time; my father and mother come home at 9 pm. I usually come back only when it's time to sleep. Think about what would have happened if I had a sister. That girl could not have a private life in this environment. There are so many families living here where sisters and brothers share the house.”</span></span>"
        },
        {
          "yaw": -0.4801516557222829,
          "pitch": 0.20829009606243787,
          "title": "",
          "text": "<span id=\"docs-internal-guid-4383c177-7fff-88a7-3cec-b1838037bc71\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">For example, you can't wear whatever you want at home like shorts or a tank top.I broke up with my girlfriend of eight years because of this problem. We wanted to get married to live together. Without financial support, that is impossible in Baku. When I returned from the military, I was unemployed. I wanted to be a police officer, I had the motivation and had a chance to apply for a job. However, I was asked for a 6000 AZN bribe to be a police officer.</span></span>"
        },
        {
          "yaw": 0.18318535732804797,
          "pitch": -0.16193525908587425,
          "title": "",
          "text": "<span id=\"docs-internal-guid-ef542b3f-7fff-ac33-93f8-c03915c87147\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Sometimes some officials come to the dormitory to measure the rooms. There were rumors that they will buy the rooms from us and so on. At the time, I thought it would be great because we could buy a house with a garden with the money. I would be comfortable at least.</span></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Could you spend a single day in this room?\n\n<span id=\"docs-internal-guid-65e28141-7fff-5303-f237-d97ddb2cedbc\"><span style=\"font-size: 11pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline;\">I am not ashamed of my situation. The amount they spend on one car for some official in the country would be enough to improve the living conditions of 20 people here.&nbsp; I would like to live in Germany. People want to live, but we simply survive every day. It's always the same thing, a bad situation. </span></span>\n</span></p><div><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\"><br></span></div></span>"
        },
        {
          "yaw": -1.1525691340545148,
          "pitch": -0.22721152014720936,
          "title": "",
          "text": "<span id=\"docs-internal-guid-968740d1-7fff-2966-df6d-3189e95fbe19\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">It's been 30 years, does anyone realize that? I have expectations from the government. When I went to the military in 2010, I served for 18 months. That's another reason I have expectations. The system owes me. We have access to the internet, we see different places and can compare. I don't remember when I watched TV for the last time. We watch what we want on smartphones. The programs on TV do not reflect our lives.</span></span>"
        },
        {
          "yaw": 0.6481254158711796,
          "pitch": 0.2078402431561468,
          "title": "",
          "text": "<span id=\"docs-internal-guid-3e5e5b01-7fff-9b93-55cd-64656405681c\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">IDPs need an official document to prove their status. The document will make it easier to get a new house or something in the future. My father paid around 1500 AZN for this document, I don't remember exactly. He came to Baku a year before the conflict started, but because of the conflict, he lost his home and stayed. That is why getting IDP status costs a lot.</span></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">&nbsp;There is also a document that enables holders to receive “bread money” for 30 years. I think it works out to a 50 AZN monthly allowance for those who can prove their status. It was also available for a fee, but we did not buy it.</span></p><div><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\"><br></span></div></span>"
        },
        {
          "yaw": -2.2858840495042863,
          "pitch": -0.5282660310298084,
          "title": "Title",
          "text": "<span id=\"docs-internal-guid-c140e1ed-7fff-6312-96dd-ad13c88104eb\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">I did not have any special feelings when I heard that Karabakh and Zangilan were taken back. I did my military service in Aghdam [a region that returned to Azerbaijan control in 2020]. When I was in the military, I saw what was done to poor soldiers. Those who were somewhat wealthy or favored were treated differently. For example, we had days off. Wealthy soldiers were given more days off. Therefore, I did not have strong feelings about the region. But my family was happy [about the news], especially my father.</span></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">If my family is given a house there, they would probably return. However, I don’t want to. I'll be bored if I go there. That's why I should rent a house in Baku. They won't let me stay here. Probably another student dormitory will be built here.</span></p><div><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\"><br></span></div></span>"
        },
        {
          "yaw": -2.9313518714831766,
          "pitch": -0.06500785902012396,
          "title": "",
          "text": "<span id=\"docs-internal-guid-09f614e3-7fff-c509-8355-c88ab39d28fe\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">There were maybe 20 people I knew who went to war. While I was chatting with them at the moment, I did not see their passion. We see real soldiers on TV who earn their living in the army, praise their work and war. But others risked their lives for the land. Okay, we all owe that to our homeland. Every one of them wants to get married but they can not afford it. For all that war, no one will give you land to build a house. I also volunteered for the war, but they didn't call me to duty. After all, men protect the country.”</span></span>"
        }
      ]
    },
    {
      "id": "9-the-tea-room-entrance",
      "name": "The Tea Room Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.462361882253351,
          "pitch": 0.22694783422745246,
          "rotation": 0,
          "target": "6-the-way-to-the-tea-room"
        },
        {
          "yaw": 0.4856685910923133,
          "pitch": 0.03883987938406008,
          "rotation": 0,
          "target": "10-tea-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4133335003148293,
          "pitch": -0.22630894039900085,
          "title": "",
          "text": "<span id=\"docs-internal-guid-a11dc1ae-7fff-37c5-4789-1403d093060a\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">IDPs built a pavilion to celebrate weddings and funerals and today it serves as the community’s </span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-style: italic; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">chaikhana</span><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">, or tea house. Men spend time there when they need a break from their rooms in the dorm.</span></span>"
        }
      ]
    },
    {
      "id": "10-tea-room",
      "name": "Tea Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.40474071170726944,
          "pitch": 0.24639591818399253,
          "rotation": 0,
          "target": "9-the-tea-room-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8258244432139623,
          "pitch": -0.08074586656208993,
          "title": "",
          "text": "<span id=\"docs-internal-guid-2467129f-7fff-9552-e9ef-6911130e6637\"><span style=\"font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">There is no such place for women, however, compare their lives in the dormitory with a prison. </span></span>"
        }
      ]
    },
    {
      "id": "11-third-floor-corridor",
      "name": "Third Floor Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.49540765058264746,
        "pitch": 0.15688794310138654,
        "fov": 1.3550372252191931
      },
      "linkHotspots": [
        {
          "yaw": 2.945780800243332,
          "pitch": 0.6038676087840837,
          "rotation": 5.497787143782138,
          "target": "2-ground-floor"
        },
        {
          "yaw": -0.4602301132544966,
          "pitch": 0.46263956697439923,
          "rotation": 5.497787143782138,
          "target": "14-bathroom"
        },
        {
          "yaw": 1.5672067004094998,
          "pitch": 0.20847377817823265,
          "rotation": 0,
          "target": "13-firuzes-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7897685529607825,
          "pitch": -0.1658904128235239,
          "title": "<span style=\"color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: 14.6667px; white-space: pre-wrap; background-color: rgba(58, 68, 84, 0.8);\">Firuze Aliyeva</span>",
          "text": "<span id=\"docs-internal-guid-ca07c2c7-7fff-7f25-9e1d-b2bdb0b56fd5\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Firuze Aliyeva, 66, arrived in Baku in 1993. She was 38, had three children and had abandoned her home in Fuzuli, Karabakh during the war. Her husband arrived three days later. When the family arrived, they lived with relatives for 18 months before relocating to the university dormitory. </span></span>"
        }
      ]
    },
    {
      "id": "12-firuzes-balcony",
      "name": "Firuze's Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -3.0713700221019202,
        "pitch": -0.03146216393650825,
        "fov": 1.3550372252191931
      },
      "linkHotspots": [
        {
          "yaw": -0.009023707093906097,
          "pitch": 0.5870275646535585,
          "rotation": 0,
          "target": "13-firuzes-room"
        },
        {
          "yaw": 0.24198773367420756,
          "pitch": 0.18835781902103932,
          "rotation": 0,
          "target": "11-third-floor-corridor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5108273207391072,
          "pitch": -0.11268576221100446,
          "title": "",
          "text": "<span id=\"docs-internal-guid-0ff3f3b6-7fff-0c45-354c-694fc715c2d1\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">My husband used to love to plant flowers. Here he could not do much. Today there are three flowers left. I don’t know why they are not growing anymore. </span></span>"
        },
        {
          "yaw": -1.5568913454239848,
          "pitch": 0.02589742745793977,
          "title": "",
          "text": "<span id=\"docs-internal-guid-cd47c9a9-7fff-5d8d-cfc2-833b9f5c7efc\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">I want to go back. If possible I want to go now. I can cook for soldiers. My son says we can start a small business to sell doner [kebabs] but I don’t agree. I am good at cooking traditional pastries. My son also can work at the airport and can do desk jobs. He couldn't study because of his illness. I did not have money to buy clothes so he didn’t want to go to school. Perhaps our health will improve there, in nature. I saw new houses on TV in Jabrail. I guess ours will also be nice.</span></span>"
        }
      ]
    },
    {
      "id": "13-firuzes-room",
      "name": "Firuze's Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.08735538951154,
          "pitch": 0.4328670910185437,
          "rotation": 0,
          "target": "12-firuzes-balcony"
        },
        {
          "yaw": 0.47240874049506054,
          "pitch": 0.2676822819251008,
          "rotation": 0,
          "target": "11-third-floor-corridor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6381376112847583,
          "pitch": -0.056958874121111336,
          "title": "",
          "text": "<span id=\"docs-internal-guid-6386098f-7fff-770b-0d9b-1f270ffb2e3a\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Our money and documents were in a suitcase. At first we decided to save our money at Vahid Bank ( a private bank) instead of buying a house. In 1995 Vahid Bank closed and we lost all our money. We had relatives living in the dormitory and arranged a room for 60 AZN (approximately $16). This room belonged to a young tailor and the room&nbsp; used to be a sewing room for students.” </span></span>"
        },
        {
          "yaw": 0.13261979106511212,
          "pitch": 0.7272417331228933,
          "title": "",
          "text": "<span id=\"docs-internal-guid-d6216dc2-7fff-1051-ff74-e2c4208254fb\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">My son brought our wedding box (traditional bridal dowry) with essential stuff such as blankets and dresses.</span></span>"
        },
        {
          "yaw": -0.5644084869071015,
          "pitch": 0.32655154881324755,
          "title": "",
          "text": "<span id=\"docs-internal-guid-a00ed6d9-7fff-509f-e50f-ea9889b88fcd\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Now I live with my 24-year-old son Sadiq. My son and I developed asthma four years after we moved here. My other two sons are married and the middle son built a house. My eldest son is a chef in Makhachkala in Dagestan (Russia). He couldn’t visit me during the pandemic. Instead I ask for money. Sometimes my sons send me money to help.</span></span>"
        },
        {
          "yaw": 0.9932778646201967,
          "pitch": 0.03737853877442987,
          "title": "",
          "text": "<span id=\"docs-internal-guid-1bd74757-7fff-d497-8c95-9413148336c3\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">For 15 years, Firuze worked in a restaurant. Today she is unemployed due to her poor health: she needs surgery on her right leg, which costs 400 AZN (about $235) but she cannot afford it. </span></span>"
        },
        {
          "yaw": 1.9078813588869226,
          "pitch": 0.11163749226901487,
          "title": "",
          "text": "<span id=\"docs-internal-guid-7a4f3148-7fff-9540-4287-1ebfe62c28dd\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">I watch TV all&nbsp; day. There is a program on TV that helps poor people and I called them to ask for assistance to pay for the surgery. They said I would be invited to the studio.</span></span>"
        },
        {
          "yaw": 2.2591072210680316,
          "pitch": 0.38327927238169757,
          "title": "",
          "text": "<span id=\"docs-internal-guid-0f33a2ee-7fff-d756-1c39-341a86a23a29\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">I receive 260 AZN a month as pension and my son receives 110 AZN a month in assistance due to his illness. Our medicine cost a lot. We receive an extra 33 AZN as “bread money.” For five years, we also received a one-time payment during the holidays. Now my son is writing to state-run foundations, asking for money for our treatment. Sometimes it works. For example, a foundation provided $500 in 2016 for an operation for my left leg.”</span></span>"
        },
        {
          "yaw": 2.7380625303151973,
          "pitch": -0.28687901341355726,
          "title": "",
          "text": "<span id=\"docs-internal-guid-d814d113-7fff-4b8e-43e5-171e81cd414d\"><span style=\"font-size: 11pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">We had two houses in Fuzuli. One of them was in the city center and the other one was in the village. I lived with my mother and father-in-law, my three sons and husband. I was a housewife baking traditional pastry, cooking jam and making pickles.&nbsp; The house was near three natural water sources. My husband was an accountant. He passed away in 2019. My father-in-law used to work with bees when he returned home from work. We had 32 beehives in our garden. My husband collected beans and tomatoes from our small farm. He made fences from wire and sold them in our neighborhood as well. That all ended when we lost all our home. My whole family was hardworking. Today, boys just play with their smartphones.</span></span>"
        }
      ]
    },
    {
      "id": "14-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09240362248910827,
          "pitch": 0.19988904828210785,
          "rotation": 0,
          "target": "11-third-floor-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
