import airForceImg from "../assets/images/nike-air-force-1-07.avif";
import airMaxImg from "../assets/images/nike-air-max-plus.avif";
import nikeEverydayCushionedImg from "../assets/images/nike-everyday-cushioned.avif";
import nikePerformanceLightweightImg from "../assets/images/nike-performance-lightweight.avif";
import nikeCalmImg from "../assets/images/nike-calm.avif";
import nikeAirMoreUptempoImg from "../assets/images/nike-air-more-uptempo.avif";

const products = [
    {
        id: 1,
        name: "Nike Air Force 1 '07",
        category: "shoes",
        gender: "Men's Shoes",
        price: 16500,
        image: airForceImg,
        desc: "Comfortable, durable, and timeless, it's a staple at the top for a reason. Classic '80s construction is combined with smooth leather and a bold design for style that's perfect on and off the court.",
        details: [
            "Shown Color: White/White",
            "Style: CW2288-111",
            "Origin: China, India, Vietnam",
        ]
    },
    {
        id: 2,
        name: "Nike Air Max Plus",
        category: "shoes",
        gender: "Men's Shoes",
        price: 23100,
        image: airMaxImg,
        desc: "Show off your edgy style with the Air Max Plus. The iconic caging adds a touch of heat, while breathable mesh keeps you cool. Visible cushioning lets you celebrate your style in a bold yet comfortable way.",
        details: [
            "Shown: Black/Light Crimson/Noble Red/Black",
            "Style: DM0032-021",
            "Origin: Indonesia",
        ]
    },
    {
        id: 3,
        name: "Nike Everyday Cushioned",
        category: "socks",
        gender: "Unisex",
        price: 3300,
        image: nikeEverydayCushionedImg,
        subtitle: "Training Crew Socks (6 pairs)",
        desc: "Push yourself to the max with Nike Everyday Cushioned Socks. The thick terry sole provides comfort during drills and lifts, while the ribbed arch band wraps around your midfoot for a supportive feel.",
        details: [
            "Shown Color: White/Black",
            "Style: SX7666-100",
            "Origin: Sri Lanka",
        ]
    },
    {
        id: 4,
        name: "Nike Performance Lightweight",
        category: "socks",
        gender: "Unisex",
        price: 2200,
        image: nikePerformanceLightweightImg,
        subtitle: "Training Ankle Socks (3 pairs)",
        desc: "Nike Performance Lightweight Socks feature a ribbed arch band and soft, quick-drying yarn for comfortable support throughout a variety of workouts.",
        details: [
            "Shown Color: White/Black",
            "Style: SX4706-101",
            "Origin: China, Vietnam",
        ]
    },
    {
        id: 5,
        name: "Nike Calm",
        category: "slides",
        gender: "Men's Slides",
        price: 5399,
        image: nikeCalmImg,
        subtitle: "Sale price",
        desc: "Enjoy gentle comfort, anywhere, anytime. The minimalist design features soft foam for support. These slides are easy to coordinate with any outfit, whether you wear them with or without socks. The textured insole keeps your feet in place.",
        details: [
            "Shown Color: Black/Black",
            "Style: FD4116-001",
            "Origin: Indonesia",
        ]
    },
    {
        id: 6,
        name: "Nike Air More Uptempo",
        category: "slides",
        gender: "Men's Slides",
        price: 13530,
        image: nikeAirMoreUptempoImg,
        subtitle: "Sale price",
        desc: `Featuring a large, graffiti-inspired "AIR" graphic and the full-length Nike Air cushioning that made the original so popular, this shoe reimagines the classic basketball look with a slide-on system for easy entry and exit. It combines '90s style with summer comfort. The comfortable straps, ventilated perforations and soft foam make this a shoe perfect for courtside, beachside and everywhere in between.`,
        details: [
            "Shown Color: Midnight Navy/White/Clear/University Red",
            "Style: FQ8699-400",
            "Origin: Vietnam",
        ]
    }
];

export default products;