import dollar from '../assets/doller.svg';
import feed from '../assets/rss.svg';
import trophy from '../assets/trophy.svg';
import star from '../assets/star.svg';
export default {
    Netflix: [
        { id: "Subscribers", value: "539.8M", icon: feed,iconType:"badge is-feed" },
        { id: "Revenue", value: "12.8B", icon: dollar,iconType:"badge is-dollar", },
        { id: "Emmy Awards", value: "23", icon: trophy, iconType:"badge is-trophy" },
        { id: "IMDb Rating", value: "8.34", icon: star,iconType:"badge is-star" }
    ],
    Amazon: [
        { id: "Subscribers", value: "815M", icon: feed,iconType:"badge is-feed" },
        { id: "Revenue", value: "20.5B", icon: dollar,iconType:"badge is-dollar" },
        { id: "Emmy Awards", value: "5", icon: trophy, iconType:"badge is-trophy" },
        { id: "IMDb Rating", value: "7.58", icon: star,iconType:"badge is-star" }
    ],
    Hulu: [
        { id: "Subscribers", value: "25M", icon: feed,iconType:"badge is-feed" },
        { id: "Revenue", value: "2.85B", icon: dollar,iconType:"badge is-dollar" },
        { id: "Emmy Awards", value: "1", icon: trophy, iconType:"badge is-trophy" },
        { id: "IMDb Rating", value: "7.07", icon: star,iconType:"badge is-star" }
    ],
    HBO: [
        { id: "Subscribers", value: "150M", icon: feed,iconType:"badge is-feed" },
        { id: "Revenue", value: "6B", icon: dollar,iconType:"badge is-dollar" },
        { id: "Emmy Awards", value: "6", icon: trophy, iconType:"badge is-trophy" },
        { id: "IMDb Rating", value: "8.04", icon: star,iconType:"badge is-star" }
    ]


}