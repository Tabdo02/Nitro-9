import {
    facebookOff,
    twitterOff,
    instagramOff,
    skypeOff,
    whatsAppOff,
    linkedInOff,
    brandG,codingG,seoG,
    pcG,
    mobileCodingG,
    s1G,
    img1,
    img2,
    img3,
    img4,
    tw4x,
    hi4x,
    fm4x,
    b1,
    b14,
    b13,
    twitter,
    facebook,
    instagram,
    skype,
    whatsApp,
    linkedIn,
    porsche,
    smart,
    cadillac,
    bentley,
    jeep,
    kia,
    tesla,
    ford,
    dodge,
    ferrari,
    uxG,
    interactionG,
    codingLanguageG,
    documentG,
    groupG,
    tm1,
    tm2,
    tm3,
    tm4,
    tm5,
    tm6,
    bp1,
    bp2,
    bp3,
    bp4,
    hp1,
    hp2,
} from '../assets/'

export const navbarItems=[
    {
        id:0,
        title:'Home',
        url:'/'
    },
    {
        id:1,
        title:'Services',
        url:'/service'
    },
    {
        id:2,
        title:'Work',
        url:'/work'
    },
    {
        id:3,
        title:'About Us',
        url:'/about'
    },
    {
        id:4,
        title:'Contact',
        url:'/contact'
    },
    {
        id:5,
        title:'Blogs',
        url:'/blog'
    },

    
];

export const navbarSocials=[facebook,twitter,instagram,skype,whatsApp,linkedIn];
export const shareSocials=[facebook,instagram,linkedIn,twitter];

export const phonsNumbers=['+000 111 222 3333','+444 555 666 7777'];
export const phonsNumbers2=['+880 130 3478 950','+880 177 5963 777'];

export const footerItems=[
    {
        id:0,
        title:'Pages',
        items:[
            {
                id:0,
                url:'/',
                title:'Home'
            },
            {
                id:1,
                url:'/service',
                title:'Service'
            },
            {
                id:2,
                url:'/',
                title:'Case Study'
            },
            {
                id:3,
                url:'/about',
                title:'About Us'
            },
            {
                id:4,
                url:'/blog',
                title:'Blog'
            },
            {
                id:5,
                url:'/contact',
                title:'Contact'
            }
        ],
    },
    {
        id:1,
        title:'Admin',
        items:[
            
            {
                id:0,
                url:'/notFound',
                title:'404'
            },
            {
                id:1,
                url:'#',
                title:'login'
            },
            {
                id:2,
                url:'#',
                title:'Licenses'
            },
            {
                id:3,
                url:'#',
                title:'Instructions'
            },
            {
                id:4,
                url:'#',
                title:'Styleguide'
            },
            {
                id:5,
                url:'#',
                title:'Changelog'
            },
            {
                id:6,
                url:'#',
                title:'More Templates'
            },
        ],
    }
];
export const footerSocials=[facebookOff,twitterOff,instagramOff,skypeOff,whatsAppOff,linkedInOff];

export const services=[
    {
        id:0,
        icon:s1G,
        title:'UI/UX',
        subtitle:'Creating user centered design for web/app interfaces.',
        w:42,
        h:42,
    },
    {
        id:1,
        icon:brandG,
        title:'Brand Identity',
        subtitle:'We specialize in providing comprehensive brand identity services to businesses of all sizes. ',
        w:60,
        h:60,
    },
    {
        id:2,
        icon:seoG,
        title:'SEO',
        subtitle:'We provide excellent Search Engine Optimization (SEO)so you can capture more traffic and revenue',
        w:40,
        h:40,
    },
    {
        id:3,
        icon:pcG,
        title:'Web Design',
        subtitle:'Crafting web design that not only works but looks good.',
        w:45,
        h:45,
    },
    {
        id:4,
        icon:codingG,
        title:'Web Development',
        subtitle:'Developing those beautifully designed websites effciently and fast!',
        w:47,
        h:45,
    },
    {
        id:5,
        icon:mobileCodingG,
        title:'App Development',
        subtitle:'We build apps that add value to your business, and boost your efficiency through cutting edge technologies',
        w:29,
        h:50,
    },
];

export const works =[
    {
        id:0,
        title:'XoolTech',
        subtitle:'We partnered with Rainfall’s amazing team to create a website that tells their unique story and reflects on their values.',
        img:img1,
        tags:['brand identity','Web Design'],
    },
    {
        id:1,
        title:'Flinkerk',
        subtitle:'Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable...',
        img:img2,
        tags:['Web Design'],
    },
    {
        id:2,
        title:'Alberto Maya',
        subtitle:'Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable...',
        img:img3,
        tags:['Design','Web development'],
    },
    {
        id:3,
        title:'Flickerd',
        subtitle:'Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable...',
        img:img4,
        tags:['Graphic Design'],
    },
];

export const  timeline =[
    {
        id:0,
        title:'Discovery',
        subtitle:'Before starting anything, we work with the client to collect detailed information about the business, digital product, its users and explore every aspect of the project.'
    },
    {
        id:1,
        title:'Scope',
        subtitle:'The steps included in a UX audit will vary depending on the time and budget allotted to the project. '
    },
    {
        id:2,
        title:'Web Structure',
        sptitle:['Web','Structure'],
        subtitle:'Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes along the way.'
    },
    {
        id:3,
        title:'Design Concept to Layout Design',
        sptitle:['Design Concept','to Layout Design'],
        subtitle:'Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes along the way.'
    },
    {
        id:4,
        title:'Visual design',
        subtitle:'Now we focus on the interface of the website keeping visual brand in mind. Typography, iconography, brand color, photography style and art direction will make sure the website looks consistent and visually gorgeous.'
    },
    {
        id:5,
        title:'Site Development',
        sptitle:['Site','Development'],
        subtitle:'With designs being approved, its time to take those pages and start developing. We mostly start with frond-end (HTML, CSS) then we go through the back-end and so on.'
    },
    {
        id:6,
        title:'Site Testing',
        subtitle:'Before lunching the site, it will be placed on a internal server where only internal user and anyone who we share the link with can view it. The site testing is cruicial as there will inevitably be issues that need to be addressed before the site goes live. '
    },
    {
        id:7,
        title:'Site Launch',
        subtitle:'The big day is here! We’ve tested the site, approved by stakeholders and we’re ready to launch. Launching the site is just a start,  we should be prepared for feedback from users to make immediate changes and adjustments. '
    },
    {
        id:8,
        title:'Site Maintenance',
        subtitle:'Dynamic websites are living, breathing entities that need constant care and maintenance. Updating contents, making changes to the backends and fixing broken links and the list goes on,  are all in a day’s work. All of these phases are cruicial to the Web design process.'
    },
];

export const testimonials =[
    {
        id:0,
        name:'Theresa Webb',
        info:'Marketing Coordinator',
        img:tw4x,
        comment:'The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals.'
    },
    {
        id:1,
        name:'Floyd Miles',
        info:'IT Analyst',
        img:fm4x,
        comment:'The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals.'
    },
    {
        id:2,
        name:'Henry Itondo',
        info:'Co-founder of Source DS',
        img:hi4x,
        comment:'The visual guide will provide a view to the customer of what their website or project will end up looking like. It ensures that they are kept up to date on any developments and changes made to the structure or visuals.'
    },
];

export const articls =[
    {
        id:0,
        title:'The importance of a strong brand identity',
        subtitle:'This post could discuss the process of developing a brand identity that reflects the values and mission of a business. It could include...',
        img:b14,
        tags:['brand identity','5 Min Read']
    },
    {
        id:1,
        title:'Top 10 UI and UX design mistakes to avoid',
        subtitle:'This post could list and discuss common mistakes that businesses make when it comes to UI and UX design, and provide tips on how...',
        img:b1,
        tags:['UI/UX','5 Min Read']
    },
    {
        id:2,
        title:'The benefits of using a web framework',
        subtitle:'This post could discuss the benefits of using a web framework, such as speeding up the development process or providing a consistent...',
        img:b13,
        tags:['Web Development','5 Min Read']
    },
];

export const logos1 =[porsche,smart,cadillac,bentley,jeep,kia];
export const logos2 =[tesla,jeep,kia,ford,dodge,ferrari];

export const faq=[
    'What type of companies do you work with? Who are your target customers?',
    'How long does it take to successfully complete a website?',
    'Does your web design agency provide only design or web development as well?',
    'Can you work with my existing Marketing team?',
    'Will you be there for me after the website is complete?',
];


// services constants
export const ourServices =['UI/UX','SEO','App Design','Web Design','App Development','Web Development'];
export const capabilities =[
    {
        id:0,
        icon:uxG,
        title:'User Experience',
        list:['Sitemaps','User Persona','User Journey','Wireframes','A/B Testing','Design Systems','Copy Writing/Editing & CTAs'],
        w:33,
        h:44,  
    },
    {
        id:1,
        icon:codingG,
        title:'Development',
        list:['Front-end Development','Back-end Development','Mobile App Development','User Journey','Cyber Security','Support, QA & Maintenance','Search Engine Optimization (SEO)'],
        w:47,
        h:45,
    },
    {
        id:2,
        icon:codingLanguageG,
        title:'Technology',
        list:['Vue.js','Django','Python','ReactJS','Tailwindcss','JavaScript','HTML, CSS'],
        w:50,
        h:48,
    },
    {
        id:3,
        icon:documentG,
        title:'Research',
        list:['UX Audit','SWOT Analysis','User Research','Content Strategy','Product Strategy','Product Research & Analysis',],
        w:37,
        h:44,
    },
    {
        id:4,
        icon:groupG,
        title:'Visual',
        list:['User Interface (UI)','Website Interface','App Interface','Dashboard','Design Systems','Brand Systems',],
        w:48,
        h:48,
    },
    {
        id:5,
        icon:interactionG,
        title:'Interactions',
        list:['User Flow','Clickable Prototypes','UI Animations','Smooth Intuitive Interactions'],
        w:46,
        h:46,
    }
];
export const workProcess =[
    {
        id:0,
        title:'Discovery',
        subtitle:'It all starts with an idea. We will listen to your idea and set goals and objectives for your business. We will then research the market for competitors, identify how we can make an impact, work with you to refine your ideas and present solutions which will help achieve your goals. Transforms those ideas into scope of work.'
    },
    {
        id:1,
        title:'Design',
        subtitle:'We collaborate every step of the way so that you become a part of the process. Together with your input, our designers and developers will create a unique product so that your business grow and thrive.'
    },
    {
        id:2,
        title:'Provide',
        subtitle:'We don’t just offer much good looking designs, we offer what works best for you. Our primary focus is and always will be to help your business grow. We always makes sure to deliver that product that brings revenue to your business.'
    },
    {
        id:3,
        title:'Expand',
        subtitle:'We just launched your site. Things don’t end here. Our clients rely on us to make maintaince, make those few adjustments and make any updates when necessary. We always focus whats best for your business so that it grow.'
    },
];
export const uxTxt =[
    'UX refers to the value that you offer to your users when they are using your product. It primarily depends on enhancing user satisfaction by improving the accessibility, usability and convenience when a user interacts with your product.',
    'A well-executed UX process requires you to follow a user-centric approach and a defined strategy that enables you to develop simple, engaging and intuitive experiences to wow the end-users.',
    'Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.',
    'Here are the UX design Process in 5 Stages :',
];
export const ux =[
    {
        id:0,
        title:'Strategy',
        subtitle:['Before starting anything, we work with the client to find out the brand’s mission and goals. It involves performing a detailed review of competitors’ websites, along with conducting user testing to better understand the larger competitive landscape of the business.'],
    },
    {
        id:1,
        title:'Research',
        subtitle:['Conducting thorough research is the second most integral aspect of the UX design process. Research is primarily done to understand more about the users, their goals, behaviors, motivations, and needs. Good research informs design decisions that will lays the foundation of the entire project and can save a lot of time and money down the road.'],
    },
    {
        id:2,
        title:'Analyze',
        subtitle:['Now its time to analyze the users who are going to use this product. Before starting main design process its important creating user personas, user stories and user journey map to create a strong foundation to design better.'],
    },
    {
        id:3,
        title:'Design',
        subtitle:[
            'The design process is collaborative – that involves input and ideas from various stakeholders and iterative, and validates ideas and assumptions.',
            'We start with sketching -  the easiest and fastest way to visualize our ideas. Then we create wireframes, sitemap, userflow, mockups (low & low) fidelity , images, icons and colors and a whole design system so the product stays consistent throught the process. '
        ],
    },
    {
        id:4,
        title:'Prototype',
        subtitle:[
            'It’s time implement those High fidelity mockups into actions, this is where prototyping comes in. Prototypes concentrate on the feel of the UI/UX product that one is designing. It’s more about the interaction experience. Prototypes give you the effect of a simulator.',
            'Once its approved and we pass everything to the development team who will create a high fidelity version of the user interface into coded prototypes.',
            'During the development, we use user testing (targeted users), beta launch( limited release of the product) and internal testing so that users can test out the product and give & recieve feedback so the the development team updates the products accordingly before it launches.'
        ],
    },
];
export const design=[
    'App Design',
    'Website Design',
    'User Interface Design',
    'User Interface Design'
];
export const web =[
    'Front-end Development',
    'Back-end Development',
    'QA & Maintenance',
    'CMS & CRM',
    'E-Commerce Website',
    'Webflow Website',
    'Wordpress Website',
    'Shopify Website'
];
export const seo =[
    'On-page SEO',
    'Off-page SEO',
    'Technical SEO',
    'Local SEO'
];
export const meet =[
    {
        id:0,
        title:'Yogarasa Gandhi',
        info:'CEO & Director',
        img:tm1,
    },
    {
        id:1,
        title:'Nnenna Jioke',
        info:'COO & Product Manager',
        img:tm2,
    },
    {
        id:2,
        title:'Yogarasa Gandhi',
        info:'Motion Designer',
        img:tm3,
    },
    {
        id:3,
        title:'Yogarasa Gandhi',
        info:'Digital Marketer',
        img:tm4,
    },
    {
        id:4,
        title:'Nnenna Jioke',
        info:'Product Designer',
        img:tm5,
    },
    {
        id:5,
        title:'Yogarasa Gandhi',
        info:'Web Developer',
        img:tm6,
    },
];
export const meetSocials =[
    {
        id:0,
        img:facebookOff,
        alt:'facebook',
    },
    {
        id:1,
        img:instagramOff,
        alt:'instagram',
    },
    {
        id:2,
        img:twitterOff,
        alt:'x',
    },
];
export const policy =[
    {
        id:0,
        title:'Information collection and use',
        sub:['For a better experience while using our website, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.',]
    },
    {
        id:1,
        title:'Log data',
        sub:['We want to inform you that whenever you visit our website, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser version, pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.',]
    },
    {
        id:2,
        title:'Cookies',
        sub:[
            'Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.',
            'Our website uses these “cookies” to collection information and to improve our website. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our website.'
        ]
    },
    {
        id:3,
        title:'Service Providers',
        sub:[
            [
                'To facilitate our Service',
                'To provide the Service on our behalf',
                'To perform Service-related services, or',
                'To assist us in analyzing how our Service is used.'
            ],
            'We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.'
        ]
    },
    {
        id:4,
        title:'Security',
        sub:['We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.',]
    },
    {
        id:5,
        title:'Links to the other site',
        sub:['Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites, get more info. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',]
    },
    {
        id:6,
        title:'Changes to the privacy policy',
        sub:['We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.',]
    },
    {
        id:7,
        title:'Contact us',
        sub:['If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.',]
    },
];
export const aboutUs =['Full Name','Email Address','Company Name','Project Budget (USD)','Please tell us a bit about your project'];

export const allTopics = [
    'User Research','Portfolio Tips','Interview Tips',
    'Website Optimization','Webflow','Design Strategy',
    'Design Systems','UI Design','UX Design',
];
export const otherArticls =[
    {
        id:0,
        title:'Top 10 UI and UX design mistakes to avoid',
        subtitle:'This post could discuss the process of developing a brand identity that reflects the values and mission of a business. It could include...',
        img:bp1,
    },
    {
        id:1,
        title:'The importance of a strong brand identity',
        subtitle:'This post could list and discuss common mistakes that businesses make when it comes to UI and UX design, and provide tips on how...',
        img:bp2,
    },
    {
        id:2,
        title:'The benefits of using a web framework',
        subtitle:'This post could discuss the benefits of using a web framework, such as speeding up the development process or providing a consistent...',
        img:bp3,
    },
    {
        id:3,
        title:'The role of design in business',
        subtitle:'The importance of using storytelling in design and how it can help create a more engaging and memorable user experience.',
        img:bp4,
    },
];

export const post =[hp1,hp2];

export const postTxt='How users engage with the content on your website is crucial to your business. User experience is important because it tries to fulfill the user’s needs. It aims to provide positive experiences that keep a user loyal to your product. Additionally, a meaningful user experience allows you to define customer journeys on your product that are most conducive to business success.';

export const bgtxt1='If you have no idea how to make your business unique, it’s ok, because we don’t either, but we have a method for figuring that out. We are going to collaborate every step of the way to create a unique online identity that stands out from the noise.';
export const designtxt='Designing digital products has been primary focus and a crucial part of our agency. With the business goals in mind we go in-depth to draw user’s attention, presenting your business in a meaniful way to be functional that will generate more leads.';
export const webtxt='Our expert developers solve complex problems on the web. When we hand-over the design assets to them, they make sure the codes are efficient, highly organized and readable. From creating custom websites to using industry-leading platforms such as Webflow, Wordpress and Shopify to build powerful solutions to keep your website fast, secure and seamlessly integrated.';
export const seotxt='SEO allows you to climb the search engine results page rankings by improving on-page and off-page elements of your website that work together to make it more beneficial to your target audience. Higher rankings mean more site traffic and it’s no secret that more site traffic leads to more conversions and revenue over time.';
export const meettxt='We are a small team but a force of nature. We are determined, we work non-stop and build relationships that our clients return to. We enjoy making our client’s businesses a success and go the extra mile to provide a service that creates a memorable experience.';
export const policytxt='This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our website.If you choose to visit our website, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the website. We will not use or share your information with anyone except as described in this Privacy Policy.';