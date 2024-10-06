export interface Farm {
  id: string;
  farm_name: string;
  farm_details: {
    farm_story: string;
    farm_methods: string;
    farm_seasonal_description: string;
    farm_seasonal_products: Array<{
      product_name: string;
      product_image: string;
    }>;
  };
  farm_image: string;
  farm_location: string;
  farm_email: string;
  farm_phone: string;
  farm_social_media: string;
}

export const FARMS: Array<Farm> = [
  {
    id: "green-valley-organics",
    farm_name: "Green Valley Organics",
    farm_details: {
      farm_story: `Nestled in the lush mountains of La Trinidad, Benguet, Philippines, Green Valley Organics has been a labor of love for Filipino farmers since 1950. What started as a small plot of land and a dream has blossomed into a thriving organic farm, passing down through three generations. Each day, as the sun rises over the misty fields, the farmers continue their commitment to cultivating the finest organic produce, just as their grandparents did. Their journey hasn't always been easy, but their dedication to sustainable farming and providing the community with healthy, delicious fruits and vegetables has never wavered.

Over the years, Green Valley Organics has become more than just a farm; it's a vital part of the local community. The farmers have weathered typhoons, faced economic challenges, and adapted to changing agricultural practices, all while staying true to their organic roots. They've introduced innovative farming techniques, expanded their range of crops, and even opened a charming farm stand where neighbors gather to buy fresh produce and exchange stories. Today, Green Valley Organics stands as a testament to the power of family, tradition, and a deep respect for the land, continuing to nourish both the soil and the community for generations to come.`,
      farm_methods: `At Green Valley Organics, we embrace a holistic approach to farming that honors the land and produces the healthiest crops possible. Our sustainable farming practices begin with carefully planned crop rotations, which naturally enrich the soil and break pest cycles. We rely on nature's own pest control methods, encouraging beneficial insects and birds to keep harmful pests in check. Our fields are nourished using compost created right here on the farm, and we practice water conservation through efficient irrigation systems. By working in harmony with nature, we're able to grow delicious, nutrient-rich produce while preserving the health of our land for future generations.`,
      farm_seasonal_description: `We take pride in offering a diverse range of high-quality products
            that reflect the bounty of each season and the unique
            characteristics of our region. Our seasonal offerings change
            throughout the year, allowing you to enjoy the freshest produce at
            its peak flavor and nutritional value. From crisp Baguio beans to
            juicy strawberries, hearty sweet potatoes to refreshing lettuce,
            we bring nature's calendar to your table. In addition to
            our seasonal selections, we specialize in products that are unique
            to our area and farm. These specialty items showcase the distinct
            terroir of our land and the expertise of our farmers. Whether it's
            our famous Benguet coffee, or rare heirloom vegetable varieties, our specialty products offer a
            taste experience you won't find anywhere else.`,
      farm_seasonal_products: [
        {
          product_name: "Organic Strawberries",
          product_image:
            "https://images.unsplash.com/photo-1713852664654-ab4384de7ffd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "Fresh Lettuce",
          product_image:
            "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/305653945_481621947312274_8776402225737893596_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=2wItuBtV9W0Q7kNvgHZCCzm&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=AX2m2Ywudj95Shc-x_g3DmO&oh=00_AYA-akOznjZcCIK5ztj8Iqd4yzKMdR72rwF_m1CUP_TSyA&oe=6708484A",
        },
        {
          product_name: "Robusta Coffee",
          product_image:
            "https://www.coffeebeans.ph/storage/2023/02/robusta.webp",
        },
      ],
    },
    farm_image:
      "https://d1k571r5p7i4n1.cloudfront.net/c.7465/large/strawberry-farm.webp",
    farm_location: "La Trinidad, Benguet",
    farm_email: "greenvalleyorganics@gmail.com",
    farm_phone: "09432456789",
    farm_social_media: "@GreenValleyOrg",
  },
  {
    id: "hillside-livestock",
    farm_name: "Hillside Livestock Farm",
    farm_details: {
      farm_story: `Hillside Livestock Farm emerged from a dream and a dedication to sustainable farming in the picturesque mountains of La Trinidad, Benguet, Philippines. In 2010, Juan and Maria Santos, inspired by the rich agricultural heritage of the Cordilleras, acquired a modest 10-hectare plot overlooking the valley. They named it Hillside Livestock Farm, drawing inspiration from its location and their vision for ethical animal husbandry. From the beginning, they committed to combining traditional Filipino farming wisdom with modern sustainable practices, believing in nurturing both the land and their livestock.

The journey wasn't without challenges. In the early years, the Santos family faced skepticism from neighboring conventional farmers and struggled with adapting their methods to the unique terrain and climate of Benguet. However, their perseverance paid off. By integrating diverse livestock, practicing sustainable feed production, and embracing Filipino farming traditions, they gradually developed a thriving farm ecosystem. The farm's biodiversity flourished, attracting native wildlife and preserving local plant species. As their connection to the land deepened, so did their resolve to farm in harmony with nature and Filipino cultural values.

Today, Hillside Livestock Farm stands as a beacon of sustainable agriculture in the region, showcasing the potential of Filipino farms. The farm produces a range of high-quality livestock products, including fresh eggs, tender chicken, succulent pork, and traditional preserved pork delicacies. Their free-range eggs and native pig lechon have gained a loyal following at local markets and restaurants in Baguio City and beyond. The Santos family regularly hosts workshops and farm tours, sharing their knowledge and inspiring a new generation of Filipino farmers to embrace sustainable practices. As they look to the future, Juan and Maria remain committed to their original vision: producing nutritious, culturally significant food while being stewards of the land, ensuring that Hillside Livestock Farm continues to contribute to the rich tapestry of Philippine agriculture.`,
      farm_methods: `At Hillside Livestock Farm, we employ a holistic approach to farming that prioritizes animal welfare, environmental sustainability, and the preservation of Filipino farming traditions. Our methods focus on practices that work together to create a sustainable, productive farm that continuously improves soil health and supports biodiversity in our unique Benguet setting.

Free-range animal husbandry is a cornerstone of our approach. We allow our chickens and pigs to roam freely in designated areas, ensuring they have access to fresh air, sunlight, and natural behaviors. This practice not only improves the quality of our products but also contributes to the overall health of our farm ecosystem.

Our feed production is another key strategy. We grow a significant portion of our animal feed on the farm, including indigenous crop varieties. This reduces our reliance on external inputs and ensures the quality and sustainability of our livestock's diet.

We also implement agroforestry techniques, planting native trees and shrubs alongside our pastures. This practice prevents soil erosion on our hillside location, provides shade for our animals, and supports local biodiversity.

Waste management plays a crucial role in our farm ecosystem. We use a biogas digester to convert animal waste into energy, powering parts of our farm operations. The resulting organic fertilizer is then used to enrich our pastures and feed crops, creating a closed-loop system that minimizes waste and maximizes resources.`,
      farm_seasonal_description: `Hillside Livestock Farm offers a diverse range of seasonal products that showcase the best of Filipino livestock farming. Our offerings reflect the rich culinary traditions of the Philippines while adhering to sustainable and ethical farming practices. From fresh chicken and eggs to high-quality pork and preserved pork delicacies, our farm provides a wide selection of products that cater to both traditional Filipino tastes and modern health-conscious consumers. Whether you're looking for ingredients for your daily meals or preparing for a special Filipino feast, Hillside Livestock Farm has something to offer everyone.`,
      farm_seasonal_products: [
        {
          product_name: "Farm Fresh Eggs",
          product_image:
            "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "High-Quality Pork",
          product_image:
            "https://www.meatpoultry.com/ext/resources/2022/12/21/Packaged_pork_products_adobe.jpg?height=667&t=1671643186&width=1080",
        },
        {
          product_name: "Etag",
          product_image:
            "https://pinoyreads.com/wp-content/uploads/2017/03/etag1.jpg",
        },
      ],
    },
    farm_image:
      "https://m.efeedlink.com/CPS/images/2024/July/2024070220195025942207.jpg",
    farm_location: "Hillside Livestock Farm, La Trinidad, Benguet, Philippines",
    farm_email: "hillsidelivestock@example.com",
    farm_phone: "+63 9412456787",
    farm_social_media: "@HillsideLivestockFarm",
  },
  {
    id: "wildflower-meadows",
    farm_name: "Wildflower Meadows",
    farm_details: {
      farm_story: `Located in La Trinidad, Benguet, Wildflower Meadows has blossomed into a sanctuary of nature’s harmony. Founded in 2005, the journey began with a simple vision: to cultivate the sweetest organic honey and the most beautiful wildflowers, all while nurturing and preserving the natural ecosystem. Over the years, the founders combined traditional wisdom with innovative sustainable practices, creating a haven for bees and pollinators. Every dawn, a chorus of buzzing bees mingles with the scent of fresh blooms, a testament to the thriving symbiosis between flora and fauna that defines our farm. Each harvest of wildflower honey is a golden reflection of our dedication, a treat that captures the essence of our fields in every drop.

As stewards of the land, Wildflower Meadows prioritizes pollinator conservation and ecological diversity. The farm is more than a place of production; it is a living classroom where visitors learn about the roles of bees in biodiversity and the impact of responsible farming methods. We believe in transparency from the hive to your home, sharing the intricate processes that ensure the purity of our honey and the vibrancy of our wildflowers. Whether strolling through the lavender-laden paths or attending our workshops, every experience at Wildflower Meadows draws people closer to nature’s wonders, inspiring an appreciation for our shared environment.`,
      farm_methods: `At Wildflower Meadows, the art of farming is deeply intertwined with sustainable practices that respect and nurture the environment. The focus on sustainable beekeeping is at the heart of their operations, ensuring that bee populations thrive in harmony with the surrounding ecosystem. The farm is a sanctuary for various pollinators, carefully implementing strategies to support their vital role in biodiversity. Alongside this, Wildflower Meadows excels in wildflower cultivation, aiming to create a vibrant, diverse palette of flora that supports both bees and the land. The integration of these methods reflects a commitment to fostering a balance between agricultural activities and ecological preservation, making Wildflower Meadows a leader in pollinator conservation and a beacon of responsible land stewardship.`,
      farm_seasonal_description: `Wildflower Meadows offers a range of products sourced from bees, including beeswax, honey, and fermented honey. Our farm offers a diverse selection of products that reflect the seasonal changes and the unique qualities of our land. Whether you're looking for a delicate, fragrant honey or cure for your coughs and colds, Wildflower Meadows has something to offer everyone.`,
      farm_seasonal_products: [
        {
          product_name: "Pure Honey",
          product_image:
            "https://ph-live-01.slatic.net/p/6d0a68d582bbfea45cb5388e29dfce14.jpg",
        },
        {
          product_name: "Beeswax",
          product_image:
            "https://cdn2.stylecraze.com/wp-content/uploads/2023/02/Fresh-beeswax-for-hair-on-the-table.jpg.avif",
        },
        {
          product_name: "Fermented Honey",
          product_image:
            "https://thedomesticlifestylist.com/wp-content/uploads/2022/11/fermented-garlic-in-spoon.jpg",
        },
      ],
    },
    farm_image: "https://files.agriculture.com.ph/2023/09/7-1-400x300.jpg",
    farm_location: "La Trinidad, Benguet",
    farm_email: "wildflowermeadows@gmail.com",
    farm_phone: "09123456789",
    farm_social_media: "@WildflowerMeadowsFarm",
  },
];
