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
      farm_story: `Nestled in the rolling hills of Greenville, Green Valley Organics has been a labor of love for the Johnson family since 1950. What started as a small plot of land and a dream has blossomed into a thriving organic farm, passing down through three generations. Each day, as the sun rises over the misty fields, the Johnsons continue their commitment to cultivating the finest organic produce, just as their grandparents did. Their journey hasn't always been easy, but their dedication to sustainable farming and providing the community with healthy, delicious fruits and vegetables has never wavered.

Over the years, Green Valley Organics has become more than just a farm; it's a vital part of the local community. The Johnsons have weathered droughts, faced economic challenges, and adapted to changing agricultural practices, all while staying true to their organic roots. They've introduced innovative farming techniques, expanded their range of crops, and even opened a charming farm stand where neighbors gather to buy fresh produce and exchange stories. Today, Green Valley Organics stands as a testament to the power of family, tradition, and a deep respect for the land, continuing to nourish both the soil and the community for generations to come.`,
      farm_methods: `At Green Valley Organics, we embrace a holistic approach to farming that honors the land and produces the healthiest crops possible. Our sustainable farming practices begin with carefully planned crop rotations, which naturally enrich the soil and break pest cycles. We rely on nature's own pest control methods, encouraging beneficial insects and birds to keep harmful pests in check. Our fields are nourished using compost created right here on the farm, and we practice water conservation through efficient irrigation systems. By working in harmony with nature, we're able to grow delicious, nutrient-rich produce while preserving the health of our land for future generations.`,
      farm_seasonal_description: `We take pride in offering a diverse range of high-quality products
            that reflect the bounty of each season and the unique
            characteristics of our region. Our seasonal offerings change
            throughout the year, allowing you to enjoy the freshest produce at
            its peak flavor and nutritional value. From crisp spring greens to
            juicy summer berries, hearty autumn squashes to warming winter root
            vegetables, we bring nature's calendar to your table. In addition to
            our seasonal selections, we specialize in products that are unique
            to our area and farm. These specialty items showcase the distinct
            terroir of our land and the expertise of our farmers. Whether it's
            our award-winning artisanal cheeses, hand-pressed olive oils, or
            rare heirloom vegetable varieties, our specialty products offer a
            taste experience you won't find anywhere else.`,
      farm_seasonal_products: [
        {
          product_name: "Organic Strawberries",
          product_image:
            "https://images.unsplash.com/photo-1713852664654-ab4384de7ffd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "Heirloom Tomatoes",
          product_image:
            "https://images.unsplash.com/photo-1567375698463-b8dabb1319cf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "Fresh Salad Greens",
          product_image:
            "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    farm_image:
      "https://plus.unsplash.com/premium_photo-1674624682232-c9ced5360a2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farm_location: "123 Rural Road, Greenville, CA 95000",
    farm_email: "greenvalleyorganics@gmail.com",
    farm_phone: "(555) 555-5555",
    farm_social_media: "@GreenValleyOrg",
  },
  {
    id: "sunrise-acres",
    farm_name: "Sunrise Acres",
    farm_details: {
      farm_story: `Sunrise Acres emerged from a dream and a dedication to the land. In 2010, John and Maria Thompson, armed with passion and a vision for sustainable farming, acquired a modest 50-acre plot. They named it Sunrise Acres, inspired by the breathtaking dawn views over their fields. From day one, they committed to regenerative agriculture, believing in nurturing the soil as much as their crops. Through years of hard work, learning, and adaptation, they've transformed the once-tired land into a thriving ecosystem.

The journey wasn't without challenges. In the early years, the Thompsons faced skepticism from neighboring conventional farmers and struggled with the learning curve of implementing regenerative practices. However, their perseverance paid off. By integrating livestock, practicing no-till farming, and embracing companion planting, they gradually revitalized the soil. The farm's biodiversity flourished, attracting beneficial insects and wildlife. As the land healed, so did their connection to it, deepening their resolve to farm in harmony with nature.

Today, Sunrise Acres stands as a beacon of sustainable agriculture in the region. The farm produces a diverse range of organic fruits, vegetables, and ethically raised livestock. Their pasture-raised eggs and grass-fed beef have gained a loyal following at local farmers' markets. The Thompsons regularly host workshops and farm tours, sharing their knowledge and inspiring a new generation of regenerative farmers. As they look to the future, John and Maria remain committed to their original vision: producing nutrient-dense food while being stewards of the land, ensuring that Sunrise Acres continues to greet each new day with promise and abundance.`,
      farm_methods: `At Sunrise Acres, we employ a holistic approach to farming that prioritizes soil health and ecosystem balance. Our methods focus on regenerative practices that work together to create a sustainable, productive farm that continuously improves soil health and biodiversity.

No-till farming is a cornerstone of our approach. We minimize soil disturbance to preserve soil structure, retain moisture, and protect beneficial microorganisms. This practice helps maintain the delicate balance of our soil ecosystem.

Companion planting is another key strategy we use. We strategically pair plants that benefit each other, enhancing growth, pest resistance, and overall crop health. This natural approach reduces the need for chemical interventions and promotes a diverse, resilient farm environment.

Integrated livestock management plays a crucial role in our farm ecosystem. Our animals provide natural fertilization and pest control while contributing to soil health through managed grazing. This symbiotic relationship between plants and animals mirrors natural ecosystems.

We also implement cover cropping to protect and enrich the soil between main crop rotations. This practice prevents erosion, adds organic matter, and supports soil biodiversity. Additionally, we use rotational grazing for our livestock, moving them regularly to fresh pastures. This allows for optimal grass growth and prevents overgrazing, further supporting our soil health goals.
      `,
      farm_seasonal_description: `Sunrise Acres offers a diverse range of seasonal products that are carefully curated to suit different tastes and preferences. From freshly picked fruits to organic vegetables, our farm offers a wide selection of products that reflect the seasonal changes and the unique qualities of our land. Whether you're looking for a delicious, nutritious fruit or a healthy, wholesome vegetable, Sunrise Acres has something to offer everyone.`,
      farm_seasonal_products: [
        {
          product_name: "Pasture-Raised Eggs",
          product_image:
            "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "Grass-Fed Beef",
          product_image:
            "https://images.unsplash.com/photo-1606677661991-446cea8ee182?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "High-Quality Pork",
          product_image:
            "https://plus.unsplash.com/premium_photo-1682129530933-0b33e801bdd9?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    farm_image:
      "https://images.unsplash.com/photo-1601671397510-30dbfaa431db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farm_location: "456 Sunrise Lane, Sunnydale, OR 97000",
    farm_email: "sunriseacres@gmail.com",
    farm_phone: "+1 (555) 555-5555",
    farm_social_media: "@SunriseAcresFarm",
  },
  {
    id: "wildflower-meadows",
    farm_name: "Wildflower Meadows",
    farm_details: {
      farm_story: `Founded in 2005 amidst the vibrant landscape of Flowertown, Wildflower Meadows has blossomed into a sanctuary of nature’s harmony. The journey began with a simple vision: to cultivate the sweetest organic honey and the most beautiful wildflowers, all while nurturing and preserving the natural ecosystem. Over the years, the founders combined traditional wisdom with innovative sustainable practices, creating a haven for bees and pollinators. Every dawn, a chorus of buzzing bees mingles with the scent of fresh blooms, a testament to the thriving symbiosis between flora and fauna that defines our farm. Each harvest of wildflower honey is a golden reflection of our dedication, a treat that captures the essence of our fields in every drop.

As stewards of the land, Wildflower Meadows prioritizes pollinator conservation and ecological diversity. The farm is more than a place of production; it is a living classroom where visitors learn about the roles of bees in biodiversity and the impact of responsible farming methods. We believe in transparency from the hive to your home, sharing the intricate processes that ensure the purity of our honey and the vibrancy of our wildflowers. Whether strolling through the lavender-laden paths or attending our workshops, every experience at Wildflower Meadows draws people closer to nature’s wonders, inspiring an appreciation for our shared environment.`,
      farm_methods: `At Wildflower Meadows, the art of farming is deeply intertwined with sustainable practices that respect and nurture the environment. The focus on sustainable beekeeping is at the heart of their operations, ensuring that bee populations thrive in harmony with the surrounding ecosystem. The farm is a sanctuary for various pollinators, carefully implementing strategies to support their vital role in biodiversity. Alongside this, Wildflower Meadows excels in wildflower cultivation, aiming to create a vibrant, diverse palette of flora that supports both bees and the land. The integration of these methods reflects a commitment to fostering a balance between agricultural activities and ecological preservation, making Wildflower Meadows a leader in pollinator conservation and a beacon of responsible land stewardship.`,
      farm_seasonal_description: `Wildflower Meadows offers a wide range of seasonal products that are carefully curated to suit different tastes and preferences. From freshly picked wildflowers to honey-infused candles, our farm offers a diverse selection of products that reflect the seasonal changes and the unique qualities of our land. Whether you're looking for a delicate, fragrant honey or a vibrant, blooming bouquet, Wildflower Meadows has something to offer everyone.`,
      farm_seasonal_products: [
        {
          product_name: "Wildflower Honey",
          product_image:
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "Beeswax Candles",
          product_image:
            "https://plus.unsplash.com/premium_photo-1681412205355-93299347bc2e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          product_name: "Organic Lavender Oil",
          product_image:
            "https://images.unsplash.com/photo-1623826538391-4e066d422976?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    farm_image:
      "https://plus.unsplash.com/premium_photo-1683140477459-edcb5eecba80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farm_location: "789 Bee Lane, Flowertown, WA 98000",
    farm_email: "wildflowermeadows@gmail.com",
    farm_phone: "+1 (555) 555-5555",
    farm_social_media: "@WildflowerMeadowsFarm",
  },
];
