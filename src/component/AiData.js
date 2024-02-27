// import React from 'react';
import {
    ReactImg, W3, javat, Tuto, Geek, Boot, Road, Font, btn, Icons, Bard, GPT, Gravity, Runway,
    Uber, eklipse, Opus, Canva, Invideo, Clip, Text, Rapid, Rapid2, Bing, Remaker, pikso,
    Musicfy, decohere, flixier, short, Tensor, coschedule, Pictory, simplified, writesonic,
    tuberanker, thumbnail, metavoice, lexica, Mubert, Leonardo,Bg,pfpmaker,heygen,pix, firefly,Luma,Topaz,PDF24,Gling
} from './imageImports';

const AiData = [
    {
        url: 'https://react.dev',
        imageUrl: ReactImg,
        title: 'React Js',
        category: 'Development',
        description: 'Your go-to hub for React – featuring documentation, tutorials, and updates on all things React.'
    },   
    {
        url: 'https://www.w3schools.com/',
        imageUrl: W3,
        title: 'W3schools',
        category: 'Development',
        description: 'Your ultimate web development resource. Learn HTML, CSS, JavaScript, and more with tutorials and examples.'
    },
    {
        url: 'https://www.javatpoint.com/', 
        imageUrl: javat,
        title: 'Javat point',
        category: 'Development',
        description: "Premier Java tutorials hub. Master programming with concise guides and examples."
    },
    {
        url: 'https://www.tutorialspoint.com/',
        imageUrl: Tuto,
        title: 'Tutorials Point',
        category: 'Development',
        description: "Your go-to destination for comprehensive programming tutorials. Learn coding languages, frameworks, and tools efficiently."
    },
    {
        url: 'https://www.geeksforgeeks.org/',
        imageUrl: Geek,
        title: 'Geeksforgeeks',
        category: 'Development',
        description: " Master algorithms, programming languages, and interview preparation with our comprehensive tutorials and articles."
    },
    {

        url: 'https://getbootstrap.com/',
        imageUrl: Boot,
        title: 'Bootstrap',
        category: 'Development',
        description: "Simplify web development with Bootstrap. Quickly create responsive and stylish websites using its powerful CSS framework."
    },
    {
        url: 'https://roadmap.sh/',
        imageUrl: Road,
        title: 'Roadmap',
        category: 'Development',
        description: "A roadmap is a visualization of a strategic plan"
    },
    {
        url: 'https://fontawesome.com/',
        imageUrl: Font,
        title: 'Font Awesome',
        category: 'Development',
        description: 'Access a vast library of icons for your projects with ease using FontAwesome.'
    },
    {
        url: 'https://www.clickminded.com/button-generator/',
        imageUrl: btn,
        title: 'Button Generator',
        category: 'Development',
        description: "Button Generator"
    },
    {
        url: 'https://iconscout.com/unicons',
        imageUrl: Icons,
        title: 'Icon Scout | Icon Generator',
        category: 'Development',
        description: "Discover a treasure trove of icons and illustrations for your design projects with Iconscout."
    },
    {
        url: 'https://bard.google.com/chat', imageUrl: Bard,
        title: 'Bard',
        category: 'AI',
        description: 'Explore a new way of creating and sharing stories with Google Bard, a collaborative storytelling platform.'
    },
    {
        url: 'https://chat.openai.com/', imageUrl: GPT,
        title: 'ChatGPT',
        category: 'AI',
        description: 'Enhance your conversations and productivity with ChatGPT, an AI-powered language model for text-based interactions.'
    },
    {
        url: 'https://gravitywrite.com/',
        imageUrl: Gravity,
        title: 'Gravity',
        category: 'AI',
        description: "Experience the power of AI in writing with GravityWrite, a platform that assists and enhances your writing process."
    },
    {
        url: 'https://app.runwayml.com/',
        imageUrl: Runway, 
        title: 'Runway',
        category: 'AI',
        description: 'An AI platform transforming text into stunning images and videos, revolutionizing digital storytelling and content creation.'
    },
    {
        url: 'https://app.uberduck.ai',
        imageUrl: Uber,
        title: 'UberDuck',
        category: 'AI',
        description: 'Burning In The Shadows, Generate speech, singing, and rapping from text. Write code for text to speech, text to singing, text to rapping, and voice'
    },
    {
        url: 'https://eklipse.gg/',
        imageUrl: eklipse,
        title: 'Eklipse',
        category: 'Video Editor',
        description: 'Eklipse is an advanced AI tool that automatically generates highlights from your Kick Twitch, YouTube, and Facebook streams and videos.'
    },
    {
        url: 'https://www.opus.pro/',
        imageUrl: Opus,
        title: 'Opus Clip',
        category: 'Video Editor',
        description: 'Opus Clip turns long videos into high-quality viral clips for you to share on TikTok, YouTube Shorts, and Reels to increase social media reach.'
    },
    {
        url: 'https://bing.com/create',
        imageUrl: Bing,
        title: 'Bing Image Creator',
        category: 'Image Generator',
        description: 'Unleash your creativity and design skills with Bing.com/Create, a platform for creating visually stunning content.'
    },
    {
        url: 'https://canva.com/',
        imageUrl: Canva,
        title: 'Canva',
        category: 'Video Editor',
        description: 'Canva: Your creative toolkit. Design anything with ease using Canva intuitive platform and vast library'
    },
    {
        url: 'https://invideo.io/',
        imageUrl: Invideo,
        title: 'Invideo',
        category: 'Video Editor',
        description: 'InVideo: Your video creation platform. Produce stunning videos effortlessly with InVideos intuitive tools.'
    },
    {
        url: 'https://clipchamp.com/en/',
        imageUrl: Clip,
        title: 'ClipChamp',
        category: 'Video Editor',
        description: 'Clipchamp: Your video editing solution. Create professional videos quickly and easily with Clipchamp.'
    },
    {
        url: 'https://wideo.co/text-to-speech/',
        imageUrl: Text,
        title: 'Text To Speech',
        category: 'AI',
        description: 'Wideo.co/Text-to-Speech: Convert text to speech seamlessly. Transform text into audio with Wideo tool'
    },
    {
        url: 'https://rapidtags.io/generator',
        imageUrl: Rapid,
        title: 'Tags Generator, RapidTags , Youtube',
        category: 'Youtube Tools',
        description: 'Rapidtags.io/Generator: Optimize your content. Generate tags quickly and efficiently with Rapidtags.'
    },
    {
        url: 'https://rapidtags.org/',
        imageUrl: Rapid2,
        title: 'Hashtags Generator, RapidTags , Youtube',
        category: 'Youtube Tools',
        description: 'Rapidtags.org: Maximize your reach. Access powerful tag generation tools for boosting content visibility.'
    },
    {
        url: 'https://remaker.ai/',
        imageUrl: Remaker,
        title: 'Faceswapers',
        category: 'Image Generator',
        description: 'It is a Face Swapper Ai technology'
    },
    {
        url: 'https://freepik.com/pikaso#',
        imageUrl: pikso,
        title: 'Text to Image',
        category: 'AI',
        description: 'Freepik.com/Pikaso#: Your design companion. Access high-quality graphics and illustrations on Freepik.'
    },
    {
        url: 'https://create.musicfy.lol/',
        imageUrl: Musicfy,
        title: 'Music Generator',
        category: 'AI',
        description: 'Create.musicfy.lol: Your music creation platform. Dive into music production with Create.musicfy.lol.'
    },
    {
        url: 'https://decohere.ai/',
        imageUrl: decohere,
        title: 'Decohere',
        category: 'Video Editor',
        description: 'Decoherence is the easiest way to create videos with AI by using text prompts and music. We enable creators to quickly generate music videos'
    },
    {
        url: 'https://editor.flixier.com/',
        imageUrl: flixier,
        title: 'Flixier',
        category: 'Video Editor',
        description: 'Flixier Combines a Powerful Interface with Ready-Made Drag and Drop beautiful media assets. Enjoy Our Browser Based Video Editor any device and create beautiful videos that get views.'
    },
    {
        url: 'https://app.2short.ai/',
        imageUrl: short, 
        title: '2Short', 
        category: 'Video Editor',
        description: 'Ready to create Shorts in seconds? Start by pasting your YouTube video link below. YouTube video link.'
    },
    {
        url: 'https://tensor.art/',
        imageUrl: Tensor,
        title: 'Tensor',
        category: 'AI',
        description: 'AI model sharing platform, online run models to generate image for free. Your can upload or download models, include Checkpoint, Embedding'
    },
    {
        url: 'https://coschedule.com/ai-youtube-title-generator',
        imageUrl: coschedule,
        title: 'CoSchedule, Youtube',
        category: 'Youtube Tools',
        description: 'Engaging Title Generator For Youtube Videos'
    },
    {
        url: 'https://pictory.ai/',
        imageUrl: Pictory,
        title: 'Pictory Ai',
        category: 'Video Editor',
        description: 'From Text To Video, Grow Your Youtube Channel Wit Victory'
    },
    {
        url: 'https://simplified.com/ai-writer/youtube-video-title-generator',
        imageUrl: simplified, 
        title: 'Simplified, Youtube',
        category: 'Youtube Tools',
        description: 'Generate Unique, Mistake-free YouTube Video Titles Copy. Guarantee mistake-free copy with the AI Writer and Grammarly Integration.'
    },
    {
        url: 'https://writesonic.com/',
        imageUrl: writesonic,
        title: 'Writesonic, Youtube',
        category: 'Youtube Tools',
        description: 'Writesonic is an AI writer that creates SEO-friendly content for blogs, Facebook ads, Google ads, and Shopify for free.'
    },
    {
        url: 'https://tuberanker.com/',
        imageUrl: tuberanker,
        title: 'Tuber Ranker , Youtube',
        category: 'Youtube Tools',
        description: 'Explore TubeRanker Powerful YouTube SEO Tool. TubeRanker offers a collection of tools to audit your channel for obvious issues, research keywords'
    },
    {
        url: 'https://thumbnail.ai/',
        imageUrl: thumbnail,
        title: 'Thumbnail Ai , Youtube',
        category: 'Youtube Tools',
        description: 'With a thumbnail generator like Thumbnail AI, you can easily edit, customize, and enhance your thumbnails to make them stand out from the crowd. '
    },
    {
        url: 'https://themetavoice.xyz/',
        imageUrl: metavoice,
        title: 'Thumbnail Ai',
        category: 'AI',
        description: 'MetaVoice uses AI to change voice identity in real-time while preserving human emotion. Preserve your privacy, speak with confidence'
    },
    {
        url: 'https://lexica.art/',
        imageUrl: lexica,
        title: 'Lexica',
        category: 'Image Generator',
        description: 'a website that acts as a search engine and art gallery for artwork created with Stable Diffusion models'
    },
    {
        url: 'https://mubert.com/',
        imageUrl: Mubert,
        title: 'Mubert',
        category: 'AI',
        description: 'Mubert instantly generates tracks perfectly tailored to your content on any platform. Royalty-free background music for YouTube, TikTok, podcasts and video!'
    },
    {
        url: 'https://leonardo.ai/',
        imageUrl: Leonardo,
        title: 'Leonardo',
        category: 'Image Generator',
        description: 'Transform your projects with our AI image generator. Generate high-quality, AI generated images with unparalleled speed'
    },
    {
        url: 'https://leonardo.ai/',
        imageUrl: Bg,
        title: 'Bg Remover',
        category: 'Image Generator',
        description: "Remove image backgrounds automatically in 5 seconds with just one click. Don't spend hours manually picking pixels."
    },
    {
        url: 'https://leonardo.ai/',
        imageUrl: pfpmaker,
        title: 'PfP Maker ',
        category: 'Image Generator',
        description: "Instantly get hundreds of beautiful designs. Create perfect profile pictures for all your social media profiles. Customize and download for free."
    },
    {
        url: 'https://www.heygen.com/',
        imageUrl: heygen,
        title: 'Heygen Ai ',
        category: 'Video Editor',
        description: "Elevate Your Avatar For Any Occasion With A Wide Range Of Customizable Clothing Options. Unleash your creativity with HeyGen"
    },
    {
        url: 'https://app.pixverse.ai/creative/list',
        imageUrl: pix,
        title: 'PixVerse Ai ',
        category: 'Image Generator',
        description: "Elevate Your Avatar For Any Occasion With A Wide Range Of Customizable Clothing Options. Unleash your creativity with HeyGen"
    },
    {
        url: 'https://firefly.adobe.com/',
        imageUrl: firefly,
        title: 'Adobe Firefly',
        category: 'Image Generator',
        description: "Adobe Firefly, a product of Adobe Creative Cloud, is a generative machine learning model that is used in the field of design. It is in the public beta test phase. Adobe Firefly is developed using Adobe's Sensei platform."
    },
    {
        url: 'https://lumalabs.ai/',
        imageUrl: Luma,
        title: 'Luma Ai',
        category: 'Image Generator',
        description: "Create a Realistic 3D captures"
    },
    {
        url: 'https://www.topazlabs.com/',
        imageUrl: Topaz,
        title: 'TopazLabs',
        category: 'Image Generator',
        description: "Improve Image Quality"
    },
    {
        url: 'https://tools.pdf24.org/en/',
        imageUrl: PDF24,
        title: 'PDF24 Tools',
        category: 'Image Generator',
        description: "Free online PDF tools to merge, compress, create, edit and convert PDFs. Quick and Easy. Without installation. Without registration."
    },
    {
        url: 'https://www.gling.ai/',
        imageUrl: Gling,
        title: 'Gling',
        category: 'Youtube Tools',
        description: "AI-powered video editing for YouTubers. We automatically cut out silences and bad takes so you have time for the fun creative stuff."
    },


];
export default AiData;  
