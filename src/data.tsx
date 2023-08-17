import { Blog } from "./types"
import ksflowers from './assets/ks-flowers.jpg'
import bodhi from './assets/bodhi.png'
import laughing from './assets/ks-laughing.jpeg'
import light from './assets/light.jpg'


export const blogs: Blog[] = [
  {
    title: 'Do Nothing.',
    tag: 'Lifestyle',
    tagline: 'the power of doing nothing in times of uncertainty',
    link: 'https://katiesanger.substack.com/p/do-nothing',
    coverImg: ksflowers
  },
  {
    title: 'Lots of feelings + gratitude',
    tag: 'Gratitude', 
    tagline: 'let\'s start the week off right. sharing some insights i\'ve gained this past year.',
    link: 'https://katiesanger.substack.com/p/lots-of-feelings-gratitude',
    coverImg: bodhi
  },
  {
    title: 'We\'re Human',
    tag: 'Motivation',
    tagline: 'and full of magic + potential',
    link: 'https://katiesanger.substack.com/p/were-human',
    coverImg: laughing
  }, 
  {
    title: 'Breaking Open',
    tag: 'Growth',
    tagline: 'the start of something new',
    link: 'https://katiesanger.substack.com/p/breaking-open',
    coverImg: light
  },
]
// export const blogs: Blog[] = [
//   {
//     title: 'Lots of feelings + gratitude',
//     tagline: 'let\'s start the week off right. sharing some insights i\'ve gained this past year.',
//     tag: 'Gratitude', 
//     date: 'June 19, 2023',
//     content: (
//       <article>
//         <p>Hello Little Doves + Happy Monday!</p> 
//         <p>I’ve always loved Mondays. It’s the start of a fresh week - a sort of reset. Something about it symbolically sits right with me. I love taking advantage of the collective, buzzy energy of a Monday. I enjoy the ritualistic nature of setting the rhythm and tone for the week. The moon, my favorite celestial being (and one of the prominent planets in my birth chart) rules over Monday. My daughter was born on a Monday. And now, every Monday I get to dedicate my efforts to this newsletter and spend time with you.</p>
//         <blockquote>
//           <p><em>"I don't have to chase extraordinary moments to find happiness - it's right in front of me if I'm paying attention and practicing gratitude." - Brene Brown</em></p>
//         </blockquote>
//         <p>I've been reflecting lately on the significance of embracing our mental and emotional experiences. Society often ingrains in us the notion that negative emotions, such as sadness, anger, or even feeling down or depressed, signifies that something is inherently wrong with us. Some might even go as far as labeling us as flawed or broken. However, I strongly disagree with this. I believe these emotional states hold immense power and it is our job to be aware of what they are trying to signal to us. It's in these places we can become attuned to repressed emotions, thoughts or feelings. It's in these states we can start to reflect upon where we may be out of alignment with our path and what we are actually wanting or needing out of life. It can show us where we are stagnant and where some type of action needs to be taken. There is meaning and purpose in leaning into the less desirable emotions we feel. See the feelings wheel below and use it as a tool to help you gain more clarity and insight into yourself. <strong>(I need to emphasize that this, of course, is highly subjective for each individual. It is crucial and necessary for this to be considered within appropriate context as my perspective comes with a lot of nuance. Please acknowledge that seeking professional help is <i>necessary</i> for those who chronically suffer. Each person's journey is unique, and what works for one may not apply to another.)</strong></p>
//         <img src={emotionWheel} alt='Emotion and Feeling Wheel from the Junto Institute'/>
//         <p>Tomorrow my daughter is turning one, and I have been emotional as we approach this huge milestone. Watching this little babe of mine grow is so unbelievably bittersweet...</p>
//         {/* <img src={ } alt=''/> */}
//         <p>Reminder: my books open in July! I have three remaining spots available for my monthly therapeutic coaching program. Please reach out if you are interested in learning more or forward this information to someone you think it could potentially help or benefit! Additionally as a gift, I’ll be offering one mini astrological psyche session as well as one day of free email coaching to the first person that reaches out to me!</p>
//         <p>As always, thank you for being here. I hope you are feeling inspired and empowered as you move through your Monday and into the week ahead. And if you aren’t, that’s perfectly ok too. Be with yourself and honor what is happening for you in your life. You deserve your own love and support more than anyone.</p>
//         <p>All my love,</p>
//         <p>Katie</p>
//       </article>
//     ),
//     coverImg: bodhi
//   },
//   {
//     title: 'Do Nothing.',
//     tagline: 'the power of doing nothing in times of uncertainty',
//     tag: 'Lifestyle',
//     date: 'July 5, 2023',
//     content: (
//       <article>
//         <p>What do we do when there isn't clarity?</p>
//         <p>Nothing. We do nothing.</p>
//         <p>I am currently being faced with the uncomfortable feelings of uncertainty and lack of clarity. Whenever I am in this space the instinct is to take action as a means to relieve the pressure I am feeling. Historically, the action I take ends up being from a place of impulsivity and not from a place of alignment (aka clarity). Anytime I am impulsive, it backfires. The wise thing to do in moments like these: slow down and wait… as counter intuitive as it may seem. I am reminding myself to settle into the moment. I am practicing stillness and presence as I wait for the clarity to come. This is not easy. It is very difficult at times, but nonetheless relief does come when I can lean into my experience. The solution to the problem begins when we can embrace the discomfort that is showing up in our lives and not give in to the urge to numb, avoid, or try and get rid of it. The work is to let it be there, acknowledge its existence and allow time and space to work its magic. That doesn't mean we are forced to sit around and do nothing. There are always things that need our attention, yet for some reason we focus on the one thing that is causing us anxiety or discomfort as a means to fix or make it go away. There are plenty of things in my life that I do have clarity on right now so the wise thing to do is focus on those things, and trust that the answers I am seeking will come. Because they always do.</p>
//         <p>Tools that help me when I am in seasons of uncertainty and discomfort:</p>
//         <p><i><strong>Tapping:</strong> I love tapping on the meridian lines. Also known as Emotional Freedom Technique (EFT), it combines elements of traditional Chinese medicine, psychology, and acupressure. It involves tapping on specific points of the body, primarily along meridian lines, while focusing on targeted thoughts, emotions, or issues. It is based on the concept that disruptions in the body's energy system can contribute to emotional and physical distress. By tapping on these energy points and using affirmations or verbal statements the flow of energy can be restored - leading to emotional release and relief from various symptoms. It can help to reduce stress, anxiety, and negative emotions, as well as alleviate any physical symptoms accompanying those emotions. I love utilizing this technique with myself and with my clients.</i></p>
//         <p><i><strong>Yoga:</strong> One of my greatest loves. Yoga is such a transformative practice that has repeatedly saved my life time and time again. By linking breath to movement, it establishes a powerful mind-body connection, bridging the gap between our mental, emotional and physical selves. Yoga takes me out of my head and into my body, grounds me in the present moment, and facilitates that cathartic and juicy release of stuck/stagnant emotions and energy. Even just ten minutes a day leaves me feeling revitalized and open to new spaces within myself.</i></p>
//         <p><i><strong>Walks in Nature:</strong> combining movement + sunshine + nature. Three FREE healing tools. Does it really get any better than that? Research consistently shows the benefits of taking walks in nature for both physical and mental well-being. It reduces stress, enhances overall focus and attention, creates mental well being, and helps foster a sense of connection with the world around us. Not to mention, the physical benefits of walking in nature such as improved blood pressure - or my personal favorite - walking after a meal to aid with digestion!</i></p>
//         <p><i><strong>Self Expression:</strong> Self-expression is crucial for me as I tend to isolate and internalize during times of stress. To release what's been building up, I find different techniques helpful. Journaling is one such outlet, where exercises like brain dumps, "Morning Pages," or writing unsent letters prove to be incredibly cathartic. Engaging in healing conversations through therapy, coaching, or with trusted individuals helps to shift my perspective and navigate difficult emotions. Additionally, right brain activities like painting, drawing, or dancing provides a release from analytical thinking. It also helps to get me more into my emotional centers and into my body. Through any form of self-expression, I am able to break the habit of internalizing thoughts, feelings, and emotions. These powerful tools foster transmutation of pain and stagnancy - reducing suffering and preventing prolonged rumination.</i></p>
//         <p><i><strong>Cleaning my home:</strong> Clearing stuck energy externally is a wonderful way to move energy internally. I have always believed that our external environment mirrors our internal world (to some degree - context is needed). At the very least, they impact one another. If you want to get stuck energy moving start to clean up your external environment. The lovely book "The Life-Changing Magic of Tidying Up" by Marie Kondo emphasizes that decluttering and organizing our living spaces can have profound effects on our mental well-being. It suggests that a clean and tidy environment promotes clarity of mind, reduces stress, and enhances our overall sense of peace and contentment. Next time you're feeling overwhelmed by something or feeling "stuck" start cleaning your room, or organizing a cluttered space. Take note of how you feel during the process and after! At first there may be some resistance, but push through and watch how you start to settle into the process and potentially even enjoy it.</i></p>
//         <p>I hope everyone is having a wonderful week so far. As always, I am here so please reach out if you’re looking for some one on one therapeutic coaching or astrology sessions.</p>
//         <p>All my love,</p>
//         <p>Katie</p>
//       </article>
//     ),
//     coverImg: portrait
//   },
// ]