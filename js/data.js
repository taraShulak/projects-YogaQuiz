let dataArr = [
  {question: 'The word “yoga” is derived from a Sanskrit word meaning what?',
  answer: ['Spirit', 'Union', 'Posture', 'Force'],
  rightAnswer: 'Union',
  note: `”Yoga” literally means union, referring to the union between body and mind.`
},
{question: 'What is not one principle taught in yoga?',
  answer: [ 'Proper exercise', 'Relaxation', 'Force', 'Strength'],
  rightAnswer: 'Proper exercise',
  note: 'Strength is not a principle taught in yoga. The main five are: proper exercise, breathing, relaxation, diet, and meditation.'
},
{question: ' Which country does yoga originate from?',
  answer: ['Bangladesh', 'Thailand', 'India', 'Tybet'],
  rightAnswer: 'India',
  note: 'Yoga comes from ancient India, and is thought to have developed at around the 5th century BCE.  '
},
{question: `There are eight stages of training for a yogi. What is the final stage (apart from ‘moksha’)?`,
  answer: [ 'Samadhi', 'Niyama', 'Pratyahara', 'Yama'],
  rightAnswer: 'Samadhi' ,
  note: 'The final stage of ‘ashtanga,’ a form of yoga, is samadhi. Samadhi focuses on the separation of the practitioner’s mind from their body.'
},
{question: `What does ‘hatha’ mean?`,
  answer: ['Sun and Moon', 'Fire and Water', 'Light and Dark', 'Prana and Breath'],
  rightAnswer: 'Sun and Moon',
  note: `’Hatha’ means Sun and Moon, and refers to the unification of two vastly-different forces.`
},
{question: ' What is chakra?',
  answer: ['Energy center', 'Prayer point', 'Karma', 'Yoga pose'],
  rightAnswer: 'Energy center',
  note: 'Chakra is an energy center, or to be straightforward, it is a focal point of energy.'
},
{question: 'How many chakras are in the human body?',
  answer: [ 'Seven', 'Three', 'Twenty-five', 'Nine'],
  rightAnswer: 'Seven',
  note: 'There are seven chakras in the human body — Muladhara, Svadhishthana, Sahasrara, Ajna, Manipura, Vishuddha, and Anahata.'
},
{question: `What does ‘namaste’ mean?`,
  answer: ['Salutations to you', 'Have a good day', 'Thank you', 'See you later'],
  rightAnswer: 'Salutations to you',
  note: `’Namaste’ literally means ‘salutations to you.’`
},
{question: 'What is a yogi?',
  answer: [' A yoga instructor', 'A yoga learner', 'Bothisattva','The highest title given to a performer of yoga'],
  rightAnswer: ' A yoga instructor' ,
  note: 'Yogi refers to a yoga instructor.'
},
{question: 'There are twenty-six postures that make up Bikram Yoga. Which of these is not one of those postures?',
  answer: ['Cobra Pose', 'Tree Pose', 'Sun Salutation Pose', 'Dog Pose'],
  rightAnswer: 'Sun Salutation Pose',
  note: 'Sun Salutation is not the name of a Bikram Yoga posture. It is, however, a collection of postures.'
},
{question: 'Where is Kundalini located?',
  answer: ['the base of the spine', 'the centre of the brain', 'the centre of the heart', 'the whole body'],
  rightAnswer: 'the base of the spine',
  note: 'Kundalini, which is in Hinduism a form of primal energy, is said to be located at the base of the spine.'
},
{question: ' What is not one way to awaken Kundalini, according to hatha yoga?',
  answer: ['Kumbhaka', 'Mula Bandha', 'Samaveda', 'Breath'],
  rightAnswer: 'Samaveda',
  note: 'Samaveda is not a method of awakening Kundalini. It is, however, the Veda of melodies and chants.'
},
{question: 'What is the system of nerves that connects chakras and is where energy flows through?',
  answer: ['Nadi', 'Ramayana', 'Upanishad', 'Mantra'],
  rightAnswer: 'Nadi',
  note: 'Nadi is the term used to refer to the nerves that energy flows through, and connects at special points of intensity called chakras.'
},
{question: ' Kundalini comes from the term “Kunda” which is a cavity for what particular animal?',
  answer: ['Snake', 'Bear', 'Eagle', 'Lion'],
  rightAnswer: 'Snake',
  note: 'The serpent, or snake, can be found in the pelvic area, and is where the power of Shakti is represented.'
},
{question: ' Which chakra signifies the process of enlightenment?',
  answer: ['3rd', '5th', '7th', '1th'],
  rightAnswer: '7th',
  note: 'The 7th chakra, known as Sahasrara, signifies the process of enlightenment in a person.'
},
{question: ' What is the true meaning of yoga?',
  answer: ['Spiritual union', 'Attaining freedom', 'Physical health','Calm and enjoy'],
  rightAnswer: 'Spiritual union',
  note: 'Yoga does not mean physical health; it means spiritual union — or the union between body and mind.'
},
{question: 'Which of the following terms means freedom?',
  answer: ['Mukti', 'Dharma', 'Vedas', 'Karma'],
  rightAnswer: 'Mukti',
  note: 'Real freedom is freedom from all bondage and desire, which is referred to as mukti.'
},
{question: ' Which word refers to the duty of a person to maintain harmony in the world?',
  answer: ['Dharma', 'Vedas', 'Karma', 'Samadhi'],
  rightAnswer: 'Dharma',
  note: 'The personal duty to maintain harmony in the world, taught by the wise Gautama Buddha, is known as dharma.'
},
{question: 'The repetition of a holy mantra or phrase is known as what?',
  answer: ['Japa', 'Jeyn', 'Jati','Jaka'],
  rightAnswer: 'Japa',
  note: 'Japa, or the repetition of a holy phrase and the pondering of it, is thought to be one of the best ways to gain purity.'
},
{question: 'What is the term used for ignorance?',
  answer: ['Maya', 'Samadhi', 'Daetin', 'Shanti'],
  rightAnswer: 'Maya',
  note: 'Maya refers to the veil of ignorance covering the truth.'
},
{question: ' What are the Yamas?',
  answer: ['Maintain harmony ', 'Moral and ethical rules or goals', 'The holy scriptures of Hinduism', 'Occult or psychic powers'],
  rightAnswer: 'Moral and ethical rules or goals',
  note: 'The Yamas are moral and ethical rules/goals set upon a person to commit to.'
},
{question: ' Where is the fourth chakra located?',
  answer: [`Head's top`,'Spine', 'Heart', 'Brain' ],
  rightAnswer: 'Heart',
  note: 'The fourth chakra, or Anahata, is also known as the heart chakra.'
},
{question: ' Which type of yoga focuses primarily on exercise and physical techniques?',
  answer: ['Karma yoga', 'Jnana yoga', 'Raja yoga', 'Hatha yoga'],
  rightAnswer: 'Hatha yoga',
  note: 'Hatha yoga focuses primarily on exercise and physical techniques, and is most closely associated with the Western world’s interpretation of yoga.'
},
{question: 'Which of these is not the name of one of the seven chakras?',
  answer: ['Muladhara', 'Rudra', 'Svadhistana', 'Ajna'],
  rightAnswer: 'Rudra',
  note: 'Rudra is not the name of one of the seven tantric chakras, but is instead the Rigvedic deity of wind, storm, and the hunt.'
},
{question: 'What would not be helpful to do when meditating?',
  answer: ['Ceep calm', 'Think of problems', 'Picture a peaceful place', 'Concentrate on a color'],
  rightAnswer: 'Think of problems',
  note: `Thinking about your problems won’t help with your meditation. It would only serve to hinder.`
},
{question: ' What are the three things you need for a session of Bikram yoga?',
  answer: ['Mat / Music / Water', 'Mat / Book / Music', 'Mat / Towel / Water', 'Mat / Incense / Coffee'],
  rightAnswer: 'Mat / Towel / Water',
  note: 'The three essentials for a session of Bikram yoga is a mat, a towel, and some water.'
},
{question: 'What is one of the most important objectives during yoga?',
  answer: [ 'Physical strength', 'Flexibility', 'Correct breathing', 'Good mood'],
  rightAnswer: 'Correct breathing',
  note: 'One of the most important objectives during yoga is having proper breathing techniques.'
},
{question: 'Bikram yoga is a form of what type of yoga?',
  answer: ['Jnana yoga', 'Hot yoga', 'Forrest yoga', 'Hatha yoga' ],
  rightAnswer: 'Hot yoga',
  note: 'Bikram yoga is a form of hot yoga, which means that it is performed under extremely hot conditions.'
},
{question: 'In what state of what country was the founder of Bikram yoga born?',
  answer: ['West Bengal, India', 'Gudjarat India', 'Jharkhand, India', 'Andhra Pradesh, India'],
  rightAnswer: 'West Bengal, India',
  note: 'Bikram Choudhury, the founder of Bikram yoga, was born in West Bengal, India.'
},
{question: `What is not one of the four main types of yoga?`,
  answer: ['Forrest yoga', 'Bhakti yoga', 'Karma yoga', 'Jnana yoga'],
  rightAnswer: 'Forrest yoga',
  note: '”Forrest yoga” is not one of the four primary types of yoga. It is a form of hatha yoga.'
},
{question: `Which of the following is the ‘guna’ of passion?`,
  answer: ['Sattva', 'Rajas', 'Tamas', 'Dharma'],
  rightAnswer: 'Rajas',
  note: 'Rajas is the ‘guna’ of passion. Sattva is of balance, while Tamas is of disorder.'
},
{question: 'Which of these, according to Yoga philosophy, is a state of consciousness of neither wake nor sleep?',
  answer: ['Bandha', 'Turiya', 'Atman', 'Pranee'],
  rightAnswer: 'Turiya',
  note: 'Turiya, is a state of neither wake nor sleep, and is known as a state of pure consciousness.'
},
{question: 'Based upon Yoga philosophy, which of these are the two entities that make up the universe?',
  answer: ['Atman & Pranne', 'Shiva & Dharma', 'Veda & Virne', 'Prakrti & Purusa'],
  rightAnswer: 'Prakrti & Purusa',
  note: 'The two entities that make up the universe are Prakrti and Purusa.'
},
{question: 'What are Granthi knots?',
  answer: ['The first 3 composite chakras', 'The eye of Brahma', 'The knots of Nadi', 'The knots of neck'],
  rightAnswer: 'The first 3 composite chakras',
  note: 'Granthi knots refer to the first 3 composite chakras.'
},
{question: 'What is the practice in Kundalini where the meditator exits his physical form and enters some sort of astral state called?',
  answer: [`Vishny's tower`, `Siva’s breathing`, `Brahman’s gate`, `Death’s sleep`],
  rightAnswer: `Brahman’s gate`,
  note: `The Kundalini practice is called Brahman’s gate.`
},
{question: 'Who is credited with advancing the practice of yoga in the United States in the 1960s?',
  answer: ['Paramahamsa Yogananda', 'Swami Satchidananda', 'Bikram Choudhury', 'Tirumalai Krishnamacharya'],
  rightAnswer: 'Swami Satchidananda.',
  note: 'It was Swami Satchidananda.'
}
]


export default dataArr;
/*
{question: '',
  answer: [],
  rightAnswer: ,
  note: ''
},
*/
